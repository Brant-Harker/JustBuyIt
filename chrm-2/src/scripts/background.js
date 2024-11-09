// background.js

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'getPrice') {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tab = tabs[0];
        
        // Check if the URL matches the desired pattern
        const urlPattern = /^https:\/\/www\.bestbuy\.ca\/en-ca\/product\/.*/;
        if (urlPattern.test(tab.url)) {
          
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: function() {
              const priceElement = document.querySelector('span[data-automation="product-price"]');
              if (priceElement) {
                const price = priceElement.querySelector('span');
                if (price && price.textContent) {
                  return price.textContent.trim();
                }
              }
              return 'Price not found'; 
            }
          }, (result) => {
            if (result && result[0] && result[0].result) {
              const price = result[0].result;
              // Store the price in local storage
              chrome.storage.local.set({ price: price }, () => {
                sendResponse({ price });
              });
            } else {
              sendResponse({ price: 'Price not found' });
            }
          });
  
        } else {
          console.log('The URL does not match the Best Buy product page pattern.');
          sendResponse({ price: 'Not a valid product page' });
        }
      });
      return true;
    }
  });
  
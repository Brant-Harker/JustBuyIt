//background.js

// Listen for messages from the popup and respond with the stored URL and price
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'getPrice') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      
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
          sendResponse({ price: result[0].result });
        } else {
          sendResponse({ price: 'Price not found' });
        }
      });
    });
    return true;
  }
});

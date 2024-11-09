// background.js

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && /^https:\/\/www\.bestbuy\.ca\/en-ca\/product\//.test(tab.url)) {
      // Start the 10-second timer
      setTimeout(() => {
        // Execute content script to get the price
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          func: function() {
            const priceElement = document.querySelector('span[data-automation="product-price"]');
            if (priceElement) {
              const price = priceElement.querySelector('span');
              return price ? price.textContent.trim() : 'Price not found';
            }
            return 'Price not found';
          }
        }, (result) => {
          if (result && result[0] && result[0].result) {
            // Store the price in chrome.storage to be accessed by process.js
            chrome.storage.local.set({ price: result[0].result });
            
            // Open the process.html popup
            chrome.action.setPopup({ popup: 'process.html' });
          }
        });
      }, 10000); // 10 seconds
    }
  });
  
// background.js

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const urlPattern = /^https:\/\/www\.bestbuy\.ca\/en-ca\/product\/.*/;

  const executeScript = (tabId, func, callback) => {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: func
    }, callback);
  };

  const handleRequest = (messageAction, querySelector, notFoundMessage, storageKey) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      if (urlPattern.test(tab.url)) {
        executeScript(tab.id, function() {
          const element = document.querySelector(querySelector);
          if (element) {
            return element.textContent.trim();
          }
          return notFoundMessage;
        }, (result) => {
          if (result && result[0] && result[0].result) {
            const value = result[0].result;
            chrome.storage.local.set({ [storageKey]: value }, () => {
              sendResponse({ [storageKey]: value });
            });
          } else {
            sendResponse({ [storageKey]: notFoundMessage });
          }
        });
      } else {
        console.log('The URL does not match the Best Buy product page pattern.');
        sendResponse({ [storageKey]: 'Not a valid product page' });
      }
    });
  };

  if (message.action === 'getPrice') {
    handleRequest(message.action, 'div.style-module_price__ql4Q1 div', 'Price not found (background.js)', 'price');
    return true;
  }

  if (message.action === 'getProductName') {
    handleRequest(message.action, 'h1.text-body-lg', 'Product name not found (background.js)', 'productName');
    return true;
  }
});

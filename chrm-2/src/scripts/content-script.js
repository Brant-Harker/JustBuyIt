//content-script.js

console.log('content-script.js loaded');

function getPrice() {
    const priceElement = document.querySelector('div.style-module_price__ql4Q1');
    
    if (priceElement) {
      const price = priceElement.querySelector('div');
      
      if (price && price.textContent) {
        return price.textContent.trim(); 
      }
    }
    
    return 'Price not found (content-script.js)'; 
  }

  function getProductName() {
    const nameElement = document.querySelector('h1.text-body-lg');
    
    if (nameElement) {
      return nameElement.textContent.trim();
    }
    
    return 'Product name not found (content-script.js)'; 
  }

  function getSaleAmount() {
    const nameElement = document.querySelector('span[data-automation="product-saving"]');
    console.log(nameElement);
    
    if (nameElement) {
      return nameElement.textContent.trim();
    }
    
    return 'Sale amount not found'; 
  }

  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'getPrice') {
      const price = getPrice();
      sendResponse({ price });
    }
    if (message.action === 'getProductName') {
        const productName = getProductName();
        sendResponse({ productName });
    }
  });

  

//content-script.js

console.log('content-script.js loaded');

function getPrice() {
    const priceElement = document.querySelector('span[data-automation="product-price"]');
    console.log('works!');
    
    if (priceElement) {
      const price = priceElement.querySelector('span');
      
      if (price && price.textContent) {
        return price.textContent.trim(); 
      }
    }
    
    return 'Price not found'; 
  }

  function getProductName() {
    const nameElement = document.querySelector('h1.text-body-lg');
    console.log(nameElement);
    
    if (nameElement) {
      return nameElement.textContent.trim();
    }
    
    return 'Product name not found'; 
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
        const productName = getproductName();
        sendResponse({ productName });
    }
    if (message.action === 'getSaleAmount') {
        const saleAmount = getSaleAmount();
        sendResponse({ saleAmount });
    }
  });

  

//content-script.js

console.log('content-script.js loaded');

function getPrice() {
    const priceElement = document.querySelector('span[data-automation="product-price"]');
    
    if (priceElement) {
      const price = priceElement.querySelector('span');
      
      if (price && price.textContent) {
        return price.textContent.trim(); 
      }
    }
    
    return 'Price not found'; 
  }
  
  // Send the price to the background script when requested
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'getPrice') {
      const price = getPrice();
      sendResponse({ price });
    }
  });
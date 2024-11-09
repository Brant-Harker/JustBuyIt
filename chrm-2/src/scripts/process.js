// process.js

document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get('price', (data) => {
      if (chrome.runtime.lastError) {
        console.error('Error accessing storage:', chrome.runtime.lastError);
        document.querySelector('#price').textContent = 'Error retrieving price';
        return;
      }
  
      const price = data.price || 'Price not found';
      const priceElement = document.querySelector('#price');
      
      if (priceElement) {
        priceElement.textContent = price;
      } else {
        console.error('Price element not found on process.html');
      }
    });
  });
  
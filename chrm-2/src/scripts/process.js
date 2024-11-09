// process.js
document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get('price', (data) => {
      const price = data.price || 'Price not found';
      document.querySelector('#price').textContent = price;
    });
  });
  
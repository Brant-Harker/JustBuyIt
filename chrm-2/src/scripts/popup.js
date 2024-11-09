// popup.js

//btn for changing pages (popup --> process)
//change to reroute page later 
console.log('popup.js loaded');
document.addEventListener('DOMContentLoaded', () => {
    const processButton = document.getElementById('btn-process');
    if (processButton) {
        processButton.addEventListener('click', () => {
            console.log('Process button clicked');
            window.location.href = 'process.html';
        });
    }else{
        console.log('Button not found');
    }
});

// This function sends a message to the background script to request the price
async function getPriceFromBackground() {
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({ action: 'getPrice' }, (response) => {
            if (chrome.runtime.lastError) {
                reject('Error receiving message: ' + chrome.runtime.lastError.message);
            } else if (response && response.price) {
                resolve(response.price);
            } else {
                reject('Price not found');
            }
        });
    });
}
  
  // Call the async function to get the price and update the popup's content
  getPriceFromBackground()
    .then(price => {
      console.log('Price received:', price);
    })
    .catch(error => {
      console.error('Error getting price:', error);
    });
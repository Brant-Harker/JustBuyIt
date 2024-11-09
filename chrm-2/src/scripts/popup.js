// popup.js

document.addEventListener('DOMContentLoaded', () => {
    const processButton = document.getElementById('btn-process');
    if (processButton) {
        processButton.addEventListener('click', () => {
            console.log('Process button clicked');
            window.location.href = 'process.html';
        });
    } else {
        console.log('Button not found');
    }

    // Automatically redirect to process.html after 10 seconds
    setTimeout(() => {
        window.location.href = 'process.html';
    }, 10000);
});

// Fetch and store the price locally when popup opens
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

getPriceFromBackground()
    .then(price => {
        console.log('Price received:', price);
        chrome.storage.local.set({ price });
    })
    .catch(error => {
        console.error('Error getting price:', error);
    });

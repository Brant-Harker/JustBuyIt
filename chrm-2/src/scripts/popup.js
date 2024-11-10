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
    }, 20000);
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

//get product name

async function getProductNameFromBackground() {
        return new Promise((resolve, reject) => {
            chrome.runtime.sendMessage({ action: 'getProductName' }, (response) => {
                if (chrome.runtime.lastError) {
                    reject('Error receiving message: ' + chrome.runtime.lastError.message);
                } else if (response && response.price) {
                    resolve(response.price);
                } else {
                    reject('Product name not found');
                }
            });
        });
    }
    
    getProductNameFromBackground()
        .then(productName => {
            console.log('Product name received:', productName);
            chrome.storage.local.set({ productName });
        })
        .catch(error => {
            console.error('Error getting productName:', error);
        });

//get sale amount

async function getSaleAmountFromBackground() {
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({ action: 'getSaleAmount' }, (response) => {
            if (chrome.runtime.lastError) {
                reject('Error receiving message: ' + chrome.runtime.lastError.message);
            } else if (response && response.price) {
                resolve(response.price);
            } else {
                reject('Sale amount not found');
            }
        });
    });
}

getSaleAmountFromBackground()
    .then(saleAmount => {
        console.log('Sale amount received:', saleAmount);
        chrome.storage.local.set({ saleAmount });
    })
    .catch(error => {
        console.error('Error getting saleAmount:', error);
    });

// process.js

// document.addEventListener('DOMContentLoaded', () => {
//     chrome.storage.local.get(['price', 'productName', 'saleAmount'], (data) => {
//         const price = data.price || 'Price not found';
//         const priceElement = document.querySelector('#price');
        
//         if (priceElement) {
//             priceElement.textContent = price;
//         } else {
//             console.error('Price element not found on process.html');
//         }

//         const productName = data.productName || 'Product name not found';
//         const productNameElement = document.querySelector('#product-name');

//         if (productNameElement) {
//             productNameElement.textContent = productName;
//         } else {
//             console.error('Product name element not found on process.html');
//         }

//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const btnCancel = document.getElementById('btn-cancel');
    if (btnCancel) {
        btnCancel.addEventListener('click', () => {
            console.log('Cancel button clicked!');
            if (!btnCancel.classList.contains('disabled')) {
                console.log('Button is not disabled, attempting to navigate.');
                chrome.tabs.create({ url: 'https://just-buy-it-a.vercel.app/?vercelToolbarCode=4vPeji2229bCXKM' });        
            }
        });
    } else {
        console.error('Cancel button not found on process.html');
    }
});

function startProgressBar() {
    var timerId = 0;
    var ctr = 0;
    var max = 100;  // Represents 100% width
    var interval = 50;  // 10 seconds / 100 steps = 100ms per step

    timerId = setInterval(function () {
        // Increment ctr by 1 to fill over 100 intervals
        ctr += 1;
        var progressBar = document.querySelector('#blips .progress-bar');
        if (progressBar) {
            progressBar.style.width = ctr + "%";
        }

        // Stop the interval when ctr reaches 100%
        if (ctr >= max) {
            clearInterval(timerId);
            var btnCancel = document.getElementById('btn-cancel');
            if (btnCancel) {
                btnCancel.classList.add('disabled');
            }
        }
    }, interval);
}

function generateRandomCreditCardNumber() {
    const creditCardElement = document.getElementById('credit');
    if (!creditCardElement) {
        console.error('Credit card element not found on process.html');
        return;
    }

    const randomCreditCardNumber = 'xxxx-xxxx-xxxx-xxxx'.replace(/x/g, () => {
        return Math.floor(Math.random() * 10);
    });

    creditCardElement.textContent = randomCreditCardNumber;
}

document.addEventListener('DOMContentLoaded', function () {
    startProgressBar();
    generateRandomCreditCardNumber();
});


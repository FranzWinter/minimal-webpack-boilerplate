// Main js file

// Part of code needed for proper work of boilerplate
// start here.....

// favicons.js offer automatic import of all favicons from src/favicons folder.
import './js_modules/favicons.js';

// if you wish to use SASS include this
import './style/style.scss';
// if you wish to use pure CSS uncomment line below, and comment line above
// import './style/style.css'

// ...and end here

// Everything below can be safely removed, but can help with simple debugging

// Check if service Worker is correctly registered
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

// Check if this is production or develop mode
if (process.env.NODE_ENV !== 'production') {
    console.log('We are in development mode now...');
}
else {
    console.log('We are in production mode now...');
}

// Create example section, so you will not have totally, sad empty document
function createComponent() {
    let element = document.createElement('section');
    element.classList.add('container');
    element.innerHTML = `<h1>Your boilerplate is ready! Enjoy :)</h1>`;

    return element;
}
document.body.appendChild(createComponent());

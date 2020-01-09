// Import stylesheets
import './style.css';

import AniButton from 'https://webcomponents.dev/web_modules/gXv1VWNyOySuzqJUdzg4/dist/index.js';

window.customElements.define('custom-element', AniButton);
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;



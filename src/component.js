import { anything } from './module.js';
// Correct: anything is available, and Go To Definition goes to src/module.js
alert('anything in .js: ' + anything); // true

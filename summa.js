const { JSDOM } = require('jsdom');

// Create a new JSDOM instance
const dom = new JSDOM(`<!DOCTYPE html><p id="example">Original text</p>`);

// Extract the document from the JSDOM instance
const document = dom.window.document;

// Your DOM manipulation code
document.getElementById('example').innerHTML = "Hello, World!";

// To verify the change, you can log the modified HTML
console.log(document.getElementById('example').outerHTML); // Output: <p id="example">Hello, World!</p>

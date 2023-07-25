// src/index.js
import $ from 'jquery';

// Function to add three different paragraphs to the page body
function addParagraphs() {
  const body = $('body');

  // Paragraph 1
  const paragraph1 = $('<p>').text('This is paragraph 1.');
  body.append(paragraph1);

  // Paragraph 2
  const paragraph2 = $('<p>').text('This is paragraph 2.');
  body.append(paragraph2);

  // Paragraph 3
  const paragraph3 = $('<p>').text('This is paragraph 3.');
  body.append(paragraph3);
}

// Call the function to add paragraphs to the page body
addParagraphs();

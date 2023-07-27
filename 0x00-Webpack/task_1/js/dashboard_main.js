import $ from 'jquery';
import debounce from 'lodash/debounce';

document.addEventListener('DOMContentLoaded', function () {
  // Function to update the counter and paragraph content
  let count = 0;

  function updateCounter() {
    count++;
    $('#count').text(`${count} click${count === 1 ? '' : 's'} on the button`);
  }

  // Bind the debounce function to the click event on the button
  const button = $('button');
  button.on('click', debounce(updateCounter, 1000));
  
  // Function to add elements to the body of the page
  function addElements() {
    // Paragraph element: Holberton Dashboard
    const paragraph1 = $('<p>').text('Holberton Dashboard');

    // Paragraph element: Dashboard data for the students
    const paragraph2 = $('<p>').text('Dashboard data for the students');

    // Button element with the text Click here to get started
    const button = $('<button>').text('Click here to get started');

    // Paragraph element with the id 'count'
    const paragraph3 = $('<p>').attr('id', 'count');

    // Another paragraph: Copyright - Holberton School
    const paragraph4 = $('<p>').text('Copyright - Holberton School');

    // Add the elements to the dashboard container
    $('#dashboard-container').append(paragraph1, paragraph2, button, paragraph3, paragraph4);
  }

  // Call the function to add elements to the dashboard container
  addElements();
});

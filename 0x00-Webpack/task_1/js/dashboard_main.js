import $ from 'jquery';

$(document).ready(function(){
    //Fuction to add wlwments to the body of the page
    function addElements(){
        //paragraph elements
        const paragraph1 = $('<p>').text('Holberton Dashboard');
        const paragraph2 = $('<p>').text('Dashboard data for the students');
        const button = $('<button>').text('Click here to get started');
        const paragraph3 = $('<p>').attr('id', 'count');
        const paragraph4 = $('<P>').text('Copyright - Holberton School');
        $('body').append(paragraph1, paragraph2, button, paragraph3, paragraph4);

    }

    // Call the function to add elements to the body of the page
  addElements();
})

function undateCounter()
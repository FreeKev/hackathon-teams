// var express = require('express');
// var router = express.Router();

$(document).ready(function() {



});

console.log('Hi from routing');
// $('.delete-link').click(function(e){
$('.delete-link').click(function(e){    
    e.preventDefault();
    console.log('clicked');
    $.ajax({
      url: $(this).attr('href'),
      method: 'DELETE'
    }).done(function(data){
      window.location.href = '/teams';
    });
  });


// $('.put-form').on('submit', function(e) {
//     e.preventDefault();
//     var teamElement = $(this);
//     var teamUrl = teamElement.attr('action');
//     var teamData = teamElement.serialize();
//     $.ajax({
//         method: 'PUT',
//         url: teamUrl,
//         data: teamData
//     }).done(function(data) {
//         // get data returned from the PUT route
//         console.log(data);

//         // do stuff when the PUT action is complete
//         teamElement.remove();

//         // or, you can redirect to another page
//         window.location = '/teams';
//     });
// });

$('.edit-form').on('submit', function(e) {
    e.preventDefault();
    // console.log("testing");
    // var teamElement = $(this);
    // var teamUrl = teamElement.attr('action');
    // var teamData = teamElement.serialize();
    $.ajax({
        url: $(this).attr('action'),
        method: 'PUT',
        // data: teamData
        data: {
            name: $('#new-name').val(),
            members: $('#members').val()
        }
    }).done(function(data) {
        // get data returned from the PUT route
        console.log('Got the promise');
        console.log(data);

        // do stuff when the PUT action is complete
        // teamElement.remove();

        // or, you can redirect to another page
        window.location = '/teams';
    });
});
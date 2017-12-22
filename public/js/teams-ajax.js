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

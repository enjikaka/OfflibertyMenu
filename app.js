var open        = require('open');
var remote      = require('remote');
var app         = remote.require('app');

document.querySelector('#close-button').addEventListener('click', function() {
  app.quit();
});

document.querySelector('#download-song').addEventListener('click', function() {
  var youtubeUrl = document.querySelector('#url').value;
  open('http://youtubeinmp3.com/fetch/?video=' + youtubeUrl);
  document.querySelector('#url').value = null;
});

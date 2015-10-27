var offliberty  = require('offliberty'),
    open        = require('open'),
    remote      = require('remote'),
    app         = remote.require('app'),
    canHint     = true;

function reset() {
  setText('Offliberty');
  setBackground('#ff5722');

  document.body.classList.remove('loading');
  document.querySelector('#url').value = null;
}

function setText(string) {
  document.querySelector('h1').textContent = string;
}

function setBackground(color) {
  document.querySelector('header').style.backgroundColor = color;
}

document.querySelector('#close-button').addEventListener('click', function() {
  app.quit();
});

document.querySelector('#download-song').addEventListener('click', function() {
  document.body.classList.add('loading');
  setText('Loading...');

  setTimeout(function() {
    if (canHint) {
      setText('You can leave this window while waiting...');
    }
  }, 5000);

  var youtubeUrl = document.querySelector('#url').value;

  offliberty.off(youtubeUrl, function(error, downloadLink) {
    if (!error) {
      open(downloadLink);
      reset();
    } else {
      canHint = false;

      setBackground('#f44336');
      setText('Error, sorry.');

      setTimeout(function() {
        reset();
      }, 5000);

      console.error(err);
    }
  });
});

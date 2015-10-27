var menubar = require('menubar');

var menu = menubar({
	width: 400,
	height: 100,
	dir: __dirname,
	showDockIcon: true
});

menu.on('ready', function() {
	console.log('App is ready');
});

var menubar = require('menubar')

var mb = menubar({
  width: 450,
  height: 600,
  tooltip: 'barkeep',
  preloadWindow: true
})

mb.on('ready', function ready() {
  console.log('app is ready');
  mb.window.loadURL("https://keep.google.com/");
})
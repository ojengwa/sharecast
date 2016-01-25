chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create('app/index.html', {
    id: "Sharecast",
    bounds: {
      width: 500,
      height: 600
    },
    minWidth: 500,
    minHeight: 600,
    frame: 'none'
  });
});


chrome.runtime.onInstalled.addListener(function() {
  console.log('installed');
  chrome.browser.openTab('http://andela.co', function() {
    console.log("Installed Successfully");
  })
});

chrome.runtime.onSuspend.addListener(function() {
  // Do some simple clean-up tasks.
});
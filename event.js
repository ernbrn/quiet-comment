chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  chrome.tabs.executeScript(null, {file: "script.js"});
  // TODO: Use urlMatches (or something) to make this match pull/files
}, {url: [{urlEquals: 'https://github.com'}]} );

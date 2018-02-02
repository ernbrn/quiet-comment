chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  chrome.tabs.executeScript(null, {file: "script.js"});
}, {url: [{hostContains: 'github.', urlContains: 'pull', urlSuffix: 'files'}]});



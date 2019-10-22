chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  chrome.tabs.executeScript(null, {file: "jquery-3.2.1.min.js"}, function() {
    chrome.tabs.executeScript(null, {file: "script.js"});
  });
}, {url: [{hostContains: 'github.', urlContains: 'pull', urlSuffix: 'files'}]});



let changeColor = document.getElementById('changeColor');

chrome.runtime.onInstalled.addListener(function () {
    chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostContains: 'paypal'},
        })],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
});


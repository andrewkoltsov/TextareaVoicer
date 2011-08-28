var contentScript = {
    	file: '/js/content-script.js',
    	allFrames: true
    },
    tabCallbacks = [
    	chrome.extension.onRequest,
    	chrome.tabs.onSelectionChanged,
    	chrome.tabs.onUpdated
    ];

tabCallbacks.forEach(function(callback, callbackId) {
	callback.addListener(function(tabId) {
		var tabGetter = chrome.tabs.get.bind(null, tabId);
		if (typeof tabId !== 'number') {
			tabGetter = chrome.tabs.getCurrent;
		}
		tabGetter(function(tab) {
			if (! /^http(|s)/.test(tab.url) || tab.status != 'complete') {
				return;
			}
			chrome.tabs.executeScript(tab.id, contentScript, function() {
			});
		});
	});
});
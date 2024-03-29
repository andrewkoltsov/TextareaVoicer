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
			tabGetter = function(callback) {
				chrome.windows.getCurrent(function(win) {
					chrome.tabs.getSelected(win.id, callback);
				});
			};
		}
		// ULTRA HARD CODE
		if (localStorage.lang == 'ru') {
			contentScript.file = '/js/content-script-ru.js';
		} else {
			contentScript.file = '/js/content-script.js';
		}
		tabGetter(function(tab) {
			if (! /^http(|s)/.test(tab.url || '') || tab.status != 'complete') {
				return;
			}
			chrome.tabs.executeScript(tab.id, contentScript, function() {});
		});
	});
});
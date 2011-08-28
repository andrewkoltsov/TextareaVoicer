$(function() {
	var extensionPath = [
		"chrome-extension",
		chrome.i18n.getMessage('@@extension_id')
	].join('://');
	$('#set_lang_to_en').click(function (){
		localStorage["lang"]='en';
		console.log(chrome.browserAction);
		chrome.browserAction.setIcon({path: extensionPath + "/images/flags/en.png"}); 
		//window.close();
	});
	$('#set_lang_to_ru').click(function (){
		localStorage["lang"]='ru';
		chrome.browserAction.setIcon({path: extensionPath + "/images/flags/ru.png"});
		//window.close();
	});
});

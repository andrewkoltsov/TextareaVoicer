function send_new_locale(locale) {
	localStorage["lang"] = locale;
	chrome.browserAction.setIcon({path: "/images/flags/" + locale + ".png"}); 
	chrome.extension.sendRequest({'locale': locale}, function(response) {
		console.log(response);
	});
	window.close();
}


$(function() {
	$('#set_lang_to_en').click(function (){
		send_new_locale('en');
	});
	$('#set_lang_to_ru').click(function (){
		send_new_locale('ru');
	});
});

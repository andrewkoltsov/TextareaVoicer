$(document).ready(function(){
  module("Popup");
  
  test("Set language to EN", 6, function() {
    // test EN
    popupTestSetup();
    
    $("#set_lang_to_en").simulateClick();
    
    ok(chrome.flags.iconChanged, "Action icon is changed");
    equals(localStorage["lang"], 'en', "Language is set correctly");
    ok(chrome.flags.windowClosed, "Window is closed");

    // test RU
    popupTestSetup();
    
    $("#set_lang_to_ru").simulateClick();
    
    ok(chrome.flags.iconChanged, "Action icon is changed");
    equals(localStorage["lang"], 'ru', "Language is set correctly");  
    ok(chrome.flags.windowClosed, "Window is closed");
  });
});
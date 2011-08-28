jQuery.fn.simulateClick = function() {
  var e = document.createEvent('MouseEvents');
  e.initEvent( 'click', true, true );
  this[0].dispatchEvent(e);
  return this;
}

// chrome mock object
var chrome = {
  flags: {
    iconChanged: false,
    windowClosed: false,
  },
  browserAction: {
    setIcon: function() {
      chrome.flags.iconChanged = true;
    },
  }
}

window.close = function() {
  chrome.flags.windowClosed = true;
}

function popupTestSetup() {      
  chrome.flags.iconChanged = false;
  chrome.flags.windowClosed = false;
  localStorage.removeItem("lang");
}
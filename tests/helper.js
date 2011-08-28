jQuery.fn.simulateClick = function() {
  var e = document.createEvent('MouseEvents');
  e.initEvent( 'click', true, true );
  this[0].dispatchEvent(e);
  return this;
}
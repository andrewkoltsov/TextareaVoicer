$(document).ready(function(){
  module("Content Script");
  
  // mailto-with-subject
  test("Normal mailto link", 1, function() {
    $("#mailto-with-subject").simulateClick();
  });
  
  // mailto-without-subject
  test("Mailto link without subject", 1, function() {
    $("#mailto-without-subject").simulateClick();
  });
  
  // mailto-subject-with-space
  test("Mailto link with space in subject", 1, function() {
    $("#mailto-subject-with-space").simulateClick();
  });
  
  // mailto-dots
  test("Mailto link with additional dots", 1, function() {
    $("#mailto-dots").simulateClick();
  });
  
  // mailto-file-link
  test("Link to mailto.html", 1, function() {
    $("#mailto-file-link").simulateClick();
  });
  
  // mailto-another-protocol
  test("Link with not-a-mailto protocol", 1, function() {
    $("#mailto-another-protocol").simulateClick();
  });
  
  // mailto-capitals
  test("Link with capitals", 1, function() {
    $("#mailto-capitals").simulateClick();
  });
});
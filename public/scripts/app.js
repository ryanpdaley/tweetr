/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// $( document ).ready(function() {
//   $( ".tweet" ).mouseenter(function() {
//     console.log(this)
//   });
// });

$( document ).ready(function() {
  $(this).find( ".footerButtons" ).hide();
  $( ".tweet" ).hover(function() {
    $(this).css("opacity", "1");
    $(this).find( ".footerButtons" ).show();
  }, function() {
    $(this).css("opacity", "0.5");
    $(this).find( ".footerButtons" ).hide();
  }
)});
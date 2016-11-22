"use strict";

$(document).ready(function () {
  $("#toTop").hover(function () {
    $(".footer-logo--initial").css({ 'width': 0, 'opacity': 0 });
    $(".footer-logo--hover").css({ 'width': 50 + "px", 'opacity': 1 });
  }, function () {
    $(".footer-logo--initial").css({ 'width': 50 + "px", 'opacity': 1 });
    $(".footer-logo--hover").css({ 'width': 0, 'opacity': 0 });
  });
});

$(".footer-logo--hover").on('click', function () {
  $('html, body').animate({
    scrollTop: $('body').offset().top
  }, 1000);
});
// Smooth scroll

$(function () {
  $('.scrollSmooth').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$("#get-in-touch-form").validate({
  debug: false,
  rules: {
    name: "required",
    email: {
      required: true,
      email: true
    },
    number: 'required'
  },
  messages: {
    name: "Please let us know who you are.",
    email: "A valid email will help us get in touch with you.",
    number: 'Please let us your number'
  },
  submitHandler: function submitHandler(form) {
    // do other stuff for a valid form
    var alertMessage = "<div class='get-in-touch-wrapper__ajax-send'>" + +"<div class='get-in-touch-wrapper__ajax-send__body'>" + "<div class='get-in-touch-wrapper__ajax-send__image'>" + "<img src='images/success.svg' alt=''>" + "</div>" + "<div class='get-in-touch-wrapper__ajax-send__title'>" + "<h4 class='get-in-touch-wrapper__ajax-send__title-text'>Thanks for your message!</h4>" + "</div>" + "<div>" + "<p class='get-in-touch-wrapper__ajax-send__comment'>We do our best to respond within two business days.</p>" + "</div>" + "<div class='get-in-touch-wrapper__ajax-send__buttons'>" + "<a class='button button--red get-in-touch-wrapper__ajax-send__button'>Send another message</a>" + "</div>" + "</div>" + "</div>";
    $(".get-in-touch-wrapper").fadeOut();
    $(".get-in-touch-wrapper__ajax-send").css("display", "flex").fadeIn();
    $("#get-in-touch-form")[0].reset();
  }
});
$(".get-in-touch-wrapper__ajax-send__button").on("click", function () {
  $(".get-in-touch-wrapper__ajax-send").fadeOut();
  $(".get-in-touch-wrapper").fadeIn();
});
//# sourceMappingURL=main.js.map

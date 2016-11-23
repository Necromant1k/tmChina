'use strict';

$(document).ready(function () {
  $('#toTop').hover(function () {
    $('.footer-logo--initial').css({ 'width': 0, 'opacity': 0 });
    $('.footer-logo--hover').css({ 'width': 50 + 'px', 'opacity': 1 });
  }, function () {
    $('.footer-logo--initial').css({ 'width': 50 + 'px', 'opacity': 1 });
    $('.footer-logo--hover').css({ 'width': 0, 'opacity': 0 });
  });
});

$('.footer-logo--hover').on('click', function () {
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

$('#get-in-touch-form').validate({
  debug: false,
  rules: {
    name: 'required',
    email: {
      required: true,
      email: true
    },
    number: 'required'
  },
  messages: {
    name: 'Please let us know who you are.',
    email: 'A valid email will help us get in touch with you.',
    number: 'Please let us your number'
  },
  submitHandler: function submitHandler(form) {
    // do other stuff for a valid form
    var name = $("#name").val();
    var email = $("#email").val();
    var number = +$("#number").val();
    var message = $("#message").val();
    console.log(name + "  " + email + "  " +  number + "  " + message);

    var dataString = "<div>" +
        "<p><b>Name: </b>"+ name +"</p>" +
        "<p><b>Email: </b>"+ email +"</p>" +
        "<p><b>Number: </b>"+ number +"</p>" +
        "<p><b>Message: </b>"+ message +"</p>" +
        "</div>"
    $.ajax({
      type: "POST",
      url: "script/send.php",
      data: { data: dataString, senderAddress: email },
      success: function() {



        // show a success message to your visitors



        // clear input field values
        $("#name").val('');
        $("#email").val('');
        $("#message").val('');


      }
    });


    $('.get-in-touch-wrapper').fadeOut();
    $('.get-in-touch-wrapper__ajax-send').css('display', 'flex').fadeIn();
    $('#get-in-touch-form')[0].reset();
  }
});
$('.get-in-touch-wrapper__ajax-send__button').on('click', function () {
  $('.get-in-touch-wrapper__ajax-send').fadeOut();
  $('.get-in-touch-wrapper').fadeIn();
});
//# sourceMappingURL=main.js.map

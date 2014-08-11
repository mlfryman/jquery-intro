/* global $, document */

(function hello(){
  'use strict';
  var a = 3,
  b = 2;

  $(document).ready(initialized);

  function initialized(){
    $('div').css('color', '#161653');
    $('h2').text('Let\'s Go Predators!');
    $('h2').css('font-size', '20px');
    $('h2').fadeOut(2000);
    $('#a, #b, #c').addClass('happy');
    $('#c + ul > li').addClass('sad');
    console.log('the DOM is now ready!');

    $('#blue').click(makeBlue);
    $('#gold').click(makeGold);
    $('#makeColor').click(makeColor);
    $('#ftFadeOut').click(ftFadeOut);
    $('#ftFadeIn').click(ftFadeIn);

  }

  function ftFadeIn(){
    var num = $('#fade-number').val() * 1;
    $('footer').fadeIn(num);
  }

  function ftFadeOut(){
    var num = $('#fade-number').val() * 1;
    $('footer').fadeOut(num);
  }

  function makeColor(){
    var color = $('#color-value').val();
    $('body').css('background-color', color);
    console.log('you clicked the color button');
  }

  function makeBlue(){
    alert('Let\'s GO PREDATORS!');
    $('body').css('background-color', '#161653');
  }

  function makeGold(){
    alert('Let\'s GO PREDATORS!');
    $('body').css('background-color', '#FFCC00');
  }

  console.log('the DOM is NOT ready!');
  console.log(a, b);
})();




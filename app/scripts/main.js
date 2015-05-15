/* jshint devel:true */
'use strict';

$(function() {

  var $intro = $('.intro'),
      $title = $('.intro h1'),
      $content = $('.content'),
      $name = $('.intro h1 .name');

  $title.typed({
    strings: ["<span class='text'>Hello,<br> ^800 My name is </span><span class='name'>Philippe Cedelle</span> ^500"],
    showCursor: false,
    onStringTyped: typedDone
  });

  function typedDone() {
    TweenMax.to($('.intro h1 .text'), 0.5, { opacity: 0,  
      onComplete: function () {
        $(this.target[0]).hide();
        setTimeout(function () {
          $intro.addClass('done');
          $title.addClass('done');
        }, 100);
      }
    });
    TweenMax.to($content, 200, {delay: 0.6, display: 'block'});
  }

});

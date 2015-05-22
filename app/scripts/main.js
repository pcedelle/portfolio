/* jshint devel:true */
'use strict';

$(function() {

  var $content = $('.content');


  var Portfolio = function () {
    console.log('App instance created');
  };

  Portfolio.prototype.init = function () {
    TweenMax.to($content, 1, {delay: 0.6, opacity: '1'});
  };

  Portfolio.prototype.loop = function(first_argument) {
    // body...
  };

  // init
  //typedDone();
  var app = new Portfolio();
  app.init();



});

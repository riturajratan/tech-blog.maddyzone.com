---
author: riturajratan
comments: true
date: 2014-09-01 18:17:20+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=1145
slug: document-ready-vs-window-load-vs-window-onload
title: $(document).ready vs $(window).load vs window.onload
wordpress_id: 1145
categories:
- JavaScript
tags:
- .ready()
- onload
- window.load
---

[**$(document).ready**](http://api.jquery.com/ready/)

Many time we use ` $(document).ready `when we work with [jQuery](http://jquery.com/).This code is written when we execute our code when DOM is ready** except images**.like If our web page has  images then  it will not wait for loading of images  and call and in one page we can apply many document.ready and it call one by one as coming sequence.we call document.ready in many ways like below and they have same functionality and it is jQuery specific event.

    
    //call type 1
    $(document).ready(function() {
    /** work when all HTML loaded except images and DOM is ready **/
    // your code
    });
    
    //call type 2
    $(function() {
    /** work when all HTML loaded except images and DOM is ready **/
    //your code
    });
    
    //call type 3
    $(document).on('ready', function(){
    /** work when all HTML loaded except images and DOM is ready **/
    //your code
    });
    
    //call type 4
    jQuery(document).ready(function(){
    /** work when all HTML loaded except images and DOM is ready **/
    //your code
    });


[** $(window).load**](http://api.jquery.com/load-event/)

And if we talk about `$(window).load` then it is work when all DOM is ready **including images** so it is useful when on document load we want to work with images (calculation of image dimensions) and it is also jQuery specific event.If our web page has  images then  it will wait for loading of images  and then it  call. 

    
    $(window).load(function() {
    /** this is come when complete page is fully loaded, including all frames, objects and images **/
    });
    
    


and one more thing don't confuse with window load event with [**jQuery ajax load method**](http://api.jquery.com/load/)

    
    // load method in jQuery ajax
    $("#elementid").load( "data.html" );


[** window.onload**](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload)

The onload event is a standard event in the DOM, while above two are specific to jQuery . this is also same functionality like `$(window).load` but  `window.onload `is the built-in JavaScript event.The onload event occurs when an object has been loaded.like if we take a example of image and call onload event in image tag then it will call when image will load .generally we use it in body tag.

it is call in HTML and JavaScript like

**In HTML**

    
    <element onload="myFunction"></element>


**In JS**

    
    object.onload=function(){/**your desire code**/};// here object can be window,body and etc


1)  Here  alert "call on body load" call  immediately after body has been loaded

**In HTML**

    
    <!-- on body onload call myFunction -->
    <body onload="myFunction()">


**In JavaScript**

    
    // myFunction() which will call on body load
    function myFunction(){
       alert("call on body load");
    }


if we take a example related to image onload then it will look like below

2)  Here  alert "call on image load" call  immediately after image has been loaded

**In HTML**

    
    <!-- on image onload call myImageFunction() -->
    <img src="image path src" onload="myImageFunction()">


**In JavaScript**

    
    // myFunction() which will call on image load
    function myImageFunction(){
       alert("call on image load");
    }

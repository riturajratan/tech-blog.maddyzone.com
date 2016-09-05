---
author: riturajratan
comments: true
date: 2014-10-07 17:27:31+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=1472
slug: prevent-default-behaviour-of-anchor-tag-by-jquery-and-javascript
title: Prevent default behaviour of anchor tag by jQuery and JavaScript
wordpress_id: 1472
categories:
- JavaScript
- jQuery
tags:
- JavaScript
- jQuery
---

In anchor tag when we assign `href` attribute with URL then on click on that it will redirect to that URL. In this post we will know that how to override default behaviour of anchor tag. To prevent default behaviour of anchor tag in HTML,JavaScript and in jQuery we can do by the  following ways.


<blockquote>Prevent and Overriding default behaviour of anchor tag by jQuery and JavaScript using  event.preventDefault() and return false</blockquote>




## IN HTML




### _by #_


if we assign `#` in `href` the it will not redirect to any URL but when we click on that it will jump to top of the screen which looking bad i always ignore this solution

    
    <a href="#"> click with # </a>




### by javascript:void(0)


if we assign `javascript:void(0)` in `href` then it will not redirect to any URL and it seems good solution

    
    <a href="#"> click with # </a>




## IN JavaScript


_**IN HTML**_  anchor tag is defined like below

    
    <a href="http://google.com" id="link">prevent By JavaScript code</a>


_**IN JavaScript--**_code is defined like below

in JavaScript by `return false` we override default behaviour of the element.

    
    <script type="text/javascript">
    document.getElementById("link").onclick = function() {
    // do things, and then
    return false;
    };
    </script>




## IN jQuery


_**IN HTML**_  anchor tag is defined like below

    
    <a href="http://google.com" id="link_jQuery">prevent By jQuery code</a>


_**IN jQuery--**_code is defined like below

In jQuery By [event.preventDefault()](http://api.jquery.com/event.preventdefault/) we override default behaviour of the element whether it is anchor tag ,form tag and etc.

    
    // prevent by jQuery write code in docuyment.ready in jQuery
    $(document).ready(function(e) {
    // prevent a specific anchor tag with id 
       $('a#link_jQuery').click(function(e){
         // stop its defaut behaviour
         e.preventDefault(); 
         /**
           * do your own work
          **/
    });
      // prevent all anchor tag
      $('a').click(function(e){
         // stop its defaut behaviour
         e.preventDefault(); 
        /**
          * do your own work
          **/
       });
    });

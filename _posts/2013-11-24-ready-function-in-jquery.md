---
author: maddyzonetech
comments: true
date: 2013-11-24 15:29:43+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=31
slug: ready-function-in-jquery
title: .ready() function in jQuery
wordpress_id: 31
categories:
- jQuery
tags:
- .ready()
- JavaScript
- jQuery
---

**Description: **Specify a function to execute when the DOM is fully loaded.


Type: [Function](http://api.jquery.com/Types/#Function)()




A function to execute after the DOM is ready.






While JavaScript provides the `load` event for executing code when a page is rendered, this event does not get triggered until all assets such as images have been completely received. In most cases, the script can be run as soon as the DOM hierarchy has been fully constructed. The handler passed to `.ready()` is guaranteed to be executed after the DOM is ready, so this is usually the best place to attach all other event handlers and run other jQuery code. When using scripts that rely on the value of CSS style properties, it's important to reference external stylesheets or embed style elements before referencing the scripts.

In cases where code relies on loaded assets (for example, if the dimensions of an image are required), the code should be placed in a handler for the `load` event instead.

[highlight]The `.ready()` method is generally incompatible with the `<body onload="">` attribute. If `load` must be used, either do not use `.ready()` or use jQuery's `.load()` method to attach `load` event handlers to the window or to more specific items, like images.[/highlight]

All three of the following syntaxes are equivalent:



	
  * `$( document ).ready( handler )`

	
  * `$().ready( handler )` (this is not recommended)

	
  * `$( handler )`


The `.ready()` method can only be called on a jQuery object matching the current document, so the selector can be omitted.

The `.ready()` method is typically used with an anonymous function:

    
    $( document ).ready(function() {
      // Handler for .ready() called.
    });


Which is equivalent to calling:

    
    $(function() { 
    // Handler for .ready() called. 
    });




#### Code Explanation:


The “$” sign you see in the code is jQuery object. The first part “$(document)” selects the document and binds it with ready event using a jQuery method “.ready()”, which further calls an anonymous function “function() {}” for executing further statements.


[![jQuery-document-ready-event-explanation-code-tricks]({{ site.url }}/uploads/2013/11/jQuery-document-ready-event-explanation-code-tricks-300x158.jpg)]({{ site.url }}/uploads/2013/11/jQuery-document-ready-event-explanation-code-tricks.jpg)


Similarly, the inner code “$(“body”).html(“<h1>Life is awesome!</h1>”);” does the same thing. Here “body” is a selector and “.html” is a method to write HTML into the body tag. However, I’m not calling any anonymous function here though I could if necessary.






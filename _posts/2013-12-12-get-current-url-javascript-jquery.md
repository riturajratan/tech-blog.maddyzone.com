---
author: riturajratan
comments: true
date: 2013-12-12 11:31:06+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=103
slug: get-current-url-javascript-jquery
title: How to get current url in JavaScript and jQuery ?
wordpress_id: 103
categories:
- JavaScript
- jQuery
tags:
- hash
- host
- hostname
- href
- pathname
- port
- protocol
- search
- window.location
---

<blockquote>The [window.location](https://developer.mozilla.org/en-US/docs/Web/API/window.location?redirectlocale=en-US&redirectslug=DOM%2Fwindow.location) read-only property returns a Location object with information about the current location of the document.</blockquote>


we see all the property by this below Url

**http://www.test.com:8082/index.php#tab2?foo=123**
first  use [window.location](https://developer.mozilla.org/en-US/docs/Web/API/window.location?redirectlocale=en-US&redirectslug=DOM%2Fwindow.location) then write following property like

    
    Property                                          Result
    
    --------------------------------------------------------------------------
    window.location.host                   www.test.com:8082
    window.location.hostname               www.test.com
    window.location.port                   8082
    window.location.protocol               http
    window.location.pathname               index.php
    window.location.href                   http://www.test.com:8082/index.php#tab2
    window.location.hash                   #tab2
    window.location.search                 ?foo=123




**Or if you have [jQuery ](http://jquery.com/)you can do it like this:**

    
    Property                                          Result
    
    --------------------------------------------------------------------------
    $(location).attr('host');                        www.test.com:8082
    $(location).attr('hostname');                    www.test.com
    $(location).attr('port');                        8082
    $(location).attr('protocol');                    http
    $(location).attr('pathname');                    index.php
    $(location).attr('href');                        http://www.test.com:8082/index.php#tab2
    $(location).attr('hash');                       #tab2
    $(location).attr('search');                     ?foo=123




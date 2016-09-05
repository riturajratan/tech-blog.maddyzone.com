---
author: riturajratan
comments: true
date: 2014-03-17 11:51:59+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=299
slug: first-step-with-require-js
title: First Step With Require Js
wordpress_id: 299
categories:
- JavaScript
tags:
- AMD
- Load Files
- Loading
- Module
- Require Js
---

[dropcap]I[/dropcap] am working in [JavaScript ](https://developer.mozilla.org/en/docs/Web/JavaScript)and [jQuery ](http://jquery.com/)and some time i am getting problem regarding file order like i am using two JavaScript library files [jQuery ](http://jquery.com/) and  [jQuery UI](http://jqueryui.com/) .We know that first we use [jQuery ](http://jquery.com/)  then [jQuery UI](http://jqueryui.com/). but suppose we load First  [jQuery UI](http://jqueryui.com/) then [jQuery](http://jquery.com/). like below

    
    <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.9/jquery-ui.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>


then it give error below in console(press F12 to see console in browser)


[![jQuery not defined](http://maddyzone.com/wp-content/uploads/2014/03/jQuery-not-defined.png)](http://maddyzone.com/wp-content/uploads/2014/03/jQuery-not-defined.png) [button type="bd_button btn_middle" url="http://demo.maddyzone.com/javascript/requirejs/first-step-with-require-js/error-with-unorder-js-script-file-loading.html" target="on" button_color_fon="#3fc2da" button_text_color="#ffffff" ]See In Action[/button]


[dropcap]N[/dropcap]ow we set in order like below

    
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.9/jquery-ui.min.js" type="text/javascript"></script>


Then error not coming and a alert box appear that show "[jQuery](http://jquery.com/) and [jQuery UI](http://jqueryui.com/) Loaded" like below


[![error remove by order js files](http://maddyzone.com/wp-content/uploads/2014/03/error-remove-by-order-js-files.png)](http://maddyzone.com/wp-content/uploads/2014/03/error-remove-by-order-js-files.png)




[button type="bd_button btn_middle" url="http://demo.maddyzone.com/javascript/requirejs/first-step-with-require-js/error-remove-with-order-js-script-loading.html" target="on" button_color_fon="#3fc2da" button_text_color="#ffffff" ] See In Action[/button]


[dropcap]S[/dropcap]o to remove this type issue i search in [Google](https://www.google.com) and find [Require.Js](http://requirejs.org/)
In Short What is Require.js ?


<blockquote>RequireJS is a JavaScript file and module loader. It is optimized for in-browser use, but it can be used in other JavaScript environments, like Rhino and[Node](http://requirejs.org/docs/node.html). Using a modular script loader like RequireJS will improve the speed and quality of your code.

IE 6+ ………. compatible ✔
Firefox 2+ ….. compatible ✔
Safari 3.2+ …. compatible ✔
Chrome 3+ …… compatible ✔
Opera 10+ …… compatible ✔ By [Require.Js](http://requirejs.org/)

In a Simple Manner Require Js By which we make our  code moduler and can configure to the dependency of files(which file load at (after or before) which specific file)</blockquote>


So Start with Require Js First [**Download**](http://requirejs.org/docs/download.html) [Require.Js](http://requirejs.org/) then put in a js folder then it look like below [![Require js demo folder](http://maddyzone.com/wp-content/uploads/2014/03/Require-js-demo-folde.png)](http://maddyzone.com/wp-content/uploads/2014/03/Require-js-demo-folde.png) Now we comment [jQuery UI](http://jqueryui.com/) then [jQuery](http://jquery.com/) file in head and add require js like below

    
    <script src="js/require.js" data-main="js/main" type="text/javascript"></script>


By above code we load all files with  [Require.Js](http://requirejs.org/). Above data-main Attribute load main.js in this main.js we apply all code by  which all files load in one place by [Require.](http://requirejs.org/) [dropcap]M[/dropcap]ain .js written like below

    
    requirejs.config({
        //By default load any module IDs from js 
        baseUrl: 'js',
         //here we set our js folder
        //config is relative to the baseUrl, and
        //never includes a ".js" extension since
        //the paths config could be for a directory..
         paths: {
        'jquery':'//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',//set jQuery path you can also include your folder js
        'jqueryui':'//ajax.googleapis.com/ajax/libs/jqueryui/1.8.9/jquery-ui.min'// set jQuery ui path you can also include your folder js
    
      },
        shim: {
    
        	'jqueryui': {
                deps: ['jquery']// here we are defining that it depends on jQuery
    
            } 
        },
    });
    /*Now we are loading jQuery Ui but itdepends on jQuery so first load jquery thne jquery ui*/
    require(['jqueryui'],function() {
        alert("Load all files");
     $('<div>jQuery and jquery ui loaded</div>').appendTo("body");
    });


Now when we load   [jQuery UI](http://jqueryui.com/) then [jQuery](http://jquery.com/)  load first because we set dependency of [jQuery UI](http://jqueryui.com/) with [jQuery](http://jquery.com/) with the use of [Require.Js](http://requirejs.org/). in console in HTML section you will see file js file load like below


[![loading file structure with require js](http://maddyzone.com/wp-content/uploads/2014/03/loading-file-structure-with-require-js.png)](http://maddyzone.com/wp-content/uploads/2014/03/loading-file-structure-with-require-js.png)


**Management of js files order**
**Asynchronous Module Loading (AMD)** used by [Require.Js](http://requirejs.org/) for loading files.If we set the order of files so we can't confirm that files load that respective order due to asynchronous request so, we cant confirm that first file load first and second file load second.So for that [Require.Js](http://requirejs.org/) use [highlight]shim[/highlight] config by which we can define that which file load at which order like in above example we define that [jQuery](http://jquery.com/) load Before [jQuery UI](http://jqueryui.com/). TO know more about [Require.Js](http://requirejs.org/) Config see [RequireJs Config Option ](http://requirejs.org/docs/api.html#config)


[button type="bd_button btn_middle" url="http://demo.maddyzone.com/javascript/requirejs/first-step-with-require-js/loading-with-require-js.html" target="on" button_color_fon="#3fc2da" button_text_color="#ffffff" ]See In Action[/button]  [button type="bd_button btn_middle" url="http://demo.maddyzone.com/javascript/requirejs/first-step-with-require-js/" target="on" button_color_fon="#3fc2da" button_text_color="#ffffff" ] See All Demo[/button]




Hope it will helpful please give your comment and suggestion and share on below network.

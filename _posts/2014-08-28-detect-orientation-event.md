---
author: riturajratan
comments: true
date: 2014-08-28 18:37:30+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=1109
slug: detect-orientation-event
title: Detect Orientation Event
wordpress_id: 1109
categories:
- JavaScript
- jQuery Mobile
tags:
- iOS device
- landscape
- Orientation
- portrait
---

By **[JavaScript](http://maddyzone.com/category/javascript) **we can detect orientation event of mobile application that it is in landscape or portrait mode. In JavaScript `window` object has `orientation` property so we can get this property by `window.orientation.`

window orientation give four values



	
  1.  `0`      for Portrait mode

	
  2. `180`  for  Portrait mode but Upside Down mode

	
  3. `90`    for landscape  mode with CounterClockwise

	
  4. `-90`   for  landscape  mode with Clockwise


So values of 0 and 180 represent a landscape orientation and values of -90 and 90 represent portrait orientation .

let we create  a function `getDeviceOrientation `by which we can detect device orientation.

    
    /** by this method we get orientation 
      * of device like mobile device 
      * and iOS(iPhone and iPad)
     **/ 
    function getDeviceOrientation() {
    
        switch (window.orientation) {  
        case 0:  
        
            // Portrait Mode 
            break; 
            
        case 180:  
        
            // Portrait Mode But (Upside-down)
            break; 
      
        case -90:  
        
            // Landscape Mode with (Clockwise)
            break;  
      
        case 90:  
        
            // Landscape Mode with  (Counterclockwise)
            break;
        }
    }


Now make it simple if we only detect landscape  and portrait mode not clockwise , counterclockwise and up and down mode.then we can use it like

    
    function getDeviceOrientation() {
                     		
        if (Math.abs(window.orientation) === 90) {
            // Landscape Mode
        } else {
        	// Portrait Mode
        }
    }


So we have discussed that how we detect Orientation .Now How we get event to detect when Orientation of window change luckily in JavaScript `onorientationchange` event exist which is call when device is rotate. So on `onorientationchange`  we call function `getDeviceOrientation`

    
    /** call getDeviceOrientation function 
      * when orientation change
    **/
    
    window.onorientationchange = getDeviceOrientation;
    
    //or can call by this way
    
    window.addEventListener('orientationchange', getDeviceOrientation);


and call `getDeviceOrientation()  ` on load to detect that what is orientation before rotate of device.

    
    /** initial call to detect the
      * orientation of device before rotate
    **/
    getDeviceOrientation();


In **[jQuerymobile](http://jquerymobile.com/) **we can also get by [orientationchange](http://api.jquerymobile.com/orientationchange/) event  like this

    
    /** here by event.orientation
      * we get landscape  or portrait
    **/
    $( window ).on( "orientationchange", function( event ) {
      alert( "This device is in " + event.orientation + " mode!" );
    });


[button type="bd_button btn_large" url="https://github.com/riturajratan/detect-orientation-event"  target="on" button_color_fon="#3fc2da" button_text_color="#ffffff" ]Download[/button] [button type="bd_button btn_large" url="http://demo.maddyzone.com/javascript/detect-orientation-event/" target="on" button_color_fon="#ff8000" button_text_color="#ffffff" ]Demo[/button]

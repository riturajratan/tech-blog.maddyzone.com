---
author: riturajratan
comments: true
date: 2014-09-20 05:19:11+00:00
layout: post
slug: this-in-angularjs
title: this in angularjs
wordpress_id: 1358
categories:
- AngularJS
- JavaScript
tags:
- Angular Js
- angular service
---


[![This is Angular JS]({{ site.url }}/uploads/2014/09/this-in-angular-js.pn)]({{ site.url }}/uploads/2014/09/this-in-angular-js.pn)

Most of the time we use `this` in [_**JavaScript**_](http://maddyzone.com/category/javascript) or `$(this)` in [_**jQuery**_](http://maddyzone.com/category/javascript/jquery) .

Now How to use `this` in **AngularJS ?**


>In Angular by `$event`  we can get this by event object, from which we can get the `event target` and use it with **JavaScript** or **jQuery**.
    
    //use in core JavaScript ( as this )
    $event.target
    // use injQuery (as $(this))
    $($event.target);


**Lets Create a demo**

**IN HTML--** In this we set our layout and call function on click(for anchor tag) and on keyup(for input)

by **ng-click**  at the time of click `getText` method call

by **ng-keyup** at the time of keyup `getVal` method call

in both of the method we pass `$event` and use in our controller see JS file code for more.
    
    <body ng-app="maddyzone">
      <!--Now it Tells to AngularJS to be active in this portion of the page. In this case the entire document.(due to we apply on body tag ) -->
      <div class="container">
        <div class="jumbotron" ng-controller="ThisCtrl">
          <img src="{{ site.url }}/uploads/2013/10/maddyzone-logo-300x72.png" />
          <br />
          <h1>Get this in angular js</h1>
          <br />
          <label class="label label-primary">Click on below button to get its text</label>
         <br/>
         <br/>
         <!-- pass $event then get in controllers as a event then use it any property -->
          <a class="btn btn-success" ng-click="getText($event)">Hello Plunker!</a>
          <br />
          <br />
          
         <label class="label label-primary">Type on below input to get its value</label>
         <br/>
         <br/>
          <!-- pass $event then get in controllers as a event then use it any property -->
          <input type="text" value="test value" ng-keyup="getVal($event)" />
            <br />
            <a href="http://maddyzone.com/javascript/this-in-angularjs" target="_blank">View Post on Maddyzone </a>
        </div>
      </div>
    </body>


**IN JS** in this we define our methods and use `event.target` as `this`

    
    //create a module maddyzone
    var maddyzone = angular.module('maddyzone', []);
    
    // create the controller and inject Angular's $scope
    maddyzone.controller('ThisCtrl', function($scope) {
      // make a method to get input value by using $event as this (event.target)
      $scope.getVal = function(event) {
        alert($(event.target).val() + "----Get By jQuery Method .val()");
        alert(event.target.value + "----Get By javaScript Property .value");
      };
    
      // make a method to get text by using $event as this (event.target)
      $scope.getText = function(event) {
        alert($(event.target).text() + "----Get By jQuery Method .text()");
        alert(event.target.innerHTML + "----Get By javaScript Property .InnerHTML");
      }
    });


<!-- **SEE LIVE DEMO** -->



Please give your comments and suggestion Thanks.

---
author: riturajratan
comments: true
date: 2014-08-12 17:33:50+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=937
slug: learn-complete-angularjs-5-steps-step-3-5
title: Learn Complete AngularJS in 5 Steps (Step 3 of 5)
wordpress_id: 937
categories:
- AngularJS
- JavaScript
tags:
- Angular Js
- Custom Directive
- Directive
- predefined directive
---

As per my [**Previous article** ](http://maddyzone.com/javascript/learn-complete-angularjs-5-steps-step-2-5) you know Angular Module,$scope and  Controller. if you not don’t know then please first read my previous article then come on this article by this you can easily understand this article .

**So** **what have you done** **?**

[yes_list]



	
  * You know that how to apply AngularJS on pages .

	
  * Understanding of Angular Module,$scope and  Controller.


[/yes_list]

**What you will know after read this article ?**

[star_list]



	
  * What is **Directives **in Angular JS ?

	
  * How to use that ?

	
  * How to make custom Directive ?


[/star_list]


<blockquote> Directives are the soul of AngularJS.</blockquote>


Ok lets start one by one .

**What is Directives in Angular JS ?**

Directives are the new syntax for AngularJS by which on DOM element we provide a special behavior.

Lets take a example as we add any [jQuery Plugin](http://maddyzone.com/category/plugins/jquery-plugins) in normal HTML like a slider then this is something like below

    
    <ul id="slider">
    <li><image src="image1.jpg"></li>
    <li><image src="image2.jpg"></li>
    <li><image src="image3.jpg"></li>
    </ul>


then after see above html designer see jQuery code that where it is called like below

    
    $("#slider").slider();


But  in AngularJS let we make a directive **slider **then we can write below in our HTML to call this directive

    
    <slider></slider>
    


or we can also write as

    
    <ul slider> </ul>


so as per Directive structure it is very clear .

by this DOM Structure it is understand by everyone  that here  Slider is applied without see its all  functionality that how it is made so it is simple and clear .

SO at first time designer or programmer can't catch at which DOM element slider functionality is applied like in **jQuery **code we simply know that on id **slider **it is applied.


**Angular directive applied in 4 ways in terms of appearance.**




[line_list]






	
  1. As a HTML Element

    
    <slider></slider>




	
  2. As a  attribute on an element

    
    <input type="text" slider/>




	
  3.  As  a class

    
    <input type="text" class="slider"/>




	
  4. As a comment

    
    <!-- directive:slider -->







[/line_list]




**How to use that ?**


There are many Directive in AngularJS which are predefined like some are mention below.



	
  1. ngApp

	
  2. ngController

	
  3. ngRepeat

	
  4. ngShow

	
  5. ngHide

	
  6. ngClick

	
  7. .... many more you can see on all predefined on [https://docs.angularjs.org/api/ng/directive/](https://docs.angularjs.org/api/ng/directive/)


we take example by this you you will some idea that how to use Directive  .

As per our [previous article](http://maddyzone.com/javascript/learn-complete-angularjs-5-steps-step-2-5) we have known that how we use ng-app by this AngularJS applied on page ok lets take a example

in JS

    
    var myApp = angular.module('myApp', []);
    
    myApp.controller('MainCtrl', ['$scope', function ($scope) {
        
       /** here make a array for user list **/ 
       $scope.userList=["rituraj","ravindra","manoj","malay"];
    
    }]);


In HTML

    
    <div ng-app="myApp"><!-- apply module on div -->
            <ul ng-controller="MainCtrl" > <!-- apply controller -->
                <li  ng-repeat="user in userList"> <!-- magic of ng-repeat-->
                    {{ user }}
                </li>
            </ul>
    </div>


Check this live Demo



** How to make custom Directive ?**

Directive make as controller make in AngularJS and its retrun a object in which many properties and function are exist.lets start with a simple example

    
    var myApp = angular.module('myApp', []);
    myApp.directive('hellotest', function() {
     return
     {
      restrict: 'AE',
      replace: 'true',
      template: '<h3>Hello World!!</h3>',// good for tiny piece html
      templateUrl:"url path"// good for large html file
      link: function (scope, element, attrs) {
           // DOM manipulation/events here!
           }
     };
    });
    
    


by the directive we registered the directive in angular JS so in the directive there are two argument like in our above example



	
  1.  'helloTest' = by this it registered with **helloTest** name

	
  2. function (){return ..} = it return a directive function object


**Note :** if we want to use some service or object then we can use here like



	
  1. $rootScope = behave as a global variables in AngularJs

	
  2. $http = same like $.ajax in jQuery (get ,post and many more submethod exist in this)

	
  3. $scope= as we discuss previous


Now in the html we use  like below

**1) As an Element**

    
    <hello-test></hello-test>
      or
    <hello-test/>
    
    


and

    
    <hello:test />


** 2)As an Attribute**

    
    <div hello-test></div>
       or
    <div hello:test></div>


See live Demo

If we are working with HTML 5 Compliment then we can set this by [highlight] x- [/highlight] or [highlight] data- [/highlight] prefix like below

    
    <div x-hello-test></div>
    
    <div data-hello-test></div>


when we apply html 5 complement then angular see [highlight] x- [/highlight] and [highlight] data- [/highlight] then it convert into [highlight] - [/highlight] and [highlight] : [/highlight] then convert into **camelCase** to match with directive.so how it match exactly with our directive so in our it works in three steps



	
  1.  first see [highlight] x-hello-test [/highlight] or [highlight] data-hello-test [/highlight]

	
  2. then convert in  [highlight] hello-test [/highlight] or [highlight] hello:test [/highlight]

	
  3. then last change to [highlight] helloTest [/highlight] and match with our [highlight] helloTest [/highlight] Directive :)


There are many properties to set directive lets go to one by one

**restrict**= by this we set that how the directive is used in HTML like by



	
  * ** [highlight] A: [/highlight] ** use as Attribute

	
  * ** [highlight] E: [/highlight] ** use as Element

	
  * ** [highlight] M: [/highlight] **use as Comment

	
  * ** [highlight] C: [/highlight] ** use as Class

	
  * ** [highlight] AE: [/highlight] ** use as Element or Attribute

	
  * ** [highlight] AEC: [/highlight] ** use as Element ,Attribute or class

	
  * and ...many more Combination we can make as per our requirement


[highlight] EA [/highlight] is default . but we can use restrict to multiple use cases.

**template **= by this we set html at the place of directive like in template [highlight] <h1>test</h1> [/highlight] then at the place of directive replace by this . this is best for short HTML .

**templateUrl =  **it is use when HTML is too large then we set this html in a separate file and use templateUrl at the place of **template**

**replace** = it is working as a Boolean if it is [highlight] true [/highlight] then at the place of [highlight] <hello-test></hello-test>  [/highlight] we will see [highlight] <h1>test</h1> [/highlight] and if set false then we will see [highlight] <hello-test><h1>test</h1></hello-test> [/highlight]

**link =**  DOM manipulation and events are handle  here (see above live demo)

**transclude =** This is simple using this  existing DOM content to be copied into the directive. lets take a example in this you can see   [highlight] 'Inspect me to see transclude work' [/highlight]  have 'moved' into the Directive once it is rendered. (check by inspect element ) in live demo when output is rendered.



So it is all About Directives

Soon i will write my next article **R****ole of Services and Factory in AngularJS.**

The Demo repository is available on Git [https://github.com/riturajratan/learn-complete-angularjs-in-5-steps](https://github.com/riturajratan/learn-complete-angularjs-in-5-steps)

form here download source code for demo or clone it like below

    
    git clone https://github.com/riturajratan/learn-complete-angularjs-in-5-steps.git


Please give your comments for your suggestion Thanks .

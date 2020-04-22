---
author: riturajratan
comments: true
date: 2014-08-04 18:44:22+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=852
slug: learn-complete-angularjs-in-5-steps-part-1
title: Learn Complete AngularJS in 5 Steps (Step 1 of 5)
wordpress_id: 852
categories:
- AngularJS
- JavaScript
tags:
- Angular Js
- Directive
- jQuery
- ng-app
- Single Page Application
- SPA
---


Hi Here i am sharing my experience  that how i learn **[Angular JS](https://angularjs.org/).**This is a all about that how to learn AngularJS.  So First...**What is angularJS ?**

It is a JavaScript framework which provide interactivity with HTML.

**Before you start what would you need to know ?**

HTML, CSS and JavaScript is necessary to work with AngularJS and if you know jQuery that will be good else no worry.

**Why you use this ?**



	
  * For single page application it is too good.

	
  * easily work with jQuery.

	
  * easy to test.

	
  * provide a modular approach to your code.

	
  * and one and most good feature you need to write very small code for its two way data binding feature(we will discuss it no worry). 


In the Angular Main thing is **Directives**

**What is Directive?**

In our html when we add this ,as a tag then AngularJS know that it work on this place for JavaScript code.like a demo

in our Normal Work we call JavaScript function like below

    
    <script type="text/javascript">
    function hello(){
    alert("hello");
    }
    </script>




    
    <!DOCTYPE html>
    <html>
      <head>
     	<title></title>
      </head>
     <body onload="hello()">
     </body>
     </html>


and for Angular we will write

    
    <!DOCTYPE html>
     <html ng-app="Test"><!-- here we say to angular that start from this tag-->
     <head>
    	<title></title>
    	</head>
    	<body ng-controller="hello"> <!-- here angular take a command from us that it should execute hello function and it alert "hello" -->
    	</body>
    </html>


OK Now let's come to the point 

**How you will start with work in AngularJS ?**

**ng-app (Angular Module)**

say to AngularJS active on which portion of page

First in your html like below

    
    <!DOCTYPE html>
    	<html>
    	<head>
    		<title></title>
    	</head>
    	<body ng-app="">//Now it Tells to AngularJS to be active in this portion of the page. In this case the entire document.(due to we apply on html tag )
    	 <div>
    	 <input type="text" ng-model="testName" placeholder="Enter a name here">
          <h1>Hello, {{ testName }}!</h1> 
    	</div>
    	</body>
    	</html>






**Type In Below input Box and See Angular Magic **



Hello Test, {{ myName }}!




Here we see **two way data binding**( bi-directional data binding )without any work this is the feature of AngularJS .When you will change in back-end changes are shown on view . this is the magic of AngularJS .

Here we see three things

[star_list]



	
  * ng-app= here we say to start Angular js on our page

	
  * ng-model="testName" = by this we say two way data binding start on this testName model on this page.

	
  * {{ testName}} =here angular show changes on testName model on this directive


[/star_list]

Module is a collection of function which is initiate when this module is called.

Now we make a module in AngularJS.

    
    var TestModule=angular.module("myModule",[]);





	
  *  myModule= is the name of module by which module is made

	
  * [] = this is use for dependency like this module depends on which module right now don't worry about it we will discuss it :)


**Now how will we use this module ?**

Simple now in our html we will put in ng-app="myModule"

in below module active on **all page**

    
    <!DOCTYPE html>
    <html ng-app="myModule">// active on all html element
    	<head>
    		<title></title>
    	</head>
    	<body>
    
    	</body>
    </html>


in below this is active on a specific **div**.

    
    <!DOCTYPE html>
    <html>
    <head>
    	<title></title>
    </head>
    <body>
    <div ng-app="myModule">// active on div element
    
    </div>
    </body>
    </html>


After initialize module we will need to write our all logic by which we play with angular for this we need** $scope**, **ng-controller**,**directive** ,**service**,**routing.**

we will come it one by one.

So first start with $scope

so see  my next article **[Role of $scope in AngularJS](http://maddyzone.com/angularjs/javascript/learn-complete-angularjs-5-steps-step-2-5).**

The Demo repository is available on Git [https://github.com/riturajratan/learn-complete-angularjs-in-5-steps](https://github.com/riturajratan/learn-complete-angularjs-in-5-steps).

form here download source code for demo or clone it like below

git clone https://github.com/riturajratan/learn-complete-angularjs-in-5-steps.git

**[How To Hire A Great AngularJS Developer](https://www.toptal.com/angular-js#hiring-guide)**

Please give your comments for your suggestion Thanks .

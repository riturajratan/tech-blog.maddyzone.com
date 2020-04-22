---
author: riturajratan
comments: true
date: 2014-08-05 20:09:07+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=887
slug: learn-complete-angularjs-5-steps-step-2-5
title: Learn Complete AngularJS in 5 Steps (Step 2 of 5)
wordpress_id: 887
categories:
- AngularJS
- JavaScript
tags:
- $scope
- Controller
- Directive
- ng-controller ng-repeat
- viewModel
---

As per my [**Previous article** ](http://maddyzone.com/javascript/learn-complete-angularjs-in-5-steps-part-1) you know How to start with AngularJS ? if you not don't know then please first read my first article then come on this article by this you can easily understand this article .

Ok so **what have you done** **?**

you know that how to apply AngularJS on pages .

**What you will know after read this article ?**

you will know a good understanding of Angular Module,$scope and  Controller.

**$Scope__**

In **Model-View-Controller** Structure model bind **view** **to controller** and **controller to view **and same in AngularJS** $scope **behave as a model .


<blockquote> $scope bind view to controller and vice versa.</blockquote>


so it is use in Controller and view and we can access of **$scope** in our view and controller.

As like JavaScript we have two type variables.



	
  1.  local= local scope

	
  2.  global= global scope


as in AngularJS $scope are two type

	
  1. $scope= as we discuss

	
  2. $rootScope =you can use it also a global variable


$when $scope not find in a controller then it see in parent controller and if again not find then it see in $rootScope so it is the parent to all $scope variables in AngularJS.

[caption id="attachment_893" align="aligncenter" width="300"][![scope and rootscope]({{ site.url }}/uploads/2014/08/scope-and-rootscope1-300x300.png)]({{ site.url }}/uploads/2014/08/scope-and-rootscope1.png) scope and rootscope[/caption]

**ng-Controller__**

By this we create a place where we make $scope and it is nested in this controller $scope.In Angular Module we can make any number of Controller and In Controller we can make any number of $scope.when we make controller in AngularJS then it is best practice to give their name like "yourname+Ctrl" like your controller name is **parent **then it should be** parentCtrl **not** parentController .**you can make **parentController** but **Ctrl** looks nice rest of them to you guys by which name you make it

Lets take a basic Example to clear this all things that how they work .
**In JS**

    
    //create a module
    var myApp = angular.module('myApp', []);
    
    //create a Controller 
    myApp.controller('BasicCtrl', ['$scope', function ($scope) {
    
    //create a scope
     $scope.testText = 'Hello, Scope view Controller test.';
    
    }]);


**In HTML (behave as a View)**

    
    <div ng-app="myApp"><!-- set module so anular know here angular start with this module-->
        <div ng-controller="BasicCtrl"> <!-- here BasicCtrl call of myApp module -->
             {{ testText }} <!-- this is the magic of $scope now here $scope.testText come .this is the $Scope which we can directly access in controller -->
        </div>
    </div>


For Live View

Now take a Example By which we clearly understand what is $scope and parent scope and $rootScope .

**IN JS **

    
    //create a module
    var myApp = angular.module('myApp', []);
    
    // create a parent Controller
    myApp.controller('ParentCtrl', function($scope) {
    $scope.user = {name: "rituraj"};
    });
    
    // create a child Controller
    myApp.controller('ChildCtrl', function($scope) {
    $scope.changeName = function() {
    $scope.user.name = "ravindra";
    }
    });


**IN HTML(behave as view)**

    
    <div ng-app="myApp"><!-- set module so anular know here angular start with this module-->
    
    <div ng-controller="ParentCtrl"><!-- called parent controller-->
    <div ng-controller="ChildCtrl"><1-- called child controller -->
    <input type="text" ng-model="user.name" placeholder="Name"></input>
    <a ng-click="changeName()">Say hello</a><!-- by changeName , we are accessing parent scope see in js code -->
    </div>
    ---{{ user }}---
    </div>
    </div>


For Live View

Explanation-- when we call changeName method then



	
  1. $scope see in first **local scope** then it can't find user **$scope**

	
  2. then it search in **parent scope** then here it find user **$scope**

	
  3. so it changes **$scope.user.name** value if it not found in parent scope then it will find in $**rootScope**


SO it is all About module controller and $scope .

so see  my next article **[Role of Directive in AngularJS](http://maddyzone.com/angularjs/javascript/learn-complete-angularjs-5-steps-step-3-5).**

The Demo repository is available on Git [https://github.com/riturajratan/learn-complete-angularjs-in-5-steps](https://github.com/riturajratan/learn-complete-angularjs-in-5-steps).

form here download source code for demo or clone it like below

    
    git clone https://github.com/riturajratan/learn-complete-angularjs-in-5-steps.git


please give your comments for your suggestion Thanks .

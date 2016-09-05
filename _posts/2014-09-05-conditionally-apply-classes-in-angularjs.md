---
author: riturajratan
comments: true
date: 2014-09-05 17:37:32+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=1192
slug: conditionally-apply-classes-in-angularjs
title: conditionally apply classes in angularjs
wordpress_id: 1192
categories:
- AngularJS
- JavaScript
tags:
- Angular Js
- ng-class
---

In [Angular ](https://angularjs.org/)we can add ,remove classes with the pre-build directive  **[ng-class](https://docs.angularjs.org/api/ng/directive/ngClass). **`ng-class` take value in `boolean type`

when it get true it add class else it remove class.we can use `ng-class` in two way.

**1) For Single Class **

like we want to add and remove class then we use like below

    
    // add class
    ng-class="{'classname': 1}"
    
    // remove class
    ng-class="{'classname': 0}"
    


we can also add it conditionally

like we have a `$scope.status ` and in this value come



	
  1. `1` or `0`

	
  2. `true` or `false`


then

	
  1. if it get `1 ` or `true` it add class `test`

	
  2. if it get `0 ` or `false` it remove class `test`


we will implement it like below

    
    <!-- here $scope.status access by status in 
         angular as we know it is access like this in angular
      -->
    <div ng-class="{'test': status}"> </div>
    


and no worry if in element already have class then it will add new class or remove this without any effect on already exist class

like in below div already has `old` class and we want to add `new` class according to status as above then it will look like

    
    <div class="old" ng-class="{'new': status}"> </div>


**2) For Multiple Class **

it works like below

    
    <!--here variable-name set in [] then 
        if it value 1 or true(Boolean type) then
        add anyclass (here we are applying first_classname) 
        and 0 or false (Boolean type) then
        add anyclass (here we are applying second_classname)
     -->
    ng-class="{1(or true):'first_classname', 0(or false):'second_classname'}[variable-name]"


now we want to add different class like



	
  1. if it get `1 `or `true` it add class test_yes

	
  2. if it get `0 `or `false` it add class test_no


then it will look like below

    
    <div ng-class="{1:'test_yes', 0:'test_no'}[status]"></div>


lets assume `$scope.status` value can 0,1,2

then we want to apply class



	
  1. if value 0 apply class one

	
  2. if value 1 apply class two

	
  3. if value 2 apply class three



    
    <div ng-class="{0:'one', 1:'two',2:'three'}[status]"></div>





<blockquote>you can set any type condition in ng-class but finally value must be boolean type  like _**o,1** _or _**true,false**_ etc..</blockquote>


Now Lets create a demo in which we add ,remove and toggle class in angular for single  and multiple class lets create a file

**index.html**

    
    <!DOCTYPE html>
    <html>
    
    <head>
      <link data-require="bootstrap-css@3.2.0" data-semver="3.2.0" rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" />
      <script data-require="angular.js@1.3.0-beta.5" data-semver="1.3.0-beta.5" src="https://code.angularjs.org/1.3.0-beta.5/angular.js"></script>
      <link rel="stylesheet" href="style.css" />
      <script src="script.js"></script>
    </head>
    
    <body ng-app="myApp">
    
      <div class="container" ng-controller="HomeCtrl">
        <div class="jumbotron">
          <img src="http://maddyzone.com/wp-content/uploads/2013/10/maddyzone-logo-300x72.png">
          <br/>
          <h1>Add , Remove and Toggle classes in Angular JS</h1>
          <br/>
          <hr/>
          <label class="alert label-info">Add and remove particular one class</label>
          <hr/>
          <!-- all magic happen here 
           here class_status value will come as a boolean if its true then class add otherwise remove -->
          <div class="alert" ng-class="{'bg-success':class_status }">{{single_message}}</div>
    
          <a class="btn btn-info" ng-click="addSingleClass()">Add Class</a>
          <a class="btn btn-success" ng-click="removeSingleClass()">Remove Class</a>
          <a class="btn btn-warning" ng-click="toggleSingleClass()">Toggle Class</a>
    
          <br/>
          <br/>
          <hr/>
          <label class="alert label-info">Add and remove different class</label>
          <hr/>
          <!-- these is for when we want to apply any number of class 
               according to the class_name $scope here class_name  
               value will come in three form blue , red ,green
               then class will apply respectively
               bg-info,bg-danger,bg-success
           -->
    
          <div class="alert" ng-class="{blue:'bg-info', red:'bg-danger',green:'bg-success' }[class_name]">{{multi_message}}</div>
    
          <a class="btn btn-info" ng-click="blueClass()"> Blue Class</a>
          <a class="btn btn-danger" ng-click="redClass()">Red Class</a>
          <a class="btn btn-success" ng-click="greenClass()">Green Class</a>
          <br/>
          <br/>
    
          <a href="http://maddyzone.com/javascript/learn-complete-angularjs-5-steps-step-5-5" target="_blank">View Post on Maddyzone </a>
    
        </div>
      </div>
    </body>
    
    </html>
    


**IN JS**

    
    var myApp = angular.module('myApp', []);
    // set for Home Controller
    myApp.controller('HomeCtrl', function($scope) {
      $scope.class_status = 0;
      $scope.single_message="see the add remove class effect";
      $scope.multi_message="see multi class effect";
      
      
      $scope.toggleSingleClass = function() {
        $scope.class_status = !$scope.class_status;
        $scope.single_message ="class is toggle";
      };
      $scope.removeSingleClass = function() {
        $scope.class_status =0;
        $scope.single_message ="remove class";
      };
      $scope.addSingleClass = function() {
        $scope.class_status = 1;
        $scope.single_message ="add class";
    
      };
      
      $scope.blueClass = function() {
        $scope.class_name = "blue";
        $scope.multi_message ="Blue Class Added";
      };
      $scope.redClass = function() {
        $scope.class_name ="red";
        $scope.multi_message ="Red Class Added";
      };
      $scope.greenClass = function() {
        $scope.class_name = "green";
        $scope.multi_message ="Green Class Added";
    
      };
    
    });


Now lets see Demo below



Please give your comments and your suggestion Thanks

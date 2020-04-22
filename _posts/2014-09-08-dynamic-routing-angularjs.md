---
author: riturajratan
comments: true
date: 2014-09-08 11:09:46+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=1238
slug: dynamic-routing-angularjs
title: Dynamic routing with AngularJS
wordpress_id: 1238
categories:
- AngularJS
- JavaScript
tags:
- $routeparams
- Angular Js
- ng-view
- Routing
- template
---

[![Dynamic routing with AngularJS]({{ site.url }}/uploads/2014/09/Dynamamic-routing-with-angularjs.png)]({{ site.url }}/uploads/2014/09/Dynamamic-routing-with-angularjs.png)

In [My previous Article](http://maddyzone.com/angularjs/javascript/learn-complete-angularjs-5-steps-step-5-5) we have learned about [**Routing in angular JS**](http://maddyzone.com/angularjs/javascript/learn-complete-angularjs-5-steps-step-5-5) . But in normal routing if we have 1000 route then at that time set config  for every route is not a good choice . for this we will do Dynamic Routing. Thanks Angular you have provide `$routeParams`


<blockquote>Dynamic routing with Angular JS is easily done by $routeParams. :)</blockquote>


In previous article example you can see that for every page we set routing configuration for below route
	
  1. home
  2. aboutus
  3. contactus


Now we will set it by Dynamic routing.

**How we will set Dynamic Routing ?**

Lets Start One by One.

First make a main file it will like our [previous article](http://maddyzone.com/angularjs/javascript/learn-complete-angularjs-5-steps-step-5-5) in which we set all layout and linked all files like below.

**index.html**
    
    <!DOCTYPE html>
    <html>
    
      <head>
        <link data-require="bootstrap-css@3.2.0" data-semver="3.2.0" rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" />
        <script data-require="angular.js@1.2.22" data-semver="1.2.22" src="https://code.angularjs.org/1.2.22/angular.js"></script>
        <script src="https://code.angularjs.org/1.2.20/angular-route.js"></script>
        <link rel="stylesheet" href="style.css" />
        <script src="script.js"></script>
      </head>
    
      <body ng-app="myApp">
        <!--Now it Tells to AngularJS to be active in this portion of the page. In this case the entire document.(due to we apply on body tag ) -->
        <div class="container">
          <div class="jumbotron">
            <img src="{{ site.url }}/uploads/2013/10/maddyzone-logo-300x72.png" />
            <br />
            <h1>Dynamic Routing Example</h1>
            <br />
            <!-- navigation menu start-->
            <a href="#home" class="btn btn-primary">Home</a>
            <a class="btn btn-success" href="#about">About</a>
            <a class="btn btn-danger" href="#contact">Contact</a>
            <!-- navigation menu stop-->
            <br />
            <br />
            <!-- by ng-view we create a space in this dynamic content come according to route by ng-view angular know that on which area content will set-->
            <div ng-view="">in this area by $routeparam content will change</div>
            <br />
            <a href="http://maddyzone.com/angularjs/javascript/learn-complete-angularjs-5-steps-step-5-5" target="_blank">View Post on Maddyzone </a>
          </div>
        </div>
      </body>
    
    </html>
    

Now as per [previous article](http://maddyzone.com/angularjs/javascript/learn-complete-angularjs-5-steps-step-5-5) we set three template.

<del>home.html</del>
    
    <!-- content set for home page -->
    <div style="font-size: 32px"  >
    	<h1>Home </h1>
    	<h2 class="label label-info">{{message}}</h2>
    </div>


<del>aboutus.html</del>

    
    <!-- content set for about us page -->
    <div style="font-size: 32px" >
    	<h1>About Us </h1>
    	<h2  class="label label-info">{{message}}</h2>
    </div>


<del>contact.html</del>

    
    <!-- content set for contact page -->
    <div style="font-size: 32px"  >
    	<h1>Contact </h1>
    	<h2 class="label label-danger">{{message}}</h2>
    </div>


But now we don't need these above template files we will set a single file with name **uirouter.html**  in which all above template file html set.

**uirouter.html**
  
    <!-- this is our template which will set in ng-view section
         in main page(index.html)
         in this template by $routeParam set in script then scope value set dynamic
         in our case we are using two variable $scope.page and $scope.message
         -->
    <div style="font-size: 32px"  >
    <h1>{{page}}</h1>
    <div class="alert bg-success"><b>{{message}}</b></div>
    </div>


In above `uirouter.html` we are using two `$scope` variables which value set according to route

  1. `$scope.page` = by this we set title of page	
  2. `$scope.message`= by this we set description of page


Now in our script code in which we will set _**route configuration.**_

**app.js**
    
    //create a module myApp
    var myApp = angular.module('myApp', ['ngRoute']);
    //Now Configure  our  routing
    myApp.config(function ($routeProvider, $locationProvider) {
        console.log("route");
        $routeProvider
        // set route for the dynamic page
        .when('/:pagename',
        {
            controller: 'RouteCtrl',
            templateUrl: 'uirouter.html'
        }) // if not match with any route config then send to home page
         .otherwise({
            redirectTo: '/'
          });
     });
     
    // create the controller and inject Angular's $scope
      // set for Route Controller
      myApp.controller('RouteCtrl', function($scope,$routeParams) {
        // create a message to display in our view 
        $scope.page=$routeParams.pagename;
        $scope.message = "(',')---I am on "+$routeParams.pagename +" page---(',')";
      });
    

in above script we use
    
    $routeProvider
        // set route for the dynamic page
        .when('/:pagename',
        {
            controller: 'RouteCtrl',
            templateUrl: 'uirouter.html'
        }) // if not match with any route config then send to home page
         .otherwise({
            redirectTo: '/'
          });
    


here  `⁄:pagename` is for route configuration.

<table width="100%" style="height: 76px;" >
<tr >
Route Name
$routeParams
$routeParams Ouput
</tr>

<tbody >
<tr >

<td >/home
</td>

<td >$routeParams.pagename
</td>

<td >home
</td>
</tr>
<tr >

<td >/aboutus
</td>

<td >$routeParams.pagename
</td>

<td >aboutus
</td>
</tr>
<tr >

<td >/contactus
</td>

<td >$routeParams.pagename
</td>

<td >contactus
</td>
</tr>
</tbody>
</table>

Here you can see in this all route we use `$routeParams.pagename` and output come different which will shown in our `uirouter.html` template file `$scope` variables.

we can set any no of attributes in dynamic route like

for two parameters in URL.

**xyz.com#/firstparameter/secondparameter**

<table width="100%" >

<tr >
url
$routeParams config
$routeParams
$routeParams Output
</tr>

<tbody >
<tr >

<td >/javascript/a javascript post
</td>

<td >/:category/:postname
</td>

<td >
$routeParams.category

$routeParams.postname
</td>

<td >javascript

a javascript post
</td>
</tr>
</tbody>
</table>

for three parameters in URL.

**xyz.com#/firstparameter/secondparameter/thirdparameter**

<table width="100%" >

<tr >
url
$routeParams config
$routeParams
$routeParams Output
</tr>

<tbody >
<tr >

<td >/javascript/angular/a javascript post
</td>

<td >/:category/:subcategory/:postname
</td>

<td >$routeParams.category
$routeParams.subcategory
$routeParams.postname
</td>

<td >javascript
angular
a javascript post
</td>
</tr>
</tbody>
</table>

So you can set any no of route parameters and get easily and do Dynamic Routing.

Happy Dynamic Routing :)

**[Code](http://plnkr.co/edit/nmPKATTaPf9YdfXsRYv5)**

**[Demo](http://embed.plnkr.co/nmPKATTaPf9YdfXsRYv5/preview)**

Please give your comment and your suggestion Thanks.

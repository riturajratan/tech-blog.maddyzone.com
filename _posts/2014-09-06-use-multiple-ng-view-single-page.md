---
author: riturajratan
comments: true
date: 2014-09-06 07:56:45+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=1210
slug: use-multiple-ng-view-single-page
title: How to use multiple ng-view in a single page
wordpress_id: 1210
categories:
- AngularJS
- JavaScript
tags:
- Angular Js
- ng-app
- ng-include
- ng-switch
- ng-view
- Routing
---

we can use only one ng-view in single template but if we want to use multiple ng-view then we can use it by the ng-include, ng-switch or mapping different controllers and templates through the routeProvider.


<blockquote>we want to use multiple ng-view then we can use it by the **ng-include**, **ng-switch** or **mapping different controllers** and templates through the **routeProvider**.</blockquote>


**[ng-view](https://docs.angularjs.org/api/ngRoute/directive/ngView) **

`ng-view` by this directive angular know that ,this is the place where template will inject.for more details see in [angular doc](https://docs.angularjs.org/api/ngRoute/directive/ngView)

[**ng-include**](https://docs.angularjs.org/api/ng/directive/ngInclude)

by `ngInclude` we load template with given path . It Fetches, compiles and includes an external HTML fragment for more details see in [angular.doc](https://docs.angularjs.org/api/ng/directive/ngInclude)

[**ng-switch**](https://docs.angularjs.org/api/ng/directive/ngSwitch)

By ng-switch we load template conditionally  rest of them same as `ngInclude` its syntax is like below

    
    <ANY ng-switch="expression">
      <ANY ng-switch-when="matchValue1">...</ANY>
      <ANY ng-switch-when="matchValue2">...</ANY>
      <ANY ng-switch-default>...</ANY>
    </ANY>


for more details see in [angular.doc](https://docs.angularjs.org/api/ng/directive/ngSwitch)

_lets take  a example with **ngInclude** to load multiple files in a single page_

First create our main file in which all structure set

**index.html(in this our all layout structure set)**

    
    <!DOCTYPE html>
    <html>
    
    <head>
      <link data-require="bootstrap-css@3.2.0" data-semver="3.2.0" rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" />
      <script data-require="angular.js@1.2.22" data-semver="1.2.22" src="https://code.angularjs.org/1.2.22/angular.js"></script>
      <script src="https://code.angularjs.org/1.2.20/angular-route.js">
      </script>
      <title>Multiple ng-view in a single template</title>
      <link rel="stylesheet" href="style.css" />
      <script src="script.js"></script>
    </head>
    
    <body ng-app="myApp">
      <!--Now it Tells to AngularJS to be active in this portion of the page. In this case the entire document.(due to we apply on body tag ) -->
      <div class="container">
        <!-- apply our controller RouteCtrl-->
        <div class="jumbotron" ng-controller="RouteCtrl">
          <img src="{{ site.url }}/uploads/2013/10/maddyzone-logo-300x72.png">
          <br/>
          <h1>Multiple ng-view in a single template</h1>
    
          <!-- by ng-view we create a space in this dynamic content come according to route by ng-view angular know that on which area content will set-->
    
         <br/><br/>
           <!-- but here we want to insert three template home.html,aboutus.html, contactus.html -->
    
          <i class="badge">load uirouter.html file in this all html file loaded </i>
           <div ng-view="">
          </div>
          <a href="http://maddyzone.com/javascript/how-use-multiple-ng-view-in-a-single-page" target="_blank">View Post on Maddyzone </a>
    
        </div>
      </div>
    </body>
    
    </html>
    


now make a file by which will inject in `ng-view` section

**uirouter.html**

you can see in this file we use `ngInclude` 3 times to load these below three files



	
  1. home.html

	
  2. aboutus.html

	
  3. contactus.html



    
    <!-- this file is very important it is include in main file by ng-view-->
    <div class="alert alert-info">Now below load multiple views i am from <b class="badge">uirouter.html</b> which is  set by <i class="badge"> ng-view</i> 
    </div>
    
    <i class="badge">load home.html file by ng-include </i>
    <br/>
    <!-- when controller set then in scope home.template home.html set and it will load that template-->
    <div class="alert bg-success" ng-include="template.home"></div>
    
    <i class="badge">load aboutus.html file by ng-include </i>
    <br/>
    <!-- when controller set then in scope about.template aboutus.html set and it will load that template-->
    <div class="alert bg-warning" ng-include="template.about"></div>
    
    <i class="badge">load contactus.html file by ng-include</i>
    <br/>
    <!-- when controller set then in scope contact.template contactus.html set and it will load that template-->
    <div class="alert bg-danger" ng-include="template.contact"></div>


Now make our three template files which we want to load

**home.html**

    
    <!-- content set for home page -->
    <div style="font-size: 32px">
      <h1>Home </h1>
      <h2 class="label label-info">{{message.home}}</h2>
    </div>


**aboutus.html**

    
    <!-- content set for about page -->
    <div style="font-size: 32px">
      <h1>About Us </h1>
      <h2 class="label label-info">{{message.about}}</h2>
    </div>


**contactus.html**

    
    <!-- content set for contact page -->
    <div style="font-size: 32px">
      <h1>Contact</h1>
      <h2 class="label label-info">{{message.contact}}</h2>
    </div>


Now make our script file in which all [**module and controller** ](http://maddyzone.com/javascript/learn-complete-angularjs-5-steps-step-2-5)setting exist and here we are mapping our controller with `index.html` and set routing of template `uirouter.html`

**script.js**

    
    //create a module myApp
    var myApp = angular.module('myApp', ['ngRoute']);
    
    //Now Configure  our  routing
    myApp.config(function($routeProvider, $locationProvider) {
      $routeProvider
      /** set route for the index page and it load uirouter.html
        *in ng-view and activate RouteCtrl
        **/
      .when('/', {
        controller: 'RouteCtrl',
        templateUrl: 'uirouter.html'
      })
      // if not match with any route config then send to home page
      .otherwise({
        redirectTo: '/home'
      });
    });
    
    // create the controller and inject Angular's $scope
    // set for Route Controller
    myApp.controller('RouteCtrl', function($scope) {
      /** create $scope.template **/
      $scope.template = {
        "home": "home.html",
        "about": "aboutus.html",
        "contact": "contactus.html"
      }
      
      $scope.message={
        
         "home":"Message from home template",
         "about":"Message from about template",
         "contact":"Message from contact template"
         
       }
    
      /** now after this ng-include in uirouter.html set and take template from their respective path **/
    });


**So overall what will be done **



	
  1. first we make index.html file in this we set a div with `ng-view`

	
  2. make a uirouter file in this three `ngInclude `div call they load below template file

	
    * home.html

	
    * aboutus.html

	
    * contactus.html




	
  3.  In JS by routing we set uirouter.html in index.html `ng-view `section

	
  4. after load uirouter.html in ng-view it see three things



	
  *  **ng-include="template.home" **
then it check `$scope.template.home` value which is _home.html_ and it is load by  `ngInclude `

	
  *  **ng-include="template.about" **
then it check `$scope.template.about` value which is aboutus.html and it is load by `ngInclude `

	
  *  **ng-include="template.contact"**
then it check `$scope.template.contact` value which is contact.html and it load by  `ngInclude `


**See Live Demo Below**



Please give your comments and suggestion Thanks.

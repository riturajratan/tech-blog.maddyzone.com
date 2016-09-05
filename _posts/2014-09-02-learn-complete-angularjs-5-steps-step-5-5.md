---
author: riturajratan
comments: true
date: 2014-09-02 17:46:48+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=1162
slug: learn-complete-angularjs-5-steps-step-5-5
title: Learn Complete AngularJS in 5 Steps (Step 5 of 5)
wordpress_id: 1162
categories:
- AngularJS
- JavaScript
tags:
- Routing
- Sinle Page Application
- SPA
---

As per my [**Previous article** ](http://maddyzone.com/javascript/learn-complete-angularjs-5-steps-step-4-5) you know Angular Service.if you not don’t know then please first read my previous article then come on this article by this you can easily understand this article.

**So** **what have you done** **?**

[yes_list]



	
  * [You know that how to apply AngularJS on pages](http://maddyzone.com/javascript/learn-complete-angularjs-in-5-steps-part-1).

	
  * [Understanding of Angular Module,$scope and  Controller](http://maddyzone.com/javascript/learn-complete-angularjs-5-steps-step-2-5).

	
  * [What is Directive](http://maddyzone.com/javascript/learn-complete-angularjs-5-steps-step-3-5) ? 

	
  * [What is Service in AngularJS ?](http://maddyzone.com/javascript/learn-complete-angularjs-5-steps-step-4-5)


[/yes_list]

**What you will know after read this article ?**

[star_list]



	
  * What is Routing in AngularJS ?


[/star_list]

Ok lets start

**What is Routing in AngularJS ?**

Routing is a way by which we  can set different URL  related to content  so user can bookmark it  and use it anywhere . these URL are called Route in AngularJS.Content which is come depends on route. A route is specifies after `#` in URL.But when user direct open URL which is bookmark like the URL are

    
    http://mydemoapp.com/index.html#/home
    
    http://mydemoapp.com/index.html#/aboutus
    
    http://mydemoapp.com/index.html#/contact


then first it  see `http://mydemoapp.com/index.html` then it see the route(route is the part which come after `#` in URL) then decide  the content which will show according to the route. Here we are creating a single page application by which we can understand it very easy.

Today SPA(Single Page Application) are much use in web development. due to



	
  1. Load very fast

	
  2. full page not load every time only related content come

	
  3. No page refresh




<blockquote>**By Angular  we make_ Single Page Application_ very easy** .</blockquote>


So By Angular Routing and template we make Single Page Application in this we use three route

[yes_list]



	
  * home

	
  * aboutus

	
  * contact


[/yes_list]

Lets Create a main file `index.html`in which we set all layout and linked all files(`css` and `js`) and add navigation menu (to change  the route) and create a space by which content set according to the route


<blockquote>**Note- Routing related code _in angular 1.1.6  already exists but after this __version we need to add ngRoute module sepratily .For Routing  we need angular-route.js file for new version(above 1.1.6)_**</blockquote>


**_So in HTMl file we add two angular file_**



	
  1. Main angular js file

	
  2. angular-route.min.js file to for routing and in JS we include ngRoute Module to use angular Routing


** index.html**

    
    <!DOCTYPE html>
    <html>
    <head>
    <title> Basic Routing Example</title>
    <!-- link css files-->
    <link rel="stylesheet" type="text/css" href="../css/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="../css/default.css" />
    <!-- link angular js in page -->
    <script src="angular.min.js"></script>
    <!-- link angular route js to do routing in page -->
    
    <!--in angular 1.1.6 it is added already in js but after this
       version we need to add ngRoute module sepratily so
       for version 1.2 we link below file to add ngRoute Module
     -->
    <script src="angular-route.min.js"></script>
    </head>
    <body>
    
    <!-- ng-app="myApp" here we bootstrap angular on this page by myApp module --> 
    <body ng-app="myApp"><!--Now it Tells to AngularJS to be active in this portion of the page. In this case the entire document.(due to we apply on body tag ) -->
         <div class="container">
    	<div class="jumbotron" >
         <img  src="../images/maddyzone-logo-300x72.png" >
         <br/>
    		<h1>Basic Routing Example</h1>
    		<br/>
    		<!-- navigation menu start-->
                <a href="#home" class="btn btn-primary">Home</a>
    	    <a class="btn btn-success" href="#about">About</a>
    	    <a class="btn btn-danger" href="#contact">Contact</a>
    <!-- navigation menu stop-->
    
    	<br/>
    	<br/>
    
    <!-- by ng-view we create a space in this dynamic content come according to route by ng-view angular know that on which area content will set-->
    		<div ng-view="">
    		</div>
    
        </div>
        </div>
    <!-- add our main script file -->
    <script type="text/javascript" src="app.js"></script>
    </body>
    


in above html we see a new directive `ng-view `

**ng-view  **by this directive angular know that ,this is the place where template will inject

now we create three template which will inject in above `ng-view **div** `

**home.html**

    
    <!-- content set for home page -->
    <div style="font-size: 32px"  >
    	<h1>Home </h1>
    	<h2 class="label label-info">{{message}}</h2>
    </div>


**aboutus.html**

    
    <!-- content set for about us page -->
    <div style="font-size: 32px" >
    	<h1>About Us </h1>
    	<h2  class="label label-info">{{message}}</h2>
    </div>


**contact.html**

    
    <!-- content set for contact page -->
    <div style="font-size: 32px"  >
    	<h1>Contact </h1>
    	<h2 class="label label-danger">{{message}}</h2>
    </div>


Now create our Angular Application **app.js **in this we will create `module` ,`controller` and config routing by which template will inject in `ng-view` section . to configure routes and views we will use `$routeProvider` to handle routing.By `$routeProvider` we set our route configuration in this we decide below things

[yes_list]



	
  * Route

	
  * Template that will load according to the Route

	
  * Controller that will apply on template according to Route


[/yes_list]

**we set it like below **

    
     $routeProvider
        // here we set different different route  
        .when('/our route name',
        {
            controller: 'Controller name that will apply on that route',
            templateUrl: 'template URL that will load on that route'
        })
        /** if not match with any route then set its default route
          * like in this below case we set to home route
        **/
        .otherwise({
            redirectTo: '/home'
          });


Now make our full application script

**app.js**

    
    //create a module myApp
    var myApp = angular.module('myApp', ['ngRoute']);
    
    //Now Configure  our  routing
    myApp.config(function ($routeProvider, $locationProvider) {
        console.log("route");
        $routeProvider
        // set route for the home page
        .when('/home',
        {
            controller: 'HomeCtrl',
            templateUrl: 'views/home.html'
        })
    
         // set route for the about page
    
        .when('/about',{
            controller: 'AboutCtrl',
            templateUrl: 'views/aboutus.html'
        })
    
       // set route for the contact page
    
        .when('/contact',{
            controller: 'ContactCtrl',
            templateUrl: 'views/contact.html'
        })
    
        // if not match with any route config then send to home page
    
         .otherwise({
            redirectTo: '/home'
          });
    
    
    });
    
    // create the controller and inject Angular's $scope
    
      // set for Home Controller
      myApp.controller('HomeCtrl', function($scope) {
        // create a message to display in our view
        $scope.message = "(',')---I am on Home page---(',')";
      });
    
    // set for About Controller
      myApp.controller('AboutCtrl', function($scope) {
        $scope.message = "(',')---I am on About page---(',')";
      });
    
    // set for Contact Controller
      myApp.controller('ContactCtrl', function($scope) {
        $scope.message = "(',')---I am on Contact page---(',')";
      });
    


**See below For Live Action**




<blockquote>Note-- Angular Routing will only work if we have set environment.like we need `http://localhost or many type environment. if we run without environment then it will give **_Cross origin requests are only supported for HTTP _**message and not work`</blockquote>


So this is all about Routing and it is our last step to learn Angular and start working with Angular.There are many more things but to start with angular it is enough. So keep enjoying magic of Angular.

_**Update 9-September-2014
**[divider] [/divider]** **_But by this  routing if we have 1000 or more then 1000 routes then it is not good choice to add configuration  for each routes So How will we handle that ?

for this we need to Dynamic Routing. to know more about Dynamic routing see my next article about **[Dynamic routing with AngularJS](http://maddyzone.com/javascript/dynamic-routing-angularjs)**. [divider] [/divider]


The Demo repository is available on Git [https://github.com/riturajratan/learn-complete-angularjs-in-5-steps](https://github.com/riturajratan/learn-complete-angularjs-in-5-steps)




form here download source code for demo or clone it like below




    
    git clone https://github.com/riturajratan/learn-complete-angularjs-in-5-steps.git


Please give your comments and your suggestion Thanks .

[button type="bd_button btn_large" url="https://github.com/riturajratan/learn-complete-angularjs-in-5-steps" target="on" button_color_fon="#3fc2da" button_text_color="#ffffff" ]Download Code[/button] [button type="bd_button btn_large" url="http://embed.plnkr.co/RhmO72alz9jNzq2hMRAe/preview" target="on" button_color_fon="#ff8000" button_text_color="#ffffff" ]Demo[/button]

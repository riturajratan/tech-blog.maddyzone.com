---
author: riturajratan
comments: true
date: 2015-05-13 10:47:00+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=2035
slug: get-data-page-load-angular
title: Get data before page load in angular
wordpress_id: 2035
categories:
- AngularJS
- JavaScript
tags:
- $http
- $scope
- Angular Js
- resolve
- Routing
---

Normally in AngularJS we set routing so every URL is behaving like a route .So when we go from one route to  another `route ` then sometime we need to get data first before its load .Let's take a example where we will discuss that how we get data before page load in angular?.So here  we need to show article list on article-list page(just assume :) ) then normal we send ajax request like that way in angular using `$http.`

[$http](https://docs.angularjs.org/api/ng/service/$http) is same like[$.ajax](http://api.jquery.com/jquery.ajax/) in jQuery

    
    angular.module('Myapp')
    .controller('ArticleCtrl', function ($scope) {
    
     $http({ method: 'GET', url: 'anyurl' }).
    
      success(function (data, status, headers, config) {
       $scope.articles=data.articles;
      }).
    
     error(function (data, status, headers, config) {
      alert("there is something technical problem");
     });
    
    });




##  So in above code what we are doing actually

	
  1. First we create the Angular module `Myapp`.

	
  2. Then make a controller `ArticleCtrl` in this we are using two angular service `$scope` and `$http`.

	
  3. Then by send request we get data and set our $scope variable `$scope.articles` and in respective template its reflect.


But in all scenario  problem is When request is send and its come then $scope will set then in this meantime user will see screen blank then suddenly data come and screen will fill by respective data so its create a flickering problem also for me specially ;) .

In local you will not se any problem but when you host your site then at production it will take some time and it creates some flickering.So first its will show like that

```
--------------------------------------------------
HEADER
--------------------------------------------------


Articles right now empty :( 


--------------------------------------------------
FOOTER
--------------------------------------------------- 
```




**and when your data is  come its look like that**

```
--------------------------------------------------
HEADER
--------------------------------------------------
 
Articles

--------------------------------------------------
Article1
--------------------------------------------------
Article2
--------------------------------------------------
Article3
--------------------------------------------------
..
..
etc



--------------------------------------------------
FOOTER
---------------------------------------------------
```


so here we see page flickering happen.For this kind  of problem we can use `resolve` property in angular JS.So how we will do it.? Lets check it


> `resolve`  is a property which we can attach to a route in both **[ngRoute](https://docs.angularjs.org/api/ngRoute/provider/$routeProvider)** and the  **[UI router](https://github.com/angular-ui/ui-router)**.


Assume you are using Routing then when we set route like  this and attach `resolve`  property like below

    
    angular.module('Myapp', []).
    config(function ($routeProvider) {
    	
      $routeProvider
        .when('/articles', {//lets assume route is /articles
          templateUrl: '/template/articles ',// here we define article template
          controller:'ArticleCtrl',//assign respective controller
          resolve:{
    	 Articles: ['$q','$http', function($q,$http) {
    	   var deferred = $q.defer();
    	   $http({ method: 'GET', url: 'article get url' }).
    	   success(function (data, status, headers, config) {
    	     deferred.resolve({articles:data.articles});
    	  }).
    	  error(function (data, status, headers, config) {
    	    deferred.reject();
    	  });
    	   return deferred.promise;
     	 }];
         }
      });


Now this `Articles` parameter which is made in `resolve` property in routing will pass in our respective controller so here our controller is `ArticleCtrl`.

So we will write like that

    
    angular.module('Myapp')
    .controller('ArticleCtrl', function ($scope,Articles) { // here you can see Articles is pass in the controller which we made in the resolve property in routing configuration see just above code
    $scope.articles=Articles;
    });




### **Now when route is change and come to `/articles` (as we assume this route)**

	
  1. First it get the data in the routing configuration in `resolve `property (you can use any **[ngRoute](https://docs.angularjs.org/api/ngRoute/provider/$routeProvider)** and the  **[UI router](https://github.com/angular-ui/ui-router)**).

	
  2. Then set  `Articles` parameter in the resolve property.

	
  3. Then we will pass this  to `ArticleCtrl` Controller.

	
  4.  And set our respective `$scope.articles ` value.

	
  5. And finally when `$scope.articles` is changes then it will reflect in our template (as angular done  its magic with two way data-binding ;) )


### **Summery**

you can set any type value in `resolve` like a `JSON` format.

    
    resolve:{
    
    "string-parameter":"value1",//string type
    
    "number-parameter":2,//number type
    
    "array-parameter":[1,2,2],//array type
    
    "object-parameter":{'test':'test-value'},//object type
    
    "ajax-parameter':'like above we set parameter with ajax request'//like above we use $http to set data 
    
    }


Then In Controller Pass it .To use all property in our Controller we use it like below .

    
    angular.module('Myapp')
    .controller('ArticleCtrl', function ($scope,string-parameter,number-parameter,array-parameter,object-parameter,ajax-parameter) {
     /** your valuable stuff **/ 
    });


Hope it will useful for you guys .

Please give your comments and suggestions below :)

---
author: riturajratan
comments: true
date: 2015-07-16 15:09:19+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=2109
slug: basic-searching-in-angularjs
title: Basic searching in AngularJS
wordpress_id: 2109
categories:
- AngularJS
- JavaScript
tags:
- Angular Js
- searching
---

[![Basic searching in AngularJS]({{ site.url }}/uploads/2015/07/Basic-search-in-angularjs.jpg)]({{ site.url }}/uploads/2015/07/Basic-search-in-angularjs.jpg)

Today I will describe that How we will do basic searching in AngularJS.For this we need Following File structure.

    
    index.html     // in this we will define our all structure
    script.js      // in this our all angular code


In this we use `Bootstrap` for styling purpose and `angular.js` to load angular in our page.

For a Basic Searching in AngularJS first we make a module in Angular to activate angular in our page like below.

    
    var maddyApp= angular.module("maddyApp",[]);


Then we make a controller to do our all things. In our case we are making an array of article  `articleList` with title , link and category like below. So

`**script.js**`

    
    // Code goes here
    var maddyApp= angular.module("maddyApp",[]);
    
    maddyApp.controller('SearchingCtrl',['$scope',function($scope){
      // here we set some article data with title ,link and category of Maddyzone site :)
      
      $scope.articleList=[
        {
          'title':'conditionally apply classes in angularjs',
          'link':'http://maddyzone.com/javascript/conditionally-apply-classes-in-angularjs',
          'category':'Angular'
        },{
          'title':'Dynamic routing with AngularJS',
          'link':'http://maddyzone.com/javascript/dynamic-routing-angularjs',
          'category':'Angular'
        },{
          'title':'How to use multiple ng-view in a single page',
          'link':'http://maddyzone.com/javascript/use-multiple-ng-view-single-page',
          'category':'Angular'
        },{
          'title':'How to Setup Node.js on Amazon EC2',
          'link':'http://maddyzone.com/resources/how-to-setup-node-js-amazon-ec2',
          'category':'Node'
        },{
          'title':'How to add Google search in our website',
          'link':'http://maddyzone.com/resources/add-google-search-website',
          'category':'Google'
        }
        ];
      
    }]);
    


Now talk about our HTML file `index.html`

`**index.html**`

    
    <!DOCTYPE html>
    <html ng-app="maddyApp">
    
    <head>
      <!--load bootstrap for styling -->
      <link data-require="bootstrap-css@3.1.0" data-semver="3.1.0" rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" />
      <!-- load angular.js -->
      <script data-require="angular.js@1.3.17" data-semver="1.3.17" src="https://code.angularjs.org/1.3.17/angular.js"></script>
      <!-- in the script.js our all angular code -->
      <script src="script.js"></script>
    </head>
    
    <body>
      <div class="container" ng-controller="SearchingCtrl">
        <div class="jumbotron">
          <img src="{{ site.url }}/uploads/2013/10/maddyzone-logo-300x72.png">
          <br/>
          <h1>Basic Searching With AngularJS</h1>
          <br/>
        </div>
        <form>
          <label>Search </label>
          <input type="text" ng-model="search" />
        </form>
    
        <table class="table">
          <thead>
    
            <tr>
              <th colspan=3 align="center">
                Search With <i>"{{search }}"</i>
              </th>
            </tr>
            <tr>
              <th>
                S.N.
              </th>
              <th>
                Title (click on link to view)
              </th>
              <th>Category</th>
            </tr>
    
          </thead>
          <tbody>
    
            <tr ng-repeat="(key,value) in articleList | filter:search">
              <td>
                {{$index + 1}}
              </td>
    
              <td>
                <a ng-href="value.link" target="_blanck">{{ value.title }}</a>
              </td>
    
              <td>
                <label class="label label-info">{{value.category }}</label>
              </td>
            </tr>
            
            <tr ng-show="(articleList | filter:search).length == 0">
              
              <td colspan="3">
                <p>oops ! No Article found with this search</p>
              </td>
            </tr>
          </tbody>
    
        </table>
      </div>
    </body>
    
    </html>


Now i am explaining above `index.html.`


## Set a Search Box



    
    <form>
          <label>Search </label>
          <input type="text" ng-model="search" />
        </form>




First we set a input box and set `ng-model="search" ` then we will use this in below section.




## Show Article List


Show Article List With `$scope.articleList` with `ng-repeat` in a `table `here just ignore `filter:search` in `ng-repeat` we will discuss in next .Now you will see all article come in list in a table.




## Filter Data in Show Article List


Now when we apply `filter:search` in `ng-repeat` then it first take the input from `ng-model="search" ` then search in All Article ListSection and show filter result .So Simple due to angular ;) .SO code you will see is like below

    
    <tr ng-repeat="(key,value) in articleList | filter:search">
              <td>
                {{$index + 1}}
              </td>
    
              <td>
                <a ng-href="value.link" target="_blanck">{{ value.title }}</a>
              </td>
    
              <td>
                <label class="label label-info">{{value.category }}</label>
              </td>
            </tr>




## 




## When No Result Found


When we search thing which is not exist then we need to show a message for this we will apply below code by this we know that result is not found in articleList as per keyword in search input box.

This below code `(articleList | filter:search).length` give us the filter result length.

    
    (articleList | filter:search).length


So our full code for not result found is below

    
     <tr ng-show="(articleList | filter:search).length == 0">
              
              <td colspan="3">
                <p>oops ! No Article found with this search</p>
              </td>
            </tr>




## See Working Demo Below




Now  how to do search on some specific attribute like in this case  if want to search base on only `category` then how we do .So we will see that how we do it.





## Search with category name


If we want to search with `category`  name then we need to `ng-repeat :filter by single field `


Then we need to apply `ng-repeat` with below logic.




    
    ng-repeat="(key,value) in anydata | filter:{attribute-name:search-parameter}"


So here



	
  1. `anydata` in our case is  `articleList`

	
  2. `attribute-name` for which we want to search that is `category `in `articleData`

	
  3. and `search-parameter` is same is `search` from input searchbox


So our final code will be for search by `category` is

    
            <tr ng-repeat="(key,value) in articleList | filter:{category:search}">
              <td>
                {{$index + 1}}
              </td>
    
              <td>
                <a ng-href="value.link" target="_blanck">{{ value.title }}</a>
              </td>
    
              <td>
                <label class="label label-info">{{value.category }}</label>
              </td>
            </tr>





## See Working Demo for filter in specific attribute







Please give your comments and suggestion below.

Thanks .

---
author: vishnu
comments: true
date: 2014-01-22 05:41:23+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=203
slug: understanding-angular-js
title: Understanding Angular JS
wordpress_id: 203
categories:
- JavaScript
tags:
- Angular Js
- Controller
- Module
- ng-app
- ng-click
- ng-controller ng-repeat
- ng-show
- View
---

<blockquote>Angular JS is a java script framework, based on MVC architecture where M represents for Model, V represents for View and C represents for Controller , so Angular JS altogether form a Model View and Controller Architecture.</blockquote>


Model used to present all functionality or arithmatic operation and logics , view used where to represent formulated data or simply html , controller holds how to perform switching for model and view to show all data to end user.

Here we are going to showing you some basic examples of angular js



	
  *  How to show a text box value after entering on page

	
  *  How to show currency and date

	
  *  How to perform arithmatic operations on json returned data

	
  *  create a table based formulated in json array in model , view and controller and search from table based on text entered in text box.



    
    <!doctype html>
    <html ng-app="" lang="en">
    <!--  
    ng-app used to specify the module name used to define what module have to used to show data in view using the controller. if no any module define the controller than np-app will be blank. 
    -->
    <head>
    <meta charset="UTF-8">
    <title>Angular Example</title>
    <!-- 
       To add angular js into our html file , please find the below link 
    -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.6/angular.min.js">
    </script>
    </head>
    <body>
    <div>
    <h4> Angular Basic Example </h4>
    <label>Name:</label>
    <input type="text" ng-model="yourName" placeholder="Enter Text Here">
    <!-- 
    ng-model is used to specify the model name to which used to use module as an object to present data in view  
    -->
    {{yourName | uppercase}} 
    <!-- 
    Expression Syntax to represent or show data of text box as we write on viewby using angular js.
    
    Module as an object to show value in text box to present in html with attribute uppercase to show all text box data in uppercase. 
    -->
    </body>
    </html>


Output for the above will be as :


[![angular_basic]({{ site.url }}/uploads/2014/01/angular_basic1.png)]({{ site.url }}/uploads/2014/01/angular_basic1.png)






    
    <!-- 
    Date attribute to show date by specific date format and time with median(after or post)
    -->
    
    {{1357483623006 | date:'dd-MMMM-yy HH:mm:ss a'}}




    
    <!-- Expression Syntax to represent or show data on view by using angular js -->
    
    {{ yourName | currency }}




    
    <!doctype html>
    
    <!--
    
    ng-app used to specify the module name used to define what module have to used to show data in view using the controller. if no any module define the controller than np-app will be blank. 
    
    -->
    
    <html ng-app="listpp" lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Angular Example</title>
    
    <!--
    
    To add angular js into our html file , please find the below link
    
    -->
    
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.6/angular.min.js">
    </script>
    
    <!--
    
    including the controller file which controlls the data to be presented in html
    
    -->
    
    <script src="controller.js"></script>
    </head>
    <body ng-controller="PhoneListCtrl">
    
    <!--
    
    ng-controller represents the controller name "PhoneListCtrl" which hold the information about the phone specification in json form, like phone name, phone description, phone price,phone quantity, total price as per quantity after calulation on view end using angular js
    
    -->
    
    <div>
    <h4> Angular JS to search from data table </h4>
    <label>Name:</label>
    <!-- 
    ng-model is used to specify the model name to which used to use module as an object to present data in view 
    -->
    
    <input type="text" ng-model="yourName" placeholder="Enter Text Here">
    <table border=1>
    <thead>
    <th>Phone Name</th>
    <th>Phone Description</th>
    <th>Phone Price</th>
    <th>Phone Quantity</th>
    <th>Total Price with Quantity</th>
    </thead>
    
    <tr ng-repeat="phone in phones | orderBy :'price*quantity':reverse=false | limitTo:3 | filter : yourName">
    
    <!-- 
    ng-repeat used to call array values defined in controller to get one by one and phone is used as key value and phones represent the array name in controller file
    
    -->
    
    <!-- 
    orderBy Attribute used to show data in ascending order by default, to show data in reverse order, desc , we have to mention if reverse to be true or false, by mentioning the reverse true, data will presented in reverse order. 
    -->
    
    <!-- 
    Limit to attribute used to show only specific records data in html as mentioned by number 
    -->
    
    <!-- 
    filter attribute used to present records, filter by value enter in text box 
    -->
    
    <td>{{ phone.name | uppercase }}</td>
    <td>{{ phone.snippet }}</td>
    <td>{{ phone.price }}</td>
    <td>{{ phone.quantity }}</td>
    
    <!-- 
    formulation of price*quantity from list of phone details for each phone item , currency attribute show total price in $(USD) by default 
    -->
    
    <td>{{ phone.price*phone.quantity | currency }}</td>
    
    <!-- 
    Remove function used to remove an item from an array defined in controller,with their index value in list repeat by ng-repeat, if order by reverse set to be true, than function remove value in order from bottom to top as per index, else remove value from top to bottom Remove function also defined in controller 
    -->
    
    <td><button ng-click='remove($index)'>Remove</button></td>
    
    <!-- 
    table showing the array values defined in controller by key attribute 
    -->
    
    </tr>
    </table>
    </div>
    
    </body>
    </html>


Controller.js file have followinig

    
    var listApp = angular.module('listpp', []);
    
    /* 
    variable listApp is a variable which used to control the array values to show the data to show in view using the module name 'listApp' with arguments as an array 
    */
    
    /* 
    Initialize the controller by name 'PhoneListCtrl' holds the information of phone in form of array with keys name, snipper, price , quantity
    
    */
    
    /* 
    $scope argument passed in function is a key arguments should be passed with exactly the same name 
    */
    
    listApp.controller('PhoneListCtrl', function ($scope,$http) {
    $scope.phones = [
    {
    'name': 'Mexus S',
    'snippet': 'Fast just got faster with Nexus S.',
    'price':30,
    'quantity':50
    },
    {
    'name': 'Samsung Tablet™ with Wi-Fi',
    'snippet': 'The Next, Next Generation tablet.',
    'price':30,
    'quantity':60
    },
    {
    'name': 'Soney Xperia™',
    'snippet': 'The Next, Next Generation Phone.',
    'price':30,
    'quantity':70
    }
    ];
    
    /** 
    Scope argument specify the function by name remove and passed index of list item as a parameter , which splice the list by 1 , as click on remove button 
    **/
    
    $scope.remove = function (index) {
    $scope.phones.splice(index,1);
    }
    
    });


Before Search Output is as :


[![angular_table]({{ site.url }}/uploads/2014/01/angular_table.jpg)]({{ site.url }}/uploads/2014/01/angular_table.jpg)




After Search Output is as :


[![angular_table_search]({{ site.url }}/uploads/2014/01/angular_table_search.png)]({{ site.url }}/uploads/2014/01/angular_table_search.png)

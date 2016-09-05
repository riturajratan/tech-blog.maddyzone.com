---
author: vishnu
comments: true
date: 2014-01-27 11:38:19+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=231
slug: searching-paging-using-knockout-js
title: Searching With Paging using Knockout JS
wordpress_id: 231
categories:
- JavaScript
tags:
- Data-Bind
- dependentObservable
- Knockout JS
- ko
- ko.applyBindings
- ko.utils.arrayFilter
- observable
- observableArray
- Paging
- search
- template
- text
- viewModel
---

Java Script Library Provides a better way to manage data driven interfaces which lets you to create , direct connection between dynamics data and its presentation by linking an HTML element with a particular data object, any changes to corresponding object automatically reflected in the DOM(Data Object Model).

Knockout JS Uses a Model – View-ViewModel (MVVM) pattern , where model representing the stored data, view representing the visual representation of data and view model play an intermediary role between the model and the view.

View Model (A Pure Java Script Object) Used to show the model data, after manipulation using javascript.

Knockout JS create direct connection between View Model & View which it can detect changes to Model data after Manipulation & Automatically update the relevant aspects of User Interface.

 **Observables**

Observable are just like java script variables in Knockout JS, but before differently by they let Knockout JS observe about their Changes and automatically update the relevant information in the view and track View Model Properties.

** Bindings**

Binding Play an important role in Knockout JS and key to implement Knockout JS, used to connect a HTML Component in a view with observable in a way that Knockout JS can display change to the View Model automatically.

    
    <!doctype html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Knockout Basic Example</title>
    
    <!-- Add Knockout.js and Jquery to run the knockout base record searching with pagination -->
    
    <script type='text/javascript' src='js/knockout-2.2.0.js'></script> 
    <script type="text/javascript" src='js/jquery.js'></script>
    
    <!-- Add Css -->
    
    <style type="text/css">
    tr:nth-child(2n+1) {
    background-color: #efefef;
    }
    .nav_page {
    background: #82A53A;
    padding: 5px;
    margin: 5px;
    width: 100px;
    float: left;
    text-align: center;
    color: #fff;
    border: none;
    }
    span{
    width: 130px;
    float:left;
    word-wrap:break-word;
    }
    #head_row {
    width:80px !important;
    }
    
    #search {
    float: left;
    }
    #col_pres {
    float: left;
    
    }
    #col_pres li {
    float: left;
    
    } 
    
    .col_controls {
    float: left;
    width: 500px;
    }
    #search_head_row {
    width:680px !important;
    background: #333;
    color: #fff;
    padding: 5px 15px;
    }
    span.search_user {
    background: none repeat scroll 0 0 #BEBFAF;
    color: #222222; 
    padding: 5px;
    width: 250px;
    }
    span.search_pass {
    background: none repeat scroll 0 0 #DFE0D9;
    color: #222222;
    margin: 0 5px;
    padding: 5px;
    }
    span.search_ip {
    background: none repeat scroll 0 0 #DBE5F1;
    margin: 0 5px;
    padding: 5px;
    }
    span.search_field {
    font-size: 15px;
    font-weight: bold;
    padding: 5px 15px;
    width: 150px;
    }
    .search_row {
    background: none !important;
    }
    .theading {
    padding: 5px !important;
    }
    
    </style>
    
    </head>
    <body>
    
    <h4>Knockout Basic Example</h4>
    <input placeholder="Enter Text Here.." type="search" name="q" data-bind="value:query" id="search" autocomplete="off">
    <br/>
    <br/>
    <table class="table" cellpadding=2 cellspacing=2 style="clear:both;">
    <tr style="background:#191916;color:#fff;" id="head_main_row">
    <th>Phone Name</th>
    <th>Phone Description</th>
    <th>Phone Price</th>
    <th>Phone Quantity</th>
    <th>Total Price with Quantity </th>
    </tr>
    
    <!-- Bind Data with fieldTemplate to represent the array data fields in table format , based 
    on Paging -->
    
    <tbody data-bind='template: { name: "fieldTemplate", foreach: pagedRows }'></tbody>
    </table>
    
    <a href="#" class="nav_page" data-bind="click: previousPage">Previous</a>
    <a href="#" class="nav_page" data-bind="click: nextPage">Next</a>
    
    <!-- Bind Data with searchTemplate to represent the array data fields in table format , based 
    on Paging and search query by name-->
    
    <table>
    <tbody data-bind='template: { name: "searchTemplate", foreach: searchedRows }'></tbody>
    </table>
    
    <!-- Script shows the Bind Data with searchTemplate to represent the array data fields in table format , based on search query by name-->
    
    <script type="text/html" id="searchTemplate">
    <tr class="search_row">
    <td> <span id="search_head_row" data-bind="text: name"></span></td>
    </tr>
    <tr class="search_row">
    <td>
    <span class="search_field">Phone Description</span>
    <span class="search_user" data-bind="text: snippet"></span> 
    </td>
    </tr>
    <tr class="search_row">
    <td>
    <span class="search_field">Price</span>
    <span class="search_user" data-bind="text: price"></span> 
    </td>
    </tr>
    <tr class="search_row">
    <td>
    <span class="search_field">Quantity</span>
    <span class="search_user" data-bind="text: quantity"></span> 
    </td>
    </tr>
    <tr class="search_row">
    <td>
    <span class="search_field">Total Price with Quantity</span>
    <span class="search_user" data-bind="text: price*quantity"></span> 
    </td>
    </tr>
    </script>
    
    <!-- Script shows the Bind Data with fieldTemplate on load to represent the array data fields in table format with paging-->
    
    <script type="text/html" id="fieldTemplate">
    <tr> 
    <td><span class="user" data-bind="text: name"></span></td>
    <td><span class="pass" data-bind="text: snippet"></span></td>
    <td><span class="pass" data-bind="text: price"></span></td>
    <td><span class="pass" data-bind="text: quantity"></span></td>
    <td><span class="pass" data-bind="text: quantity * price"></span></td>
    
    </tr>
    </script>
    
    <script type="text/javascript">
    
    /** Create an array of data holds the information about phone with keys name, snippet representing
    short description about phone, price and quantity in store of 3 Records **/
    
    $(function() {
    var data = [
    {'name': 'Mexus S',
    'snippet': 'Fast just got faster with Nexus S.',
    'price':30,
    'quantity':50
    },
    {'name': 'Samsung Tablet™ with Wi-Fi',
    'snippet': 'The Next, Next Generation tablet.',
    'price':30,
    'quantity':60
    },
    {'name': 'Soney Xperia™',
    'snippet': 'The Next, Next Generation Phone.',
    'price':30,
    'quantity':70
    } 
    ];
    
    /** View Model is implemented here which bind with fields using knockout **/
    
    var viewModel = function() {
    var self = this;
    var result = "";
    this.fields = ko.observableArray(data);
    this.query = ko.observable(""); 
    this.pageSize = ko.observable(2);
    this.pageIndex = ko.observable(0);
    
    /** Previous page function give the index of previous page from current page **/
    
    this.previousPage = function() {
    this.pageIndex(this.pageIndex() - 1);
    }
    
    /** Next page function give the index of next page from current page **/
    
    this.nextPage = function() {
    this.pageIndex(this.pageIndex() + 1);
    }
    
    /** Maximu page index function returns the maximum page size mention by page size **/
    
    this.maxPageIndex = ko.dependentObservable(function() {
    return Math.ceil(this.fields().length / this.pageSize()) - 1;
    }, this);
    
    /** Paged Rows gives the result of query if search text box is empty here 2 Records are showing on loading using page index.**/
    
    this.pagedRows = ko.dependentObservable(function() { 
    var search = this.query().toLowerCase();
    
    if(search==="") {
    $("#head_main_row").show();
    $("#type_main_row").hide();
    $(".nav_page").show(); 
    var size = this.pageSize();
    var start = this.pageIndex() * size;
    return this.fields.slice(start, start + size);
    } 
    }, this);
    
    /** Searched Rows gives the result of query if search text box is not empty here Records as per entry in seaerch box by phone name.**/
    
    this.searchedRows = ko.dependentObservable(function() {
    var search = this.query().toLowerCase(); 
    if(search!=="") { 
    $("#head_main_row").hide();
    $("#type_main_row").hide();
    $(".nav_page").hide(); 
    return ko.utils.arrayFilter(data, function(result) {
    var name = result.name; 
    return (name.toLowerCase().indexOf(search) 
    ) >= 0 ;
    });
    }
    
    },this);
    
    };
    ko.applyBindings(new viewModel());
    
    /** Calling Function to bind View Model to present dynamics array data using knockout js object **/
    });
    </script>
    
    </body>
    </html>


Without Search Output is as :

[![knocut_witout_search](http://maddyzone.com/wp-content/uploads/2014/01/knocut_witout_search.png)](http://maddyzone.com/wp-content/uploads/2014/01/knocut_witout_search.png)

After Search Output is as :

[![after_search](http://maddyzone.com/wp-content/uploads/2014/01/after_search.png)](http://maddyzone.com/wp-content/uploads/2014/01/after_search.png)



With Paging Output is as:

[![with_paging](http://maddyzone.com/wp-content/uploads/2014/01/with_paging.png)](http://maddyzone.com/wp-content/uploads/2014/01/with_paging.png)

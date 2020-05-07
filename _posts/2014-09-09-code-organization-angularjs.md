---
author: riturajratan
comments: true
date: 2014-09-09 10:05:16+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=1271
slug: code-organization-angularjs
title: Code organization in angularjs
wordpress_id: 1271
categories:
- AngularJS
- JavaScript
tags:
- Angular Js
---

[![Code organization in angularjs]({{ site.url }}/uploads/2014/09/Angular-JS-Folder-structure.png)]({{ site.url }}/uploads/2014/09/Angular-JS-Folder-structure.png)

When we work with any programming language the main thing is our **code structure and code organization**. Because when new person work with us then at that time if our code structure is good then he will understand all code very easily else it will take time same as writing new code.


<blockquote> Unstructure and unorganize code understanding take time > creating new code for that </blockquote>


In **angular** there is no standard to organize the code its depends on us that how we organize the code but there are some suggestion by which we can organize our code according to the project level.


## Code structure in angular js for all type project whether it is small ,medium or large level


Here we are using following terms you can assign name as per your choice.



	
  1. **index.html** in this file angular bootstrap.

	
  2. **js(folder)** in this our all js files are handle.

	
  3. **views(folder)** in this all template file which are using as a template**.**

	
  4. **styles(folder)** in this all css files are handle.

	
  5. **app.js** main file which we are using for angular setup in our project.

	
  6. **Lib(folder)** library(js files) which we are using in your project.


**1) When project is small.**

In small project i mean where only 1 directive or may be not using and 1 or 2 controller max and 1 module which we use in our main **index.html** file then it will be good that we make a single file **app.js **in which all angular code is written. Then our structure look like that


```
**main-directory**
├── index.html
├── **js**
│ └── app.js
│ ├── **lib**
│ │ ├── angular.min.js
│ │ └── jquery.min.js
│ │ └── ... (other library which we are using in your project)
├── **styles**
│ └── ...
└── **views**
├── template.html
```


**2) When project is medium(between small and large)**

In medium project where only some directive ,controller , service and filter are using and 1 module which we use in our main **index.html** file then it will be good that we make a seprate files for each(filter , controller, directive,service). Then our structure look like that


```
**main-directory**
├── index.html
├── **js**
│ └── filter.js
│ └── controller.js
│ └── directive.js
│ └── service.js
│ └── app.js
│ ├── **lib**
│ │ ├── angular.min.js
│ │ └── jquery.min.js
│ │ └── ... (other library which we are using in your project)
├── **styles**
│ └── ...
└── **views**
├── template1.html
├── template2.html
├── .....
```


**3) When project is large(huge app)**

when project is large and many modules ,filters, directive,service, controller are using in our project. Then it will be good that we organize our code like below.In this all controllers, filters, directives, services ,models are in their respective folders.Then our structure look like that


```
**main-directory**
├── index.html
├── **js**
│ ├── **controllers**
│ │ └── controller1.js
│ │ └── controller2.js
│ │ └── controller3.js
│ │ └── ...
│ ├── **directives**
│ │ └── directive1.js
│ │ └── directive2.js
│ │ └── directive3.js
│ │ └── ...
│ ├── **filters**
│ │ └── filter1.js
│ │ └── filter2.js
│ │ └── filter3.js
│ │ └── ...
│ ├── **services**
│ │ └── service1.js
│ │ └── service2.js
│ │ └── service3.js
│ │ └── ...
│ ├── **models**
│ │ └── model1.js
│ │ └── model2.js
│ │ └── model3.js
│ │ └── ...
│ ├── **lib**
│ │ ├── angular.min.js
│ │ └── jquery.min.js
│ │ └── ... (other library which we are using in your project)
│ └── app.js
├── styles
│ └── ...
└── **views**
├── template1.html
├── template2.html
├── template3.html
├── template4.html
├── .....
```


So these all above are code organize structure in angular it depends on your project requirement that which one you use. Mostly developers follow last code structure because in future if project may become a huge project then there is no chance to worry about code management.

Please give your comments and suggestion Thanks :)

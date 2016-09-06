---
author: riturajratan
comments: true
date: 2014-12-20 19:33:46+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=1872
slug: resolve-django-angular-conflicts
title: How to resolve Django | Angular conflicts
wordpress_id: 1872
categories:
- AngularJS
- JavaScript
tags:
- Angular Js
- angular service
- Django
- Python
- template
---

As we Know when we work with [Angular](http://angularjs.org/) then we use `{{ }}` in template as Expression to bind JavaScript properties in HTML and  when we work with [Django](https://www.djangoproject.com/) then we also use `{{ }}` in template to render HTML in the page.Django Template system is Server-side and Angular is Client-side so when page load then Django think that it is Django template expression  and Angular Expression`{{ }}`  parse as a Django  Template Expression .And nothing happen with Angular expression So here I am sharing  that  how we handle this type behavior  and How we resolve Django | Angular conflicts.


### **Problem: How to resolve Django | Angular conflicts ?**




### **Solution:  There are two ways to solve this type ****behavior**





	
  1. 


#### By AngularJS




	
  2. 


#### By Django








<blockquote>As we use `{{ }}` expression in Django and Angular template system then conflict come but by `$interpolateProvider` in angular and  `verbatim` in django we can  remove template tag conflicts.</blockquote>




## IN AngularJS **resolve Django | Angular conflicts**


For Angular we should use the `$interpolateProvider apis` to configure the interpolation symbols:

As per Angular Documentation.

There are two method to set Start Symbol and End Symbol.

**1 ) startSymbol([value]) :  **Symbol to denote start of expression in the interpolated string. Defaults to `{{`

**2) endSymbol([value]): **Symbol to denote the end of expression in the interpolated string. Defaults to `}}`

**Lets Take a example where we replace `{{ }} ` with `{[{ }]}`  you can also replace with `// //`**

So We can change the start and end interpolation tags using `$interpolateProvider` service. And we should set this thing at our module initialization time.let's create a app.js file in which we do these setting.

**app.js(set our configuration with `$interpolateProvider`  )**

   
{% highlight html %} 
    var myApp=angular.module('myApp', []);
    myApp.config(function($interpolateProvider){
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
    });

{% endhighlight %}    


**index.html(our html page in which we are using angular with {[{  }]} tag)**

    
    <!DOCTYPE html>
    <html>
    <head>
      <title>Angular Template rendering demo with django</title>
    </head>
    <body ng-app="myApp">
      <div>
        {[{ 2+5 }]} <!-- here we use {[{ }]} at the place of {{ }} -->
      </div>
    </body>
    </html>




### pros





	
  1. We find a way to resolve Django | AngularJS conflicts

	
  2. Mixing server-side and client-side templates is rarely a good idea but should be used with caution.




### cons





	
  1. If we use third-party directives (components) that use `{{ }}` in their templates then our configuration will break.

	
  2. Maintainability (hard to read)





## IN Django **resolve Django | Angular conflicts**


In Django by [verbatim](https://docs.djangoproject.com/en/dev/ref/templates/builtins/?from=olddocs#verbatim) Django template tag  we can resolve conflict. we use it following way

    {% highlight html %} 
      {% verbatim %}
        {{ my angular code }}Still alive.{{ hurray }}
     {% endverbatim %}
    {% endhighlight %}  




### pros





	
  1. We find a way to resolve Django | AngularJS conflicts.

	
  2. No need to change angular Expression.




### cons





	
  1. ahh ... i think no cons...  ;)




Please give your comments and suggestion in comment section.

Thanks ..

---
author: riturajratan
comments: true
date: 2018-02-06 12:49:52+00:00
layout: post
link: http://riturajratan.com/JavaScript/AngularJS/
slug: how-reload-current-route-angular2
title: How to reload current route in angular 2
categories:
- AngularJS
- JavaScript
tags:
- refresh route
- route reload	
- router
- reload current route
- refresh current route
- Angular2
- Angular
---

Most of the time we need to reload current URL with angular 2 but as there is no option so there are some tips to do that. So let’s start we will check one by one.

## Reload current route with some dummy parameter

{% highlight js %}
refresh(){
  this.router.navigate(["/same/route/path?refresh=1"]);
}
{% endhighlight %}
    
So now you can update `refresh` query parameter value and subscribe it in following way.

{% highlight js %}
this.route.queryParams.subscribe((data) => {
      if (data && data['refresh']) {
          console.log('here can start your work and call init method');
      }
    });   
{% endhighlight %}  

So if your all work start from `init` method then that would be easy to call again  `init` method. So here actually route is not reload you just got an event by this you trigger `init` method again.

<blockquote>
Pros: You call init method and things are done.

Cons: if your route using `Reslover` then how will `Resolver` data update? For this we are using next below trick :).
</blockquote>
    
## Reload current route with some dummy route

I prefer this way because by this all route will reload and thinks done automatically and in all project, you can use this thing and no worry about reload route. So basically, we need to create a blank component and set a route for this like below

{% highlight js %}
    {
        path: 'blank',
        component:BlankComponent
    },
{% endhighlight %}

So now like I want to refresh my route then I will subscribe this route and when it will come this subscribe callback I will navigate to current URL and it will run. So first it goes to blank route and then come to this route so all things reset according to current route :)

{% highlight js %}
   this.router.navigateByUrl('blank').then(() => {
          this.router.navigateByUrl('same/route/path`);
          console.log('naviate to any route which you want');
    });
{% endhighlight %}

for any query, please comment or feedback me for this blog, how do you like this.



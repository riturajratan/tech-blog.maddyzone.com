---
author: riturajratan
comments: true
date: 2017-06-17 19:49:52+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=2151
slug: absolute-relative-url-in-angular2
title: How to set absolute and relative url in angular2
categories:
- AngularJS
- JavaScript
tags:
- relative url
- absolute url
- Angular2
---

Most of the time we need to set url somtimes its `Absolute` or some times its `Relative`.
so lets start we will check one by one.

## How to set Absolute URL

<blockquote>To set Absolute url we need to set `/` in starting of url by this url behave as Absolute.</blockquote>

{% highlight html %}
<a href="/user"></a>
{% endhighlight %}
    
Now if we are on `http://www.maddyzone.com/home`  then it will redirect to  `http://www.maddyzone.com/user`.    
    
## How to set Relative URL

<blockquote>To set Relative url we no need to set `/` in starting of url by this url behave as Relative.</blockquote>

{% highlight html %}
<a href="user"></a>
{% endhighlight %}
    
 Now if we are on `http://www.maddyzone.com/home`  then it will redirect to  `http://www.maddyzone.com/home/user`.


for any query , please comment or feedback me for this blog , how do you like this.

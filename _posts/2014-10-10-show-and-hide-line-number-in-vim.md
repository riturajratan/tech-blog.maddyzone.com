---
title: Show and hide line number in vim
author: Rituraj Ratan
layout: post
permalink: /show-and-hide-line-number-in-vim
disqus: http://www.vim4u.com/2014-10-10-show-and-hide-line-number-in-vim
path: 2014-10-10-show-and-hide-line-number-in-vim.md

---

In vim by default line number are not shown so to show the line number in vim we need to set it manually also we can unset.Here i am describe how to show and hide line number in vim. 

>This command will not run in insert and visual mode.It will work in command mode. for command mode press ESC key then write below        

### Show line number in vim
{% highlight html %}

:set number

{% endhighlight %}

Or 

{% highlight html %}

:set nu

{% endhighlight %}


### Hide line number in vim

{% highlight html %}

:set nonumber

{% endhighlight %}

Or 

{% highlight html %}

:set nonu

{% endhighlight %}

Or 

{% highlight html %}

:set nu!

{% endhighlight %}


-----

If you want by default vim load this above setting then write in your .vimrc file

{% highlight html %}

set number

{% endhighlight %}

Or

{% highlight html %}

set nu

{% endhighlight %}

like as we mention on above.

Thanks!

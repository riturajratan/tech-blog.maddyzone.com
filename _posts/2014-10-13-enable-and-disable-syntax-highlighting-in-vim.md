---
title: Enable and disable syntax highlighting in vim
author: Rituraj Ratan
layout: post
permalink: /enable-and-disable-syntax-highlighting-in-vim
disqus: http://www.vim4u.com/enable-and-disable-syntax-highlighting-in-vim.md
path: 2014-10-13-enable-and-disable-syntax-highlighting-in-vim.md


---

In vim by default syntax highlight are not enable so to enable the syntax highlight in vim we need to set it manually also we can disable.Here i am describe how to enable and disable syntax highlighting in vim. 

>This command will not run in insert and visual mode.It will work in command mode. for command mode press ESC key then write below        

### Enable syntax highlighting in vim

{% highlight html %}

:syntax on

{% endhighlight %}

### Disable syntax highlighting in vim

{% highlight html %}

:syntax off

{% endhighlight %}


-----

If you want by default vim load this above setting then write in your .vimrc file

{% highlight html %}

syntax on

{% endhighlight %}

like as we mention on above.

Thanks!

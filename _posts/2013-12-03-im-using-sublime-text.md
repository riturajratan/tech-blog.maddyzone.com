---
author: ravin
comments: true
date: 2013-12-03 09:26:31+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=65
slug: im-using-sublime-text
title: How I'm using sublime text
wordpress_id: 65
categories:
- Resources
tags:
- DocBlocr
- sublime
- Sublime Bracket Highlighter
- Sublime linter
---

In the field of programming, developer's most of time spent in using keyboard and moving fingers around keyboard and creating some cool stuffs. I have used [Dreamweaver](http://www.adobe.com/in/products/dreamweaver.html?kw=p&sdid=JTWPT&skwcid=AL!3085!3!30343892228!b!!g!!dreamweaver%20adobe&ef_id=Uoc5OgAAAe8acEPS:20131203164501:s), [Eclipse ](http://www.eclipse.org/)and [Aptana](http://www.aptana.com/) as tool to write code, it was a good experience to work with these IDEs. From last 4 months I am using [sublime text](http://www.sublimetext.com/2) editor. It is really faster than the IDEs, I've before used. In this post I am sharing my personal experience with sublime text 2. I hope it will be helpful for you to get with this great editor.

You can Download [Sublime text 2 from here](http://www.sublimetext.com/2). It's heavily customizable and full fills your requirements, no matter which language you are using. Sublime automatically create environment when file saved with an extension so if a file with .PHP extension is opened, sublime automatically start suggesting for php as soon as you start typing.


<blockquote>Sublime can be extended for any programming language you want through packages, there are lot of them available to make your life easier.</blockquote>


First package that you need to install is Package Control, to make it easy for you to manage / install other packages. You can install package control through Sublimes Text Console, use [highlight]ctrl+~[/highlight][highlight][/highlight] to open console, then paste following code (According to your sublime text version) into console.

[tabgroup] 

[tab title="For sublime text 2"]

    
    import urllib2,os; pf='Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler( ))); open( os.path.join( ipp, pf), 'wb' ).write( urllib2.urlopen( 'http://sublime.wbond.net/' +pf.replace( ' ','%20' )).read()); print( 'Please restart Sublime Text to finish installation')


[/tab]
[tab title="For sublime text 3"]

    
    import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())


[/tab]
[/tabgroup]

Now you have package controller install in sublime and you can access it by the Command Pallete. Press [highlight]ctrl+shift+p[/highlight]  to open pallete, this will provide many commands.

Install Package - This will show list of all available packages to install.
Remove Package - To remove installed package.
List Package - This will list all installed packages. and other to manage installed packages inside sublime.

Now to install other package go to command pellete using [highlight]ctrl+shift+p[/highlight] and then type [highlight]install package[/highlight], and you have list of all package to enjoy.
Packages I'm using

1.) [BracketHighlighter](https://github.com/facelessuser/BracketHighlighter) - This will highlight matching [ , ( , " , ' < symbols.

2.) [DocBlockr ](https://github.com/Warin/Sublime/tree/master/DocBlockr)- I'm using this for making comments before function / variable definition, just type [highlight] /** + tab [/highlight] (just above function function) this will generate comment according to your function's parameters automatically.



    
    /**
    * [foo description]
    * @param {[type]} first_par [description]
    * @param {[type]} second_par [description]
    * @return {[type]} [description]
    */
    function foo(first_par,second_par){
    
    //function body
    }




3.)[Tag ](https://github.com/SublimeText/Tag)- This is collection of packages about HTML/XHTML.

4.) [Local History](https://github.com/vishr/local-history) - While working with Aptana, I was fan to History plug-in which tracks all changes for a file. In sublime local history is for you to view history of file, so now you can restore your file from past.

5.) [Sidebar Enhancement](https://github.com/titoBouzout/SideBarEnhancements) - This will give you more option for your sidebar (which holds files in your project ) like copy name, copy path, rename, open in browser, show already open files.
For example - if you want to rename a file just type  [highlight]ctrl+shift+p[/highlight]  then rename+enter, this will prompt new name for file. same you can try to copy file name, copy file path, Delete .

6.) [Sublime linter](https://github.com/SublimeLinter/SublimeLinter) - All IDE's highlights if there is any potential error in code , Sublime linter will provide same for different languages include [PHP](http://php.net/), [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [Python](http://www.python.org/), [C](http://en.wikipedia.org/wiki/C_(programming_language))/[C++](http://en.wikipedia.org/wiki/C++), [Ruby ](https://www.ruby-lang.org/en/)and many more.

7.) [Xdebug ](http://xdebug.org/)- For debugging in [PHP](http://php.net/).

8.) [CodeIgniter ](http://ellislab.com/codeigniter)2 ModelController - It will create layout for model, controller just by typing few key stroke ci2m - model base, ci2c - controller, ci2me - CRUD model.



**In my next post I'll show sublime tips and settings that can make editing fast and interesting.**

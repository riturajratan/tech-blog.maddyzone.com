---
author: Rakesh
comments: true
date: 2013-12-25 04:42:36+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=139
slug: translating-wordpress-plugin-languages
title: Translating wordpress plugin in your languages
wordpress_id: 139
categories:
- Php
- Wordpress
tags:
- change plugin language
- how to change wordpress plugin language
- how to use poedit
- poedit
- wordpress plugin
- wordpress plugin in many language
- wordpress plugin in your language
- working of poedit
---

1 . Download poedit from  [here ](http://www.poedit.net/)

2. Install poedit on your local computer. after sucessful insallation open your poeditor.

[![poedit1]({{ site.url }}/uploads/2013/12/poedit1-300x225.png)]({{ site.url }}/uploads/2013/12/poedit1.png)
3. Go to file menu click on "New Catalog". then a other popup window will be opened.

[![poedit2]({{ site.url }}/uploads/2013/12/poedit2-300x225.png)]({{ site.url }}/uploads/2013/12/poedit2.png)
4. Insert project and charset utf-8 and click on path tab and click new item and fill "../" for plugin folder
i.e( if your folder name rakesh and all the php files is in then give path "../").

[![poedit3]({{ site.url }}/uploads/2013/12/poedit3-300x224.jpg)]({{ site.url }}/uploads/2013/12/poedit3.jpg)
5. and after that click on keywords wordpress translate only two function( _e , __ )keywords for every language. if your code is in those two functions then it will be taransable code. and then click on "ok"
Note:- Click ok when you finished all three step.

[![poedit4]({{ site.url }}/uploads/2013/12/poedit4-300x225.png)]({{ site.url }}/uploads/2013/12/poedit4.png)
6. After that save your default.po in the folder then it's search code for translate and then transable code will be appear in the poedit.

7. For translate code click on line by line in original string block and write your code in last section. then after write all code. click on file menu save as file like(yourpluginname-fr_FR)for franch.

For transalate plugin your code must be like this:-
__("your msg", 'your unique name')
_e("your msg", 'your unique name')
then poedit process for translate code.
that's it .... you finished your work.

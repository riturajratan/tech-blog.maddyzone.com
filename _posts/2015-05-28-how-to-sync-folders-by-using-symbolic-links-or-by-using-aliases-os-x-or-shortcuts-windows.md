---
author: riturajratan
comments: true
date: 2015-05-28 06:18:22+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=2066
slug: how-to-sync-folders-by-using-symbolic-links-or-by-using-aliases-os-x-or-shortcuts-windows
title: How to sync folders by using symbolic links or by using aliases (OS X) or shortcuts
  (Windows)
wordpress_id: 2066
categories:
- Resources
tags:
- Aliases
- Shortcuts
- Symbolic links
---

Sometimes situation are comes like that we need to synchronize our folder like i have faced a issue. The issue is that , I have make two sites for a client and for this two sites admin is separate and when admin upload images, videos and all kind of stuff then it will show on both sites , problem is that for each site upload folder `uploads`  is different and if apply logic that when admin upload anything then copy on both folder so it will take storage double so after some googling and blogs  i will find a word ** symbolic links . **By  ** symbolic links ** we can handle this kind of stuff. :) So here i am sharing my experience how i handle situation by the symbolic links. Hope it will helpful for you guys

so i have resolved the problem by following way. **Take a** _**James Bond eye on problem ;)**_


### First my structure is like below


In this structure you can see uploads folder are different for both sites(site1 and site2).

    
    site1
    |---uploads
    =============
    site2
    |---uploads
    




### After structure is like below


So now  here you can see folder structure by which  i have resolved this problem. see below diagram

    
    uploads(main folder)
    |
     --site1
      |---uploads(symbolic link)     
     --site2
      |---uploads(symbolic link)


In above folder you can see main upload folder `uploads` this is outside the both of the site folder then i made two symbolic link **(_shortcut in window or  aliases in OS ). _**


### **_Now How this symbolic link  folder will work ?_**


First our main folder is `uploads` .all the stuff go in this folder. symbolic folder are synchronize with this folder so in both sites content will be available.

Now question is that How we will make **_symbolic link ?_**

IN all operating system its different like



	
  1. Symbolic links in Ubuntu(Linux type operating system).

	
  2. Symbolic links(Shortcuts)  in Windows.

	
  3. Symbolic links(Aliases)  in OS X.


I have tried in Ubuntu so first look the process by which make in Ubuntu.


## Symbolic links in Ubuntu



    
    ln -s {/path/to/file-name,or folder name} {link-name}
              or can say
    ln -s source target 
    
    so in our case commands will be 
    
    For site1 
    ln -s /uploads /site1
    
    For site2 
    ln -s /uploads /site2
    
    




## 




## Symbolic links (Shortcuts) in Windows


Here is a very good article by which you can know that how to make Symbolic links in windows  [http://www.howtogeek.com/howto/16226/complete-guide-to-symbolic-links-symlinks-on-windows-or-linux/](http://www.howtogeek.com/howto/16226/complete-guide-to-symbolic-links-symlinks-on-windows-or-linux/) .




## Symbolic links(Aliases)  in OS X


You can also make Symbolic links in mac as we make  in Ubuntu But there is a very good article by which you can know that how to make Symbolic links in OS X [https://gigaom.com/2011/04/27/how-to-create-and-use-symlinks-on-a-mac/](https://gigaom.com/2011/04/27/how-to-create-and-use-symlinks-on-a-mac/) .

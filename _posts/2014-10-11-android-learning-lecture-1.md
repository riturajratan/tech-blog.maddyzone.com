---
author: vishnu
comments: true
date: 2014-10-11 06:02:54+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=1552
slug: android-learning-lecture-1
title: Android Learning ( Lecture -1 )
wordpress_id: 1552
categories:
- Android
- Mobile Platform
tags:
- Android
- Emulator
- Libraries
- Linux Kernel
---

**Introduction to Android**

When I heard the name Android , first question arise in my mind as normally comes in every human
mind whenever they hear something new,that time i am so eager to know about Android, actually for
what android exists?
As same is arise in your mind now, if you are new to Android word.
so, here i am trying to explore about Android for you :

**What is Android**

- Today , Android is world most popular mobile platform.

- Android is an operating system (bunch of software) for mobile devices and released by Google.

- Android entirely written and run by Java(Computer Programming Language).

- Android Delivers a complete set of software and applications(apps,games,digital content) for mobile devices.

- It gives you a single application model that lets you deploy your apps broadly to hundreds of millions of users across a wide range of devices—from phones to tablets and beyond.

- Android is an open source, so Android also gives you tools for creating apps that look great and take advantage of the hardware capabilities available on each device.

- An open source market place is also developed to distributing your apps by name "Google Play".

**Android Internal Architecture**

- Android system as mentioned is a stack of software, which mainly divided into five section and four layers:

- Please check below the layered architecture.

[![android_architecture]({{ site.url }}/uploads/2014/10/android_architecture.jpg)]({{ site.url }}/uploads/2014/10/android_architecture.jpg)

As you can see in the snapshot , there are four layers by name from top to bottom respectively :

- Applications (Top Layer)

- Application Framework

- Libraries and Android Runtime

- Linux Kernal (Bottom Layer)

If you know now about layer name , than we move to brief of working of these layer.

- So starting from bottom layer first

As you can check bottom layer is Linux Kernal, now a question arise in your mind what actually linux kernal represent here and why it is used in the Android Architecture.

So don't worry , i am here to explain about this to you

**What Linux kernal Stands For :**

- 115 Patches (Module of a bunch of software)

Provides :

- System functionality like

1.) Process Management (Manage How and How Many Application Working on the same time on a mobile device ).

2.) Memory Management (Manage Memory Used by Application s From Total System Memory ).

3.) Device Management (Manage Working of hardware device like camera, keypad, display etc. )

4.) Linux Kernal Also Manage for Networking aspects and Power Management.

Are you comfort with Linux Kernal Now, If you want to know more detail , please comment on this post.

Now we are moving to next Layer from bottom which includes two portion such as Libraries and Android Runtime
**What Libraries and Android Runtime Stands For :**

So First We note about Libraries Here :

What are the Libraries ?

- Libraries are set of classes (Written in Java) to include during development of apps.

- Includes open source Web Browser engine webkit.

- Libraries such as :

1.) SQLite (Used for client end database design and management)

2.) OpenGL|ES (Stands for Open Graphics Library | Embedded System, Used for Animation and Live Wallpaper Design and 3D).

3.) Media Framework (Used for Audio /Video Class Library).

4.) SGL (Stands for Scalable Graphics Library , Used for 2D Graphics)

**What is Android Runtime ?**

- Provides set of core libraries which provide facility to Develop Android Mobile Apps using Java Programming Language.

Now if you are familiar with java language platform, than a common question comes in your mind, how a java application program which is written for Android platform will execute ?

So dear , as in java platform if you know, a Java Virtual Machine (JVM), work to compile and execute a program written in java and make program to platform independant, same concept is come here as :

- Android Runtime Section of this layer , provides a component called "Dalvik Virtual Machine" like JVM mentioned above designed and optimized for Android.

- Dalvik Virtual Machine , uses Linux Kernal Features like

1.) Memory Management
2.) Multi Threading

- Dalvik Virtual Machine provides the facility for an Android Application to run in its own process with its own instance.

Now if you get familiar with Second Layer of Android Architecture above Linux Kernal Layer(at bottom), we shall move to next layer known as "Application Framework"
above second layer from bottom.

If you want to know more about the second layer please comment on this post.

**What Application Framework Stands For ?**

- Application Framework Provides class for Android Apps Developer to use.

As you can see in snapshot of android layerd architecture and see at Application Framework, you got some manager declare here like :

1.) Activity Manager (Used to Manage Activity like start , stop , manage intent during activity from one screen to another).

2.) Window Manager (Used to Manage action on window, title of android window, Window swipe , back etc.)

3.) Content Provider (Used to Manage Content for Android apps, what controls to used for content ).

4.) View System (Used to Manage or show content on screen by fragment, layout, table structure, tab layout etc.)

5.) Telephony Manager (Used to Manage SMS, Call Facility to used in Android Apps)

6.) Package Manager (Used to manage list of jar files of java packages for Google maps, hardware devices like camera etc. library and permissions management for internet etc.)

7.) Location Manager (Used to Manage or show geographical location of mobile using GPRS system library and permission uses on android apps)

8.) Notification Manager (Used to Manage Push Notification and apps and android updated version notifications etc. on android device using apps)

Now if you get some how familiar with Third Layer of Android Architecture above Library and Android Runtime Layer(from bottom), we shall move to next layer known as "Applications" is the last and top most layer of android layered architecture.

If you want to know more about the third layer please comment on this post.

**What Applications Stands For ?**

- All Android Applications Develop by Apps Developer will comes at this top layer.

- Example of Such Application like :

1.) Books
2.) Games
3.) Personal etc.

After knowing much detail about android platform , you are now get excited to know somehow about :

- History of Android platform. ?

- What Android versions available in market. ?

- How Android Can be Installed. ?

So dear for this all questions and your eagerness to learn , know more about world most popular mobile platform Android , we will move to our next lecture , in which we will learn about all the above questions.

If you like please this post, please like us on social media, if you want to know more about in this topic please comment us and suggest us. We will come in our next lecture of android learning by considering your valuable feedback in our mind.

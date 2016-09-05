---
author: riturajratan
comments: true
date: 2013-12-09 10:16:21+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=100
slug: first-step-server-side-javascript-node-js-2
title: First step with server side JavaScript (Node.js)
wordpress_id: 100
categories:
- JavaScript
tags:
- JavaScript
- Node.js
- Server Side JavaScript
---

When i started with [Node.js](http://nodejs.org/) then at that time in my mind have many question.

1)What is [Node.js](http://nodejs.org/) ?

[Node.js](http://nodejs.org/)  is a platform built on Chrome's JavaScript run-time for easily building fast, scalable network applications. [Node.js](http://nodejs.org/)  uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.     by [Node.js](http://nodejs.org/)

2)Why should i use [Node.js](http://nodejs.org/) ?

Node is especially suited for applications where you'd like to maintain a persistent connection from the browser back to the server. Using a technique known as [ "long-polling"](http://en.wikipedia.org/wiki/Push_technology#Long_polling), you can write an application that sends updates to the user in real time. Doing long polling on many of the web's giants, like rails or django, would create immense load on the server, because each active client eats up one server process. This situation amounts to a tarpit attack. When you use something like node, the server has no need of maintaining separate threads for each open connection.

This means you can create a browser-based chat app in node that takes almost no system resources to serve a great many clients. Any time you want to do this sort of long-polling, node is a great option. by [Stackoverflow](http://stackoverflow.com/questions/5062614/how-to-decide-when-to-use-nodejs)




<blockquote>Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.     by [Node.js](http://nodejs.org/)</blockquote>


I saw many links and tutorials but which problem i faced that is how i executed my code in [Node.js](http://nodejs.org/) i think many people who started in [Node.js](http://nodejs.org/)  they get benefited.but to start with [Node.js](http://nodejs.org/) you have setup of [Node.js](http://nodejs.org/)  for this

first go to [http://nodejs.org/](http://nodejs.org/) in this GO to install option and here click on install option

**OR**

if you want to download installer according to you then click on Download button [http://nodejs.org/download/](http://nodejs.org/download/)
here you choose your respective installer in my case i am using Window and choose window installer but if you are using Unix based systems, such as Mac OS X, Linux, and FreeBSD.You will need to use the terminal to install and run [Node.js](http://nodejs.org/) .

Download the latest release of Node.js from nodejs.org and unzip it.Open the terminal, and run the following commands.

    
    cd /path/to/nodejs
    make
    sudo make install


after this many messages will be outputted to the terminal as Node.js is compiled and installed.

now when you type in your terminal

    
    node -v
    //then it show the node version




After installation, type node at the command line to bring up the read-eval-print
loop (REPL). You can test your installation by typing:

    
    console.log('Hello world')


You should receive:

    
    Hello world
    undefined


If you saw like above then, congratulations! You have just written your first Node.js program.The console always prints out the return type. This is why Hello world is followed by undefined.

**now we will start with a js file**

make a js file with "any name"+".js"

in my case i named as **"first.js"**

first.js

    
    console.log("my first step in node");


no go to your terminal

type node and path of your file

like in my case file in D:drive in nodetest  folder names as first.js then i will write

    
    node d:nodetest/first.js
    
    // then output will appear
    
    my first step in node


here i share a very basic knowledge about node to start with node js hope you guys like it and

** In My Next Post I Will share with some deep in [Node.js](http://nodejs.org/) **

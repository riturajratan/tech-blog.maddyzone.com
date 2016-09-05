---
author: riturajratan
comments: true
date: 2014-11-09 05:57:49+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=1757
slug: how-to-setup-node-js-amazon-ec2
title: How to Setup Node.js on Amazon EC2
wordpress_id: 1757
categories:
- Resources
tags:
- Amazon
- Ec2
- Node.js
---

[dropcap] I [/dropcap] n my previous post


###  [How to setup and host website with Amazon EC2](http://maddyzone.com/resources/how-to-setup-and-host-website-with-amazon-ec2) ,


We have learn about setup of Amazon EC2.Now in this post i will share that how to setup Node.js on Amazon EC2.As per previous blog after SSH Connection on Amazon EC2  we have connected to the ec2-user’s home directory.Now we can do anything with our machine and install anything. SO after connect


## First  Update EC2 Amazon Linux


By  this we updating the computer and it will take some time to update for update use below command



    
    sudo yum update




Type_** Yes**_ when prompted  and wait a few minutes for the updates to install.

after update installation


## Install Node.js , NPM , Git and The GCC Compiler On Amazon EC2 Instance


So Now we are installing Node and some package which is required for **Node.js** and install Git to install **Node.js** from its _**Github Repo**_






    
    sudo yum install gcc-c++ make
    sudo yum install openssl-devel
    sudo yum install git
    




After installation of **Git** we clone **Node.js** Repository and install stable version of **Node.js **But for Use of any Node.js Framework like [**Express Framework** ](http://expressjs.com/)which are working with latest Node.js we need to do install latest stable version of node.js.




<blockquote>In these day current stable version is **v0.10.33** . you can see stable version from **Node.js** Officially site Download page [http://nodejs.org/download/](http://nodejs.org/download/) here.</blockquote>




    
    git clone git://github.com/joyent/node.git
    cd node
    git checkout v0.10.33 
    ./configure
    make
    sudo make install
    


Congratulation now **Node.js** is installed .


## Now Add User's Directory To BIN Paths TO Install more packages




    
    sudo su
    nano /etc/sudoers


By this above command nano Editor will open  in this we need to find below line



    
    Defaults secure_path = /sbin:/bin:/usr/sbin:/usr/bin


and on above line we add  _**":/usr/local/bin"**_ to the end of above line so it will look like below



    
    Defaults secure_path = /sbin:/bin:/usr/sbin:/usr/bin:/usr/local/bin


Now we save this file and close the editor.






##  Now Install NPM (Node Package Manager)




    
    git clone https://github.com/isaacs/npm.git
    cd npm
    sudo make install




Now our all components install for **Node.js** .Now we go back to home directory and setup a site folder by which **Node.js** site run .Here i am making `site ` folder to setup **Node.js** site.

    
    cd ~/
    mkdir site
    cd site


Now we are in **"site" **folder.Now we create a test file**(server.js)** for** Node.js **which print

` Hello Node.js is working cheers on AWS`

This file will listen for requests coming on port 8080 and return a static response as above.


## server.js - Our Node.js Server FIle




    
    // Load the necessary servers.
    var sys = require( "sys" );
    var http = require( "http" );
     
    // Create our HTTP server.
    var server = http.createServer(
    function( request, response ){
     
     // Create a response.
      response.writeHead( 200, {"content-type": "text/plain"} );  
      response.write( "Hello Node.js is working cheers on AWS... \n" );
      response.end();
     }
    );
    
    // Point the HTTP server to port 8080.
    server.listen( 8080 );
     
    // For logging purpose....
    sys.puts( "Server is running on 8080" );




In this above  **Node.js** Server is listening at port 8080 but due to some security reason allow requests on the standard HTTP port, 80, to be handled by our **Node.js** server on port 8080 we need to do some port forwarding Thanks to [Steve Kemp post](http://www.debian-administration.org/articles/386) for this solution. Now type in your console



    
    iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to 8080




Now by above command it redirect port 80 to port 8080.

Now we have install Node.js and it enable to listen on Standard HTTP port but after logout from Amazon EC2 what will we do so to keep run **Node.js **on server we need to install a module by this it run forever on server.


## install Forever using our Node Package Manager (NPM)


To keep running **Node.js** on Server we will install this module **Forever** which is develop by  **[Nodejitsu](https://github.com/nodejitsu/forever) .**



    
    sudo npm install forever




By this bunch of code set in our **"site"** folder related to forever**. **Now we can use **Forever** to launch **Node.JS **on Server. But To launch **Node.js Server** by **forever** is little bit complex command  so here  i am making a Bash Command File to launch the Forever command.Thanks to [Bennadal](http://www.bennadel.com/blog/2321-how-i-got-node-js-running-on-a-linux-micro-instance-using-amazon-ec2.htm) for explaining this thing.

I am giving this script name is **"Start" **because by this file we are starting Node.js on Server using Forever


## Start- A Bash file to start Node.js On Server using Forever



    
    #!/bin/bash
     
    # Invoke the Forever module (to START our Node.js server).
    ./node_modules/forever/bin/forever \
    start \
    -al forever.log \
    -ao out.log \
    -ae err.log \
    server.js




Now we give execute permissions to this file to run it



    
    chmod +x ./start




Same we are making a **"stop"**  Bash file to stop it


## Stop- A Bash file to stop Node.js On Server using Forever




    
    #!/bin/bash
     
    # Invoke the Forever module (to STOP our Node.js server).
    ./node_modules/forever/bin/forever stop server.js




Now we give execute permissions to this file to run it same as  **Start bash script**



    
    chmod +x ./stop




Now we have done all work .We make trigger to start and stop Node.js on server using Forever by Bash Script.


## Ready to Fire :)


Now Execute our start Script

    
    ./start


By this it invoke  Forever module and start our Node.js server (server.js)  and in terminal output look like below


<blockquote>info: Forever processing file: server.js</blockquote>


Which is showing that Forever start Node.js Using server.js file which we have made earlier.

Now we see on our **public DNS as per [our last article ](http://maddyzone.com/resources/how-to-setup-and-host-website-with-amazon-ec2)  **in my case it is `http://ec2-54-191-173-54.us-west-2.compute.amazonaws.com/`

Now try in web browser to see that its works or not .

On web browser output is come


<blockquote>_**Hello Node.js is working cheers on AWS**_</blockquote>


Same as to Stop Node.js on Server we Type below command



    
    ./stop




Now After logout From Amazon EC2 It will work same due to Forever Module.

Hey Cheers we have install , set and host  Node on Amazon EC2 Instance.


#### _**So this is all About Node.JS and Amazon EC2 Instance. For any query and message and suggestion please comment on below section.**_

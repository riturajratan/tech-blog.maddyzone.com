---
author: vishnu
comments: true
date: 2015-07-21 16:49:52+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=2151
slug: create-dynamic-button-and-text-box-using-javascript
title: How to create dynamic button and text-box using JavaScript
wordpress_id: 2151
categories:
- JavaScript
tags:
- dynamic button
- dynamic textbox
- JavaScript textbox
---

Hi Friends, Today i am come here to share my knowledge with all of you regrading "How to create dynamic button and text box creations using javascript in efficient manner also get the value of each text box uniquely reference to there corresponding button and to submit all the text box value at once".

I hope you will like my this blog also as you did earlier for my past blogs.So lets start on my new blog **"How to create dynamic button and text box creations using javascript".**

As a Backend End Developer, you may required dynamic creation of button and textbox simultaneously in website development which having form submission information , for like we want that user have to submit their skills in resume , so let we assume we didn't know actually how many textbox we will define in our form by default for submission of skills , so we want that user will come to our resume registration form and their he/she will get the option to add number of skill as they want , so in this case we have to create this stuff dynamically , So now question arises how we can achieve this target before submission of form or on client side.

So my friends i am presenting you the way of creation of buttons and textbox simultaneously using `JavaScipt` which is well known scripting language in our industry (IT) and this is also fast to process and provide results quickly.Now i am going to present the basic steps to achieve our goal , lets start with step first.

## Step -1

In step-1 , i am going to create an `index.html` file where i will define a basic html for our goal as mention below the code presentation of my `index.html` :

    {% highlight html %}
    <html>
    <title>Create dynamic button and text box creations using javascript</title>
    <head>
    <script src="js/script.js"></script>
    </head>
    <body>
    <h2>Create dynamic button and text box creations using javascript</h2>
    <div id="object_data"></div>
    <button name="add_button" value="Add New" id="add_button" onclick="addButton()"> Add New </button>
    </body>
    </html>
    {% endhighlight %}
    
    




In the above code



	
  1. I define a basic html for my file `index.html `In folder under my system drive like `D:` by folder name `example_1` and place this `index.html` file there.

	
  2. I also create a folder name `js` inside folder `example_1` and place file by name `script.js` there.

	
  3. Now , i will discuss about both of the file what these will do , so first move on `index.html`


### index.html

index.html , file basically present the view of our example, when we hit this file in our browser whatever just like in chrome , in body part of this html
i create a button control which call a java script function `addButton` when we click on it , this function i will later define on our `script.js` file in `js` folder of this `example_1` folder and a blank div where all our dynamic control will appear after script called as a button and text box control.

Are you ok till now, is everything clear now, If it is fine than i will move to my next step of for this blog.

So lets start with next step by name step-2

## Step -2

In step-2 , i will define the function `addButton` in `script.js` file , which will dynamically add controls to our html blank div , having id attribute `object_data`.

Code for script.js is below :

### script.js

    {% highlight js %}
    var i = 1; // define global variable i to loop the button click event as much as we want
    
    function addButton(){
    
    var new_line = document.createElement("br");
    var new_line_2 = document.createElement("br");
    
    // these both of the lines will create dynamically new lines before putting any new textbox and button control.
    
    // create new text box control below using attribute of input type text box and assign name and id dynamically by using variable i defined as global variable above.
    
    var textbox = document.createElement("input");
    textbox.type= "text";
    textbox.name= "txt_" + i;
    textbox.id= "txtid" + i;
    textbox.placeholder ="txt_"+i;
    
    var btn = document.createElement("input");
    btn.type = "button";
    btn.name = "button"+i;
    btn.value = "Click Me";
    btn.id = "id"+i;
    
    // assign click event for each new button element created dynamically using attribiute of input type button and assign name and id dynamically using variable i defined as global variable above.
    
    btn.setAttribute("onClick","showMessage()");
    
    //on click on every newly created button a "showMessage" javascript function will call, which will show us the value of their corresponding text box.
    
    // assign both of these textbox and button controls to blank div by id "object_data" in html document using below code.
    
    document.getElementById("object_data").appendChild(textbox);
    document.getElementById("object_data").appendChild(btn);
    document.getElementById("object_data").appendChild(new_line);
    document.getElementById("object_data").appendChild(new_line_2);
    
    
    i++ //increment the counter
    }

    {% endhighlight %}


The above code will do our motto in a manner , when we click on button add new , the JavaScript function `addButton` will called , as defined above this function will dynamically create all four element and append to our html blank div by id `object_data` respectively textbox, button, and two break lines , and append as much controls as much or how many times i will hit the add new button.

So, how you feel now my friends ,is its easier for you all to create all this stuff, now if you understand all this i wanna move to my next step of my blog by name step-3 which will present you the way how you can get the values of each dynamically created text box on button click.

so as you know , as i write earlier in above code a `showMessage` function will call as you click on dynamically created button , this function will do the rest of the work for step-3

### Step -3

Code for showMessage function :

    {% highlight js %}
    function showMessage(){
    var currID = showMessage.caller.arguments[0].target.id;
    
    // this statement will returns us the value ofid attribute of button on which we currently click among dynamically created buttons.
    
    // this "document.getElementById("txt"+currID).value" statement , will get the value of corresponding text box to button on behalf of "id" attribute.
    alert(document.getElementById("txt"+currID).value);
    
    } 
    {% endhighlight %}
    


So, now using all the above code and below url for complete code, you can create dynamic controls to html using javascript easily.

for any query , please comment me or feedback me for this blog , how do you like this.

<a href="https://github.com/Maddyzone/create-dynamic-button-and-text-box-using-javascript" target="_blank"> Code</a>

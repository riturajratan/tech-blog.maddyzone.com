---
author: vishnu
comments: true
date: 2015-08-04 10:36:48+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=2164
slug: how-to-dynamically-get-rss-feed-by-using-javascript-from-a-url
title: How to dynamically get rss feed by using Javascript from a URL
wordpress_id: 2164
categories:
- JavaScript
tags:
- JavaScript
- rss
---

Hi Friends, I wanna share my knowledge regarding "How to dynamically get rss feed by using Javascript from a URL" .

I know most of you have knowledge about this , but i want to share my blog may it will help you more regarding this in very easiest way and more user friendly.

In my blog , i will do the task in 3 steps basically.

In first step,** i will go through the requirement and create a basic html for our requirement**.

In second step, **i will show you and describe you most about the java script for our objective**.

In third step ,** i will show the output and the complete code for this**.

So let me start with first step:


## Step 1:will go through the requirement and create a basic html for our requirement


**Requirement :**

Get News Feed by URL and Number of Feed to Fetch on Button Click Event

**Solution :**

To complete our requirement objective we need basically three files

1. index.html
2. main.js
3. style.css

so our folder structure looks like :

    
    Folder name (jsFeed)
    - index.html
    Folder name (js)
    - main.js
    Folder name (css)
    - style.css
    Folder name (images)
    - loading.gif
    
    




Let's First create a basic html for this, as per our requirement we need 2 text boxes which represents respectively "Feed URL" , which takes input of rss feed url and the second text box html element will take "Number of Feed to Fetch".

Once , we create both of the text box element , i will create an event handler element by name button html element , which will perform the action when both of the inputs are available , by checking validation for both of the fields when click on button.

So my first step to create an html for our requirement is as shown below :

    
    <div class="example">
    <h2>Get News Feed by URL and Number of Feed to Fetch</h2>
    <label>Feed URL</label>
    <input type="text" class="inputE" name="feedURL" id="feedURL" value="http://rss.news.yahoo.com/rss/topstories" placeholder="Enter Feed URL" size="100"/><br>
    <label>Number of Feed Fetch</label>
    <input type="text" class="inputE" name="fetchFeed" id="fetchFeed" value="" placeholder="Enter Number of Feed to Fetch" size="89">
    <input type="button" class="inputE" name="getFeed" id="getFeed" value="Get Feed" onclick="getFeed()"/> 
    </div> 
    </div>




I create an onclick event on button click and call `getFeed` function of javascript , which is well known not defined yet , will be defined in step-2.

As , I am thinking , when i get all feeds after placing my javascript code for this, i will get the result and i have to show this result also , so for this i have to create an html element also, where i will show the result.

So, i am writing the result oriented html below , which will included in above html , in div element by class name `example`.

    
    <div class="loading_rss" id="loading_feed" style="display:none;">
    <img alt="Loading..." src="images/loading.gif" />
    </div>
    <div class="post_results" id="post_results1">
    </div>




Did you get all the points and requirement defiend in Step-1, if you are ok will this , than i will now move to step-2 , where i will write the js code for the above.

[![How to dynamically get rss feed by using Javascript from a URL 1](http://maddyzone.com/wp-content/uploads/2015/08/How-to-dynamically-get-rss-feed-by-using-Javascript-from-a-URL-1.png)](http://maddyzone.com/wp-content/uploads/2015/08/How-to-dynamically-get-rss-feed-by-using-Javascript-from-a-URL-1.png)


## Step-2: will show you and describe you most about the java script for our objective.


In step-2 , we will discuss how i will perform validation before getting rss feed and how i will get rss feed , if validation are successfully completed on button click event and calling `getFeed` method as defined in html in step-1.

So lets start with creating in javascript function in our `main.js` file by name `getFeed`
and checking the value of `feedURL` and fetchFeed text box's values if these are filled
then call `rssReader.init` function by passing the `url` and `id` of the div element in which we have to show the desired result or feeds.

Our **getFeed** function looks like:

    
    //getFeed method called when getFeed button is clicked
    function getFeed(){
    // get the value of feedURL
    
    var feedURL = document.getElementById("feedURL").value; 
    // get the value of number of Feed to fetch.
    
    var fetchFeed = document.getElementById("fetchFeed").value; 
    if(feedURL == ""){
    alert("Please Enter Feed URL");
    }else if(fetchFeed == ""){
    alert("Please Enter Number of Feed to Fetch");
    }else{
    // Show Loading image untill feed's not get
    
    document.getElementById("loading_feed").style.display = "block";
    var url = encodeURIComponent(feedURL);
    
    //Pass the feedUrl to google apis service to get feed from passed url with 
    number of feed to fetch and callback function in return and context as the div element where to place the result.
    
    var googUrl = 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num='+fetchFeed+'&q='+url+'&callback=rssReader.parse&context=post_results1';
    
    // intialize the rssReader function
    rssReader.init('post_results1',googUrl);
    }
    
    }
    
    // let’s look about rssReader init function and parse the resultant data to the post result element and show.
    
    var rssReader = {
    containers : null,
    
    // initialization function
    init : function(selector,googUrl) {
    
    // creating temp scripts which will help us to transform XML (RSS) to JSON
    
    var script = document.createElement('script');
    script.setAttribute('type','text/javascript');
    script.setAttribute('charset','utf-8');
    script.setAttribute('src',googUrl);
    document.getElementById("footer").appendChild(script);
    
    },
    
    // parsing of results by google
    parse : function(context, data) {
    var container = document.getElementById(context);
    container.innerHTML = '';
    
    // creating list of elements
    var mainList = document.createElement('ul');
    
    // also creating its childs (subitems)
    var entries = data.feed.entries;
    
    for (var i=0; i<entries.length; i++) {
    
    var listItem = document.createElement('li');
    var title = (i+1)+" . "+entries[i].title;
    var contentSnippet = entries[i].contentSnippet;
    var contentSnippetText = document.createTextNode(contentSnippet);
    
    var link = document.createElement('a');
    link.setAttribute('href', entries[i].link);
    link.setAttribute('target','_blank');
    var text = document.createTextNode(title);
    link.appendChild(text);
    
    // add link to list item
    listItem.appendChild(link);
    
    var desc = document.createElement('p');
    desc.appendChild(contentSnippetText);
    
    // add description to list item
    listItem.appendChild(desc);
    
    // adding list item to main list
    mainList.appendChild(listItem);
    }
    container.appendChild(mainList);
    document.getElementById("loading_feed").style.display = "none";
    }
    };


in rssReader we define 2 function , first one is init which is called when we complete validation step , and in this step we create a script tag element in which we pass the google api service to get rss feed url , which holds the information about

1. "number of feed to fetch",
2. "feedurl from where we have to fetch url" ,
3. "call back function when this api will got result from the sending url" ,
4. "the element where we have to show the required result".

after initialization we parse the required output to out `post_result1` div element and create dynamic ul , li listing with the required information like the

1. Title of the news
2. Description about the news
3. Link to the news

and append it, after append we hide the loading feed image which was loaded earlier on button click until we didn't get the result, as we got the result, we will hide this element.

[![How to dynamically get rss feed by using Javascript from a URL2](http://maddyzone.com/wp-content/uploads/2015/08/How-to-dynamically-get-rss-feed-by-using-Javascript-from-a-URL2.png)](http://maddyzone.com/wp-content/uploads/2015/08/How-to-dynamically-get-rss-feed-by-using-Javascript-from-a-URL2.png)



Now , i would like to move to step-3 , where i will show you the complete code for this with output.


## step-3 : will show the output and the complete code for this.




So , all of this i have done here to complete the requirement, i hope you all got very well my blog, if you got any question regarding this, you can send me comments on this
or if you like my post you can also share me your valuable feedback.

Please check the complete source code by clicking the below button or to download.

[button type="bd_button btn_large" url="https://github.com/Maddyzone/dynamically-get-rss-feed-by-using-Javascript-from-a-URL" target="on" button_color_fon="#3fc2da" button_text_color="#ffffff" ]Download Code[/button]

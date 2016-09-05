---
author: jkhatri6
comments: true
date: 2013-12-30 13:23:00+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=172
slug: add-multilevel-drop-tinymce-editor-menu-button
title: How to add multilevel drop down in a TinyMCE Editor Menu Button.
wordpress_id: 172
categories:
- JavaScript
- Resources
tags:
- customization
- editor
- menu button
- multilevel drop-down
- TinyMCE
---

Tinymce editor is quit famous, well known and very attractive editor these days. A few Days ago i worked with this editor and felt It is very customizable and easy to extend editor.

I am going to share how I customized it according to my requirements:

Main Moto of customization to add multilevel drop-down menu on a toolbar menu button.

I have done googling 2-3 hours and implemented the suggested solution by others but no one worked according to my requirements.

I have found only the way how to add single level drop-down menu button everywhere but my requirement is little bit different, What i wanting to do is a menu button like :


[![tinymce-custom-menu-button-with-milti-level-drop-down-menus-screen-3](http://maddyzone.com/wp-content/uploads/2013/12/tinymce-custom-menu-button-with-milti-level-drop-down-menus-screen-3.png)](http://maddyzone.com/wp-content/uploads/2013/12/tinymce-custom-menu-button-with-milti-level-drop-down-menus-screen-3.png)


Firstly, i am going to tell you how to add a single level drop-down menu button,


[![tinymce-custom-menu-button-with-milti-level-drop-down-menus-screen-1](http://maddyzone.com/wp-content/uploads/2013/12/tinymce-custom-menu-button-with-milti-level-drop-down-menus-screen-1.png)](http://maddyzone.com/wp-content/uploads/2013/12/tinymce-custom-menu-button-with-milti-level-drop-down-menus-screen-1.png)


Code for adding button on toolbar:

    
    <script type="text/javascript">
    tinymce.init({
    selector: "textarea",
    
    toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | demo",
    
    setup : function(editor)
    {
    editor.addButton('demo', {text : 'Demo', type : 'menubutton', icon : false});
    }
    });
    </script>


This code will adds a button on the toolbar of tinymce editor.

For adding menu items to the button, you have to use the following code:


[![tinymce-custom-menu-button-with-milti-level-drop-down-menus-screen-2](http://maddyzone.com/wp-content/uploads/2013/12/tinymce-custom-menu-button-with-milti-level-drop-down-menus-screen-2.png)](http://maddyzone.com/wp-content/uploads/2013/12/tinymce-custom-menu-button-with-milti-level-drop-down-menus-screen-2.png)




    
    <script type="text/javascript">
    tinymce.init({
        selector: "textarea",
        toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | demo",
        setup: function(editor){
            editor.addButton('demo',
            {
                text: 'Demo',
                type: 'menubutton',
                icon: false,
                menu: [
                    {
                        text: 'Menu-1',
                        onclick: function(){
                            alert("Clicked on Menu-1.");
                        }
                    },
                    {
                        text: 'Menu-2',
                        onclick: function(){
                            alert("Clicked on Menu-2.");
                        }
                    }
                ]
            });
        }
    });
    </script>


The above code will adds a menu button with two menu items.

Now the point comes, How to add submenu items to these menu items ?


[![tinymce-custom-menu-button-with-milti-level-drop-down-menus-screen-3](http://maddyzone.com/wp-content/uploads/2013/12/tinymce-custom-menu-button-with-milti-level-drop-down-menus-screen-3.png)](http://maddyzone.com/wp-content/uploads/2013/12/tinymce-custom-menu-button-with-milti-level-drop-down-menus-screen-3.png)


No need to worry its quite simple, you can use the following code for this:

    
    <script type="text/javascript">
    tinymce.init({
        selector: "textarea",
        toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | demo",
        setup: function(editor){
            editor.addButton('demo',
            {
                text: 'Demo',
                type: 'menubutton',
                icon: false,
                menu: [
                    {
                        text: 'Menu-1',
                        onclick: function(){
                            alert("Clicked on Menu-1.");
                        },
                        menu: [
                            {
                                text: 'Sub-Menu-1',
                                onclick: function(){
                                    alert("Clicked on Sub-Menu-1.");
                                }
                            },
                            {
                                text: 'Sub-Menu-2',
                                onclick: function(){
                                    alert("Clicked on Sub-Menu-2.");
                                }
                            },
    
                        ]
                    },
                    {
                        text: 'Menu-2',
                        onclick: function(){
                            alert("Clicked on Menu-2.");
                        }
                    }
                ]
            });
        }
    });
    </script>


This code will adds submenu items to the Menu-1 as shown below.

Note : What you have to remember is :



	
  1. If you will notice all above code snippet then you will find a argument "toolbar" passed to tinymce.init(). This argument specifies the buttons will be shown on the toolbar, what will be their order, and separator for button groups.

	
  2.  If you will not add your button's name here then that will not visible on the editor's toolbar.

	
  3.  Here, the thing comes in your mind is : what is the name of the button you are going to add?          



    
      editor.addButton(name, settings),
    /* the addButton function expects first argument as the name and the other one as the settings of that button.*/


In my above codes you can find the name of the button is : "**demo**".
This is not the all i have customized, I will let you know how to create a plug-in for tinynce editor.

If you have any doubt, you are most welcome to comment.

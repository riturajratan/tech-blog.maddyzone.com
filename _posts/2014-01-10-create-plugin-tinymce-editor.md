---
author: jkhatri6
comments: true
date: 2014-01-10 05:31:13+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=187
slug: create-plugin-tinymce-editor
title: Create a Plugin For TinyMCE Editor
wordpress_id: 187
categories:
- JavaScript
- Resources
tags:
- JavaScript
- plugin
- TinyMCE
- TinyMCE Customization
---

## How to Create a Plugin For TinyMCE Editor


My last post about TinyMCE Editor was "How to add multilevel drop down in a TinyMCE Editor Menu Button.", in that post i have described about how to to customize tinyMCE Editor.

In this post i am going to share with "How to build a plugin for TinyMCE Editor". During this i use the same customization i have explain in last post i.e. How to add Multilevel drop-dwon on a menu button of toolbar.

So, I am Starting now : For creating a plugin you firstly have to be familiar with the folder structure to be made for a plugin.

One thing you have to remember is, you can use your custom developed plugin when you have all files of tinyMCE Editor and you are loading tinyMCE scripts from your server.(Will describe later why.).

Folders you have to create are :



	
  * Find the Directory where you have placed tinyMCE Editor's files, you will see a folder structure like as follows:


[![tiny-mce-javascript-folder-structure](http://maddyzone.com/wp-content/uploads/2014/01/tiny-mce-javascript-folder-structure.png)](http://maddyzone.com/wp-content/uploads/2014/01/tiny-mce-javascript-folder-structure.png)



	
  * Now go to "plugins" directory, Here you will find all of exsisting plugins.



	
  * Here you have to create a directory, name of directory will be the name of your plugin. I have created a folder with name 'mergefield' because i want to create a custom plugin whose name is mergefield.



	
  * Now go to the directory you have created in previous step and here create a file name "plugin.js".



	
  * Edit plugin.js and write your custom code here. But your code will be resides in the below function



    
    <script type="text/javascript">
        tinymce.PluginManager.add('your_plugin_name', function(editor, url)
        {
            ...
            // Your Code Resides Here...
            ...
        });
    </script>





	
  * As descirbed in my last post we have to add a menu button on toolbar so the custom code plugin looks like as follows:



    
    /**
     * Example plugin that adds a toolbar button and menu item.
     */
    <script type="text/javascript">
        tinymce.PluginManager.add('mergefield', function(editor, url) {
            editor.addButton('mergefield', {
                text: 'Merge Field',
                type : 'menubutton',
                icon: false,
                menu: [
                    {   text: 'Menu-1',
                        onclick: function(){
                            alert("Clicked on Menu-1.");
                        },
                        menu : [
                            {    text: 'Sub-Menu-1',
                                 onclick: function(){
                                     alert("Clicked on Sub-Menu-1.");
                                 }
                            },
                            {    text: 'Sub-Menu-2',
                                 onclick: function(){
                                     alert("Clicked on Sub-Menu-2.");
                                 }
                            },
                        ]
                    },
                    {    text: 'Menu-2',
                         onclick: function(){
                             alert("Clicked on Menu-2.");
                         }
                    }
                ]
            });
        });
    
    /* editor.addButton(name, settings); : this code will adds a menu button on toolbar */
    </script>


Now may be the questions comes into you like, how tinyMCE Editor knows that it have to include your plugin ?

So, the answer is : You have to call your plugin when the Editor will initialise.

For calling plugin you have to use the following code in that file you are including the TinyMCE Editor.

    
    <script type="text/javascript">
        tinymce.init({
            selector : "textarea",
            plugins  : "plugin_names_to_load_on_initialisation_of_editor",
            toolbar  : "Buttons_and_menu_buttons_to_show_on_toolbar_of_editor"
        });
    </script>


For the Multilevel drop-down menu (mergefield : my plugin), i have included the plugin mergefield and a toolbar button mergefield and for this the code looks like as follows :

    
    <script type="text/javascript">
        tinymce.init({
            selector: "textarea",
            plugins: ["contextmenu advlist autolink lists link image charmap print preview anchor", "searchreplace visualblocks code fullscreen", "insertdatetime media table paste mergefield "],
    
            toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | demo | mergefield"
        });
    </script>


Hope this article helped you in creating your custom plugin for TinyMCE Editor.

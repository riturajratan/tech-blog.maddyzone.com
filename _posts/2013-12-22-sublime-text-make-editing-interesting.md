---
author: ravin
comments: true
date: 2013-12-22 10:53:56+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=112
slug: sublime-text-make-editing-interesting
title: Sublime text to make editing interesting
wordpress_id: 112
categories:
- Resources
tags:
- sublime
- Sublime tips and tricks
- vintage mode
---

This post is part of my last post [How I'm using sublime Text](http://maddyzone.com/resources/im-using-sublime-text), that was about how you can install and start using this awesome editor with some of great packages available. In this post I'll show some tips and setting that can make your editing fast and may be interesting :).


<blockquote>some tips and setting that can make your editing fast and may be interesting :).</blockquote>


**Tips & tricks**

1.) Creating project  - It's fast (As one of many reason to try sublime is speed, speed and speed) as well easy to create a project in sublime, without need to specify workspace, type of project (PHP, HTML, blah blah...),
just go to "Project->Add Folder to project"
then select folder to create "new project".
It is good that you save project so that you can attach project specific settings.

Go to "Project->Save project", this will save two file project_name.sublime-project and project_name.sublime-workspace, these files hold your project setting and details such as opened files, folder name and location etc.

2.) Quick preview and open file - To open file , just hit Ctrl+p, and start typing file name it will preview selected file content, after pressing enter file will be opened. So now no need to crawl or scroll project for file you are looking for.

[![ctrl+p]({{ site.url }}/uploads/2013/12/ctrl+p.png)]({{ site.url }}/uploads/2013/12/ctrl+p.png)

3.) Go to line - Press Ctrl+g, then line number to jump on line. Ex. To jump on line number 20, press Ctrl+g , 20 enter simple :)

4.) Go to function definition - press ctrl+r, it will show all function and IDs available in current file, as you start typing function name, list start getting filtered and after selecting function you want hit enter, it will jump you to function definition. you may also use ctrl+p+@ instead ctrl+r.

5.) Search & replace - Ctrl+f, will work to search inside current file and Ctrl+h will to replace text in current file. To search and replace in multiple file you can use Ctrl+shift+f, now you can select files, folder, include or exclude during file patter and you can also use regular expression and case sensitive searching.

6.) Toggle - you can toggle minimal, status bar, tabs, toggle menu, open command pallate using Ctrl+p, then "Toggle", select option it will toggle selected portion inside your sublime.
[![toggle]({{ site.url }}/uploads/2013/12/toggle.png)]({{ site.url }}/uploads/2013/12/toggle.png)

7.) Auto complete - One of developers necessity is auto-completion of code. Sublime CodeIntel package will auto complete code for many languages like Php, JavaScript, python, Node.js etc. it starts suggesting as soon as key is pressed. Ex. For JavaScript, it will find all methods inside a object and suggest you out.

[![sublime-codeintel]({{ site.url }}/uploads/2013/12/sublime-codeintel.png)]({{ site.url }}/uploads/2013/12/sublime-codeintel.png)

8.) Full screen and distraction free modes - To work in full screen mode press F11 and shift+F11 for distraction free mode.

9.) Multiple line editing - One of awesome feature I like most is multi line editing, in which you can edit multiple line simultaneously. After selecting text you have following choice to edit other instance.



	
  * Alt+F3 - It will select all instance of selected text, now as you start typing it replaces all selected text.

	
  * Ctrl+d - To edit selected occurrence of text.


10.) Split window - Sublime provides split window, you can find it under "View->layout", most of time I use two columns side by side by using alt+shift+2, now you can drag & drop tabs between them and also open same or different file in splited window.

[![splited_window]({{ site.url }}/uploads/2013/12/splited_window.png)]({{ site.url }}/uploads/2013/12/splited_window.png)

11.) Vintage Mode - Sublime come with vintage mode disabled by default, after unable it you are able to run Vi/Vim editor commands.



	
  * Little bit about vi/vim - Vim is a highly configurable text editor built to enable efficient text editing. It is an improved version of the vi editor distributed with most UNIX systems.
Vim is often called a "programmer's editor," and so useful for programming that many consider it an entire IDE. It's not just for programmers, though. Vim is perfect for all kinds of text editing, from composing email to editing configuration files.


Vim is about 30 year old editor. But it have "steep learning curve".
Enable vintage mode  - In "Preference -> setting user", it will open user preference setting file you can see

    
    "ignored_packages": ["Vintage"]


Remove "Vintage" and save to enable Vintage mode. Now you can see "INSERT MODE" in bottom left of status bar, when you press 'esc' you can see 'COMMAND MODE', press 'i/I' or 'a/A' to switch back to insert mode.



	
  * **Command Mode** - Your keyboard behave will change in this mode as you press key in this mode, nothing will appears on screen. Keys have differently meaning in this mode. Some of command you can use in this mode are -
Movement keys - vim uses hjkl, for cursor movement instead of using arrow keys.
h - move one character left
j - move one line down
k - move one line up
l - move one character right
$- End of line
0(zero) -Beginning of current line
Go to line - line number + 'G'
G - Go to end of file.
gg - Go to beginning to file
Delete - x/X to delete single character.
dd to delete current line. Ex 3dd (Delete 3 line from current line).
dG - Delete from current line to end of file.
D- Delete from current cursor position to end of line.
Miscellaneous/Productive commands - These command can be used with difference action liked(delete),y(yunk) etc. You must try these commands

	
  * 

    
    daw - Delete whole word under the cursor.
    dw - delete word from current cursor position to end of word.
    dit - Delete everything inside html tag.
    dat - Delete everything around tag.
    di' - Delete everything inside single quotes('')(you can also use {,",[,( in this command)
    da' - Delete everything around single quote (')


Note - Above all command can be applyed for copy, select etc.

	
  * **Insert Mode** - In this mode, you keyboard works as you expected, you press key and impression appears on screen. To switch from command mode to insert you need to press 'i/I(insert)','a/A(append)' and 'esc' to switch back to command mode.

	
  * **Visual Mode** - To select text and run command mode commands. From command mode press v/V to switch into visual mode and 'esc' to switch back to command mode.


12.) Setting - Sublime come with default settings, that can be change as per your requirement, you should override default setting from "Preference -> setting user", this will open user preference file. Here is how my user setting file looks like -

    
    {
      "caret_style": "smooth",
      "theme": "Soda Light.sublime-theme",
      "color_scheme": "Packages/Color Scheme - Default/Sunburst.tmTheme",
      "font_face": "Ubuntu Mono",
      "font_size": 11.0,
      "highlight_line": true,
      "highlight_modified_tabs": true,
      "ignored_packages":[],
      "match_brackets": true,
      "spell_check": true,
      "tab_size": 4,
      "trim_trailing_white_space_on_save": true,
      "word_wrap": true
    }


To change you theme, first you need to get theme, through "package control (ctrl+shift+p)", search for theme (I'm using soda), then edit user setting to enable new theme.

13.)  Other commands  -

    
    ctrl+shift+up/down key move selected(current) line up/down
    ctrl+k - Delete (selected/current) line.
    ctrl+m - Jump to matching bracket ({,(,[ )
    ctrl+shift+p - open pallate to run command related to all packages installed.
    ctrl+p - help you to open file quickly.




I hope this post will help to get friendly with sublime text.

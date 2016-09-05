---
title: Enable and disable code indentation in vim
author: Rituraj Ratan
layout: post
permalink: /enable-and-disable-code-indentation-in-vim
disqus: http://www.vim4u.com/enable-and-disable-code-indentation-in-vim.md
path: 2014-10-14-enable-and-disable-code-indentation-in-vim.md


---

In vim by default code indentation are not enable so to enable the code indentation in vim we need to set it manually also we can disable.Here i am describe how to enable and disable code indentation in vim. 

>This command will not run in insert and visual mode.It will work in command mode. for command mode press ESC key then write below        

##Automatic Indentation

---

### Enable code indentation in vim

{% highlight html %}

:filetype indent on

{% endhighlight %}

### Disable code indentation in vim

{% highlight html %}

:filetype indent off

{% endhighlight %}


###If you want by default vim load this above setting then write in your .vimrc file

{% highlight html %}

filetype indent on

{% endhighlight %}

like as we mention on above.

---

## Adjusting and Correcting Indentation

---


###In general, ={motion} will align code to an indentation level.


<table>
<thead><tr><th>S.N.</th><th>command</th><th>Work</th></tr></thead>
	<tbody>
		<tr><td>1</td><td>==</td><td>align the current line</td></tr>
		<tr><td>2</td><td>=i{</td><td>align the inner block</td></tr>
		<tr><td>3</td><td>=%</td><td>align to the matching parenthesis/bracket under the cursor</td></tr>
		<tr><td>4</td><td>=14j or 14==</td><td>align the next 14 lines</td></tr>
		<tr><td>5</td><td>=G</td><td>align to the end of the file</td></tr>
		<tr><td>6</td><td>vG=</td><td>same thing, align to the end of the file (but using visual mode)</td></tr>
		<tr><td>7</td><td>vjjj=</td><td>align four lines (using visual mode)</td></tr>
		<tr><td>8</td><td>gg=G</td><td>algin code in full file <br/> here  <strong>=</strong> the indent command can take motions. So, By  <strong>gg</strong> we go to the start of the file,  <strong>=</strong> to indent and by  <strong>G</strong> to the end of the file,  <strong>gg=G</strong></td></tr>
	</tbody>
</table>

Thanks!

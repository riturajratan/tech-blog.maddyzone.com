---
title: Multiple window in vim
author: Rituraj Ratan
layout: post
permalink: /multiple-window-in-vim.md
disqus: http://www.vim4u.com/multiple-window-in-vim.md
path: 2014-10-15-multiple-window-in-vim.md


---

Many time when we do our development work then we need to work on more than 1 files at same time, then for this in Vim there is very great feature `Multiple window`.
IN this post here i am describing that how to open close multiple window in vim and many more stuff.

>This command will not run in insert and visual mode.It will work in command mode. for command mode press ESC key then write below        

----
Let's see 

<table>
	<thead>
		<tr>
			<th>S.N.</th>
			<th>Command</th>
			<th>Work</th>
		</tr>
	</thead>
	<tbody>
	
			<tr><td>1</td><td>:e filename</td><td>edit another file </td></tr>
			<tr><td>2</td><td>:split</td><td>split window horizental</td></tr>
			<tr><td>3</td><td>:split filename</td><td>split window horizental and load another file</td></tr>
			<tr><td>4</td><td>ctrl-w up arrow</td><td>move cursor up a window</td></tr>
			<tr><td>5</td><td>ctrl-w ctrl-w  </td><td>move cursor to another window (cycle)</td></tr>
			<tr><td>6</td><td>ctrl-w ctrl-w 2  </td><td>move cursor to 2(second) window</td></tr>
			<tr><td>7</td><td>ctrl-w_        </td><td>maximize current window</td></tr>
			<tr><td>8</td><td>ctrl-w=        </td><td>make all equal size</td></tr>
			<tr><td>9</td><td>10 ctrl-w+     </td><td>increase window size by 10 lines</td></tr>
			<tr><td>10</td><td>:vsplit file   </td><td>vertical split</td></tr>
			<tr><td>11</td><td>:sview file    </td><td>same as split, but readonly</td></tr>
			<tr><td>12</td><td>:hide          </td><td>close current window</td></tr>
			<tr><td>13</td><td>:only          </td><td>keep only this window open</td></tr>
			<tr><td>14</td><td>:ls            </td><td>show current buffers</td></tr>
			<tr><td>15</td><td>:b 1           </td><td>open buffer #1 in this window</td></tr>
			<tr><td>16</td><td>:q           </td><td>close current window</td></tr>
			<tr><td>17</td><td>:qa           </td><td>close all window</td></tr>
			<tr><td>18</td><td>:!q           </td><td>close current window without save file</td></tr>
			<tr><td>19</td><td>:!qa           </td><td>close all window without save </td></tr>


</tbody>
</table>

Please give your comments and suggestions.

Thanks... 

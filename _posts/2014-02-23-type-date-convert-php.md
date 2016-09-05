---
author: riturajratan
comments: true
date: 2014-02-23 03:12:03+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=271
slug: type-date-convert-php
title: 'All type date convert in php '
wordpress_id: 271
categories:
- Php
tags:
- Date
- Date-convert
---

Many time in [**php**](http://in3.php.net/manual/en/function.date.php) we use Date Related Work . so i have  made a function and use in every place . it is very helpfull for me. hope it is usefull for all [**php**](http://php.net/) lover. you can extend this function also according to your requirement.

To use this function just pass two parameters and get the results



	
  1. the first parameter is $date (in this php date come)

	
  2. and second parameter is $type (in this we set that which type result we want)


by passing **$type** you get respective result which is shown in below function..

    
    function date_convert($date, $type){
      $date_year=substr($date,0,4);
      $date_month=substr($date,5,2);
      $date_day=substr($date,8,2);
      if($type == 1):
      	// Returns the year Ex: 2014
      	$date=date("Y", mktime(0,0,0,$date_month,$date_day,$date_year));
      elseif($type == 2):
      	// Returns the month Ex: January
      	$date=date("F", mktime(0,0,0,$date_month,$date_day,$date_year));
      elseif($type == 3):
      	// Returns the short form of month Ex: Jan
      	$date=date("M", mktime(0,0,0,$date_month,$date_day,$date_year));
      elseif($type == 4):
      	// Returns numerical representation of month with leading zero Ex: Jan = 01, Feb = 02
      	$date=date("m", mktime(0,0,0,$date_month,$date_day,$date_year));
      elseif($type == 5):
      	// Returns numerical representation of month without leading zero Ex: Jan = 1, Feb = 2
      	$date=date("n", mktime(0,0,0,$date_month,$date_day,$date_year));
      elseif($type == 6):
      	// Returns the day of the week Ex: Monday
      	$date=date("l", mktime(0,0,0,$date_month,$date_day,$date_year));
      elseif($type == 7):
      	// Returns the day of the week in short form Ex: Mon, Tue
      	$date=date("D", mktime(0,0,0,$date_month,$date_day,$date_year));
      elseif($type == 8):
      	// Returns dd-mm-yyyy
      	$date = date('d/m/Y', strtotime($date));
      elseif($type == 9):
      	// Returns a combo Ex: November 12th,2014
      	$date=date("F jS, Y", mktime(0,0,0,$date_month,$date_day,$date_year));
      elseif($type == 10):
      	// Returns a combo Ex: Nov 12th,2014
      	$date = date('M d, Y', strtotime($date));
      elseif($type == 11):
      	// Returns a combo ExL Wed,Nov 12th,2014
      	$date=date("D, M jS, Y", mktime(0,0,0,$date_month,$date_day,$date_year));
      elseif($type == 12):
      	// Returns mm-dd-yyyy
      	$date = date('m-d-Y', strtotime($date));
      elseif($type == 13):
      	// Returns yyyy-mm-dd
      	$date = date('Y/m/d', strtotime($date));
      elseif($type == 14):
      	// Returns Date and Time combo Ex: Nov 12th,2014 10:22:25
      	$date = date('M d, Y H:i:s', strtotime($date));
      elseif($type == 15):
      	// Returns Date and Time combo Ex: November 12th,2014
      	$date = date('F jS, Y', $date);
      elseif($type == 16):
      	// Returns Date and Time combo Ex: Sunday, November 12th,2014 10:22:25
      	$date = date('l, F jS, Y', $date);
     elseif($type == 17):
      	// Returns Date 12
      	$date = date('j', $date);	
      endif;
      return $date;
    }


Hope it will useful for you .please give your comments for any queries

Be social by sharing on below Buttons....

---
author: Rakesh
comments: true
date: 2013-12-09 05:40:12+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=91
slug: add-menu-externally-wp-menu-list
title: Add menu externally to wp menu list
wordpress_id: 91
categories:
- Wordpress
tags:
- add header menu externally in wordpress
- add menu in wordpress
- adding menu in wordpress
- wordpress menu
---

For add menu externally in wordpress menu list add below code in your functions.php

    
    add_filter( 'wp_nav_menu_items', 'myaccount_login_menu_item', 10, 2 );
    function myaccount_login_menu_item ( $items, $args ) {
        if ($args->theme_location == 'secondaryhome') {
            $logout = wp_logout_url(site_url('?page_id=22'));
           $items .= '<li><a href="'.$logout.'">Logout</a></li>';
        }
        return $items;
    }


where 'secondaryhome' is your menu name and $logout is your link herf

how to register a custom menu ;-

go to your functions.php

search for with named **themename_setuup()** function

add below code

    
    register_nav_menu( 'secondaryhome', __( 'Secondary Navigation Menu', 'themename' ) );






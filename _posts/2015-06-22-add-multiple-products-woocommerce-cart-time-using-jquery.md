---
author: vishnu
comments: true
date: 2015-06-22 05:35:39+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=2095
slug: add-multiple-products-woocommerce-cart-time-using-jquery
title: How to Add Multiple Products into WooCommerce Cart on Same Time using jQuery
wordpress_id: 2095
categories:
- jQuery
- Php
- Wordpress
tags:
- Drag and Drop
- WooCommerce
---

Hello friends, In my new blog i am here to present you **How to create Woocommerce cart with drag and drop and add to click functionality to Add multiple products into Woocommerce cart on the same time**.

As Title Saying to Add Multiple Products into Woocommerce Cart on Same Time , Questions arises in mind like :



	
  1. Why this is required ?

	
  2. How we can achieve this ?


Like for first question , i am answering you :

If you are some how familiar with WooCommerce Plugin for Wordpress and uses their functionality in your websites based on Wordpress , you even check that , when we want to purchase some products from the shop page of that website , we will choose a product and click on add to cart, than for second time we again go to shop page choose a product and add to cart, so we have to switch between  cart page and product page for each time , to reduce this switching.

I am here to present you very simple example to add multiple products from multiple product categories into cart and checkout on the same time.

For second question "How we can achieve this ?" i am here to showing you with an example :

are you get excited about this? so let's start on this :

We can achieve our motto in two ways :

	
  1. Using Drag and Drop of products.

	
  2. Using Add to Click on each Product item from category to add into cart.


In both of these ways , we need first of all the Woocommerce product category listing and also before going more on this we will first create a demo template file in our Wordpress themes folder on which we are currently working now by name like :

by copying page.php into themes folder and rename it to `template-demo.php` and assign the template name like "demo" in this file

as :

    
    <?php
    
    /* Template Name: Demo */
    
    /* 
     *
     */
    
    ?>
    
    


After this we will move to our first step here is :


## How to get the Woocommerce Product Categories.


To get these we will use the below statement in your php code:

    
    $product_categories = get_terms( 'product_cat' );


If you want to exclude some categories from all product categories you can use the below statement in your php code like:

    
    $product_cat_list = array(
                 'exclude'    => '29,31,32'
    );
    $product_categories = get_terms( 'product_cat', $product_cat_list );


This statement will returns you all WooCommerce products categories listing in form of array.

When we get all categories , now we have to get all products listing for each of the category, to achieve this we will go to our next step :


##  How to get all of the products from each of the Woocommerce Product Categories.


To achieve this , we can use the below code snippet in our template file after the code of get all products categories array.First we will create a button to add all dragged products into cart by using the below html snippet.

[![screenshot_1]({{ site.url }}/uploads/2015/06/screenshot_1.png)]({{ site.url }}/uploads/2015/06/screenshot_1.png)



    
    <div class="demo_cart_controls">
    
       <input type="button" id="mul_add_cart" value="Proceed to Cart"/>
    
    </div>


Secondly we will create a division or section of page in left side in which we have to show all WooCommerce products by category using the code snippet.

    
    <div id="options">
    
    <div id="all_products">
    
    <h3> All Products </h3>
    
    <div id="accordion_product">
    
    <?php foreach($product_categories as $key=>$value){
    
                      $prod_category = $value->slug;?>
    
    <h3><?php echo $prod_category;?></h3>
    
    <div  class="acc_individual">
    
      <p>
    
    <?php $args = array( 'post_type' => 'product','product_cat' => $prod_category , 'orderby' => 'rand' );
    
            $loop = new WP_Query( $args );
    
            while ( $loop->have_posts() ) : $loop->the_post(); global $product; ?>
    
                    <div class="drag" id="<?php echo 'drag'.$post->ID;?>">   
    
                        <a href="#" title="<?php echo esc_attr($loop->post->post_title ? $loop->post->post_title : $loop->post->ID); ?>">
    
                            <?php woocommerce_show_product_sale_flash( $post, $product ); ?>
    
                            <?php if (has_post_thumbnail( $loop->post->ID )) echo get_the_post_thumbnail($loop->post->ID, 'shop_catalog'); else echo '<img src="'.woocommerce_placeholder_img_src().'" alt="Placeholder" width="300px" height="300px" />'; ?>
    
                                        <div class="ui-drag-detail">
    
                            <h3><?php the_title(); ?></h3>
    
                            <span class="price"><?php echo $product->get_price_html(); ?></span>
    
                            <span class="add_drag_prod">
    
                              <input type="button"  class="add_cart_prod" id="<?php echo 'add_id'.$post->ID;?>" rel_id="<?php echo $post->ID;?>" value="+" onclick="jQuery(this).add_prod(<?php echo $post->ID;?>);">
    
                                </span>
    
                            <span class="delete_drag_prod">
    
                              <input type="button"  class="del_cart_prod" id="<?php echo 'del_id'.$post->ID;?>" rel_id="<?php echo $post->ID;?>" value="X" onclick="jQuery(this).del_prod(<?php echo $post->ID;?>);">
    
                                   </span>
    
                                        </div>
    
                        </a>
    
                        <?php woocommerce_template_loop_add_to_cart( $loop->post, $product ); ?>
    
                    </div>
    
        <?php endwhile; ?>
    
        <?php wp_reset_query(); ?>
    
         </p>
    
            </div>
    
        <?php } ?>
    
        </div>
    
        </div>


The above code will returns you , the list of all products with their details like product image , product name , price etc. in response to each of the category.

[![screenshot_2]({{ site.url }}/uploads/2015/06/screenshot_2.png)]({{ site.url }}/uploads/2015/06/screenshot_2.png)



As We got all products regarding each category in one part of the demo page template , now we create a second part of the page which we call `Cart Area` , where we will drag and drop products to cart from first dragged area.

so i am going to write the below html code snippet for `Cart Area` which will added just below the above code snippet.

    
      <div id="frame">
           <span id="title"><h3>  Drop your Products to Cart Here</h3></span>
            <table id="tbldevs" border="1">          
            </table>
         </div>
    
    


[![screenshot_3]({{ site.url }}/uploads/2015/06/screenshot_3.png)]({{ site.url }}/uploads/2015/06/screenshot_3.png)

Now if you get all understanding of :



	
  1. a) To get all Woo Commerce products categories

	
  2. b) To get all Woo Commerce products category product listing with their detail in dragged area successfully we are able to move to over next stage of this blog which is our objective to add multiple products into


`Cart Area` which we will achieve using jQuery. So as we finish half of the part , we are now move to another half by writing jQuery for drag and drop functionality for first way to achieve our motto.

So now i am going to write jQuery code after footer section of template page by name `template-demo.php`

    
    <script type="text/javascript">
    
       jQuery(document).ready(function($){       
    
            counter = 0;
    
                var total_ids_string = [];
    
                // accordion section
    
                $("#accordion_individual").accordion({active: false , collapsible: true});
    
                // Drop Products to "Cart Area" Section Start
    
            //Make element draggable
    
            $(".drag").draggable({
    
                helper:'clone',
    
                containment: 'frame',
    
                //When first dragged
    
                stop:function(ev, ui) {
    
                      var pos=$(ui.helper).offset();
    
                      objName = "#clonediv"+counter
    
                      $(objName).css({"left":0,"top":0});
    
                      $(objName).removeClass("drag");
    
                      //When an existiung object is dragged
    
                    $(objName).draggable({
    
                      containment: 'parent',
    
                        stop:function(ev, ui) {
    
                            var pos=$(ui.helper).offset();
    
                            console.log($(this).attr("id"));
    
                                        console.log(pos.left)
    
                            console.log(pos.top)
    
                        }
    
                    });
    
                }
    
            });
    
            //Make element droppable
    
            $("#frame").droppable({
    
                      drop: function(ev, ui) {
    
                            if (ui.draggable.attr('id').search(/drag[0-9]/) != -1){
    
                                  var did = ui.draggable.attr('id');
    
                                  var title = $("#"+did).children('a').attr('title');                          
    
                                var firstwords = title.split(" ");
    
                                  counter++;
    
                                  var element=$(ui.draggable).clone();
    
                                  element.addClass("tempclass");
    
                                  $(this).append(element);
    
                                  $(".tempclass").attr("id","clonediv"+counter);
    
                                  $("#clonediv"+counter).removeClass("tempclass");
    
                                  //Get the dynamically added product id
    
                                  draggedNumber = ui.draggable.attr('id').search(/drag([0-9])/)
    
                                  // Get the ID of latest added product into "Cart area".
    
                                  var latestID = $("#clonediv"+counter).children('a.add_to_cart_button').attr('data-product_id');
    
                                  // Create an array of all products ID in Cart Area
    
                                  total_ids_string.push(latestID);
    
                                  // Print All Products ID's in Cart Area to console for confirmation.
    
                                  console.log(total_ids_string);           
    
                                  itemDragged = "dragged" + RegExp.$1
    
                                  $("#clonediv"+counter).addClass(itemDragged);
    
                            }
                }
            });
    
    


Here As we got list of products from dragged area to cart area which we want to add into cart from cart area , now we will create an jQuery action on button click, define above to `Add to Cart` all the products which are in cart area by using below code snippet.

    
     $("#mul_add_cart").on('click',function(){
    
                // Firstly we will check if the "Cart Area" have any product in it while adding products by using the below code snippet
    
                               if(total_ids_string.length==0){                            
    
                                     alert("There is no product choosen to add into cart ");
    
                                     // if length is "0" then show alert that "There is no product choosen to add into cart " otherwise move to else part as below
    
                               }else{
    
                                      $(".response").css('display','block');     
    
                                        $(".response").delay(8000).fadeOut('slow');
    
                                        setTimeout(function(){
    
                                         window.location.href="http://localhost/maddyzone_test/cart/";
    
                                        },2000);


Motto is come here where we will create an loop upto the length of array of product ID's in `Cart Area` and send an ajax request by using post method to WordPress ajax request page by url as `http://localhost/maddyzone_test/wp-admin/admin-ajax.php`   having parameters "**action**, **productID **, **quantity**" in the form of object.

When this request is complete for all of the products in `Cart Area` we will auto redirected to cart page , where will get all of the products listing which we added in the `Cart Area`. Define cart page url in url attribute and window.location.

    
                    for (var i=0; i<total_ids_string.length; i++) {
    
                                              if(total_ids_string[i]!== 'undefined'){
    
                                                    var myKeyVals = { action: "woocommerce_add_to_cart", product_id: total_ids_string[i] , quantity: 1}
    
                                                     $.ajax({
    
                                                            type: 'POST',
    
                                                            url: "http://localhost/maddyzone_test/cart/",
    
                                                            data: myKeyVals,
    
                                                            dataType: "text",
    
                                                            async: false,
    
                                                            success: function(resultData) {
    
                                                            console.log("Save Complete") ;
    
                                                            }
    
                                                    });              
    
                                              }
    
                                        }
    
                               }
    
                });
    
        });
    
          </script>


So by using all these stuff we will get our motto by using the one method drag and drop functionality using jQuery.



By click on the `Proceed to Cart` button after adding product to `Cart Area` below screen will show.



[![screenshot_4]({{ site.url }}/uploads/2015/06/screenshot_4.png)]({{ site.url }}/uploads/2015/06/screenshot_4.png)

As you are now redirecting to your cart page, as you get cart page you will see your added product there in cart as shown in below screen.



[![screenshot_5]({{ site.url }}/uploads/2015/06/screenshot_5.png)]({{ site.url }}/uploads/2015/06/screenshot_5.png)



Now we have to make some more customization on the above like



	
  1. a) Delete product from cart area.

	
  2. b) Remove All of the product at once from cart area.

	
  3. c) Styling the popup's




All these extra things we will get in knowledge , from the next part of this blog for drag and drop functionality then move to click functionality.

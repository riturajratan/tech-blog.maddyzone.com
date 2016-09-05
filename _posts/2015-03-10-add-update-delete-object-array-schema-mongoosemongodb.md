---
author: riturajratan
comments: true
date: 2015-03-10 14:47:14+00:00
layout: post
link: http://dlurratan37846/wordpress/?p=2002
slug: add-update-delete-object-array-schema-mongoosemongodb
title: How to add update and delete object in Array Schema in Mongoose/MongoDB
wordpress_id: 2002
categories:
- Node.js
tags:
- $pull
- $push
- $set
- array schema
- MongoDB
- Mongoose
- Node.js
---

Most of the Time when we work with Node.js then we use MongoDB. So for writing MongoDB validation, casting and business logic most of the time we use Mongoose.Here i am sharing Some tips about array schema. So After this post you will know that  How to add update and delete object in Array Schema in Mongoose/MongoDB.


### Point Which we will cover.





	
  1. How to make Array Schema in Mongoose.

	
  2. How to push or add value /object in Array Schema in Mongoose.

	
  3. How to update value/object in Array Schema in Mongoose.

	
  4. How to pop or delete value /object in Array Schema in Mongoose.




### Required





	
  1. Little Bit Knowledge of MongoDB and Mongoose.


Ok Let's Start.


## 1. How to make Array Schema in Mongoose.


First of all we make a basic Article Mongoose Schema. In this we make comments as a Array type schema. Don't Focus on all code just focus on Comments section. It is our Focus Point

[bd_table]
<table width="479" style="height: 59px;" >

<tr >
Name
Work
</tr>

<tbody >
<tr >

<td >title
</td>

<td >to store the title.
</td>
</tr>
<tr >

<td >description
</td>

<td >to store description.
</td>
</tr>
<tr >

<td >tags
</td>

<td >to store the tags which are related to tags.
</td>
</tr>
<tr >

<td >createdAt
</td>

<td >to store the Created date of article.
</td>
</tr>
<tr >

<td >**comments**
</td>

<td >**This is the main section on which we will discuss.**
</td>
</tr>
</tbody>
</table>
[/bd_table]

    
    var mongoose = require('mongoose'),
        Schema = mongoose.Schema,
    
    /**
     * Article Schema
     */
    var ArticleSchema = new Schema({
      title: {type:String, required:true},
      createdAt: { type: Date, default: Date.now },
      description:{type:String, required:true},
      tags: [String],
      comments: [{ post: String,
                   posted: {type: Date, default: Date.now}
                 }]
    });
    
    mongoose.model('Article', ArticleSchema);




Here Assume like we create a Article now in our article collection data is something like below right now no comments in this Article so in MongoDB data will look like below for.



    
    { 
     "_id" : ObjectId("54fcb3890cba9c4234f5c925"),
     "title" : "A test Article",
     "description" : "test article description",
     "tags" : [
     "test tag"
     ],
     "createdAt" : ISODate("2015-03-08T20:39:37.980Z")
     }





## 2. How to push or add value /object in Array Schema in Mongoose.


Like when we add a article Now `comments` is the section in which can come any numbers of data .Like when new comment come for particular post then how we will add in comments section.Let's See

Assume by request you get `articleid` on which you can get for which article you need to add comments

like POST URL IS

_**/api/comments/:articleid**_

Now you do like below here we are using `findByIdAndUpdate` to know about more **[Click Here](http://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate) .**assume here we get `54fcb3890cba9c4234f5c925` **id **of article as shown in our demo json above `"_id" : ObjectId("54fcb3890cba9c4234f5c925"),`

    
    var article_id = req.params.articleid;/** assume here we get 54fcb3890cba9c4234f5c925 id 
        of article as shown in our demo json bve
         "_id" : ObjectId("54fcb3890cba9c4234f5c925"),
         **/ 
        /** assume your req.body like is below
            you can set your logic your own ways
            for this article i am assuming that data
            would come like below
        **/
        //req.body={post: "this is the test comments"};
         
         Article.findByIdAndUpdate(
         article_id,
         { $push: {"comments": req.body}},
         {  safe: true, upsert: true},
           function(err, model) {
             if(err){
            	console.log(err);
            	return res.send(err);
             }
              return res.json(model);
          });


So by below main code you can add data in Array Schema

    
    { $push: {"comments": req.body}}
    


After this output look like below in MongoDB you see comments come Now in JSON

    
    {
     "_id" : ObjectId("54fcb3890cba9c4234f5c925"),
     "title" : "A test Article",
     "description" : "test article description",
     "tags" : [
     "test tag"
    ],
     "createdAt" : ISODate("2015-03-08T20:39:37.980Z"),
     "comments" : [
     {
     "post" : "this is the test comments",
     "_id" : ObjectId("54fe0976250888001d5e6bc4"),
     "posted" : ISODate("2015-03-09T20:58:30.302Z")
     }
     ]
    }
    




## 




## 3. How to update value/object in Array Schema in Mongoose.


For update  let's Assume by request you get `articleid` and `commentid` on which you can get for which article you need to update comments and which one comment

like PUT URL IS

_**/api/comments/:articleid/:commentid**_

    
     Article.update({'comments._id': comment_id},
          {'$set': {
                 'comments.$.post': "this is Update comment",
    	   }},
              function(err,model) {
    	   	if(err){
            	console.log(err);
            	return res.send(err);
            }
            return res.json(model);
     });




Now the After this output look like below in MongoDB you see comment is updated  Now in JSON.

    
    {
     "_id" : ObjectId("54fcb3890cba9c4234f5c925"),
     "title" : "A test Article",
     "description" : "test article description",
     "tags" : [
     "test tag"
     ],
     "createdAt" : ISODate("2015-03-08T20:39:37.980Z"),
     "comments" : [
     {
     "post" : "this is Update comment",
     "_id" : ObjectId("54fe0976250888001d5e6bc4"),
     "posted" : ISODate("2015-03-09T20:58:30.302Z")
     }
     ]
    }
    


So by below main code you can edit/update data in Array Schema

    
    {'$set': {
     'comments.$.post': "this is Update comment",
     }},




## 4. How to pop or delete value /object in Array Schema in Mongoose.


As We added in comments in delete we get two things `articleid` and `commentid.`As we know when we add data in Schema `id` create automatically  by `_id.`on above JSON we can see there are two _id



	
  1. above one for article

	
  2. and in comments section for particular comment


Assume by request you get `articleid` and `commentid` on which you can get for which article you need to delete comments and which one comment

like DELETE URL IS

_**/api/comments/:articleid/:commentid**_

Now you do like below here we are using `findByIdAndUpdate` to as Above .assume here we get `54fcb3890cba9c4234f5c925` id of article as shown in our demo json above `"_id" : ObjectId("54fcb3890cba9c4234f5c925"),` and **commentid** `54fe0976250888001d5e6bc4` of particular comment as shown in above JSON

    
    var article_id = req.params.articleid,//assume get 54fcb3890cba9c4234f5c925
        comment_id = req.params.commentid;// assume get 54fcb3890cba9c4234f5c925
      
      Article.findByIdAndUpdate(
        article_id,
       { $pull: { 'comments': {  _id: comment_id } } },function(err,model){
          if(err){
           	console.log(err);
           	return res.send(err);
            }
            return res.json(model);
        });


Now the After this output look like below in MongoDB you see comments come Now in JSON.

    
    {
     "_id" : ObjectId("54fcb3890cba9c4234f5c925"),
     "title" : "A test Article",
     "description" : "test article description",
     "tags" : [
     "test tag"
     ],
     "createdAt" : ISODate("2015-03-08T20:39:37.980Z"),
     "comments" : []//remove comments
    }


So by below main code you can delete data in Array Schema

    
    { $pull: { 'comments': { _id: comment_id } } }


Summery

[bd_table]
<table >

<tr >
Name
Work
code example
More Details
</tr>

<tbody >
<tr >

<td >ADD
</td>

<td >add an value/object in array schema
</td>

<td >{ $push: {"comments": req.body}}
</td>

<td >[**Click Here**](http://docs.mongodb.org/manual/reference/operator/update/push/)
</td>
</tr>
<tr >

<td >UPDATE
</td>

<td >edit/update an value/object in array schema
</td>

<td >{'$set': {
'comments.$.post': "this is Update comment",
}},
</td>

<td >**[Click Here](http://docs.mongodb.org/manual/reference/operator/update/set/)**
</td>
</tr>
<tr >

<td >DELETE
</td>

<td >delete an value/object in array schema
</td>

<td >{ $pull: { 'comments': { _id: comment_id } } }
</td>

<td >**[Click Here](http://docs.mongodb.org/manual/reference/operator/update/pull/)**
</td>
</tr>
</tbody>
</table>
[/bd_table]



Hope it will useful for you guys.

Give your comments and Suggestion.

Thanks.

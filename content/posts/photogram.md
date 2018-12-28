Photogram is an Instagram clone I created to practice my Ruby on Rails development. 

## Project Overview
This app was designed to imitate Instagram in many ways including the ability to upload images and create user accounts. By the end of the project I knew I wanted to have a website were I could create an account, upload an image to the site and allow other users to comment on it. 

## Technical Breakdown
I created the Ruby on Rails application using Rails 4.2.0 and quickly set out to work. I knew from the start that two of the main features, commenting and image uploading were something that I had never done before and would take a majority of my time so I wanted to get to those as soon as possible. 

I used [Bootstrap](http://getbootstrap.com/) to handle most of the HTML/CSS style so that I could focus on the functionality. 

I used [**devise**](https://github.com/plataformatec/devise) for user authentication and handled the image uploading for posts with [**paperclip**](https://github.com/thoughtbot/paperclip). Both are very popular Ruby gems that help to make things better for developers. 

For commenting I wrote my own system instead of implementing a third party solution like [Disqus](https://disqus.com/). I found it mostly painless when I kept the goal simple and did not try and do replies to peoples comments. As long as everyone was replying to the main post it was straightforward. 

In a future project I'll likely try and allow users to create "threads of comments" but I decided to keep it simple and Instagram-like. To finish off the comment system I allowed users to use Markdown to format their comments. Sites like Reddit use Markdown formatting and implementing it with [**HTML Pipeline**](https://github.com/jch/html-pipeline) was simple enough.  This was a helper method I wrote to format my markdown posts

```ruby
def markdownify(content)
	pipeline_context = { gfm: true }
	pipeline = HTML::Pipeline.new [
	  HTML::Pipeline::MarkdownFilter,
	  HTML::Pipeline::SanitizationFilter
	], pipeline_context
	pipeline.call(content)[:output].to_s.html_safe
end
```
and then to use the Markdownify method I created I called it on the content on the view like so
**app/views/posts/show.html.erb**

```ruby
<%= markdownify @post.caption %>
```

The only real issue I had to handle was related to the server configuration part of things. I needed to increase the max file upload size in Nginx's configuration file like so;

**/etc/nginx/nginx.conf**

```
http {
   ...
   client_max_body_size 4M;
   ...
}
```

I needed to add the **client_max_body_size** to the HTTP section to allow the server to accept uploads bigger than the default. Once this was done I was able to upload decent sized photos.


## Closing

The project took me a weekend of development from start to finish, I learned a fair amount from the sprint at the end to push it live when I did it and feel like it was a good project to pick to start with. I believe that the next time I try and do a site like Instagram I'll be able to quickly cover the same ground and be able to add more features such as @user mentions and notifications. 

Thanks for reading about Photogram and if you'd like to check it out click [here](http://photogram.zerlexmedia.com)

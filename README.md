# Week-8-blog-project

## Link to my repo: https://github.com/Adlam4002/Week-8-blog-project/tree/main

## Link to my deployed site: https://week-8-blog-project.vercel.app

# User Stories

🐿️ As a user, I want to browse a list of posts, sortable by ascending or descending order
🐿️ As a user, I want to be able to leave a comment sharing my thoughts on each post

### Stretch goal:

🐿️ As a user, I want to see a list of categories, and click on a category to see a list of posts in that category

# Requirements

🎯 Created using create-next-app

🎯 Design a SQL schema for a posts table, and a comments table that has a post_id column connecting it to the posts table.

🎯 Either create a form where users can add posts OR seed your database with at least 4 posts that comments can be added to (if you do the seed, one of the stretch goals will be harder).

🎯 Add a form to the individual post page to allow creating a new comment, which is saved to the new comments table including the Post ID.

🎯 Refresh the /posts route data when adding a new post, and redirect the user to the list of posts

🎯 Refresh the /post/:postId route when adding a new comment, so the new comment is displayed on the page

🎯 Add static and dynamic metadata to your pages

### Stretch Goals

🏹 Add a categories table to allow categorisation of posts at creation time using a dropdown menu. Add a /categories route that lists all categories, and a /categories/:id route that lists all posts in a category.

🏹 Add a new /posts/:id/edit route that allows editing a post. Populate the form with the post data, and save changes by updating the post in the database with a server action.

🏹 Add a delete button to the post page that removes the post from the database.

🏹 Add a new /posts/:id/comments/:id/edit route that allows editing a comment. Populate the form with the comment data, and save changes by updating the comment in the database with a server action.

# Reflection

I started this project by thinking about how I wanted to display each blog post. Early on I decided I wanted to have a picture you could click on to take you to the post itself. I then mapped out my tables as I wanted to confirm the values I would use before I started populating them/ making forms for them. I made a function to connect my app to the database so I could fetch and add data. I stored it in a separate js file in my utils folder so I could easily import the function when even I needed to use it. I then created a form that would allow new blog posts to be created and stored on the database. I then created a comments submission form as a component allowing me to import it where I need it. I created a posts page that displays all available posts to the user and they can click on the image/title to navigate to that article in full. On this page, I added a filter function with options to sort the posts in ascending or descending order. I then made the article page. It fetches data from the database and some info is displayed such as author and title. Then the main body and image of the post are displayed. Under this, there is a form for users to submit comments and the comments are displayed below it. The tables are connected, the blog_posts id value is tied to the blog_comments post_number value. This is so that I can target and display only the comments associated with each article rather than all comments all the time. I added metadata to all my pages. I then made a categories page (continents), this page shows a list of each available continent. When the user clicks a category, they are presented with a list of articles belonging to that category. When clicked the user is redirected to the article in full. As I attended a wedding this weekend, I don’t think that this work is up to the standard I usually aim for. I have done very few stretch goals and would have liked to add subtle animations to the page. Maybe a slight change in colour or wiggle when the user hovers over the post links to make it even more obvious they're interactive. I think I would have liked to work on the styling a little more too as I was enjoying using tailwind.

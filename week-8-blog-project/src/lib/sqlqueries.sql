CREATE TABLE IF NOT EXISTS blog_posts (
  id SERIAL PRIMARY KEY, 
  author TEXT,
  title TEXT,
  content TEXT,
  year INT,
  location TEXT,
  category TEXT
);

CREATE TABLE IF NOT EXISTS blog_comments (
  id SERIAL PRIMARY KEY,
  comment TEXT,
  username TEXT,
  post_number INT,
  FOREIGN KEY ("post_number") REFERENCES blog_posts ("id")
);
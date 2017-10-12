# Makerspace MTU Website

This is the website for the Makerspace built using [Jekyll](http://jekyllrb.com/).

### Running Locally

If you do not have Jekyll installed locally, first install Jekyll.
```
$ gem install jekyll
```

Clone and run the website.
```
$ git clone https://github.com/makerspacemtu/makerspacemtu.github.io.git
$ cd makerspacemtu.github.io
$ jekyll serve
```

Open your browser to [localhost:4000](http://localhost:4000/)

### Running Locally with Docker

If you do not wish to install Ruby and/or Jekyll locally, you can create an environment using [Docker](https://www.docker.com/).
```
$ docker-compose up
```

Open your browser to [localhost:80](http://localhost:80/)

Cleanup is as easy as removing the Docker Container.
```
$ docker-compose down
```

### Creating Posts
To create a new post, all you need to do is create a new file in the `_posts`
directory. How you name files in this folder is important. Jekyll requires
blog post files to be named according to the following format:

```
YEAR-MONTH-DAY-title.markdown
```

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit
numbers, and `markdown` is the file extension representing the format used in
the file. For example, the following are examples of valid post filenames:

```
2011-12-31-new-years-eve-is-awesome.markdown
2012-09-12-how-to-write-a-blog.markdown
```

Each post needs to begin with the following:

```
---
layout: post
title:  "How to write a post"
date:   2015-12-04 19:52:30 -0800
categories: update
author: First Last
---
```

After this block, any valid markdown formatting can be used. [GitHub has
a good article](https://help.github.com/articles/markdown-basics/) on basic
markdown.

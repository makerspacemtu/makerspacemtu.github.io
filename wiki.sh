#!/bin/bash

date=`date +%Y-%m-%d`
echo "Wiki Date: $date"
echo "Wiki Title:"
read title
echo "Wiki Categories (lowercase, space represents a new category):"
read categories

# generate the file name, take the date and append the title in all lowercase
# with spaces separated by dashes. Ex: 2016-01-10-my-best-post.markdown
lower=`echo "$title" | tr '[:upper:]' '[:lower:]'`
file="$date-${lower// /-}.markdown"

echo "---
layout: post
title: $title
date: $date 07:00:00 -0800
categories: $categories
---" >> "_wikis/$file"

echo "View _wikis/$file and add your wiki content!"

#!/bin/bash

date=`date +%Y-%m-%d`
echo "Wiki Date: $date"
echo "Wiki Title:"
read title
echo "Wiki Category (lowercase, no spaces):"
read category

# generate the file name, take the date and append the title in all lowercase
# with spaces separated by dashes. Ex: 2016-01-10-my-best-post.markdown
lower=`echo "$title" | tr '[:upper:]' '[:lower:]'`
file="$date-${lower// /-}.markdown"

echo "---
layout: wiki
title: $title
date: $date 07:00:00 -0800
category: $category
---" >> "_wikis/$file"

echo "View _wikis/$file and add your wiki content!"

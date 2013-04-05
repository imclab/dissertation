#!/bin/bash

rm _posts/*-dissertation.md

FILE=_posts/$(date '+%Y-%m-%d')-dissertation.md

touch $FILE

FILEPATH=~/Dropbox/University/Dissertation/Structure/Content

cat $FILEPATH/abstract.md >> $FILE && printf "\r\r" >> $FILE
for file in $FILEPATH/Chapters/*.md
do
  if [ -s "$file" ]
  then
    cat "$file" >> $FILE && printf "\r\r" >> $FILE
  fi
done
cat $FILEPATH/conclusion.md >> $FILE  && printf "\r\r" >> $FILE

wc -w $FILE | awk {'print "### Word count: " $1'} >> $FILE
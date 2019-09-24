#!/bin/bash

srcdir=/home/khan/IdeaProjects/friendbook/BackEnd/
srcdirFrontEnd=/home/khan/IdeaProjects/friendbook/fbFrontEnd/

filelist=$( ls $srcdirFrontEnd | grep -v 'node' )
filelistbackend=$( ls $srcdir | grep -v 'FrontEnd' )

backup_date=$(date +'%d %b %Y')

rsync -am --stats --exclude 'node_modules' $srcdirFrontEnd ./

zip -r -qq "FrontEnd $backup_date.zip" $filelist

rm -rf $filelist

echo $backup_date

echo $filelist

rsync -am --stats --exclude 'FrontEnd' $srcdir ./

zip -r -qq "BackEnd $backup_date.zip" $filelistbackend

rm -rf $filelistbackend

echo $filelistbackend

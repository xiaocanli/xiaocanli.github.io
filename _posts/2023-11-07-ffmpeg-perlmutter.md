---
layout: post
title: Using FFmpeg on Perlmutter@NERSC
date: 2023-11-07 12:50:00-0400
description: Using FFmpeg on Perlmutter@NERSC
tags: hpc
categories: li-posts
giscus_comments: false
related_posts: false
featured: true
---
## Problem
There is no `ffmpeg` module on Perlmutter anymore. The system-installed `ffmpeg` does not support some of the common codecs.

## Solution
* Download the executable from ffmpeg website: https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz
* put it somewhere in the home directory, e.g., `~/local/` and then `tar xvf ffmpeg-release-amd64-static.tar.xz`
* set the path in `~/.bashrc.ext`: `export PATH=$HOME/local/ffmpeg-6.0-amd64-static:$PATH`
* source ~/.bashrc

Then, we can use ffmpeg as usual.

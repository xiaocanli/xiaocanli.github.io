---
layout: post
title: Lightweight Tex with Tectonic
date: 2023-11-07 08:50:00-0500
description: Using Tectonic to compile Tex documents
tags: desktop
categories: li-posts
giscus_comments: false
related_posts: false
featured: true
---
TexLive takes up too much space because it downloads so many never-used packages, and it gets larger and larger. [Textonic](https://tectonic-typesetting.github.io/en-US/) can be an alternative.
> Tectonic is a modernized, complete, self-contained TeX/LaTeX engine, powered by XeTeX and TeXLive.

Since Tectonic only downloads packages that are required to compile the documents, the space it takes can be tiny compared to TexLive. The documentation can be found in [The Tectonic Book](https://tectonic-typesetting.github.io/book/latest/index.html). Tectonic supports different command line interfaces. Please check out the documentation for details. After setting up, we can compile the Tex files we have without changing anything else simply by
```sh
tectonic -X compile myfile.tex
```
The first time we compile a file, it will download packages and save it to `$HOME/.cache/Tectonic` in default. It can compile regular documents or beamer slides. To get Tectonic to work in VS code, we can either use [TexLab](https://marketplace.visualstudio.com/items?itemName=efoerster.texlab) or [LaTex-Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop).

* To use Textonic with TexLab, we need to change the settings following https://github.com/latex-lsp/texlab/wiki/Tectonic.
* Although TexLab may have a better LSP, LaTex-Workshop provides more features. To get LaTex-Workshop to work with Tectonic, we need to change the settings following https://github.com/tectonic-typesetting/tectonic/discussions/896#discussioncomment-2847604. NOTE: the problem with the default file structures of Tectonic (e.g., generated from `tectonic -X new`) is that the *synctex* stopped working.

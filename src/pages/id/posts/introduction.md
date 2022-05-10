---
setup: |
  import Layout from '../../../layouts/BlogPost.astro'
  import Author from '../../../components/Author.astro'
title: Perkenalan
publishDate: 09 May 2022
name: Jason C
author: Jason C
author_link: https://github.com/jasonnchann24
description: Perkenalan blog Elanode! - git commit -m "first post 😁"
heroImage: /assets/blog/introduction-image.jpg
heroImageCaption: https://unsplash.com/photos/eE2trMn-6a0
categories: general
---

<Author name={frontmatter.name} href={frontmatter.author_link} client:load />


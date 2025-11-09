---
layout: page
permalink: /publications/
title: Publications
description: Selected publications with links to the full record on Google Scholar and ADS.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

The list below highlights recent papers that capture the main directions of my group.  
For the full publication record (including conference papers and collaborative works) please visit:

- [Google Scholar](https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}&hl=en)
- [NASA ADS](https://ui.adsabs.harvard.edu/search/q=author%3A%22{{ site.last_name | default: 'Li' }}%2C%20{{ site.first_name | default: 'Xiaocan' }}%22)

---

## Selected publications

<div class="publications">
  {% bibliography -q @*[selected=true]* %}
</div>

<p class="small text-muted">Need something that is not listed here? Reach out and I can send a PDF or citation.</p>

---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

My [\[**Google Scholar**\]](https://scholar.google.com/citations?user=HvM9gWgAAAAJ&hl=en&oi=ao)
and [\[**ADS**\]](https://ui.adsabs.harvard.edu/public-libraries/NxPzy3oIRbm53amvMiUZ6g).<br/>
Below are selected recent papers.
{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

---
layout: page
title: Projects
permalink: /projects/
# description: A growing collection of your cool projects.
nav: true
nav_order: 3
display_categories:
  - id: energetic
    title: Energetic Particles & Transport
  - id: recon_turbulence
    title: Reconnection & Turbulence
  # - id: platforms
  #   title: Diagnostics & Platforms
horizontal: false
---

<style>
.projects .card {
  background: white;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
}
.projects .card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}
.projects .card-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
}
.projects .card-text {
  font-size: 0.9rem;
  line-height: 1.5;
  color: #5a6c7d;
}
.projects .category {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
</style>

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  {% assign category_id = category.id | default: category %}
  {% assign category_title = category.title | default: category %}
  <a id="{{ category_id }}" href=".#{{ category_id }}">
    <h2 class="category">{{ category_title }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category_id %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>

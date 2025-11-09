---
layout: about
title: About
permalink: /
<!-- subtitle: <a href='#'>Affiliations</a>. Address. Contacts. Motto. Etc. -->

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Theoretical Division</p>
    <p>Los Alamos National Laboratory</p>

selected_papers: false # disable inline list so publications live on the main publications page
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
focus_now:
  - tag: "GPU reconnection"
    title: "3D reconnection campaigns"
    description: "GPU-accelerated 3D VPIC and hybrid runs to study reconnection-driven turbulence."
  - tag: "Transport & forecasting"
    title: "Coupled particle transport"
    description: "Building multi-scale transport solvers to predict SEP release and space-weather risks with mission-ready latencies."
  - tag: "Diagnostics & experiments"
    title: "Observation-driven workflows"
    description: "Embedding X-ray/radio diagnostics and laboratory measurements into simulation pipelines so models can be validated and reused quickly."
---

I build predictive, multi-scale models that explain how magnetized plasmas convert stored energy into energetic particles across solar, space, and astrophysical environments.

Most projects blend large-scale particle-in-cell, hybrid, and MHD simulations with energetic-particle transport solvers. That lets us translate kinetic physics into reduced models that mission teams, heliophysics forecasting centers, and laboratory experiments can reuse.

I work closely with observers, laboratory experimentalists, and data scientists to interpret kinetic phenomena wherever they appear. Validating simulations against X-ray/radio data, mapping reconnection dynamics onto spacecraft signatures, and wiring laboratory diagnostics back into our codes keep the models honest—and ready for collaborators.

**Current role:** Staff Scientist (T-2), Los Alamos National Laboratory.  
**Let's talk:** [Email](mailto:{{ site.email | encode_email }}) · [Download CV (PDF)]({{ '/assets/pdf/resume_xli.pdf' | relative_url }})

{% if page.focus_now %}
### what I work on now

<style>
.focus-card {
  background: white;
  border: 1px solid #e0e0e0;
  border-left: 4px solid;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
}
.focus-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}
.row > div:nth-child(1) .focus-card { border-left-color: #3498db; }
.row > div:nth-child(2) .focus-card { border-left-color: #e67e22; }
.row > div:nth-child(3) .focus-card { border-left-color: #27ae60; }
.focus-tag {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #7f8c8d;
  margin-bottom: 0.5rem;
}
.focus-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}
.focus-desc {
  font-size: 0.9rem;
  line-height: 1.5;
  color: #5a6c7d;
  margin-bottom: 0;
}
</style>

<div class="row">
  {% for item in page.focus_now %}
    <div class="col-md-4 mb-3">
      <div class="h-100 rounded p-3 focus-card">
        {% if item.tag %}
          <p class="text-uppercase focus-tag">{{ item.tag }}</p>
        {% endif %}
        <p class="focus-title">{{ item.title }}</p>
        <p class="focus-desc">{{ item.description }}</p>
      </div>
    </div>
  {% endfor %}
</div>
{% endif %}

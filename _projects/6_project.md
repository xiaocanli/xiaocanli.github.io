---
layout: page
short_title: Plasma Turbulence
title: Plasma Turbulence
# <!-- description: mechanisms and power-law formation -->
img: assets/img/turbulence.png
importance: 1
category: turbulence
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/turbulent_rec_lay.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Self-generated turbulence in 3D magnetic reconnection. {% cite 2019ApJ...884..118L %}
</div>

This project started when I was working at Los Alamos National Lab. Turbulence is a topic that I don't know enough about. Over the years, I have figured out a few problems that I can work on and are related to my other projects, including
* the properties of reconnection-driven turbulence (turbulence amplitude, spectrum, anisotropy, compressibility, etc.)
* particle acceleration and transport in turbulence driven by reconnection or other mechanisms
* turbulent magnetic reconnection and its implications

## Publications
<div class="publications">
{% bibliography -f ref -q @*[projects ~= turbulence]* %}
</div>

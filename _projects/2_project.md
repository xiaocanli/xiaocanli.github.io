---
layout: page
short_title: Reconnection Rate
title: Reconnection Rate Model
<!-- description: modeling reconnection rate -->
img: assets/img/xline.png
importance: 2
category: reconnection
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/xline_l.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Reconnection rate model with thermal corrections. {% cite 2021ApJ...912..152L %}
</div>

This project studies the model of reconnection rate and its implications for energy conversion and particle acceleration in reconnection using particle-in-cell simulations and analytical models. Current research topics include
* the dependence of reconnection rate with plasma parameters (e.g., plasma beta)
* the roles of reconnection rate in the formation of power-law energy spectrum
* turbulent magnetic reconnection

## Publications
<div class="publications">
{% bibliography -f ref -q @*[projects ~= reconnection:rate]* %}
</div>

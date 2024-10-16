---
layout: page
short_title: Relativistic Reconnection
title: Relativistic Reconnection
<!-- description: particle acceleration and associated emissions -->
img: assets/img/rel_rec.png
# redirect: https://unsplash.com
importance: 3
category: reconnection
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/rad_rec.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Magnetic field strength (upper row), particle number density (middle row), and the polarized emission map (lower row) of the simulation region. In the lower row, the color indicates the total flux at each zone, while the segments represent the relative polarized flux. Different columns represent snapshots of the simulation domain at different time steps. {% cite 2018ApJ...862L..25Z %}
</div>

This project studies particle acceleration and associated radiation emissions in relativistic magnetic reconnection using particle-in-cell simulations, particle transport theories, and radiation transfer models. I have been partially working on this project because of its similarities with the studies in nonrelativistic reconnection. The work has been done by collaborating with my colleagues. Current research topics include
* particle acceleration mechanisms
* particle injection mechanisms
* the formation of nonthermal energy spectra
* the emission and polarization signatures of the nonthermal electrons

## Publications
<div class="publications">
{% bibliography -f ref -q @*[projects ~= reconnection:rel]* %}
</div>

---
layout: page
short_title: Particle Acceleration
title: Particle Acceleration and Energy Conversion
# <!-- description: mechanisms and power-law formation -->
img: assets/img/test_particle.png
importance: 1
category: reconnection
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/ptl-acc.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Self-generated turbulence can enhance particle transport and acceleration in 3D magnetic reconnection. The simulations were performed using the <a href="https://github.com/lanl/vpic">VPIC</a> particle-in-cell code and analyzed using the open-source <a href="https://github.com/xiaocanli/Post-Analysis-VPIC">Post-Analysis-VPIC</a> code. {% cite 2019ApJ...884..118L %}
</div>

This project studies particle acceleration and transport in nonrelativistic magnetic reconnection using numerical simulations (particle-in-cell) and particle transport theories. Current research topics include
* particle acceleration mechanisms in reconnection
* particle transport in the self-generated turbulence in 3D reconnection
* the formation of power-law energy spectra in reconnection

## Publications
<div class="publications">
{% bibliography -f ref -q @*[projects ~= reconnection:nonrel]* %}
</div>

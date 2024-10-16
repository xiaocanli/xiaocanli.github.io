---
layout: page
short_title: SEPs
title: Solar Energetic Particles
<!-- description: the origins and seed populations -->
img: assets/img/flare_sep.png
importance: 2
category: solar
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/schematic3.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Schematics of particle acceleration in the solar flare region and transport in the solar eruption region. Left: A zoom-in diagram of a flare region filled with magnetic islands (large black circles) or turbulent fluctuations (blue circles). The accelerated particles (orange) propagate to rest of the eruption region. Right: An illustration of the global eruption region. The solid black curves represent the magnetic field lines and the orange shades indicate the regions with accelerated particles. Particles accelerated in the reconnection region fill post-flare arcade and ejected flux ropes. They get released along open field lines (facilitated by interchange reconnection) and propagate in the CME front region and heliosphere.
</div>

The primary objective of this project is to understand the contribution of solar flares to seed particle processes of solar energetic particles (SEPs), including protons and heavy ions in solar flares and their release and transport processes in the solar eruption region. We are actively working on
* proton and heavy-ion acceleration in local reconnection layers using kinetic simulations (full PIC or hybrid)
* ion acceleration and transport in the flare reconnection region using 3D MHD + transport modelings
* ion acceleration and transport in the large-scale solar eruption regions modeled by the state-of-the-art 3D ARMS MHD simulations

## Publications
<div class="publications">
{% bibliography -f ref -q @*[projects ~= SEPs]* %}
</div>

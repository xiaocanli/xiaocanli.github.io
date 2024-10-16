---
layout: page
short_title: Solar Flares
title: Particle Acceleration and Transport in Solar Flares
<!-- description: large-scale particle acceleration and transport -->
img: assets/img/nrho_jz_s.png
importance: 1
category: solar
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/sep10th_modeling.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Modeling Electron Acceleration and Transport in the Early Impulsive Phase of the 2017 September 10th Solar Flare. Two cases with different Lundquist numbers are shown here. {% cite 2022ApJ...932...92L %}
</div>

Solar flares are among the most remarkable phenomenon of energy release and particle acceleration in our solar system. A large amount of magnetic energy in the solar corona can be released and converted into non-thermal particles within a few minutes. These high-energy particles produce impulsive non-thermal emissions that are commonly observed, and they can be released into interplanetary space and produce impulsive solar energetic particle events. The non-thermal emissions provide critical diagnostics of the non-thermal particles. Modeling particle acceleration during solar flares is particularly challenging due to the enormous scale separation (kinetic scales < m and global scales >1E8 m) in solar flares.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/framework.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A framework to bridge simulations and observations.
</div>

We have been building a framework for studying particle acceleration during solar flares. Besides the [kinetic studies](/projects/1_project/), we are actively working on
* building a numerical model solving the energetic particle transport equations
* studying electron acceleration in the whole flare region (e.g., reconnection and termination shocks)
* producing hard X-ray and microwave emissions from the MHD simulations and the energetic electron maps generated from the model and comparing them with the flare observations
* studying the large-scale transport of energetic electrons in the whole solar eruption regions ([SEPs project](/projects/5_project/))

## Publications
<div class="publications">
{% bibliography -f ref -q @*[projects ~= flare]* %}
</div>

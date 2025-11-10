---
layout: page
short_title: Solar Flares
title: Solar Flares
description: Multi-scale modeling that connects simulations and solar flare X-ray/radio observations.
img: assets/img/nrho_jz_s.png
importance: 1
category: energetic
status: active
updated: 2025-01-12
summary: >
  We integrate kinetic simulations, global MHD simulations, and energetic-particle transport solvers to explain how solar flares accelerate electrons/ions and how those populations light up hard X-ray and microwave observables.
hero:
  image: assets/img/3d_dists_flare.jpg
  alt: Modeling electron acceleration 3D flare simulations
  caption: >
    Three-dimensional volume rending of the spatially dependent electron distributions (Li et al. 2025).
highlights:
  - title: Integrated flare framework
    detail: Coupling reconnection-layer kinetics, termination shocks, and large-scale transport into a single pipeline that spans <1 m to >10^8 m.
  - title: GPU-accelerated modeling
    detail: Leveraging GPU-accelerated energetic particle solvers to efficiently explore flare acceleration and transport.
  - title: Synthetic observables
    detail: Generating hard X-ray and microwave emission maps directly from modeled electron distributions for comparison with RHESSI, EOVSA, and FOXSI.
  - title: SEP handoff
    detail: Feeding flare-accelerated spectra into eruption-scale transport models used in the companion SEPs project.
# resources:
#   - label: Flare transport model (PDF)
#     url: /assets/pdf/Li2022Modeling.pdf
#   - label: Magnetic bottle observations
#     url: /assets/pdf/Chen_2024_ApJ_971_85.pdf
#   - label: Compression acceleration study
#     url: /assets/pdf/Murtas_2024_ApJ_974_28.pdf
featured_publications:
  - title: Energy conversion and electron acceleration in 3D flares
    first_author: X. Li
    venue: ApJ
    year: 2025
    url: https://ui.adsabs.harvard.edu/abs/2025ApJ...991..202L
    external: true
  - title: Modeling Electron Acceleration and Transport in the Early Impulsive Phase (2017 Sep 10)
    first_author: X. Li
    venue: ApJ
    year: 2022
    url: https://ui.adsabs.harvard.edu/abs/2022ApJ...932...92L
    external: true
  - title: Compression Acceleration of Protons and Heavier Ions
    authors: G. Murtas, X. Li, & F. Guo
    venue: ApJ
    year: 2024
    url: https://ui.adsabs.harvard.edu/abs/2024ApJ...974...28M
    external: true
---

{% include project_overview.liquid %}

This effort ties directly into the [Solar Energetic Particles project](/projects/5_project/); reach out if you want to test diagnostics, add observational constraints, or explore joint modeling runs.

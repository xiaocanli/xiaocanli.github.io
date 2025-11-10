---
layout: page
short_title: Particle Acceleration
title: Acceleration Mechanisms
description: Large-scale kinetic simulations that explore different acceleration mechanisms.
img: assets/img/test_particle.png
importance: 1
category: energetic
status: active
updated: 2025-01-15
summary: >
  We run trillion-particle VPIC simulations alongside many diagnostics and analysis tools to quantify how particles are accelerated by magnetic reconnection, shocks, and turbulence. Our goal is to incorporate these results into  transport solvers to predict energetic particle fluxes in solar and astrophysical environments.
hero:
  image: assets/img/ptl-acc.png
  alt: Visualization of energetic-particle transport in reconnection
  caption: >
    Self-generated turbulence can enhance particle transport and acceleration in 3D reconnection. Simulations use [VPIC](https://github.com/lanl/vpic) with diagnostics from [Post-Analysis-VPIC](https://github.com/xiaocanli/Post-Analysis-VPIC).
highlights:
  - title: Exascale VPIC runs
    detail: >
      Launching trillion-particle GPU campaigns to study how reconnection-generated turbulence impacts particle acceleration and transport.
  - title: Transport model handoff
    detail: >
      Feeding reduced acceleration rates and diffusion coefficients into transport solvers to predict energetic particle fluxes.
  - title: Observatory alignment
    detail: >
      Comparing simulation results with in-site measurements from Parker Solar Probe, Solar Orbiter, and MMS to validate acceleration mechanisms.
  - title: AI-driven analysis
    detail: >
      Developing machine-learning tools to identify acceleration sites and classify particle trajectories in large datasets.
resources:
  - label: VPIC code
    url: https://github.com/lanl/vpic-kokkos
    external: true
  - label: HybridVPIC code
    url: https://github.com/lanl/vpic-kokkos/tree/hybridVPIC-K-devel
    external: true
  - label: Post-Analysis-VPIC toolkit
    url: https://github.com/xiaocanli/Post-Analysis-VPIC
    external: true
  - label: VPIC Quick Check
    url: https://github.com/xiaocanli/quick_check_vpic
    external: true
featured_publications:
  - title: Power-law acceleration in nonrelativistic reconnection
    first_author: X. Li
    venue: PoP
    year: 2021
    url: https://ui.adsabs.harvard.edu/abs/2021PhPl...28e2905L/abstract
    external: true
  - title: 3D reconnection and electron power laws
    first_author: X. Li
    venue: ApJ
    year: 2019
    url: https://ui.adsabs.harvard.edu/abs/2019ApJ...884..118L
    external: true
  - title: Acceleration during low-β reconnection
    authors: X. Li
    venue: ApJ
    year: 2017
    url: https://ui.adsabs.harvard.edu/abs/2017ApJ...843...21L/abstract
    external: true
---

{% include project_overview.liquid %}

If you’d like to benchmark your observations and experimental data against our simulations results, please [reach out](mailto:{{ site.email | encode_email }}); we routinely share reduced data products and analysis notebooks.

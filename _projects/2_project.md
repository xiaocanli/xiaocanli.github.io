---
layout: page
short_title: Reconnection Rate
title: Reconnection Rate Model
description: Analytical and PIC-informed reconnection rate scaling model in kinetic and MHD systems.
img: assets/img/xline.png
importance: 8
category: recon_turbulence
status: active
status_note:
summary: >
  We pair VPIC, MHD simulations, and reduced theory to understand how plasma beta, guide fields, and drift instabilities affect the canonical reconnection rate.
hero:
  image: assets/img/xline_l.png
  alt: Reconnection rate model visualization
  caption: >
    Reconnection rate models with thermal corrections built from VPIC benchmarks and analytic models (Li et al., 2021).
highlights:
  - title: Thermal corrections quantified
    detail: Determined how plasma beta modifies the normalized rate in symmetric reconnection.
  - title: Fast MHD reconnection
    detail: Explore how two-fluid and kinetic effects enable fast reconnection in MHD-scale systems.
  # - title: Tooling reuse
  #   detail: Delivered notebooks that let mission teams plug in upstream parameters and estimate rate ceilings without rerunning full PIC.
resources:
  - label: VPIC code
    url: https://github.com/lanl/vpic-kokkos
    external: true
  - label: VPIC Quick Check
    url: https://github.com/xiaocanli/quick_check_vpic
    external: true
featured_publications:
  - title: Fast Reconnection Rate with Thermal Corrections
    authors: X. Li & Y.-H. Liu
    venue: ApJ
    year: 2021
    url: https://ui.adsabs.harvard.edu/abs/2021ApJ...912..152L
    external: true
  - title: Spreading of Magnetic Reconnection X-lines
    authors: S.-C. Lin, Y.-H. Liu, & X. Li
    venue: JGR
    year: 2025
    url: https://ui.adsabs.harvard.edu/abs/2025JGRA..13033494L/abstract
    external: true
---

{% include project_overview.liquid %}

<!-- Although I am no longer actively working on reconnection rate modeling, the results from this project remain available for reference, and I am still collaborating with colleagues who are working on related topics. -->

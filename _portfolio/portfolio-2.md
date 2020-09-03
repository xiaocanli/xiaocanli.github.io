---
title: "Particle acceleration during solar flares"
excerpt: "<img src='/images/fig_mhd_parker.png'>"
collection: portfolio
---

[Solar flares][Flare] are among the most remarkable phenomenon of energy release and
particle acceleration in our solar system. A large amount of magnetic energy in
the solar corona can be released and converted into non-thermal particles
within a few minutes. These high-energy particles produce impulsive non-thermal
emissions that are commonly observed, and they can be released into
interplanetary space and produce impulsive solar energetic particle events.
The non-thermal emissions provide critical diagnostics of the non-thermal particles.

Modeling particle acceleration during solar flares is particularly challenging
because, first, the scale separation is enormous in solar flares. The typical
size of a solar flare is about $10^8$ m, while the characteristic kinetic
scales are < 10m. The scale separation makes it impossible to address particle
acceleration in solar flares using just a single simulation. 3D physics makes
this even more challenging, as both PIC and MHD simulations have shown that 3D
reconnection can self-generate turbulence. How does such turbulence affect
particle acceleration is mostly unknown. Last but not least, the observations
have shown that a large number of particles are accelerated, indicating that
the energetic particles containing enough energy to change the plasma dynamics.
Thus, feedback of energetic particles to plasma might be necessary.

![alt text](/images/flare_framework.png)

We have been working on building a framework like that for studying particle
acceleration during solar flares. There are five components in this framework. We
use kinetic simulations to study particle acceleration mechanisms and
turbulence properties and parametrize them as acceleration and diffusion terms
in a macroscopic energetic-particle model. The acceleration and diffusion terms
only depend on the macroscopic magnetic field and plasma flows. We then solve
it with high-resolution MHD simulations that provide accurate flare geometry
and large-scale magnetic field and plasma flows. The model can produce
spatially and temporally energetic-particle distributions, which can be used
for emission modeling. Both the energetic particle distributions and emission
maps can be compared with observations. Iteration between modeling and
observations will gradually improve the model's capability in interpreting the
observations.

As the first attempt, we solved Parker's transport equation, where compression
is the acceleration mechanism, in a 2D reconnection layer. We found that that
the electrons are efficiently accelerated in the compressible reconnection layer
and develop power-law energy distributions (panel (a) below). High-energy
particles are concentrated in some regions (panel (b) below).
See more details at [Li et al. 2018b](/publication/2018-paper3).

![alt text](/images/compress_parker.png)

[Flare]: https://en.wikipedia.org/wiki/Solar_flare

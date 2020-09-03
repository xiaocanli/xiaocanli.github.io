---
title: "Particle acceleration mechanisms in reconnection"
excerpt: "<img src='/images/fermi_rec.png'>"
collection: portfolio
---

Historically, it is thought that particles can only be accelerated at the
reconnection X-line. Recent studies have shown that the [Fermi mechanism][Fermi] is very
important for particle acceleration during reconnection. Particles could bounce
off the reconnection outflow and gain energy through the Fermi mechanism, but
this energy gain is not significant, especially for electrons. To gain more
energies, particles need to have multiple reflections off the reconnection
outflow. Recent studies have shown various possibilities for that. For example,
particles can circle contracting magnetic islands. They can bounce between
merging magnetic islands. Some particles can be trapped by an electric
potential near the X-line and experience multiple reflections. Or they can
experience turbulence scattering, turn back to the flow, get reflected again
and again. The multiple reflections will accelerate particles to high energies
in reconnection.

Using fully kinetic particle-in-cell simulations, we demonstrated
that the primary acceleration mechanism during magnetic reconnection is a Fermi-type
mechanism associated with particle [curvature drift][Drifts]. Below is an electron trajectory
showing that this electron continuously drifts along the y-direction as it gains energy.
Find more details at [Li et al. 2015](/publication/2015-paper1) and
[Li et al. 2017](/publication/2017-paper1).

![hahahahahah](/images/traj.png)

Later, we demonstrated that the Fermi-type acceleration is well captured by the
acceleration due to flow compression and shear. The latter is only effective
for particles with anisotropic distributions. When particles are strongly
scattered, particle distribution will be nearly isotropic, and the dominant
acceleration is due to flow compression. This result indicates that we may stay
particle acceleration in a large-scale reconnection layer using [energetic
particle transport equations][Parker], which describe particle acceleration due to flow
compression and shear and are widely used in diffusive shock acceleration.
Find more details at [Li et al. 2018a](/publication/2018-paper1).

<!-- ![alt text](/images/compress_pic.png) -->

The results on particle acceleration mechanisms are mostly based on
[particle-in-cell][PIC]
simulations with a reduced proton-to-electron mass (e.g., 25 instead of 1836).
By performing a series of PIC simulations with different mass ratios, we find
that mass ratio does not strongly change ion energization but does affect
electron energization.
kee more details at [Li et al. 2019](/publication/2019-paper1).

<!-- ![alt text](/images/jy_mime.png) -->

[Fermi]: https://en.wikipedia.org/wiki/Fermi_acceleration
[Drifts]: https://en.wikipedia.org/wiki/Guiding_center
[Parker]: https://ui.adsabs.harvard.edu/abs/1965P%26SS...13....9P/abstract
[PIC]: https://en.wikipedia.org/wiki/Particle-in-cell

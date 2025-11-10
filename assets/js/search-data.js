// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Selected publications with links to the full record on Google Scholar and ADS.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-just-updated-the-vpic-reconnection-tutorial-with-a-simpler-reconnection-deck",
          title: 'Just updated the vpic_reconnection_tutorial with a simpler reconnection deck.',
          description: "",
          section: "News",},{id: "news-just-updated-the-gpat-model-and-its-documentation",
          title: 'Just updated the GPAT model and its documentation.',
          description: "",
          section: "News",},{id: "news-returning-to-lanl-as-a-staff-scientist",
          title: 'Returning to LANL as a staff scientist',
          description: "",
          section: "News",},{id: "projects-acceleration-mechanisms",
          title: 'Acceleration Mechanisms',
          description: "Large-scale kinetic simulations that explore different acceleration mechanisms.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-reconnection-rate-model",
          title: 'Reconnection Rate Model',
          description: "Analytical and PIC-informed reconnection rate scaling model in kinetic and MHD systems.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-relativistic-reconnection",
          title: 'Relativistic Reconnection',
          description: "High-σ reconnection, particle injection, and radiation/polarization diagnostics for astrophysical plasmas.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-solar-flares",
          title: 'Solar Flares',
          description: "Multi-scale modeling that connects simulations and solar flare X-ray/radio observations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-solar-energetic-particles",
          title: 'Solar Energetic Particles',
          description: "Studying the origins and transport of solar energetic particles (SEPs) from flares and CMEs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-plasma-turbulence",
          title: 'Plasma Turbulence',
          description: "Energy dissipation and particle transport in plasma turbulence across heliophysics regimes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/xiaocanli", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-5278-8029", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=HvM9gWgAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

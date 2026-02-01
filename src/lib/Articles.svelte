<script lang="ts">
  import AnimatedLink from "./AnimatedLink.svelte";

  type Article = {
    title: string;
    url: string;
    date: string;
  };

  const articlesData: Article[] = [
    {
      title: "But Head: Crafting a Custom Font",
      url: "https://blog.gitbutler.com/but-head-font",
      date: "Feb 1, 2026"
    },
    {
      title: "Grid Happens: Because Flexbox Wasn't Enough",
      url: "https://blog.gitbutler.com/grid-happens",
      date: "Nov 1, 2025"
    },
    {
      title: "A Responsive Item Counter with CSS only",
      url: "https://blog.gitbutler.com/responsive-item-counter-css",
      date: "Oct 1, 2025"
    },
    {
      title: "Design Systems Entropy",
      url: "https://dev.to/pavellaptev/design-systems-entropy-4008",
      date: "Aug 23, 2023"
    },
    {
      title: "Simple grid system with subgrid classes",
      url: "https://dev.to/pavellaptev/simple-grid-system-with-subgrid-classes-2f44",
      date: "Apr 10, 2023"
    },
    {
      title: "Profile picture component",
      url: "https://dev.to/pavellaptev/profile-picture-component-3mf3",
      date: "Oct 23, 2022"
    },
    {
      title: "Squircles on the Web — Houdini to the rescue 🚑 🚀",
      url: "https://pavellaptev.medium.com/squircles-on-the-web-houdini-to-the-rescue-5ef11f646b72",
      date: "Apr 8, 2021"
    },
    {
      title:
        "How to create a Pan`n`Pinch component for a Figma plugin. Step-by-step Recipe.",
      url: "https://pavellaptev.medium.com/how-to-create-a-pan-n-pinch-component-for-a-figma-plugin-step-by-step-recipe-afea4d296e0",
      date: "Feb 7, 2021"
    },
    {
      title: "Kinetic Typography with ThreeJS",
      url: "https://blog.prototypr.io/kinetictypography-with-threejs-2bed948720a2",
      date: "Oct 17, 2020"
    },
    {
      title: "Make text pattern background with <canvas>",
      url: "https://medium.com/@PavelLaptev/make-text-pattern-background-with-canvas-d1d89268c35",
      date: "Sep 11, 2020"
    },
    {
      title: "iPad pointer on the web",
      url: "https://blog.prototypr.io/ipad-pointer-on-the-web-f3aaf48d515c",
      date: "Aug 10, 2020"
    },
    {
      title: "The Design System That Alteos Built",
      url: "https://medium.com/alteos-tech-blog/the-design-system-that-alteos-built-7dbbaf8a009e",
      date: "Jun 11, 2020"
    },
    {
      title: "JSON to Figma plugin. from Vanilla JS to React",
      url: "https://medium.com/@PavelLaptev/json-to-figma-plugin-from-vanilla-js-to-react-6229a64b3a3e",
      date: "Apr 25, 2020"
    },
    {
      title: "JSON to Figma Plugin. How to create a vanilla Figma Plugin",
      url: "https://medium.com/@PavelLaptev/json-to-figma-how-to-create-a-vanilla-figma-plugin-8aec40561886",
      date: "Feb 18, 2020"
    },
    {
      title:
        "Changing children's state from another component with React Hooks",
      url: "https://itnext.io/changing-children-state-from-another-component-with-react-hooks-5c982c042e8",
      date: "Nov 18, 2019"
    },
    {
      title: "Theming With CSS Variables",
      url: "https://blog.prototypr.io/css-variables-90cc4cdf41e9",
      date: "Oct 23, 2019"
    },
    {
      title: "Flex-box Grid System with SCSS. Old but gold",
      url: "https://medium.com/@PavelLaptev/flex-box-grid-system-with-sass-old-but-gold-d7d6ee31ef11",
      date: "Jul 28, 2019"
    },
    {
      title: "Create an app from scratch using FramerX",
      url: "https://medium.com/@PavelLaptev/create-an-app-from-the-stretch-using-framerx-9d15d06c8bdf",
      date: "Mar 31, 2019"
    },
    {
      title:
        "The Simpliest D3 map and way too long article about it, even its title. Breakdown of the Brutalism architecture map",
      url: "https://medium.com/@PavelLaptev/the-simpliest-d3-map-and-way-too-long-article-about-it-even-its-title-fc0f1d0bdf3f?source=friends_link&sk=cb2aa1d0494d4b7d93f70a9f1a80e43d",
      date: "Feb 19, 2019"
    },
    {
      title: "Design tokens with Figma",
      url: "https://medium.com/@PavelLaptev/design-tokens-with-figma-aef25c42430f",
      date: "Jan 7, 2019"
    },
    {
      title: "Use real data in Framer X",
      url: "https://blog.prototypr.io/use-real-data-in-framer-x-3801834e3f59",
      date: "Oct 6, 2018"
    },
    {
      title: "FramerX Beta overview and examples",
      url: "https://medium.com/@PavelLaptev/framer-x-beta-overview-and-examples-58dba80a6865",
      date: "Sep 17, 2018"
    },
    {
      title: "CSS weekly #2: An image on the left, text on the right",
      url: "https://medium.com/@PavelLaptev/css-weekly-2-an-image-on-the-left-text-on-the-left-a5e59b2acdb5",
      date: "Aug 18, 2018"
    },
    {
      title: "CSS weekly #1: Masonry layout",
      url: "https://medium.com/@PavelLaptev/css-weekly-1-masonry-layout-b26ae670accd",
      date: "Aug 11, 2018"
    },
    {
      title: "Figma web API",
      url: "https://itnext.io/figma-web-api-c581ba769e04",
      date: "Apr 3, 2018"
    },
    {
      title: "One more time with AR",
      url: "https://medium.com/inborn-experience/one-more-time-with-ar-b8c93e42430f",
      date: "Mar 4, 2018"
    },
    {
      title: "Learning CSS grid layout with the Swiss",
      url: "https://blog.usejournal.com/learning-css-grid-with-the-swiss-2bd02e913fa",
      date: "Jan 16, 2018"
    },
    {
      title: "VR/AR prototyping for everyone",
      url: "https://medium.com/inborn-experience/vr-ar-prototyping-for-everyone-ea6fb8f159b5",
      date: "Nov 27, 2017"
    },
    {
      title: "Three.js for beginers",
      url: "https://medium.com/@PavelLaptev/three-js-for-beginers-32ce451aabda",
      date: "Nov 19, 2017"
    },
    {
      title: "Glitch-brush with PixiJS",
      url: "https://medium.com/@PavelLaptev/glitch-brush-with-pixijs-32f4d83e25cd",
      date: "Oct 16, 2017"
    },
    {
      title: "Easy-breezy interactive 3d in Framer with Sketchfab API Utility",
      url: "https://blog.sketchfab.com/easy-breezy-interactive-3d-framerjs-sketchfab-api-utility",
      date: "Sep 20, 2017"
    },
    {
      title: "In search of lost parts",
      url: "https://medium.com/@PavelLaptev/in-search-of-lost-parts-43df21035a80",
      date: "Aug 12, 2017"
    },
    {
      title: "Japanese typography on the web — tips and tricks",
      url: "https://medium.com/@PavelLaptev/japanese-typography-on-the-web-tips-and-tricks-981f120ad20e",
      date: "Jun 20, 2017"
    }
  ];
</script>

<section class="section">
  <h2 class="section-title">Articles</h2>

  <div class="section-grid">
    {#each articlesData as article}
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        class="link-card"
      >
        <AnimatedLink text={article.title} />
        <span class="card-text">{article.date}</span>
      </a>
    {/each}
  </div>
</section>

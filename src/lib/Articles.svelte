<script lang="ts">
  import { getArticles, type ArticleMeta } from "./contentUtils";
  import { link } from "svelte-spa-router";

  type ExternalArticle = {
    title: string;
    url: string;
    date: string;
    external: true;
  };

  const externalArticles: ExternalArticle[] = [
    {
      title: "The Great CSS Expansion",
      url: "https://blog.gitbutler.com/the-great-css-expansion",
      date: "2026-03-19",
      external: true
    },
    {
      title: "But Head: Crafting a Custom Font",
      url: "https://blog.gitbutler.com/but-head-font",
      date: "2026-02-01",
      external: true
    },
    {
      title: "Grid Happens: Because Flexbox Wasn't Enough",
      url: "https://blog.gitbutler.com/grid-happens",
      date: "2025-11-01",
      external: true
    },
    {
      title: "A Responsive Item Counter with CSS only",
      url: "https://blog.gitbutler.com/responsive-item-counter-css",
      date: "2025-10-01",
      external: true
    },
    {
      title: "Design Systems Entropy",
      url: "https://dev.to/pavellaptev/design-systems-entropy-4008",
      date: "2023-08-23",
      external: true
    },
    {
      title: "Simple grid system with subgrid classes",
      url: "https://dev.to/pavellaptev/simple-grid-system-with-subgrid-classes-2f44",
      date: "2023-04-10",
      external: true
    },
    {
      title: "Profile picture component",
      url: "https://dev.to/pavellaptev/profile-picture-component-3mf3",
      date: "2022-10-23",
      external: true
    },
    {
      title: "Squircles on the Web — Houdini to the rescue 🚑 🚀",
      url: "https://pavellaptev.medium.com/squircles-on-the-web-houdini-to-the-rescue-5ef11f646b72",
      date: "2021-04-08",
      external: true
    },
    {
      title:
        "How to create a Pan`n`Pinch component for a Figma plugin. Step-by-step Recipe.",
      url: "https://pavellaptev.medium.com/how-to-create-a-pan-n-pinch-component-for-a-figma-plugin-step-by-step-recipe-afea4d296e0",
      date: "2021-02-07",
      external: true
    },
    {
      title: "Kinetic Typography with ThreeJS",
      url: "https://blog.prototypr.io/kinetictypography-with-threejs-2bed948720a2",
      date: "2020-10-17",
      external: true
    },
    {
      title: "Make text pattern background with <canvas>",
      url: "https://medium.com/@PavelLaptev/make-text-pattern-background-with-canvas-d1d89268c35",
      date: "2020-09-11",
      external: true
    },
    {
      title: "iPad pointer on the web",
      url: "https://blog.prototypr.io/ipad-pointer-on-the-web-f3aaf48d515c",
      date: "2020-08-10",
      external: true
    },
    {
      title: "The Design System That Alteos Built",
      url: "https://medium.com/alteos-tech-blog/the-design-system-that-alteos-built-7dbbaf8a009e",
      date: "2020-06-11",
      external: true
    },
    {
      title: "JSON to Figma plugin. from Vanilla JS to React",
      url: "https://medium.com/@PavelLaptev/json-to-figma-plugin-from-vanilla-js-to-react-6229a64b3a3e",
      date: "2020-04-25",
      external: true
    },
    {
      title: "JSON to Figma Plugin. How to create a vanilla Figma Plugin",
      url: "https://medium.com/@PavelLaptev/json-to-figma-how-to-create-a-vanilla-figma-plugin-8aec40561886",
      date: "2020-02-18",
      external: true
    },
    {
      title:
        "Changing children's state from another component with React Hooks",
      url: "https://itnext.io/changing-children-state-from-another-component-with-react-hooks-5c982c042e8",
      date: "2019-11-18",
      external: true
    },
    {
      title: "Theming With CSS Variables",
      url: "https://blog.prototypr.io/css-variables-90cc4cdf41e9",
      date: "2019-10-23",
      external: true
    },
    {
      title: "Flex-box Grid System with SCSS. Old but gold",
      url: "https://medium.com/@PavelLaptev/flex-box-grid-system-with-sass-old-but-gold-d7d6ee31ef11",
      date: "2019-07-28",
      external: true
    },
    {
      title: "Create an app from scratch using FramerX",
      url: "https://medium.com/@PavelLaptev/create-an-app-from-the-stretch-using-framerx-9d15d06c8bdf",
      date: "2019-03-31",
      external: true
    },
    {
      title:
        "The Simpliest D3 map and way too long article about it, even its title. Breakdown of the Brutalism architecture map",
      url: "https://medium.com/@PavelLaptev/the-simpliest-d3-map-and-way-too-long-article-about-it-even-its-title-fc0f1d0bdf3f?source=friends_link&sk=cb2aa1d0494d4b7d93f70a9f1a80e43d",
      date: "2019-02-19",
      external: true
    },
    {
      title: "Design tokens with Figma",
      url: "https://medium.com/@PavelLaptev/design-tokens-with-figma-aef25c42430f",
      date: "2019-01-07",
      external: true
    },
    {
      title: "Use real data in Framer X",
      url: "https://blog.prototypr.io/use-real-data-in-framer-x-3801834e3f59",
      date: "2018-10-06",
      external: true
    },
    {
      title: "FramerX Beta overview and examples",
      url: "https://medium.com/@PavelLaptev/framer-x-beta-overview-and-examples-58dba80a6865",
      date: "2018-09-17",
      external: true
    },
    {
      title: "CSS weekly #2: An image on the left, text on the right",
      url: "https://medium.com/@PavelLaptev/css-weekly-2-an-image-on-the-left-text-on-the-left-a5e59b2acdb5",
      date: "2018-08-18",
      external: true
    },
    {
      title: "CSS weekly #1: Masonry layout",
      url: "https://medium.com/@PavelLaptev/css-weekly-1-masonry-layout-b26ae670accd",
      date: "2018-08-11",
      external: true
    },
    {
      title: "Figma web API",
      url: "https://itnext.io/figma-web-api-c581ba769e04",
      date: "2018-04-03",
      external: true
    },
    {
      title: "One more time with AR",
      url: "https://medium.com/inborn-experience/one-more-time-with-ar-b8c93e42430f",
      date: "2018-03-04",
      external: true
    },
    {
      title: "Learning CSS grid layout with the Swiss",
      url: "https://blog.usejournal.com/learning-css-grid-with-the-swiss-2bd02e913fa",
      date: "2018-01-16",
      external: true
    },
    {
      title: "VR/AR prototyping for everyone",
      url: "https://medium.com/inborn-experience/vr-ar-prototyping-for-everyone-ea6fb8f159b5",
      date: "2017-11-27",
      external: true
    },
    {
      title: "Three.js for beginers",
      url: "https://medium.com/@PavelLaptev/three-js-for-beginers-32ce451aabda",
      date: "2017-11-19",
      external: true
    },
    {
      title: "Glitch-brush with PixiJS",
      url: "https://medium.com/@PavelLaptev/glitch-brush-with-pixijs-32f4d83e25cd",
      date: "2017-10-16",
      external: true
    },
    {
      title: "Easy-breezy interactive 3d in Framer with Sketchfab API Utility",
      url: "https://blog.sketchfab.com/easy-breezy-interactive-3d-framerjs-sketchfab-api-utility",
      date: "2017-09-20",
      external: true
    },
    {
      title: "In search of lost parts",
      url: "https://medium.com/@PavelLaptev/in-search-of-lost-parts-43df21035a80",
      date: "2017-08-12",
      external: true
    },
    {
      title: "Japanese typography on the web — tips and tricks",
      url: "https://medium.com/@PavelLaptev/japanese-typography-on-the-web-tips-and-tricks-981f120ad20e",
      date: "2017-06-20",
      external: true
    }
  ];

  // Merge local MD articles with external articles, sorted by date
  const localArticles = getArticles();
  const allArticles = [
    ...localArticles.map((a) => ({
      title: a.title,
      date: a.date,
      slug: a.slug,
      external: false as const,
      url: a.url
    })),
    ...externalArticles
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
</script>

<section class="section">
  <h2 class="section-title">Articles</h2>

  <div class="section-grid">
    {#each allArticles as article}
      {#if article.external}
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          class="link-card"
          data-sveltekit-noscroll
        >
          <h3 class="card-title">{article.title}</h3>
          <span class="card-text">{formatDate(article.date)}</span>
        </a>
      {:else}
        <a href="/articles/{article.slug}" use:link class="link-card">
          <h3 class="card-title">{article.title}</h3>
          <span class="card-text">{formatDate(article.date)}</span>
        </a>
      {/if}
    {/each}
  </div>
</section>

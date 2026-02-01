<script lang="ts">
  import { onMount } from "svelte";

  const links = [
    { name: "GitHub", url: "https://github.com/PavelLaptev" },
    { name: "Figma", url: "https://www.figma.com/@pavellaptev" },
    {
      name: "Bluesky",
      url: "https://bsky.app/profile/pavellaptev.bsky.social"
    },
    { name: "Linkedin", url: "https://www.linkedin.com/in/pavel-laptev/" }
  ];

  let theme = "light";

  onMount(() => {
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem("theme") || "light";
    theme = savedTheme;
    document.documentElement.setAttribute("data-theme", theme);
  });

  function toggleTheme() {
    theme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }
</script>

<header>
  <nav>
    {#each links as link}
      <a href={link.url} target="_blank" rel="noopener noreferrer">
        {link.name}
      </a>
    {/each}
  </nav>

  <button on:click={toggleTheme} class="theme-toggle" aria-label="Toggle theme">
    {theme === "light" ? "🌚" : "🌞"}
  </button>
</header>

<style>
  header {
    margin-bottom: 60px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  nav {
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
  }

  a {
    color: var(--color-primary);
    font-size: 16px;
    font-weight: 500;
    text-decoration: underline;
    text-decoration-color: transparent;
    text-decoration-style: wavy;
    text-decoration-thickness: 2px;
    text-underline-offset: 3px;
  }

  a:hover {
    color: var(--color-accent);
    text-decoration-color: var(--color-accent);
  }

  .theme-toggle {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    padding: 0;
    line-height: 1;
    transition: transform 0.1s ease;
  }

  .theme-toggle:hover {
    transform: scale(1.1);
  }

  .theme-toggle:active {
    transform: scale(0.9);
  }

  @media (max-width: 768px) {
    header {
      margin-bottom: 40px;
    }

    nav {
      gap: 24px;
    }

    a {
      font-size: 15px;
    }
  }
</style>

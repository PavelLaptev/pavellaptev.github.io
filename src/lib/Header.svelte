<script lang="ts">
  const links = [
    { name: "GitHub", url: "https://github.com/PavelLaptev" },
    { name: "Figma", url: "https://www.figma.com/@pavellaptev" },
    {
      name: "Bluesky",
      url: "https://bsky.app/profile/pavellaptev.bsky.social"
    },
    { name: "Linkedin", url: "https://www.linkedin.com/in/pavel-laptev/" }
  ];

  type Theme = "light" | "dark" | "system";
  let theme = $state<Theme>("system");

  function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme(t: Theme) {
    theme = t;
    const resolved = t === "system" ? getSystemTheme() : t;
    document.documentElement.setAttribute("data-theme", resolved);
  }

  $effect(() => {
    const savedTheme =
      (localStorage.getItem("theme") as Theme | null) ?? "system";
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

    applyTheme(savedTheme);

    const handler = () => {
      if (theme === "system") applyTheme("system");
    };
    systemDark.addEventListener("change", handler);
    return () => systemDark.removeEventListener("change", handler);
  });

  function toggleTheme() {
    const next: Theme =
      theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    if (next === "system") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", next);
    }
    applyTheme(next);
  }

  const themeEmoji: Record<Theme, string> = {
    light: "🌞",
    dark: "🌚",
    system: "🌓"
  };
</script>

<header>
  <nav>
    {#each links as link}
      <a href={link.url} target="_blank" rel="noopener noreferrer">
        {link.name}
      </a>
    {/each}
  </nav>

  <button onclick={toggleTheme} class="theme-toggle" aria-label="Toggle theme">
    {themeEmoji[theme]}
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

<script lang="ts">
  import Header from "./lib/Header.svelte";
  import Hero from "./lib/Hero.svelte";
  import Plugins from "./lib/Plugins.svelte";
  import Pets from "./lib/Pets.svelte";
  import Articles from "./lib/Articles.svelte";
</script>

<main>
  <Header />
  <Hero />
  <Plugins />
  <Pets />
  <Articles />
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--color-background);
    color: var(--color-primary);
  }

  main {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  @media (max-width: 768px) {
    main {
      padding: 20px 16px;
    }
  }
</style>

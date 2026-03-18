<script lang="ts">
  import Router, { location } from "svelte-spa-router";
  import Home from "./lib/Home.svelte";
  import DigestPage from "./lib/DigestPage.svelte";
  import ArticlePage from "./lib/ArticlePage.svelte";

  const routes = {
    "/": Home,
    "/digest/:slug": DigestPage,
    "/articles/:slug": ArticlePage
  };

  $effect(() => {
    $location;
    // scroll to top on route change
    window.scrollTo(0, 0);
  });
</script>

<Router {routes} />

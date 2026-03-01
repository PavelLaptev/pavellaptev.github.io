<script lang="ts">
  import Router from "svelte-spa-router";
  import Home from "./lib/Home.svelte";
  import DigestPage from "./lib/DigestPage.svelte";
  import ArticlePage from "./lib/ArticlePage.svelte";

  const routes = {
    "/": Home,
    "/digest/:slug": DigestPage,
    "/articles/:slug": ArticlePage
  };
</script>

<Router {routes} />

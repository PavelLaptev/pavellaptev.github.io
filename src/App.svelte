<script lang="ts">
  import Router from "svelte-spa-router";
  import Home from "./lib/Home.svelte";
  import DigestPage from "./lib/DigestPage.svelte";

  const routes = {
    "/": Home,
    "/digest/:slug": DigestPage
  };
</script>

<Router {routes} />

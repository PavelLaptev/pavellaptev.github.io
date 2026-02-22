<script lang="ts">
  import { onMount } from "svelte";
  import { fetchIssues } from "./digestUtils";
  import { link } from "svelte-spa-router";

  type IndexEntry = {
    slug: string;
    number: number;
    title: string;
    date: string;
    description?: string;
  };
  let issues = $state<IndexEntry[]>([]);

  onMount(async () => {
    issues = await fetchIssues();
  });
</script>

<section class="section">
  <h2 class="section-title">Digest</h2>

  <div class="section-grid">
    {#each issues as issue}
      <a href="/digest/{issue.slug}" use:link class="link-card">
        <h3 class="card-title">#{issue.number} — {issue.title}</h3>
        {#if issue.description}
          <p class="card-text">
            {new Date(issue.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long"
            })}.
            {issue.description}
          </p>
        {/if}
      </a>
    {/each}
  </div>
</section>

<script lang="ts">
  import { getDigestIssues } from "./contentUtils";
  import { link } from "svelte-spa-router";

  const issues = getDigestIssues();
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

<script lang="ts">
  import { fetchIssue, type DigestIssue } from "./digestUtils";
  import { link } from "svelte-spa-router";

  const { params } = $props<{ params: { slug?: string } }>();

  let issue = $state<DigestIssue | null>(null);

  $effect(() => {
    (async () => {
      if (params.slug) {
        issue = await fetchIssue(params.slug);
      }
    })();
  });
</script>

<main>
  <nav class="breadcrumb">
    <a href="/" use:link>← Back</a>
  </nav>

  {#if issue}
    <article>
      <h1 class="page-title">#{issue.number} — {issue.title}</h1>
      {#if issue.description}
        <p class="issue-description">
          {new Date(issue.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long"
          })}. {issue.description}
        </p>
      {/if}
      {#each issue.sections as section}
        <div class="digest-section">
          <h2 class="section-label">{section.title}</h2>
          <ul class="links-grid">
            {#each section.links as item}
              <li>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link-card"
                >
                  <h3 class="card-title">{item.title}</h3>
                  {#if item.description}
                    <p class="card-text">{item.description}</p>
                  {/if}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </article>
  {:else}
    <p>Issue not found.</p>
  {/if}
</main>

<style>
  .breadcrumb {
    margin-bottom: 40px;
  }

  .breadcrumb a {
    font-size: 14px;
    color: var(--color-secondary);
    text-decoration: none;
  }

  .breadcrumb a:hover {
    color: var(--color-accent);
  }

  .page-title {
    font-size: 32px;
    font-weight: 600;
    margin: 0 0 12px 0;
    color: var(--color-primary);
  }

  .issue-description {
    font-size: 16px;
    color: var(--color-secondary);
    margin: 0 0 48px 0;
    line-height: 1.6;
  }

  .digest-section {
    margin-bottom: 48px;
  }

  .section-label {
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 16px;
    color: var(--color-tertiary);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .links-grid {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    column-gap: 32px;
    row-gap: 16px;
  }

  @media (max-width: 768px) {
    .page-title {
      font-size: 24px;
    }

    .links-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

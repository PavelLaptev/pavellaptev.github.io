<script lang="ts">
  import { getArticle, type Article } from "./contentUtils";
  import { link } from "svelte-spa-router";

  const { params } = $props<{ params: { slug?: string } }>();

  let article = $state<Article | null>(null);

  $effect(() => {
    if (params.slug) {
      article = getArticle(params.slug);
    }
  });
</script>

<div class="page">
  <main>
    <nav class="breadcrumb">
      <a href="/" use:link>← Back</a>
    </nav>

    {#if article}
      <article>
        <h1 class="page-title">{article.title}</h1>
        {#if article.description}
          <p class="article-description">
            {new Date(article.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric"
            })} — {article.description}
          </p>
        {/if}
        <div class="article-content">
          {@html article.html}
        </div>
      </article>
    {:else}
      <p>Article not found.</p>
    {/if}
  </main>
</div>

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

  .article-description {
    font-size: 16px;
    color: var(--color-secondary);
    margin: 0 0 48px 0;
    line-height: 1.6;
  }

  .article-content {
    line-height: 1.8;
    font-size: 16px;
    color: var(--color-primary);
  }

  .article-content :global(h2) {
    font-size: 24px;
    font-weight: 600;
    margin: 40px 0 16px;
  }

  .article-content :global(h3) {
    font-size: 20px;
    font-weight: 600;
    margin: 32px 0 12px;
  }

  .article-content :global(p) {
    margin: 0 0 16px;
  }

  .article-content :global(a) {
    color: var(--color-accent);
    text-decoration: underline;
  }

  .article-content :global(a:hover) {
    opacity: 0.8;
  }

  .article-content :global(code) {
    background: var(--color-code-bg);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 88%;
  }

  .article-content :global(pre) {
    background: var(--color-code-bg);
    padding: 16px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 0 0 24px;
  }

  .article-content :global(pre code) {
    background: none;
    padding: 0;
    font-size: 88%;
    line-height: 1.6;
  }

  .article-content :global(ul),
  .article-content :global(ol) {
    margin: 0 0 16px;
    padding-left: 24px;
  }

  .article-content :global(li) {
    margin-bottom: 8px;
  }

  .article-content :global(blockquote) {
    border-left: 3px solid var(--color-accent);
    background: var(--color-code-bg);
    margin: 0 0 24px;
    padding: 8px 16px;
    color: var(--color-secondary);
  }

  .article-content :global(blockquote p:last-child) {
    margin-bottom: 0;
  }

  .article-content :global(img) {
    max-width: 100%;
    border-radius: 8px;
    margin: 16px 0;
  }

  .article-content :global(hr) {
    border: none;
    border-top: 1px solid var(--color-tertiary);
    margin: 32px 0;
  }

  @media (max-width: 768px) {
    .page-title {
      font-size: 24px;
    }
  }
</style>

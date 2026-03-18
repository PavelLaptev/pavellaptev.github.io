<script lang="ts">
  import pluginsData from "../../public/plugins.json";

  type Plugin = {
    name: string;
    url: string;
    iconUrl: string;
    likes: number;
    likesShort: string;
    runs: number;
    runsShort: string;
  };
</script>

<section class="section">
  <h2 class="section-title">Figma plugins</h2>

  <div class="section-grid">
    {#each pluginsData as plugin}
      <a
        href={plugin.url}
        target="_blank"
        rel="noopener noreferrer"
        class="link-card"
      >
        <img
          src={plugin.iconUrl}
          alt="{plugin.name} icon"
          class="plugin-icon"
        />
        <h3 class="card-title">{plugin.name}</h3>
        <div class="card-meta">
          <span>{plugin.runsShort} installs</span>
          <span>∙</span>
          <span>{plugin.likesShort} likes</span>
        </div>
      </a>
    {/each}
  </div>
</section>

<style>
  .plugin-icon {
    width: 28px;
    height: 28px;
    border-radius: 8px;
    margin-bottom: 8px;
    object-fit: cover;
  }
</style>

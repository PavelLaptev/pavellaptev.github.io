<script lang="ts">
  import { onMount } from "svelte";
  import AnimatedLink from "./AnimatedLink.svelte";

  type Plugin = {
    name: string;
    url: string;
    likes: number;
    likesShort: string;
    runs: number;
    runsShort: string;
  };

  let plugins = $state<Plugin[]>([]);

  const toShortNum = (n: number): string => {
    if (n < 1e3) return n.toString();
    if (n >= 1e3) return (n / 1e3).toFixed(1) + "k";
    return n.toString();
  };

  onMount(async () => {
    try {
      // Fetch from static JSON file updated by GitHub Actions
      const response = await fetch("/plugins.json");
      const data = await response.json();

      const newPluginData: Plugin[] = data.meta.map((plugin: any) => {
        return {
          url: `https://www.figma.com/community/plugin/${plugin.id}`,
          name: (Object.values(plugin.versions)[0] as any).name,
          likes: plugin.like_count,
          likesShort: toShortNum(plugin.like_count),
          runs: plugin.unique_run_count,
          runsShort: toShortNum(plugin.unique_run_count)
        };
      });

      // Sort by runs
      const sortedPlugins = newPluginData.sort((a, b) => b.runs - a.runs);

      // Exclude cloned plugins
      const clonedPlugins = ["1050439261870735490", "1052604096433126717"];
      plugins = sortedPlugins.filter(
        (plugin) => !clonedPlugins.includes(plugin.url.split("/").pop() || "")
      );
    } catch (error) {
      console.error("Error fetching plugins:", error);
    }
  });
</script>

<section class="section">
  <h2 class="section-title">Figma plugins</h2>

  <div class="section-grid">
    {#each plugins as plugin}
      <a
        href={plugin.url}
        target="_blank"
        rel="noopener noreferrer"
        class="link-card"
      >
        <AnimatedLink text={plugin.name} />
        <div class="card-meta">
          <span>{plugin.runsShort} installs</span>
          <span>∙</span>
          <span>{plugin.likesShort} likes</span>
        </div>
      </a>
    {/each}
  </div>
</section>

<script lang="ts">
  import { onMount, afterUpdate } from "svelte";

  export let text: string;

  let container: HTMLElement;

  onMount(() => {
    wrapLines();
    window.addEventListener("resize", wrapLines);
    return () => window.removeEventListener("resize", wrapLines);
  });

  afterUpdate(() => {
    wrapLines();
  });

  function wrapLines() {
    if (!container || !text) return;

    const words = text.split(" ");
    container.innerHTML = "";

    // Create temporary element to measure text width
    const temp = document.createElement("span");
    const styles = window.getComputedStyle(container);
    temp.style.font = styles.font;
    temp.style.fontSize = styles.fontSize;
    temp.style.fontWeight = styles.fontWeight;
    temp.style.letterSpacing = styles.letterSpacing;
    temp.style.position = "absolute";
    temp.style.visibility = "hidden";
    temp.style.whiteSpace = "nowrap";
    temp.style.padding = "4px 6px";
    temp.style.marginLeft = "-6px";
    document.body.appendChild(temp);

    const containerWidth = container.offsetWidth;
    let currentLine = "";
    let lineIndex = 0;

    words.forEach((word, i) => {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      temp.textContent = testLine;
      const testWidth = temp.offsetWidth;

      if (testWidth > containerWidth && currentLine) {
        // Create line wrapper with background
        const lineBg = document.createElement("span");
        lineBg.className = "line-bg";
        lineBg.setAttribute("data-line", lineIndex.toString());
        lineBg.textContent = currentLine + " ";
        container.appendChild(lineBg);

        lineIndex++;
        currentLine = word;
      } else {
        currentLine = testLine;
      }

      if (i === words.length - 1) {
        const lineBg = document.createElement("span");
        lineBg.className = "line-bg";
        lineBg.setAttribute("data-line", lineIndex.toString());
        lineBg.textContent = currentLine;
        container.appendChild(lineBg);
      }
    });

    document.body.removeChild(temp);
  }
</script>

<h3 class="card-title animated-title" bind:this={container}></h3>

<style>
  .animated-title {
    font-size: 16px;
    font-weight: 500;
    text-wrap: balance;
    margin: 0 0 8px 0;
    line-height: 1.05;
    color: var(--color-primary);
    transition: color 0.2s ease;
  }

  :global(.line-bg) {
    position: relative;
    display: inline-block;
    padding: 4px 6px;
    margin-left: -6px;
    background-image: linear-gradient(var(--color-accent), var(--color-accent));
    background-size: 0% 100%;
    background-repeat: no-repeat;
    transition: background-size 0.2s ease;
  }

  :global(.line-bg[data-line="0"]) {
    transition-delay: 0s;
  }

  :global(.line-bg[data-line="1"]) {
    transition-delay: 0.1s;
  }

  :global(.line-bg[data-line="2"]) {
    transition-delay: 0.2s;
  }

  :global(.line-bg[data-line="3"]) {
    transition-delay: 0.3s;
  }

  :global(.line-bg[data-line="4"]) {
    transition-delay: 0.4s;
  }

  :global(.link-card:hover) .animated-title {
    color: white;
  }

  :global(.link-card:hover .line-bg) {
    background-size: 100% 100%;
  }
</style>

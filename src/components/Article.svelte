<script lang="ts">
  import { useId } from '$lib';
  import type { ContentItem } from '$lib/content';
  import { onDestroy, onMount } from 'svelte';
  import ArticleHeader from './ArticleHeader.svelte';
  import ContentWrapper from './ContentWrapper.svelte';
  import Img from './Img.svelte';
  import SparkleIcon from './icons/SparkleIcon.svelte';

  export let content: ContentItem;

  const id = useId();
  let observer: ResizeObserver;
  let heightRef: HTMLDivElement;
  let heightAdjustment: number = 0;

  onMount(() => {
    observer = new window.ResizeObserver(() => {
      if (!heightRef) {
        return;
      }

      let { height } = heightRef.getBoundingClientRect();

      let nextMultipleOf8 = 8 * Math.ceil(height / 8);

      heightAdjustment = nextMultipleOf8 - height;
    });
  });

  onDestroy(() => {
    if (observer) {
      observer.disconnect();
    }
  });
</script>

<article {id} class="scroll-mt-16" style={`padding-bottom: ${heightAdjustment}px;`}>
  <div bind:this={heightRef}>
    <ArticleHeader date={content.stamp} />
    <ContentWrapper className="typography">
      <Img src={content.image} />

      <h2>{content.title}</h2>

      {#each content.brief as brief}
        <p>{brief}</p>
      {/each}

      {#if content.media.length > 0}
        <h3><SparkleIcon /> Media Coverage Links</h3>
        <ul>
          {#each content.media as media}
            <li>
              <a href={media.url.href} target="_blank">{media.txt}</a>
            </li>
          {/each}
        </ul>
      {/if}
    </ContentWrapper>
  </div>
</article>

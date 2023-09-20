<script lang="ts">
  import { contents } from '$lib/content';

  import Article from '../components/Article.svelte';
</script>

{#each contents as content}
  <Article {content} />
{/each}

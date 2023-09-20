<script lang="ts">
  import GitHubIcon from './icons/GitHubIcon.svelte';
  import BookIcon from './icons/BookIcon.svelte';
  import LinkedIn from './icons/LinkedIn.svelte';

  export let href: string;
  export let icon: 'book' | 'github' | 'linkedin';
  export let compact = false;
  export let large = false;
  export let target: null | '_blank' = null;
  export let className: string = '';
</script>

<a
  {href}
  {target}
  class={`group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300 ${className}`}
  class:gap-x-2={compact}
  class:gap-x-3={!compact}
>
  <span
    class="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"
  />
  {#if icon === 'book'}
    <BookIcon className={`flex-none ${large ? 'h-6 w-6' : 'h-4 w-4'}`} />
  {:else if icon === 'linkedin'}
    <LinkedIn className={`flex-none ${large ? 'h-6 w-6' : 'h-4 w-4'}`} />
  {:else if icon === 'github'}
    <GitHubIcon className={`flex-none ${large ? 'h-6 w-6' : 'h-4 w-4'}`} />
  {/if}
  <span class="self-baseline text-white">
    <slot />
  </span>
</a>

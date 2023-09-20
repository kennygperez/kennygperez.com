<script lang="ts">
  import { Linkedin as LinkedInIcon, ExternalLink as ExternalLinkIcon, Github as GithubIcon } from 'lucide-svelte';

  export let href: string;
  export let icon: 'link' | 'github' | 'linkedin';
  export let target: null | '_blank' = null;
  export let className: string = '';
</script>

<a
  {href}
  {target}
  class={`group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-gray-500 transition-colors hover:text-sky-300 gap-x-2 ${className}`}
>
  <span
    class="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"
  />

  {#if icon === 'link'}
    <ExternalLinkIcon size={16} aria-hidden={true} />
  {:else if icon === 'linkedin'}
    <LinkedInIcon size={16} aria-hidden={true} />
  {:else if icon === 'github'}
    <GithubIcon size={16} aria-hidden={true} />
  {/if}

  <span class="self-baseline text-white">
    <slot />
  </span>
</a>

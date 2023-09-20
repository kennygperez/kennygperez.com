<script lang="ts">
  import '../app.css';
  import FixedSideBar from '../components/FixedSideBar.svelte';
  import Intro from '../components/Intro.svelte';
  import IntroFooter from '../components/IntroFooter.svelte';
  import Timeline from '../components/Timeline.svelte';
</script>

<svelte:head>
  <title>Kenny's Portfolio</title>

  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <link rel="icon" href="https://fav.farm/👨‍💻" />
</svelte:head>

<FixedSideBar>
  <Intro slot="main" />
  <IntroFooter slot="footer" />
</FixedSideBar>
<!-- ThemeToggle component is not MVP -->
<div class="relative flex-auto">
  <Timeline />
  <main class="space-y-20 py-20 sm:space-y-32 sm:py-32">
    <slot />
  </main>
</div>

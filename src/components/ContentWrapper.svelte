<script lang="ts">
  export let className: string = '';
</script>

<div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
  <div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
    <div class={`mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto ${className}`}>
      <slot />
    </div>
  </div>
</div>

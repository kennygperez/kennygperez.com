<script lang="ts">
  export let date: Date;

  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    timeZone: 'UTC',
  });
</script>

<time dateTime={date.toISOString()}>
  {dateFormatter.format(date)}
</time>

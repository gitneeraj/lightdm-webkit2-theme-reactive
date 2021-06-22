<script>
  import { fade } from 'svelte/transition'
  import Cancel from './base/Cancel.svelte'
</script>

<div class="wrapper w-full sm:min-w-[6rem]" in:fade>
  <h1 class="heading">Login settings</h1>
  <ul>
    <li>
      <p class="paragraph-text">Login form position</p>
      <ul class="flex justify-between">
        <li>Left</li>
        <li>Center</li>
        <li>Right</li>
      </ul>
    </li>
  </ul>
  <Cancel />
</div>

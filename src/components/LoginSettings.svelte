<script>
  import { fade } from 'svelte/transition'
  import Cancel from './base/Cancel.svelte'
</script>

<div class="wrapper" in:fade>
  <h1 class="heading">Login settings</h1>
  <ul>
    <li>
      <p>Login form position</p>
      <ul>
        <li>Left</li>
        <li>Center</li>
        <li>Right</li>
      </ul>
    </li>
  </ul>
  <Cancel />
</div>

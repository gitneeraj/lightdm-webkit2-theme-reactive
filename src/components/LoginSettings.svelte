<script>
  import { fade } from 'svelte/transition'
  import Cancel from './base/Cancel.svelte'

  let loginPosition = 'justify-start'
</script>

<div class="wrapper w-full md:w-96" in:fade>
  <h1 class="heading">Login settings</h1>
  <ul>
    <li>
      <p class="paragraph-text">Login form position</p>
      <ul class="flex justify-between">
        <li>
          <label for="login-left">
            <input
              type="radio"
              id="login-left"
              bind:group={loginPosition}
              value="justify-start"
            />Left
          </label>
        </li>

        <li>
          <label for="login-center">
            <input
              type="radio"
              id="login-center"
              bind:group={loginPosition}
              value="justify-center"
            />Center
          </label>
        </li>
        <li>
          <label for="login-right">
            <input
              type="radio"
              id="login-right"
              bind:group={loginPosition}
              value="justify-end"
            />Right
          </label>
        </li>
      </ul>
    </li>
  </ul>
  <Cancel />
</div>

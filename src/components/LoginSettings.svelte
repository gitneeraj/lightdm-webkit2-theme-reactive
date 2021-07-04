<script>
  import { fade } from 'svelte/transition'

  import { settings } from '../store'
  import { updateSettings } from '../helpers/functions'
  import Cancel from './base/Cancel.svelte'
  import { loginSettings } from './content.json'

  let loginPosition = 'justify-start'
  const { positions } = loginSettings

  const handleOnChange = e => {
    updateSettings({
      loginScreen: {
        position: e.target.value
      }
    })
  }
</script>

<div class="wrapper w-full md:w-96" in:fade>
  <h1 class="heading">Login settings</h1>
  <ul>
    <li>
      <p class="paragraph-text">Position of login form</p>
      <ul class="flex justify-between">
        {#each positions as position}
          <li>
            <label for={`login-position-${position.type}`}>
              <input
                type="radio"
                id={`login-position-${position.type}`}
                bind:group={loginPosition}
                value={position.value}
                on:change={e => handleOnChange(e)}
              />{position.text}
            </label>
          </li>
        {/each}
      </ul>
    </li>
  </ul>
  <Cancel />
</div>

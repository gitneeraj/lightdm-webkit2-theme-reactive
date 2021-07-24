<script>
  import { fade } from 'svelte/transition'

  import { settings } from '../store'
  import { updateSettings } from '../helpers/functions'
  import Cancel from './base/Cancel.svelte'
  import { loginSettings } from './content.json'

  let loginPosition = $settings.loginScreen?.position || 'justify-center'
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
      <p class="paragraph-text text-center mb-2">Position of login form</p>
      <ul class="flex justify-between">
        {#each positions as position}
          <li class="mr-8 last:mr-0">
            <label for={`login-position-${position.type}`}>
              <input
                class="mr-2"
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

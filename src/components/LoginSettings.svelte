<script>
  import { fade } from 'svelte/transition'

  import { settings } from '../store'
  import { updateSettings } from '../helpers/functions'
  import Cancel from './base/Cancel.svelte'
  import { loginSettings } from './content.json'

  let loginPosition = $settings.loginSettings?.position || 'justify-center'
  let loginBoxType = $settings.loginSettings?.box || 'card'
  const { positions, box } = loginSettings

  const handleOnChange = (e, setting) => {
    updateSettings(
      {
        [setting]: e.target.value
      },
      'loginSettings'
    )
  }
</script>

<div class="card p-5 wrapper w-full md:w-96" in:fade>
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
                on:change={e => handleOnChange(e, 'position')}
              />{position.text}
            </label>
          </li>
        {/each}
      </ul>
    </li>
    <li>
      <p class="paragraph-text text-center mb-2">Login box type</p>
      <ul class="flex justify-between">
        {#each box as boxType}
          <li class="mr-8 last:mr-0">
            <label for={`login-position-${boxType.type}`}>
              <input
                class="mr-2"
                type="radio"
                id={`login-position-${boxType.type}`}
                bind:group={loginBoxType}
                value={boxType.value}
                on:change={e => handleOnChange(e, 'box')}
              />{boxType.text}
            </label>
          </li>
        {/each}
      </ul>
    </li>
  </ul>
  <Cancel />
</div>

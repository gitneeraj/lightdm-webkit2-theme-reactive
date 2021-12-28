<script>
  // @ts-nocheck
  import { fade } from 'svelte/transition'

  import { settings } from '../store'
  import { updateSettings } from '../helpers/functions'
  import Cancel from './base/Cancel.svelte'
  import Icon from './base/Icon.svelte'
  let backgrounds = []

  const handleOnChange = (value, setting) => {
    updateSettings(
      {
        [setting]: value
      },
      'backgroundSettings'
    )
  }
</script>

<div class="wrapper w-full md:w-96" in:fade>
  <h1 class="heading">Background Patterns</h1>
  <Cancel />
</div>

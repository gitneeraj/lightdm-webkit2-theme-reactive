<script>
  // @ts-nocheck
  import { fade } from 'svelte/transition'

  import { settings } from '../store'
  import { updateSettings } from '../helpers/functions'
  import Cancel from './base/Cancel.svelte'
  import Toggle from './base/Toggle.svelte'

  let animatedWalls = $settings.backgroundSettings.animatedWalls
  let shootingStars = $settings.backgroundSettings.shootingStars
  let floatingBubbles = $settings.backgroundSettings.floatingBubbles
  let fireflies = $settings.backgroundSettings.fireflies
  let colorDrops = $settings.backgroundSettings.colorDrops

  const handleOnChange = (value, setting) => {
    updateSettings(
      {
        [setting]: value
      },
      'backgroundSettings'
    )
  }
</script>

<div class="card p-5 wrapper w-full md:w-96" in:fade>
  <h1 class="heading">Background Patterns</h1>
  <ul class="w-full">
    <li class="flex justify-between items-center">
      <p class="paragraph-text text-center mb-2">Animated Grid Walls</p>
      <Toggle
        bind:checked={animatedWalls}
        handleOnChange={() => handleOnChange(animatedWalls, 'animatedWalls')}
      />
    </li>
    <li class="flex justify-between items-center">
      <p class="paragraph-text text-center mb-2">Shooting Stars</p>
      <Toggle
        bind:checked={shootingStars}
        handleOnChange={() => handleOnChange(shootingStars, 'shootingStars')}
      />
    </li>
    <li class="flex justify-between items-center">
      <p class="paragraph-text text-center mb-2">Floating Bubbles</p>
      <Toggle
        bind:checked={floatingBubbles}
        handleOnChange={() =>
          handleOnChange(floatingBubbles, 'floatingBubbles')}
      />
    </li>
    <li class="flex justify-between items-center">
      <p class="paragraph-text text-center mb-2">Fireflies</p>
      <Toggle
        bind:checked={fireflies}
        handleOnChange={() => handleOnChange(fireflies, 'fireflies')}
      />
    </li>
    <li class="flex justify-between items-center">
      <p class="paragraph-text text-center mb-2">Color Drops</p>
      <Toggle
        bind:checked={colorDrops}
        handleOnChange={() => handleOnChange(colorDrops, 'colorDrops')}
      />
    </li>
  </ul>
  <Cancel />
</div>

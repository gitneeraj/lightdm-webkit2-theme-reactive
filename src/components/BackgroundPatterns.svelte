<script>
  // @ts-nocheck
  import { fade } from 'svelte/transition'

  import { settings } from '../store'
  import { updateSettings } from '../helpers/functions'
  import Cancel from './base/Cancel.svelte'

  let animatedWalls = $settings.backgroundSettings.animatedWalls === 'true'
  let shootingStars = $settings.backgroundSettings.shootingStars === 'true'
  let floatingBubbles = $settings.backgroundSettings.floatingBubbles === 'true'
  let fireflies = $settings.backgroundSettings.fireflies === 'true'
  let colorDrops = $settings.backgroundSettings.colorDrops === 'true'

  const handleOnChange = (event, setting) => {
    updateSettings(
      {
        [setting]: event.target.value
      },
      'backgroundSettings'
    )
  }
</script>

<div class="wrapper w-full md:w-96" in:fade>
  <h1 class="heading">Background Patterns</h1>
  <ul class="text-center">
    <li>
      <p class="paragraph-text text-center mb-2">Animated Grid Walls</p>
      <ul class="flex justify-between">
        <li class="mr-8 last:mr-0">
          <label for={`animated-walls-on`}>
            <input
              class="mr-2"
              type="radio"
              id={`animated-walls-on`}
              bind:group={animatedWalls}
              value={true}
              on:change={e => handleOnChange(e, 'animatedWalls')}
            />On
          </label>
        </li>
        <li>
          <label for={`animated-walls-off`}>
            <input
              class="mr-2"
              type="radio"
              id={`animated-walls-off`}
              bind:group={animatedWalls}
              value={false}
              on:change={e => handleOnChange(e, 'animatedWalls')}
            />Off
          </label>
        </li>
      </ul>
    </li>
    <li>
      <p class="paragraph-text text-center mb-2">Shooting Stars</p>
      <ul class="flex justify-between">
        <li class="mr-8 last:mr-0">
          <label for={`shooting-stars-on`}>
            <input
              class="mr-2"
              type="radio"
              id={`shooting-stars-on`}
              bind:group={shootingStars}
              value={true}
              on:change={e => handleOnChange(e, 'shootingStars')}
            />On
          </label>
        </li>
        <li>
          <label for={`shooting-stars-off`}>
            <input
              class="mr-2"
              type="radio"
              id={`shooting-stars-off`}
              bind:group={shootingStars}
              value={false}
              on:change={e => handleOnChange(e, 'shootingStars')}
            />Off
          </label>
        </li>
      </ul>
    </li>
    <li>
      <p class="paragraph-text text-center mb-2">Floating Bubbles</p>
      <ul class="flex justify-between">
        <li class="mr-8 last:mr-0">
          <label for={`floating-bubbles-on`}>
            <input
              class="mr-2"
              type="radio"
              id={`floating-bubbles-on`}
              bind:group={floatingBubbles}
              value={true}
              on:change={e => handleOnChange(e, 'floatingBubbles')}
            />On
          </label>
        </li>
        <li>
          <label for={`floating-bubbles-off`}>
            <input
              class="mr-2"
              type="radio"
              id={`floating-bubbles-off`}
              bind:group={floatingBubbles}
              value={false}
              on:change={e => handleOnChange(e, 'floatingBubbles')}
            />Off
          </label>
        </li>
      </ul>
    </li>
    <li>
      <p class="paragraph-text text-center mb-2">Fireflies</p>
      <ul class="flex justify-between">
        <li class="mr-8 last:mr-0">
          <label for={`fireflies-on`}>
            <input
              class="mr-2"
              type="radio"
              id={`fireflies-on`}
              bind:group={fireflies}
              value={true}
              on:change={e => handleOnChange(e, 'fireflies')}
            />On
          </label>
        </li>
        <li>
          <label for={`fireflies-off`}>
            <input
              class="mr-2"
              type="radio"
              id={`fireflies-off`}
              bind:group={fireflies}
              value={false}
              on:change={e => handleOnChange(e, 'fireflies')}
            />Off
          </label>
        </li>
      </ul>
    </li>
    <li>
      <p class="paragraph-text text-center mb-2">Color Drops</p>
      <ul class="flex justify-between">
        <li class="mr-8 last:mr-0">
          <label for={`color-drops-on`}>
            <input
              class="mr-2"
              type="radio"
              id={`color-drops-on`}
              bind:group={colorDrops}
              value={true}
              on:change={e => handleOnChange(e, 'colorDrops')}
            />On
          </label>
        </li>
        <li>
          <label for={`color-drops-off`}>
            <input
              class="mr-2"
              type="radio"
              id={`color-drops-off`}
              bind:group={colorDrops}
              value={false}
              on:change={e => handleOnChange(e, 'colorDrops')}
            />Off
          </label>
        </li>
      </ul>
    </li>
  </ul>
  <Cancel />
</div>

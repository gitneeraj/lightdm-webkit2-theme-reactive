<script>
  // @ts-nocheck
  import { fade } from 'svelte/transition'

  import { settings } from '../store'
  import { updateSettings, findImages } from '../helpers/functions'
  import Cancel from './base/Cancel.svelte'
  import Icon from './base/Icon.svelte'
  let backgrounds = []
  const backgroundPath =
    (window.greeter_config &&
      window.greeter_config.branding &&
      window.greeter_config.branding.background_images) ||
    '/usr/share/backgrounds'

  const handleOnChange = (value, setting) => {
    updateSettings(
      {
        [setting]: value
      },
      'backgroundSettings'
    )
  }

  findImages([backgroundPath]).then(backgroundImages => {
    backgrounds = backgroundImages
  })
</script>

<div class="wrapper w-full md:w-96" in:fade>
  <h1 class="heading">Backgrounds</h1>
  <div
    class="flex flex-col max-w-4xl min-w-min xs:min-w-[500px] sm:min-w-[800px] sm:max-h-[650px] xs:max-h-full items-center"
  >
    <ul
      class="dmlist flex justify-center items-center flex-wrap overscroll-y-auto overflow-x-hidden mb-8"
    >
      <li
        class={`card justify-center text-gray-100 dark:text-gray-400 hover:bg-opacity-10 dark:hover:bg-opacity-20 m-3 transition duration-200 relative`}
      >
        <button
          class="w-52 h-32 flex flex-col justify-center items-center focus:outline-none cursor-pointer bg-cover bg-center bg-no-repeat rounded-lg text-2xl"
          on:click={() => handleOnChange('none', 'backgroundImage')}
        >
          {#if !$settings?.backgroundSettings?.backgroundImage || $settings?.backgroundSettings?.backgroundImage === 'none'}
            <Icon
              class="absolute top-1 right-1 text-green-300"
              name="tick"
              height="24"
              width="24"
            />
          {/if}
          None
        </button>
      </li>
      {#each backgrounds as background}
        <li
          class={`card justify-center text-gray-100 dark:text-gray-400 hover:bg-opacity-10 dark:hover:bg-opacity-20 m-3 transition duration-200 relative`}
        >
          <button
            class="w-52 h-32 flex flex-col justify-center items-center focus:outline-none cursor-pointer bg-cover bg-center bg-no-repeat rounded-lg"
            style={`background-image: url(${background});`}
            on:click={() => handleOnChange(background, 'backgroundImage')}
          >
            {#if $settings?.backgroundSettings?.backgroundImage === background}
              <Icon
                class="absolute top-1 right-1 text-green-300"
                name="tick"
                height="24"
                width="24"
              />
            {/if}
          </button>
        </li>
      {/each}
    </ul>
  </div>
  <Cancel />
</div>

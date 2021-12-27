<script>
  // @ts-nocheck

  import { fade } from 'svelte/transition'

  import { settings } from '../store'
  import { updateSettings, findImages } from '../helpers/functions'
  import Cancel from './base/Cancel.svelte'
  import { loginSettings } from './content.json'
  let backgrounds = []

  const handleOnChange = (e, setting) => {
    updateSettings(
      {
        [setting]: e.target.value
      },
      'loginSettings'
    )
  }

  findImages(['/usr/share/backgrounds']).then(backgroundImages => {
    backgrounds = backgroundImages
  })
</script>

<div class="wrapper w-full md:w-96" in:fade>
  <h1 class="heading">Backgrounds</h1>
  <div
    class="flex flex-col max-w-4xl min-w-min sm:min-w-[500px] max-h-[550px] sm:max-h-full items-center"
  >
    <ul
      class="dmlist flex justify-center items-center flex-wrap overscroll-y-auto overflow-x-hidden mb-8"
    >
      {#each backgrounds as background, id}
        <li
          class={`card justify-center text-gray-100 dark:text-gray-400 hover:bg-opacity-10 dark:hover:bg-opacity-20 mb-6 transition duration-200 relative ${
            backgrounds.length === 1 ? 'mr-0' : 'mr-6'
          }`}
        >
          <button
            class="w-32 h-32 flex flex-col justify-center items-center focus:outline-none cursor-pointer"
          >
            <!-- {#if $defaultSession === key} -->
            <!--   <Icon -->
            <!--     class="absolute top-1 right-1 text-green-300" -->
            <!--     name="tick" -->
            <!--     height="24" -->
            <!--     width="24" -->
            <!--   /> -->
            <!-- {/if} -->
            <img src={background} alt={id} />
          </button>
        </li>
      {/each}
    </ul>
  </div>
  <Cancel />
</div>

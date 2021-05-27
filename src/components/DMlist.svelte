<script>
  import { fade } from 'svelte/transition'

  import Cancel from './base/Cancel.svelte'
  import lightdm from '../constants/lightdm'
  import { getAbsolutePath } from '../helpers/getAbsolutePath'
  import { setLocalStorage } from '../helpers/functions'
  import { DEFAULT_SESSION } from '../constants/variables'
  import Icon from './base/Icon.svelte'
  import { defaultSession } from '../store'

  let DEList = lightdm.sessions

  const handleDESelection = key => {
    setLocalStorage(DEFAULT_SESSION, key)
    $defaultSession = key
  }
</script>

<div in:fade>
  <div
    class="flex flex-col max-w-4xl min-w-min sm:min-w-[500px] max-h-[550px] sm:max-h-full items-center"
  >
    <ul
      class="dmlist flex justify-center items-center flex-wrap overscroll-y-auto overflow-x-hidden mb-8"
    >
      {#each DEList as { key, name }}
        <li
          class={`card justify-center text-gray-100 dark:text-gray-400 hover:bg-opacity-10 dark:hover:bg-opacity-20 mb-6 transition duration-200 relative ${
            DEList.length === 1 ? 'mr-0' : 'mr-6'
          }`}
        >
          <button
            class="w-32 h-32 flex flex-col justify-center items-center focus:outline-none cursor-pointer"
            on:click={() => handleDESelection(key)}
          >
            {#if $defaultSession === key}
              <Icon
                class="absolute top-1 right-1 text-green-300"
                name="tick"
                height="24"
                width="24"
              />
            {/if}
            <img
              src={`${getAbsolutePath()}images/sessions/${key}.png`}
              alt={name}
              height="64"
              width="64"
            />
            <span class="justify-self-end font-family-regular">{name}</span>
          </button>
        </li>
      {/each}
    </ul>
    <Cancel />
  </div>
</div>

<style>
  .dmlist {
    max-height: 45rem;
  }
</style>

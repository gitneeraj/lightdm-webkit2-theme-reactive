<script>
  import { fade } from 'svelte/transition'
  import Cancel from './base/Cancel.svelte'
  import Icon from './base/Icon.svelte'
  import lightdm from '../constants/lightdm'

  const handleOnShutDown = () => {
    lightdm.shutdown()
  }
  const handleOnRestart = () => {
    lightdm.restart()
  }
  const handleOnSuspend = () => {
    lightdm.suspend()
  }
</script>

<div class="power-outer-wrapper flex flex-col items-center" in:fade>
  <div class="power-wrapper flex flex-col sm:flex-row mb-8">
    <button
      class="w-32 h-32 sm:w-48 sm:h-48 text-lg sm:text-3xl py-8 flex flex-col justify-center items-center text-gray-100 dark:text-gray-400 shadow-lg bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-lg border-2 bg-white border-gray-50 border-opacity-10 border-solid dark:bg-gray-700 dark:bg-opacity-60 mb-6 sm:mb-0 mr-0 sm:mr-8 cursor-pointer hover:bg-opacity-10 dark:hover:bg-opacity-20 transition duration-200"
      on:click={handleOnShutDown}
    >
      <Icon name="power" class="power mb-3" width="48" height="48" />
      <span class="font-family-light">Shutdown</span>
    </button>
    <button
      class="w-32 h-32 sm:w-48 sm:h-48 text-lg sm:text-3xl py-8 flex flex-col items-center justify-center text-gray-100 dark:text-gray-400 shadow-lg bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-lg border-2 bg-white border-gray-50 border-opacity-10 border-solid dark:bg-gray-700 dark:bg-opacity-60 mb-6 sm:mb-0 mr-0 sm:mr-8 cursor-pointer hover:bg-opacity-10 dark:hover:bg-opacity-20 transition duration-200"
      on:click={handleOnRestart}
    >
      <Icon name="refresh-2" class="refresh-2 mb-3" width="48" height="48" />
      <span class="font-family-light">Restart</span>
    </button>
    <button
      class="w-32 h-32 sm:w-48 sm:h-48 text-lg sm:text-3xl py-8 flex flex-col items-center justify-center text-gray-100 dark:text-gray-400 shadow-lg bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-lg border-2 bg-white border-gray-50 border-opacity-10 border-solid dark:bg-gray-700 dark:bg-opacity-60 mb-6 sm:mb-0 cursor-pointer hover:bg-opacity-10 dark:hover:bg-opacity-20 transition duration-200"
      on:click={handleOnSuspend}
    >
      <Icon name="sleep" class="sleep mb-3" width="48" height="48" />
      <span class="font-family-light">Suspend</span>
    </button>
  </div>

  <Cancel />
</div>

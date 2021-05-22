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
    <div
      class="poweroff power-options w-48 text-3xl py-8 flex flex-col justify-center items-center text-gray-100 dark:text-gray-400 shadow-lg bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-lg border-2 bg-white border-gray-50 border-opacity-10 border-solid dark:bg-gray-700 dark:bg-opacity-60 mr-8 cursor-pointer hover:bg-opacity-10 dark:hover:bg-opacity-20 transition duration-200"
      on:click={handleOnShutDown}
    >
      <Icon name="power" class="power mb-3" width="48" height="48" />
      <span class="font-family-light">Shutdown</span>
    </div>
    <div
      class="restart power-options w-48 text-3xl py-8  flex flex-col items-center justify-center text-gray-100 dark:text-gray-400 shadow-lg bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-lg border-2 bg-white border-gray-50 border-opacity-10 border-solid dark:bg-gray-700 dark:bg-opacity-60 mr-8 cursor-pointer hover:bg-opacity-10 dark:hover:bg-opacity-20 transition duration-200"
      on:click={handleOnRestart}
    >
      <Icon name="refresh-2" class="refresh-2 mb-3" width="48" height="48" />
      <span class="font-family-light">Restart</span>
    </div>
    <div
      class="sleep power-options w-48 text-3xl py-8 flex flex-col items-center justify-center text-gray-100 dark:text-gray-400 shadow-lg bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-lg border-2 bg-white border-gray-50 border-opacity-10 border-solid dark:bg-gray-700 dark:bg-opacity-60 cursor-pointer hover:bg-opacity-10 dark:hover:bg-opacity-20 transition duration-200"
      on:click={handleOnSuspend}
    >
      <Icon name="sleep" class="sleep mb-3" width="48" height="48" />
      <span class="font-family-light">Suspend</span>
    </div>
  </div>

  <Cancel />
</div>

<!-- <style lang="scss">
  .power-outer-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    .power-wrapper {
      display: flex;
      margin-bottom: 6em;
      flex-direction: column;

      .power-options {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2em;
        padding: 1em;
        min-width: 170px;
        transition: all 0.1s ease-in;

        span {
          margin-top: 0.5em;
          font-size: 1.5em;
          font-family: 'Lato Thin';
          font-weight: 600;
        }

        &:last-child {
          margin-bottom: 0;
        }

        &:hover,
        &:focus {
          background-color: $background-opacity-10;
          cursor: pointer;
          border-radius: 4px;
        }
      }
    }

    @media ($tablet) {
      .power-wrapper {
        flex-direction: row;
        .power-options {
          margin-right: 3em;
          margin-bottom: 0;

          span {
            margin-top: 1em;
            font-size: 2em;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
</style> -->

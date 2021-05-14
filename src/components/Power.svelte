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

<div class="power-outer-wrapper" in:fade>
  <div class="power-wrapper">
    <div class="poweroff power-options" on:click={handleOnShutDown}>
      <Icon name="power" class="power" width="48" height="48" />
      <span>Shutdown</span>
    </div>
    <div class="restart power-options" on:click={handleOnRestart}>
      <Icon name="refresh-2" class="refresh-2" width="48" height="48" />
      <span>Restart</span>
    </div>
    <div class="sleep power-options" on:click={handleOnSuspend}>
      <Icon name="sleep" class="sleep" width="48" height="48" />
      <span>Suspend</span>
    </div>
  </div>

  <Cancel />
</div>

<style lang="scss">
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
</style>

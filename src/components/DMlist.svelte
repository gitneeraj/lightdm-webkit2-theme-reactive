<script>
  import { fade } from 'svelte/transition'

  import lightdm from '../constants/lightdm'
  import { getAbsolutePath } from '../helpers/getAbsolutePath'

  let DEList = lightdm.sessions
</script>

<div in:fade>
  <ul
    class="dmlist flex justify-center items-center flex-wrap max-w-xl max-h-96 overscroll-y-auto overflow-x-hidden"
  >
    {#each DEList as DE}
      <li
        class="w-32 h-32 flex flex-col justify-center items-center text-gray-100 dark:text-gray-400 shadow-lg bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-lg border-2 bg-white border-gray-50 border-opacity-10 border-solid dark:bg-gray-700 dark:bg-opacity-60 cursor-pointer hover:bg-opacity-10 dark:hover:bg-opacity-20 mr-6 mb-6"
      >
        <img
          src={`${getAbsolutePath()}images/sessions/${DE.key}.png`}
          alt={DE.name}
          height="64"
          width="64"
        />
        <span class="justify-self-end">{DE.name}</span>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .dmlist {
    max-height: 45rem;
  }
</style>

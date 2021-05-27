<script>
  import { onMount } from 'svelte'

  import { getLocalStorage, setLocalStorage } from '../../helpers/functions'
  import Icon from './Icon.svelte'

  let toggleDark = false

  const handleToggleDark = () => {
    console.log('asdfsd');
    if (!toggleDark) document.querySelector('html').classList.add('dark')
    else document.querySelector('html').classList.remove('dark')

    toggleDark = !toggleDark
    setLocalStorage('toggleDark', toggleDark)
  }

  onMount(() => {
    toggleDark = getLocalStorage('toggleDark') === 'true' || false
    if (toggleDark) document.querySelector('html').classList.add('dark')
  })
</script>

<button
  type="button"
  class={`text-gray-100 focus:outline-none dark:text-gray-400 ${$$props.class}`}
  on:click={handleToggleDark}
>
  <Icon
    name={`${toggleDark ? 'sun-dark' : 'sun-light'}`}
    class={`mr-1 ${toggleDark ? 'sun-dark' : 'sun-light'}`}
    width="32"
    height="32"
  />
  {#if toggleDark}
    <span>Dark</span>
  {:else}
    <span>Light</span>
  {/if}
</button>

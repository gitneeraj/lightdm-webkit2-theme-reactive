<script>
  import { onMount } from 'svelte'

  import { getLocalStorage, setLocalStorage } from '../../helpers/functions'
  import Icon from './Icon.svelte'

  let toggleDark = false

  const handleToggleDark = () => {
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
  class="text-gray-100 focus:outline-none dark:text-gray-400"
  on:click={handleToggleDark}
>
  <Icon
    name={`${toggleDark ? 'sun-dark' : 'sun-light'}`}
    class={`${toggleDark ? 'sun-dark' : 'sun-light'}`}
    width="32"
    height="32"
  />
</button>

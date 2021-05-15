<script>
  // import { Link } from 'svelte-routing'
  // import Icon from './base/Icon.svelte'
  import DateTime from './base/datetime.svelte'

  let toggleDark = false
  const handleToggleDark = () => {
    if (!toggleDark) document.querySelector('html').classList.add('dark')
    else document.querySelector('html').classList.remove('dark')

    toggleDark = !toggleDark
  }
</script>

<header class="header-wrapper">
  <div id="settings">
    <!-- <Link to="settings" class="link-icon">
      <Icon name="cog" class="cog" width="32" height="32" />
    </Link> -->
  </div>
  <div id="system-info">
    <button
      type="button"
      class="text-gray-100 dark:text-gray-400"
      on:click={handleToggleDark}>Toggle Dark Mode</button
    >
    <DateTime />
  </div>
</header>

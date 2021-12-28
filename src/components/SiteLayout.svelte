<script>
  import Header from './Header.svelte'
  import Footer from './Footer.svelte'
  import GridAnimatedWall from './base/GridAnimatedWall.svelte'
  import ColorBalls from './base/ColorBalls.svelte'
  import { settings } from '../store'
</script>

<div
  class="sitelayout-wrapper bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-700 dark:to-gray-900 text-gray-100 dark:text-gray-400 bg-cover bg-center"
  style={$settings?.backgroundSettings?.backgroundImage &&
  $settings?.backgroundSettings?.backgroundImage !== 'none'
    ? `background-image: url(${$settings?.backgroundSettings?.backgroundImage})`
    : ''}
>
  <GridAnimatedWall />
  <!-- <ColorBalls /> -->
  <Header class="z-10" />
  <main class="main main-wrapper z-10">
    <slot />
  </main>
  <Footer class="z-10" />
</div>

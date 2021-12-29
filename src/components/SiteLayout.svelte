<script>
  import Header from './Header.svelte'
  import Footer from './Footer.svelte'
  import GridAnimatedWall from './base/GridAnimatedWall.svelte'
  import ShootingStars from './base/ShootingStars.svelte'
  import FloatingBubbles from './base/FloatingBubbles.svelte'
  import Fireflies from './base/Fireflies.svelte'
  import ColorDrops from './base/ColorDrops.svelte'
  import { settings } from '../store'
</script>

<div
  class="sitelayout-wrapper bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-700 dark:to-gray-900 text-gray-100 dark:text-gray-400 bg-cover bg-center"
  style={$settings?.backgroundSettings?.backgroundImage &&
  $settings?.backgroundSettings?.backgroundImage !== 'none'
    ? `background-image: url(${$settings?.backgroundSettings?.backgroundImage})`
    : ''}
>
  {#if $settings.backgroundSettings.animatedWalls}
    <GridAnimatedWall />
  {/if}

  {#if $settings.backgroundSettings.shootingStars}
    <ShootingStars />
  {/if}

  {#if $settings.backgroundSettings.floatingBubbles}
    <FloatingBubbles />
  {/if}

  {#if $settings.backgroundSettings.fireflies}
    <Fireflies />
  {/if}

  {#if $settings.backgroundSettings.colorDrops}
    <ColorDrops />
  {/if}
  <Header class="z-10" />
  <main class="main main-wrapper z-10">
    <slot />
  </main>
  <Footer class="z-10" />
</div>

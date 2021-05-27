<script>
  import Header from './Header.svelte'
  import Footer from './Footer.svelte'
  import GridAnimatedWall from './base/GridAnimatedWall.svelte'
</script>

<div
  class="sitelayout-wrapper bg-gradient-to-r from-blueGray-900 via-purple-900 to-blueGray-900 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-700 dark:to-gray-900"
>
  <GridAnimatedWall />
  <Header class="z-10" />
  <main class="main main-wrapper z-10">
    <slot />
  </main>
  <Footer class="z-10" />
</div>

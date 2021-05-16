<script>
  import Header from './Header.svelte'
  import Footer from './Footer.svelte'
  import TailwindCSS from './base/TailwindCSS.svelte'
  import GridAnimatedWall from './base/GridAnimatedWall.svelte'
</script>

<TailwindCSS />
<div
  class="sitelayout-wrapper bg-gradient-to-r from-blueGray-900 via-purple-900 to-blueGray-900 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-black"
>
  <!-- <div
    class="big-dot w-72 h-72 bg-red-300 absolute top-24 left-1/4 rounded-full bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300"
  />
  <div
    class="small-dot w-24 h-24 bg-red-300 absolute top-2/3 left-2/4 rounded-full bg-gradient-to-r from-indigo-400 via-blue-400 to-green-200"
  />
  <div
    class="w-12 h-12 bg-red-300 absolute top-2/3 left-1/3 rounded-full bg-gradient-to-r from-purple-200 via-purple-400 to-indigo-900"
  /> -->
  <GridAnimatedWall />
  <Header class="z-10" />
  <main class="main main-wrapper z-10">
    <slot />
  </main>
  <Footer class="z-10" />
</div>

<style lang="scss" global>
  @import 'src/styles/index.scss';

  .big-dot {
    top: 13%;
    left: 32%;
  }

  .small-dot {
    left: 57%;
    top: 63%;
  }
</style>

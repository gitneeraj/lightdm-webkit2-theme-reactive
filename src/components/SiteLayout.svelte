<script>
  import Header from './Header.svelte'
  import Footer from './Footer.svelte'
  import TailwindCSS from './base/TailwindCSS.svelte'
</script>

<TailwindCSS />
<div class="sitelayout-wrapper">
  <Header />
  <main class="main main-wrapper">
    <slot />
  </main>
  <Footer />
</div>

<style lang="scss" global>
  @import 'src/styles/index.scss';
</style>

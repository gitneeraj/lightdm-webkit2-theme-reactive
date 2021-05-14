<script>
  import { Router, Route } from 'svelte-routing'
  import Login from './components/Login.svelte'
  import DMlist from './components/DMlist.svelte'
  import Power from './components/Power.svelte'
  import Layout from './components/SiteLayout.svelte'
  import { initiateAuthenticationComplete } from './helpers/functions'
  import { onMount } from 'svelte'

  onMount(() => {
    initiateAuthenticationComplete()
  })
</script>

<Router>
  <Layout>
    <Route path="dmlist"><DMlist /></Route>
    <Route path="power"><Power /></Route>
    <Route path="*"><Login /></Route>
  </Layout>
</Router>

<script>
  import { Router, Route } from 'svelte-routing'
  import Login from './components/Login.svelte'
  import DMlist from './components/DMlist.svelte'
  import Power from './components/Power.svelte'
  import Layout from './components/SiteLayout.svelte'
  import {
    getLocalStorage,
    initiateAuthenticationComplete,
    setLocalStorage
  } from './helpers/functions'
  import { onMount } from 'svelte'
  import { BASE_URL } from './constants/variables'

  onMount(() => {
    initiateAuthenticationComplete()

    if (!getLocalStorage(BASE_URL))
      setLocalStorage(BASE_URL, window.location.pathname)
  })
</script>

<Router basepath={getLocalStorage(BASE_URL)}>
  <Layout>
    <Route path="dmlist"><DMlist /></Route>
    <Route path="power"><Power /></Route>
    <Route path="*"><Login /></Route>
  </Layout>
</Router>

<script>
  import { Router, Route } from 'svelte-routing'
  import Login from './components/Login.svelte'
  import DMlist from './components/DMlist.svelte'
  import Power from './components/Power.svelte'
  import Settings from './components/Settings.svelte'
  import LoginSettings from './components/LoginSettings.svelte'
  import Layout from './components/SiteLayout.svelte'
  import {
    getLocalStorage,
    initiateAuthenticationComplete,
    setLocalStorage
  } from './helpers/functions'
  import { onMount } from 'svelte'
  import { BASE_URL, SETTINGS } from './constants/variables'
  import { settings } from './store'

  onMount(() => {
    initiateAuthenticationComplete()
    setLocalStorage(SETTINGS, JSON.stringify($settings))

    if (!getLocalStorage(BASE_URL))
      setLocalStorage(BASE_URL, window.location.pathname)
  })
</script>

<Router
  basepath={!getLocalStorage(BASE_URL)
    ? window.location.pathname
    : getLocalStorage(BASE_URL)}
>
  <Layout>
    <Route path="dmlist"><DMlist /></Route>
    <Route path="power"><Power /></Route>
    <Route path="settings"><Settings /></Route>
    <Route path="login-settings"><LoginSettings /></Route>
    <Route path="*"><Login /></Route>
  </Layout>
</Router>

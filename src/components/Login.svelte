<script>
  import { slide, fade } from 'svelte/transition'

  import {
    isAuthenticationError,
    isLogin,
    isAuthenticated,
    settings
  } from '../store'
  import Icon from './base/Icon.svelte'
  import lightdm from '../constants/lightdm'
  import { DEFAULT_USERNAME } from '../constants/variables'
  import { getAbsolutePath } from '../helpers/getAbsolutePath'
  import {
    setLocalStorage,
    getLocalStorage,
    getUser
  } from '../helpers/functions'

  let username = getLocalStorage(DEFAULT_USERNAME) || null
  $: picture =
    (getUser(username) && getUser(username)[0] && getUser(username)[0].image) ||
    `${getAbsolutePath()}images/default-profile.png`
  let password = ''
  let isUsernameEmpty
  const { loginSettings } = $settings

  const handleOnSubmit = () => {
    isUsernameEmpty = false

    if (!username) {
      isUsernameEmpty = true
      return
    }
    setLocalStorage(DEFAULT_USERNAME, username)

    isLogin.update(() => true)
    isAuthenticationError.update(() => false)

    lightdm.cancel_authentication()
    lightdm.authenticate(username)

    setTimeout(() => {
      console.log(`responding for user ${username}`)
      lightdm.respond(password)
    }, 1000)
  }
</script>

<div
  class={`w-full h-full flex items-center md:p-12 ${loginSettings.position}`}
>
  <div
    class={`flex-col ${loginSettings.box} py-14 px-14 w-full md:w-96`}
    in:fade
  >
    <div
      class="w-24 h-24 mb-5 bg-gray-500 bg-center bg-cover rounded-full shadow-lg user-profile-image bg-opacity-20"
      style={`background-image: url('${picture}')`}
    />

    {#if $isAuthenticationError}
      <span transition:slide class="mb-5 text-red-400 error-message"
        >Invalid Credentials</span
      >
    {/if}

    <form
      class="flex flex-col items-center justify-center"
      on:submit|preventDefault={handleOnSubmit}
    >
      <input
        type="text"
        placeholder="Username"
        bind:value={username}
        autocomplete="off"
        class={`form-controls ${
          isUsernameEmpty ? 'animate-shake shadow-lg ring-red-300 ring-2' : ''
        }`}
        on:focus={() => (isUsernameEmpty = false)}
      />
      <!-- svelte-ignore a11y-autofocus -->
      <input
        type="password"
        placeholder="Password"
        bind:value={password}
        autocomplete="off"
        class="form-controls"
        autofocus
      />
      <button class="icon-btn" type="submit" disabled={$isLogin}>
        {#if $isLogin}
          <Icon
            name="loading"
            class="animate-spin loading"
            width="32"
            height="32"
          />
        {:else if $isAuthenticated}
          <Icon
            name="tick"
            class="tick"
            width="32"
            height="32"
            fill="#00d2a6"
          />
        {:else}
          <Icon name="arrow-right" class="dm-laptop" width="32" height="32" />
        {/if}
      </button>
    </form>
  </div>
</div>

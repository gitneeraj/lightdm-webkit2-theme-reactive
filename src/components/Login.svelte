<script>
  import { slide, fade } from 'svelte/transition'

  import { isAuthenticationError, isLogin, isAuthenticated } from '../store'
  import Icon from './base/Icon.svelte'
  import lightdm from '../constants/lightdm'
  import { DEFAULT_USERNAME } from '../constants/variables'
  import { getAbsolutePath } from '../helpers/getAbsolutePath'
  import { setLocalStorage, getLocalStorage } from '../helpers/functions'

  let username = getLocalStorage(DEFAULT_USERNAME) || null
  let password = ''
  let isUsernameEmpty

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
      console.log(`responding for user ${username} password ${password}`)
      lightdm.respond(password)
    }, 1000)
  }
</script>

<div class="card flex-col py-14 px-14" in:fade>
  <div
    class="user-profile-image h-24 w-24 mb-5 rounded-full bg-cover bg-center shadow-lg bg-gray-500 bg-opacity-20"
    style={`background-image: url('${getAbsolutePath()}images/default-profile.png')`}
  />

  {#if $isAuthenticationError}
    <span transition:slide class="error-message mb-5 text-red-400"
      >Invalid Credentials</span
    >
  {/if}

  <form
    class="flex flex-col justify-center items-center"
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
    <input
      type="password"
      placeholder="Password"
      bind:value={password}
      autocomplete="off"
      class="form-controls"
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
        <Icon name="tick" class="tick" width="32" height="32" fill="#00d2a6" />
      {:else}
        <Icon name="arrow-right" class="dm-laptop" width="32" height="32" />
      {/if}
    </button>
  </form>
</div>

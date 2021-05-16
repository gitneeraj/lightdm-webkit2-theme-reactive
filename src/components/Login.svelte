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

<div
  class="login-wrapper flex flex-col items-center shadow-lg bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-lg border-2 bg-white border-gray-50 py-12 px-20 border-opacity-10 border-solid dark:bg-gray-700"
  in:fade
>
  <div
    class="user-profile-image h-24 w-24 mb-5 rounded-full bg-cover bg-center shadow-lg bg-gray-500 bg-opacity-20"
    style={`background-image: url('${getAbsolutePath()}images/default-profile.png')`}
  />

  {#if $isAuthenticationError}
    <span transition:slide class="error-message text-red-400"
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
      class={`px-2 py-2 mb-3 text-center rounded focus:shadow-md outline-none transition ease-out duration-300 bg-white bg-opacity-10 text-gray-900 placeholder-gray-300 border-2 border-gray-50 border-opacity-5 border-solid dark:text-gray-300 ${
        isUsernameEmpty ? 'shake error-border' : ''
      }`}
    />
    <input
      type="password"
      placeholder="Password"
      bind:value={password}
      autocomplete="off"
      class="px-2 py-2 text-center rounded focus:shadow-md outline-none transition ease-out duration-300 bg-white bg-opacity-10 text-gray-900 placeholder-gray-300 border-2 border-gray-50 border-opacity-5 border-solid dark:text-gray-300"
    />
    <button
      class="focus:outline-none text-gray-100 mt-5 dark:text-gray-400"
      type="submit"
      disabled={$isLogin}
    >
      {#if $isLogin}
        <Icon name="loading" class="loading spinner" width="32" height="32" />
      {:else if $isAuthenticated}
        <Icon name="tick" class="tick" width="32" height="32" fill="#00d2a6" />
      {:else}
        <Icon name="arrow-right" class="dm-laptop" width="32" height="32" />
      {/if}
    </button>
  </form>
</div>

<!-- <style lang="scss">
  .login-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    .error-message {
      color: $rose-bud-dark;
      margin-bottom: 8px;
    }
    .user-profile-image {
      height: 100px;
      width: 100px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 50%;
      margin-bottom: 12px;
      box-shadow: -1px 3px 11px -3px rgba(0, 0, 0, 0.74);
      -webkit-box-shadow: -1px 3px 11px -3px rgba(0, 0, 0, 0.74);
      -moz-box-shadow: -1px 3px 11px -3px rgba(0, 0, 0, 0.74);
      background-color: $background;
    }

    form {
      display: flex;
      flex-direction: column;
    }

    input[type='text'],
    input[type='password'] {
      border-radius: 5px;
      padding: 8px;
      margin-bottom: 8px;
      background: $background-opacity;
      color: $background;
      letter-spacing: 0.3px;
      text-align: center;
      transition: all 0.2s;

      &:focus {
        outline: none;
        box-shadow: -1px 3px 4px -4px rgba(0, 0, 0, 0.74);
        -webkit-box-shadow: -1px 3px 4px -4px rgba(0, 0, 0, 0.74);
        -moz-box-shadow: -1px 3px 4px -4px rgba(0, 0, 0, 0.74);
      }
      &::placeholder {
        color: $background;
        opacity: 0.5;
      }
    }

    button {
      background: transparent;
      font-size: 30px;
      color: $background;
      cursor: pointer;

      &:focus {
        outline: none;
      }

      &:disabled {
        cursor: default;
      }
    }
  }
</style> -->

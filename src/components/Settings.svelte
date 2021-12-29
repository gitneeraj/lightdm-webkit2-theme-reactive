<script>
  import { fade } from 'svelte/transition'
  import { Link } from 'svelte-routing'
  import Cancel from './base/Cancel.svelte'
  import Icon from './base/Icon.svelte'
</script>

<div class="wrapper" in:fade>
  <h1 class="heading">Theme Configurations</h1>
  <ul class="flex flex-col w-full">
    <li>
      <Link to="login-settings" class="li-card">
        <Icon
          name="lock-login"
          class="lock-login mr-4"
          width="24"
          height="24"
        />
        <span class="font-family-light">Login Screen</span>
      </Link>
    </li>
    <li>
      <Link to="background-pictures" class="li-card">
        <Icon
          name="image"
          class="background-settings mr-4"
          width="24"
          height="24"
        />
        <span class="font-family-light">Background Pictures</span>
      </Link>
    </li>
    <li>
      <Link to="background-patterns" class="li-card">
        <Icon
          name="pattern"
          class="background-patterns mr-4"
          width="24"
          height="24"
        />
        <span class="font-family-light">Background Patterns</span>
      </Link>
    </li>
  </ul>
  <Cancel />
</div>

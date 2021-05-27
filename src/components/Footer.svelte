<script>
  import { onMount } from 'svelte'

  import { Link } from 'svelte-routing'
  import Icon from './base/Icon.svelte'
  import lightdm from '../constants/lightdm'

  let defaultDE = null
  onMount(() => {
    defaultDE =
      lightdm.default_session === 'default'
        ? lightdm.sessions[0].name
        : lightdm.default_session
  })
</script>

<footer class={`footer-wrapper ${$$props.class}`}>
  <div class="dm-list">
    <Link to="dmlist" class="icon-link">
      <Icon name="laptop" class="dm-laptop mr-2" width="32" height="32" />
      <span>{defaultDE}</span>
    </Link>
  </div>
  <div class="power-options">
    <Link to="power" class="icon-link">
      <Icon name="power" class="power" width="32" height="32" />
    </Link>
  </div>
</footer>

<script>
  import { Link } from 'svelte-routing'
  import Icon from './base/Icon.svelte'
  import lightdm from '../constants/lightdm'
  import { defaultSession } from '../store'

  $: DEName = lightdm.sessions.filter(
    session => session.key === $defaultSession
  )[0].name
</script>

<footer class={`footer-wrapper ${$$props.class}`}>
  <div class="dm-list">
    <Link to="dmlist" class="icon-link">
      <Icon name="laptop" class="dm-laptop mr-2" width="32" height="32" />
      <span>{DEName}</span>
    </Link>
  </div>
  <div class="power-options">
    <Link to="power" class="icon-link">
      <Icon name="power" class="power" width="32" height="32" />
    </Link>
  </div>
</footer>

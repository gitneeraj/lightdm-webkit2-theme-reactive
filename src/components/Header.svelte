<script>
  import ModeSwitch from './base/ModeSwitch.svelte'
  import { Link } from 'svelte-routing'
  import Icon from './base/Icon.svelte'

  import DateTime from './base/datetime.svelte'
</script>

<header class={`header-wrapper ${$$props.class}`}>
  <div id="settings">
    <Link to="settings" class="icon-link">
      <Icon name="cog" class="cog" width="32" height="32" />
    </Link>
  </div>
  <div id="system-info" class="flex items-center">
    <ModeSwitch class="mr-5 flex items-center" />
    <DateTime />
  </div>
</header>

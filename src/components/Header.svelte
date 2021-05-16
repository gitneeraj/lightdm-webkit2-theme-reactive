<script>
  import ModeSwitch from './base/ModeSwitch.svelte'
  // import { Link } from 'svelte-routing'
  // import Icon from './base/Icon.svelte'

  import DateTime from './base/datetime.svelte'
</script>

<header class={`header-wrapper ${$$props.class}`}>
  <div id="settings">
    <!-- <Link to="settings" class="link-icon">
      <Icon name="cog" class="cog" width="32" height="32" />
    </Link> -->
  </div>
  <div id="system-info" class="flex">
    <ModeSwitch class="mr-3" />
    <DateTime />
  </div>
</header>

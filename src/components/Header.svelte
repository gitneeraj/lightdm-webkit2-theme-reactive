<script>
  import { Link } from 'svelte-routing'
  import Icon from './base/Icon.svelte'
</script>

<header class="header-wrapper">
  <div id="settings">
    <Link to="settings" class="link-icon">
      <Icon name="cog" class="cog" width="32" height="32" />
    </Link>
  </div>
  <div id="system-info">system info</div>
</header>

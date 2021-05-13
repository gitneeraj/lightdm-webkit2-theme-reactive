<script>
  import { Link } from 'svelte-routing'
  import Icon from './base/Icon.svelte'
</script>

<footer class="footer-wrapper">
  <div class="dm-list">
    <Link to="dmlist" class="link-icon">
      <Icon name="laptop" class="dm-laptop" width="32" height="32" />
      <span>Selected DE</span>
    </Link>
  </div>
  <div class="power-options">
    <Link to="power" class="link-icon">
      <Icon name="power" class="power" width="32" height="32" />
    </Link>
  </div>
</footer>

<script>
  import { Link } from 'svelte-routing'
  import Icon from './Icon.svelte'
</script>

<Link to="/" class="link-icon">
  <Icon name="arrow-left" class="cancel" width="22" height="22" />
  <span>Cancel</span>
</Link>

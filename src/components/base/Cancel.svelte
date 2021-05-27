<script>
  import { Link } from 'svelte-routing'
  import Icon from './Icon.svelte'
</script>

<Link to="/" class="icon-link">
  <Icon name="arrow-left" class="cancel mr-2" width="22" height="22" />
  <span>Go Back</span>
</Link>

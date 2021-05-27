<script>
  import { Link } from 'svelte-routing'
  import Icon from './Icon.svelte'
</script>

<Link to="/" class="flex items-center text-gray-100 dark:text-gray-400">
  <Icon name="arrow-left" class="cancel mr-2" width="22" height="22" />
  <span>Go Back</span>
</Link>

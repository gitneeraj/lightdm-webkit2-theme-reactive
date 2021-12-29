<script>
  import { onMount } from 'svelte'

  const months = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec'
  }

  let date = new Date()
  $: hour = date.getHours()
  $: min = date.getMinutes()
  $: sec = date.getSeconds()
  $: month = date.getUTCMonth()
  $: day = date.getUTCDate()
  $: year = date.getUTCFullYear()

  onMount(() => {
    setInterval(() => {
      date = new Date()
    }, 1000)
  })
</script>

<div class="text-gray-100 dark:text-gray-400">
  {day}
  {months[month]}
  {year}
  {hour} : {min} : {sec <= 9 ? `0${sec}` : sec}
</div>

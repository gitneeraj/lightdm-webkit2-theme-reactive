<script>
  import { onMount } from 'svelte'

  const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
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

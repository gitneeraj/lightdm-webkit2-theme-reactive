<script>
  // From https://codepen.io/chris__sev/pen/rNWzozP?editors=1010
  import { onMount } from 'svelte'

  let wrapper

  onMount(() => {
    // grab everything we need
    const gridItems = wrapper.querySelectorAll('.grid-background > div')
    // loop over grid items and create a random duration + delay for each
    gridItems.forEach(item => {
      // calculate random number for delay
      const delay = getRandomInt(0, 5)

      // calculate random number for duration
      const duration = getRandomInt(3, 6)

      // set both
      item.style.animationDelay = `${delay}s`
      item.style.animationDuration = `${duration}s`
    })

    function getRandomInt(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  })
</script>

<!-- grid background -->
<div
  bind:this={wrapper}
  class="grid-background absolute inset-0 p-2 grid grid-cols-12 gap-2 transform -skew-y-12 scale-125 opacity-50"
>
  <!-- row 1 -->
  <div class="h-32 col-span-2 bg-gray-800 rounded animate-pulse" />
  <div class="h-32 col-span-5 bg-gray-800 rounded animate-pulse" />
  <div class="h-32 col-span-1 bg-gray-800 rounded animate-pulse" />
  <div class="h-32 col-span-4 bg-gray-800 rounded animate-pulse" />

  <!-- row 2 -->
  <div class="h-32 col-span-5 bg-gray-800 rounded animate-pulse" />
  <div class="h-32 col-span-3 bg-gray-800 rounded animate-pulse" />
  <div class="h-32 col-span-2 bg-gray-800 rounded animate-pulse" />
  <div class="h-32 col-span-2 bg-gray-800 rounded animate-pulse" />

  <!-- row 3 -->
  <div class="h-32 col-span-4 bg-gray-800 rounded animate-pulse" />
  <div class="h-32 col-span-7 bg-gray-800 rounded animate-pulse" />
  <div class="h-32 col-span-1 bg-gray-800 rounded animate-pulse" />

  <!-- row 4 -->
  <div class="h-32 col-span-2 bg-gray-800 rounded animate-pulse" />
  <div class="h-32 col-span-4 bg-gray-800 rounded animate-pulse" />
  <div class="h-32 col-span-6 bg-gray-800 rounded animate-pulse" />

  <!-- row 5 -->
  <div class="h-32 col-span-5 bg-gray-800 rounded animate-pulse" />
  <div class="h-32 col-span-3 bg-gray-800 rounded animate-pulse" />
  <div class="h-32 col-span-3 bg-gray-800 rounded animate-pulse" />

  <!-- row 6 -->
  <div class="h-32 col-span-4 bg-gray-800 rounded animate-pulse" />
  <div class="h-32 col-span-6 bg-gray-800 rounded animate-pulse" />
  <div class="h-32 col-span-2 bg-gray-800 rounded animate-pulse" />

  <!-- row 7 -->
  <div class="h-32 col-span-6 bg-gray-800 rounded animate-pulse" />
  <div class="h-32 col-span-3 bg-gray-800 rounded animate-pulse" />
  <div class="h-32 col-span-3 bg-gray-800 rounded animate-pulse" />

  <!-- row 8 -->
  <div class="h-32 col-span-2 bg-gray-800 rounded animate-pulse" />
  <div class="h-32 col-span-5 bg-gray-800 rounded animate-pulse" />
  <div class="h-32 col-span-5 bg-gray-800 rounded animate-pulse" />
</div>

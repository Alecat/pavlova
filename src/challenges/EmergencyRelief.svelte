<script lang="ts">
  const relief = [
    'Water, Can, Lantern',
    'Radio, Lantern, First Aid',
    'Bedroll, Can, Water',
    '2x Water, Torch',
    '2x Battery, Bedroll',
    'Can, First Aid, Torch',
    'Can, 2x Bedroll',
    'Battery, Torch, Radio',
  ]

  const dimmed = new Set<number>()

  const toggleItem = (index: number) => {
    console.log(dimmed, index)
    console.log(dimmed.has(index))
    if (dimmed.has(index)) {
      dimmed.delete(index)
    } else {
      dimmed.add(index)
    }
    dimmed = dimmed
  }
</script>

<main>
  Relief packages can have the below combinations.
  <br />
  <div class="wrapper">
    {#each relief as careItem, index}
      <img src="emergencyrelief/{index+1}.png" class:dimmed="{dimmed.has(index)}" alt={careItem} on:click="{() => toggleItem(index)}" />
    {/each}
  </div>
</main>

<style>
  div.wrapper {
    text-align: left;
    display: flex;
    max-width: 40rem;
    margin: 2rem auto;
    flex-wrap: wrap;
    justify-content: center;
  }
  img.dimmed {
    opacity: 0.5;
  }
</style>

<script lang="ts">
  let face = ''
  const setFaces = (f: 'bird' | 'ribbon') => {
    if (face === f) {
      face = ''
    } else {
      face = f
    }
  }
</script>

<main>
  Papa Moon's faces are randomised between two sets.
  <br />
  <div class="grid">
      <img src="partsandcrafts/bird_1.png" class={face==='ribbon' ? 'hide' : ''} on:click={() => setFaces('bird')} alt="Yellow: Bird, Bushy Eyebrows, Tongue" />
      <img src="partsandcrafts/bird_2.png" class={face==='ribbon' ? 'hide' : ''} on:click={() => setFaces('bird')} alt="Blue: Leaves, Gooseberries, Smile" />
      <img src="partsandcrafts/bird_3.png" class={face==='ribbon' ? 'hide' : ''} on:click={() => setFaces('bird')} alt="Purple: Ribbon, Flowers, Open Mouth" />
      <img src="partsandcrafts/bird_4.png" class={face==='ribbon' ? 'hide' : ''} on:click={() => setFaces('bird')} alt="Brown: Bell, Buttons, Pipecleaner" />
      <img src="partsandcrafts/ribbon_1.png" class={face==='bird' ? 'hide' : ''} on:click={() => setFaces('ribbon')} alt="Yellow: Ribbon, Bushy Eyebrows, Tongue" />
      <img src="partsandcrafts/ribbon_2.png" class={face==='bird' ? 'hide' : ''} on:click={() => setFaces('ribbon')} alt="Blue: Bell, Flowers, Pipecleaner" />
      <img src="partsandcrafts/ribbon_3.png" class={face==='bird' ? 'hide' : ''} on:click={() => setFaces('ribbon')} alt="Purple: Bird, Buttons, Smile" />
      <img src="partsandcrafts/ribbon_4.png" class={face==='bird' ? 'hide' : ''} on:click={() => setFaces('ribbon')} alt="Brown: Leaves, Gooseberries, Open Mouth" />
  </div>
</main>

<style>
  div.grid {
    text-align: left;
    display: grid;
    gap: 2rem 0;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    max-width: 40rem;
    margin: 2rem auto;
  }
  img {
    opacity: 1;
    cursor: pointer;
  }
  .hide {
    opacity: 0.4;
  }
</style>

<script lang="ts">
  import type { BobbingForBoxes } from '../interfaces'
  import { Postcode } from '../interfaces'
  import DropoffDeliveryZone from './DropoffDeliveryZone.svelte'
  import DropoffParcel from './DropoffParcel.svelte'
  export let challenge: BobbingForBoxes
</script>

<main>
  <div class="puzzles">
    {#each challenge.puzzles as puzzle}
        <div class="puzzlespace">
          {#each puzzle.puzzle as row}
            <div class="itemrow">
              {#each row as item}
                <div class="item {item}" />
              {/each}
            </div>
          {/each}
        </div>
        <div class="letters">
        {#each puzzle.letters as letter}
          <img src="icons/{Postcode[letter]}.png" alt={Postcode[letter]} />
        {/each}
      </div>
    {/each}
  </div>
</main>

<style>
  .puzzles {
    margin: 2rem auto;
    max-width: 40rem;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 1rem 0;
  }
  .letters {
    border-bottom: 1px solid black;
    min-height: 5rem;
    text-align: left;
    padding-left: 1rem;

  }
  .puzzles img {
    height: 2.5rem;
    margin-top: 0.25rem;
    padding-left: 0.25rem;
  }
  .itemrow {
    display: flex;
  }
  .in {
    height: 100%;
  }
  .item {
    width: calc(1.5rem - 2px);
    height: calc(1.5rem - 2px);
    border-radius: 0.25rem;
    border: 1px solid paleturquoise;
  }
  .parcel {
    background: tan;
    border: 1px solid black;
  }
  .junk {
    background: pink;
  }
  .puzzlespace {
    background: paleturquoise;
    padding: .25rem;
    border-bottom: 1px solid black;
  }
</style>

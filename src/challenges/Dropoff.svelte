<script lang="ts">
  import type { Dropoff, DropoffPuzzleNew } from '../interfaces'
  import { Postcode } from '../interfaces'
  import DropoffDeliveryZone from './DropoffDeliveryZone.svelte'
  import DropoffParcel from './DropoffParcel.svelte'
  export let challenge: Dropoff

  const remapped: DropoffPuzzleNew[] = challenge.out?.map((o) => ({
    type: 'DropoffNew',
    deliveryZone: {
      dimensions: [8, 4],
      layout: '',
    },
    left: {
      in: o?.[3],
      out: o?.[0],
    },
    right: {
      in: o?.[4],
      out: o?.[1],
    },
    parcels: [
      { destination: 'N', window: 'left', coordinates: [1, 1] },
      { destination: 'S', window: 'right', coordinates: [1, 1] },
      { destination: 'S', window: 'right', coordinates: [1, 1] },
    ],
    notes: o?.[2],
  }))
  // console.log(remapped)
</script>

<main>
  {#if challenge.out?.length < 6}
    ⚠️ Need more info! Please screenshot any puzzle combos you find, showing the IN letter destinations, the OUT letter
    names and the starting puzzle configuration
  {/if}
  <div class="puzzles">
    {#if remapped?.length}
      <div class="puzzle" />
      {#each remapped as puzzle}
        <div class="in">
          {#if puzzle.left.in}
            <img src="icons/{Postcode[puzzle.left.in]}.png" alt={Postcode[puzzle.left.in]} />
          {/if}
        </div>
        <div class="outs">
          {puzzle.left.out || ''}
        </div>
        <div class="in">
          {#if puzzle.right.in}
            <img src="icons/{Postcode[puzzle.right.in]}.png" alt={Postcode[puzzle.right.in]} />
          {/if}
        </div>
        <div class="outs">
          {puzzle.right.out || ''}
        </div>
        <div class="puzzle">
          <!-- <DropoffDeliveryZone zone={puzzle.deliveryZone}>
          {#if puzzle.parcels.length}
            {#each puzzle.parcels as parcel}
              <DropoffParcel parcel={parcel} />
            {/each}
          {/if}
        </DropoffDeliveryZone> -->
        </div>
      {/each}
    {/if}
  </div>
</main>

<style>
  .puzzles {
    margin: 2rem auto;
    max-width: 40rem;
    display: grid;
    grid-template-columns: 2rem 1fr 1rem 1fr;
    align-items: center;
  }
  .puzzles > .outs {
    padding: 0.25rem 0;
  }
  .in > img {
    height: 2rem;
    margin-top: 0.25rem;
    padding-left: 0.25rem;
  }
  .puzzle {
    grid-column-start: 1;
    grid-column-end: 5;
    border-bottom: 1px solid black;
  }
  .outs + .in {
    border-left: 1px solid black;
  }
  .in {
    height: 100%;
  }
</style>

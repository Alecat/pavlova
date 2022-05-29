<script lang="ts">
  import Transcription from './challenges/Transcription.svelte'
  import Shipping from './challenges/Shipping.svelte'
  import Telegraph from './challenges/Telegraph.svelte'
  import Dropoff from './challenges/Dropoff.svelte'
  import PartsAndCrafts from './challenges/PartsAndCrafts.svelte';
  import BungalowBakeoff from './challenges/BungalowBakeoff.svelte';
  import EmergencyRelief from './challenges/EmergencyRelief.svelte';
  import StandYourPost from './challenges/StandYourPost.svelte';
  import BobbingForBoxes from './challenges/BobbingForBoxes.svelte';

  import type { Level } from './interfaces'
  export let level: Level
</script>

<main  id="{level.week}.{level.day}">
  <h1>{level.week}.{level.day} {level.name}</h1>
  {#if level.notes}
  <span>{level.notes}</span>
  {/if}

  {#if level.challenge.type === 'Transcription'}
    <Transcription challenge={level.challenge} />
  {/if}
  {#if level.challenge.type === 'Shipping'}
    <Shipping challenge={level.challenge} levelId={level.week + '.' + level.day} />
  {/if}
  {#if level.challenge.type === 'Telegraph'}
    <Telegraph challenge={level.challenge} />
  {/if}
  {#if level.challenge.type === 'Dropoff'}
    <Dropoff challenge={level.challenge} />
  {/if}
  {#if level.challenge.type === 'PartsAndCrafts'}
    <PartsAndCrafts />
  {/if}
  {#if level.challenge.type === 'BungalowBakeoff'}
    <BungalowBakeoff challenge={level.challenge} />
  {/if}
  {#if level.challenge.type === 'EmergencyRelief'}
    <EmergencyRelief />
  {/if}
  {#if level.challenge.type === 'StandYourPost'}
    <StandYourPost />
  {/if}
  {#if level.challenge.type === 'BobbingForBoxes'}
    <BobbingForBoxes challenge={level.challenge} />
  {/if}
  {#if level.challenge.type === 'TracksOfTerror'}
  <div class="tracksofterror">
    <img alt="4 green, 2 blue" src="tracksofterror/green.svg" />
    <img alt="4 blue, 2 green" src="tracksofterror/blue.svg" />
  </div>
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    font-size: 2em;
    font-weight: 300;
  }
  .tracksofterror {
    height: calc(100vh - 12rem);
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;
    gap: 2rem;
  }
  .tracksofterror img {
    flex: 1 1 50%;
    height: 50%;
  }

  @media (min-width: 600px) {
    main {
      min-height: 100vh;
      padding: 2rem 0;
    }
  }

</style>

<script lang="ts">
  import type { Suburb } from './interfaces'
  export let suburb: Suburb
</script>

<main>
    {#if suburb}
  <span class="suburb" style="color:{suburb.color}">
    <span class="name">{suburb.name} </span><strong class="postcode">{suburb.postcode}</strong>
  </span>
  {/if}
</main>

<style>
  main {
    /* text-align: right; */
    border-bottom: 1px solid black;
    font-weight: bold;
  }
  main .suburb {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .postcode {
    font-size: 1.25rem;
    background: white;
    padding: .25rem;
    font-family: monospace;
  }

</style>
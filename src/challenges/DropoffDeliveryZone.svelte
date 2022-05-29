<script lang="ts">
  import type { DropoffWindow, DropoffDeliveryZone } from '../interfaces'
  export let zone:DropoffDeliveryZone
</script>

<main style="width: {zone.dimensions[0]*2}rem; height: {zone.dimensions[1]*2}rem;">
  <slot />
</main>

<style>
  main {
    margin: auto;
    position: relative;

  }
</style>

<script lang="ts">
  import type { DropoffWindow, DropoffParcel } from '../interfaces'
  export let parcel: DropoffParcel
</script>

<main style="left: {parcel.coordinates[0]*2}rem;top: {parcel.coordinates[1]*2}rem">
  <div class="window {parcel.window}">{parcel.window === 'left' ? 'L' : 'R'}</div>
  <span class="destination">{parcel.destination}</span>
</main>

<style>
  main {
    width: calc(2rem - 2px);
    height: calc(2rem - 2px);
    background: white;
    border: 1px solid black;
    position: absolute;
  }
  .window {
    position: absolute;
    bottom: 0rem;
  }
  .window.left {
    left: 0.125rem;
  }
  .window.right {
    right: 0.125rem
  }
  .destination {
    line-height: 2rem;
  }
</style>

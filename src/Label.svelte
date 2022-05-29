<script lang="ts">
  import { Label } from './interfaces'
  export let label: Label
</script>

<main>
  <span class="label">
    <img class="imageLabel" src="icons/{Label[label]}.png" alt={Label[label]} />
  </span>
</main>

<style>
  main {
    /* margin-top: -1rem; */
  }
  span.label {
    margin: 0 0.25rem;
  }
  .imageLabel {
    width: 2.5rem;
  }
</style>

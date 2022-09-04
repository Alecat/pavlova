<script lang="ts">
  import { lang } from '../stores/store.js'
  import type { BungalowBakeoff } from '../interfaces'
  export let challenge: BungalowBakeoff
  import { LanguageLabels } from '../interfaces'

  const langs = Object.keys(LanguageLabels)

</script>

<main>
  <p>It is possible to apply two toppings from one icing machine with the right timing. Stomp, drop the second item into the machine and then stomp again.</p>
  <p><strong>Softlock warning</strong><br />Cookies can despawn if they are placed on the conveyors. This makes the level impossible to finish (to our knowledge).</p>
  <div class="grid">
    {#each challenge[$lang] as cookie}
      <div>{cookie.phrase}</div>
      <div>{cookie.dough}</div>
      <div>{cookie.toppings.join(', ')}</div>
    {/each}
  </div>
</main>

<style>
  div.grid {
    display: grid;
    grid-template-columns: auto auto auto;
    max-width: 40rem;
    margin: 2rem auto;
    width: max-content;
    text-align: left;
  }

  div.grid > div {
    padding: 1rem;
    border-bottom: 1px solid black;
  }
</style>

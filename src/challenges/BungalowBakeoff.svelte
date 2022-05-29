<script lang="ts">
  import { lang } from '../stores/store.js'
  import type { BungalowBakeoff } from '../interfaces'
  export let challenge: BungalowBakeoff
  import { LanguageLabels } from '../interfaces'

  const langs = Object.keys(LanguageLabels)

  let longestLang = 'en'
  langs.forEach((l) => {
    if (challenge[l].length > challenge[longestLang].length) {
      longestLang = l
    }
  })

  const missingLanguages = ['en', 'it', 'de', 'es', 'fr', 'pt']
    .filter((l) => !challenge[l] || challenge[l].length < challenge[longestLang].length)
    .map((l) => LanguageLabels[l])
</script>

<main>
  {#if !!missingLanguages.length}
    ⚠️ Need more info! We think there are {challenge[longestLang].length} phrases for this level.
    <br />
    {missingLanguages.join(', ')} {missingLanguages.length > 1 ? 'are' : 'is'}  missing phrases.
  {/if}
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

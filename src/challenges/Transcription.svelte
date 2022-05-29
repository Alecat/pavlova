<script lang="ts">
  import { lang } from '../stores/store.js'
  import type { Transcription } from '../interfaces'
  export let challenge: Transcription
  import { LanguageLabels } from '../interfaces'
  import TranscriptionMessage from './TranscriptionMessage.svelte'

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
    ⚠️ Need more info! We've found {challenge[longestLang].length} phrases for this level so far.
    <br />
    {missingLanguages.join(', ')}
    {missingLanguages.length > 1 ? 'are' : 'is'} missing phrases.
  {/if}
  {#if challenge[$lang].length}
    <div class="grid">
      <strong>Message</strong>
      <strong>{#if challenge[$lang].some(m => m.chops)}Words to cut{/if}</strong>
      {#each challenge[$lang] as message}
        <TranscriptionMessage {message} />
      {/each}
    </div>
  {/if}
</main>

<style>
  main .grid {
    display: grid;
    grid-template-columns: minmax(auto, max-content) auto;
    width: fit-content;
    grid-auto-rows: auto;
    text-align: left;
    margin: 2rem auto;
    padding: 0 2rem;
  }
  strong {
    border-bottom: 1px solid black;
    /* line-height: 3rem; */
    margin-bottom: 0rem;
  }
  /* @media (max-width: 1000px) {
    main .grid {
      grid-template-columns: auto;
    }
  } */
</style>

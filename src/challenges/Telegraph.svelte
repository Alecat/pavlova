<script lang="ts">
  import { lang } from '../stores/store.js'
  import type { Telegraph, Language } from '../interfaces'
  import { LanguageLabels } from '../interfaces'
  export let challenge: Telegraph
  let showPresses = false;

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

  const phraseCount = (phrase: string) => {
    if (phrase.length && !phrase.includes('?') && !phrase.includes('--')) {
      const nospaces = phrase.replaceAll(' ', '')
      const capitals = Array.from(nospaces).filter((l) => l === l.toLocaleUpperCase())
      return phrase.length + capitals.length + 1
    }
    return undefined
  }
  const langCount = (language: Language) => {
    let totalpress = 0
    let counted = 0
    challenge[language].forEach((phrase) => {
      const pCount = phraseCount(phrase)
      if (pCount) {
        totalpress += phraseCount(phrase)
        counted++
      }
    })
    const averagePress = totalpress / counted
    return +averagePress.toFixed(2)
  }

  let highlightedPhrase = undefined
  const toggleSelectedPhrase = (i: number) => {
    if (highlightedPhrase === i) {
      highlightedPhrase = undefined
      return
    }
    highlightedPhrase = i
  }
</script>

<main>
  {#if !!missingLanguages.length}
    ⚠️ Need more info! We've found {challenge[longestLang].length} phrases for this level so far.
    <br />
    {missingLanguages.join(', ')} {missingLanguages.length > 1 ? 'are' : 'is'} missing phrases.
  {/if}
  {#if !isNaN(langCount($lang))}
  <p>
    {LanguageLabels[$lang]} : ({langCount($lang)} avg)
    <br />
    <button on:click={() => showPresses = !showPresses}>Toggle press count</button>
  </p>
  {/if}
  {#each challenge[$lang] as phrase, i}
    <p on:click={() => toggleSelectedPhrase(i)} class={(highlightedPhrase ?? i) === i ? 'highlighted' : 'faded'}>
      <span class="mono">{phrase}</span>
      {showPresses &&       phraseCount(phrase) ? `(${phraseCount(phrase)} presses)` : ''}

    </p>
  {/each}
</main>

<style>
  p {
    cursor: pointer;
  }
  .mono {
    font-family: monospace;
    font-size: 1.2rem;
  }
  .faded {
    opacity: 0.4;
  }
</style>

<script lang="ts">
  import { summer, fall, winter } from './data'
  import Level from './Level.svelte'
  import { onMount } from 'svelte'
  import { lang } from './stores/store.js'
  import { LanguageLabels } from './interfaces'
  import type { Level as LevelType, Language } from './interfaces'

  const seasons = [
    { name: 'Summer', weeks: summer },
    { name: 'Fall', weeks: fall },
    { name: 'Winter', weeks: winter },
  ]
  let activeLevel: number = 0
  let levelString = '1.1'
  const decrementLevel = () => {
    if (activeLevel > 0) {
      activeLevel--
      scrollToLevel(activeLevel)
    }
  }
  const incrementLevel = () => {
    if (activeLevel < 4 * (summer.length + fall.length + winter.length)) {
      activeLevel++
      scrollToLevel(activeLevel)
    }
  }
  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === ' ') {
      event.preventDefault()
      if (event.shiftKey) {
        decrementLevel()
      } else {
        incrementLevel()
      }
    }
    if (event.key === 'Backspace') {
      event.preventDefault()
      decrementLevel()
    }
  }
  const scrollToLevelByWeekDay = (week: number | string, day?: number) => {
    if (typeof week === 'string') {
      const match = week.match(/([1-9])\.([1-4])/)
      if (match) {
        const [_, w, d] = match
        activeLevel = (parseInt(w) - 1) * 4 + parseInt(d) - 1
        location.hash = '#' + w + '.' + d
        levelString = w + '.' + d
      }
      return
    }
    activeLevel = (week - 1) * 4 + day - 1
    location.hash = '#' + week + '.' + day
    levelString = week + '.' + day
  }
  const scrollToLevel = (level: number) => {
    const week = Math.floor(level / 4) + 1
    const day = (level % 4) + 1
    location.hash = '#' + week + '.' + day
    levelString = week + '.' + day
  }

  onMount(async () => {
    const hash = location.hash
    const match = location.hash.match(/#([1-9])\.([1-4])/)
    if (match) {
      location.hash = ''
      const [_, week, day] = match
      activeLevel = (parseInt(week) - 1) * 4 + parseInt(day) - 1
      location.hash = hash
      levelString = week + '.' + day
    }
  })

  const needsLang = (level: LevelType) => {
    if (
      level.challenge.type === 'Telegraph' ||
      level.challenge.type === 'Transcription' ||
      level.challenge.type === 'BungalowBakeoff'
    ) {
      const langs = Object.keys(LanguageLabels)
      let longestLang = 'en'
      langs.forEach((l) => {
        if (level.challenge[l].length > level.challenge[longestLang].length) {
          longestLang = l
        }
      })
      const missingLangs = langs
        .filter(
          (l) =>
            !level.challenge[l] ||
            level.challenge[l].length < level.challenge[longestLang].length ||
            level.challenge[l].length < 6
        )
        .map((l) => LanguageLabels[l].substring(0, 4))
      if (missingLangs.length > 0) {
        return '⚠️ ' + missingLangs.join('')
      }
    }
    if (level.challenge.type === 'Dropoff' && level.challenge.out?.length < 6) {
      return '⚠️'
    }
    if (level.challenge.type === 'Shipping' && level.challenge.packages.length < 6) {
      return '⚠️'
    }
    return ''
  }

</script>

<svelte:window on:keydown={handleKeydown} />

<main>
  <div class="sidebar">
    <div class="sidebar-info">
      <select bind:value={$lang}>
        {#each Object.keys(LanguageLabels) as key}
          <option value={key}>{LanguageLabels[key]}</option>
        {/each}
      </select>
      <div class="seasons-info">
        Data collected by Boden and Alecat.
        <p>
          Report any discoveries to the <br /><a href="https://discord.com/invite/JX3DvhXgRT"
            >KeyWe speedrunning Discord</a
          >
        </p>
      </div>  
      <div class="seasons-dropdown">
        <button on:click={decrementLevel}>⏫</button>
        <select bind:value={levelString} on:change={(e) => scrollToLevelByWeekDay(e.currentTarget.value)}>
          {#each seasons as season}
            {#each season.weeks as week}
              {#each week as level}
                <option style="font-weight: bold" value="{level.week}.{level.day}">
                  {level.week}.{level.day} • {level.name}
                  {needsLang(level)}
                </option>
              {/each}
            {/each}
          {/each}
        </select>
        <button on:click={incrementLevel}>⏬</button>
      </div>
    </div>
    <div class="seasons-menu">
      {#each seasons as season}
        <div class={season.name}>
          <h3>{season.name}</h3>
          {#each season.weeks as week}
            <hr />
            <ul>
              {#each week as level}
                {#if activeLevel === (level.week - 1) * 4 + (level.day - 1)}
                  <li style="font-weight: bold" on:click={() => scrollToLevelByWeekDay(level.week, level.day)}>
                    <span class="level">{level.week}.{level.day}</span> • {level.name}
                    <span title="Needs info">{needsLang(level)}</span>
                  </li>
                {:else}
                  <li on:click={() => scrollToLevelByWeekDay(level.week, level.day)}>
                    <span class="level">{level.week}.{level.day}</span> • {level.name}
                    <span title="Needs info">{needsLang(level)}</span>
                  </li>
                {/if}
              {/each}
            </ul>
          {/each}
        </div>
      {/each}
    </div>
  </div>
  <div class="seasons">
    <div class="seasons-info">
      Levels with '⚠️' are missing data.
      <br />
      Data collected by Boden and Alecat.
      <p>
        Report any discoveries to the <br /><a href="https://discord.com/invite/JX3DvhXgRT"
          >KeyWe speedrunning Discord</a
        >
      </p>
    </div>
  {#each seasons as season}
      <div class={season.name}>
        {#each season.weeks as week}
          {#each week as level}
            <Level {level} />
          {/each}
          <hr />
        {/each}
      </div>
    {/each}
  </div>
</main>

<style>
  main {
    text-align: center;
    margin: 0 auto;
    display: grid;
    height: 100%;
    grid-auto-flow: column;
    grid-template-columns: max-content 1fr;
  }
  .seasons-dropdown {
    display: none;
  }
  .seasons-menu {
    display: flex;
    flex-direction: column;
  }
  .sidebar-info {
    position: sticky;
    top: 0;
    background: white;
  }
  .sidebar-info select {
    max-width: calc(100vw - 5rem);
  }
  div.seasons,
  div.sidebar {
    overflow-y: auto;
  }
  .seasons .seasons-info {
    display: none;
  }
  @media (max-width: 600px) {
    main {
      grid-template-rows: 5.5rem 1fr;
      width: 100vw;
    }
    .seasons .seasons-info {
      display: block;
    }
    .sidebar .seasons-info {
      display: none;
    }
    .sidebar .Summer,
    .sidebar .Fall,
    .sidebar .Winter {
      display: none;
    }
    .seasons-dropdown {
      display: block;
    }
    .seasons-menu {
      display: none;
    }
    .seasons {
      width: 100vw;
    }
  }
  ul {
    list-style-type: none;
    padding: 0 1rem;
  }
  li {
    text-align: left;
    cursor: pointer;
  }
  .level {
    font-family: monospace;
  }
  .active {
    font-weight: bold;
  }
  .Summer {
    background: gold;
  }
  .Fall {
    background: orange;
  }
  .Winter {
    background: paleturquoise;
  }
  hr {
    margin: 0 2rem;
  }

  main {
    max-width: none;
  }
</style>

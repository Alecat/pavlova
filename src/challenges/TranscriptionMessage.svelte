<script lang="ts">
  import { lang } from '../stores/store.js'
  import type { TranscriptionMessage } from '../interfaces'
  export let message: TranscriptionMessage
  let highlighted = true
</script>
<!-- {message.chops?.some((c) => c.includes(segment)) ? 'choppable' : ''} -->
<template>
  <div on:click={() => (highlighted = !highlighted)} class="message {highlighted ? 'highlighted' : 'faded'}">
    {#if message.segments.length}
      {#each message.segments.map(s => s.toLowerCase()) as segment}
        <span
          class="segment {message.phrase.toLowerCase().includes(segment + ' ') ? '' : 'partial'} {message.chops?.some(c => c.includes(segment)) ? 'bold' : ''}
          
          ">{segment}</span
        >{#if message.phrase.toLowerCase().includes(segment + ' ')}&nbsp;{/if}
      {/each}
    {:else}
      {message.phrase}
    {/if}
  </div>
  <div on:click={() => (highlighted = !highlighted)} class="chops {highlighted ? 'highlighted' : 'faded'}">
    {#if message.segments && message.chops}
      {#each message.chops as chop, i}
        {#each chop.map(c => c.toLowerCase()) as part, j}
          <span class="choppable segment {j < chop.length - 1 ? 'partial' : ''}"
            >{#if message.segments?.map(s => s.toLowerCase()).includes(part)}<strong>{part}</strong>{:else}<em>{part}</em>{/if}</span
          >{/each}&nbsp;
      {/each}
    {/if}
  </div>
</template>

<style>
  .segment {
    padding: 0 0.25rem;
    border: 1px solid #11111133;
    margin: 0 0.25rem 0 0;
    background: white;
    text-transform: lowercase;
    font-family: monospace;
    font-size: 1.2rem;
    line-height: 2rem;
    white-space: nowrap;
  }
  .segment.partial {
    margin: 0;
  }
  .segment.bold {
    border: 1px dashed #11111199;
  }
  .choppable {
    border: 1px dashed #11111199;
  }
  div.highlighted,
  div.faded {
    cursor: pointer;
    /* padding: 0 0 .25rem ; */
    border-bottom: 1px solid black;
    margin: 0.5rem 0 0;
    padding: 0.25rem 0 0 0;
    word-break: break-word;
  }
  div.message {
    padding: 0 5rem 0 0;
  }
  div.highlighted:last-child,
  div.faded:last-child {
    padding-right: 0;
  }
  .faded {
    opacity: 0.4;
  }
</style>

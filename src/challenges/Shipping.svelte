<script lang="ts">
  import type { Shipping, ShippingPackage } from '../interfaces'
  import Suburb from '../Suburb.svelte'
  import Label from '../Label.svelte'
  import Level from '../Level.svelte'
  export let challenge: Shipping
  export let levelId: string

  let packagesBySuburb: Map<string, ShippingPackage[]> = new Map<string, ShippingPackage[]>()
  let lastSuburb = 'Belby'
  challenge.packages.forEach((p) => {
    if (lastSuburb === 'Lake Bessy' && p.suburb.name === 'Salty Flats') {
      packagesBySuburb['Painted Cliffs'] = []
    }
    if (lastSuburb === 'Gumtree Grove' && p.suburb.name === 'Painted Cliffs') {
      packagesBySuburb['Lake Bessy'] = []
    }
    if (!packagesBySuburb[p.suburb.name]) {
      packagesBySuburb[p.suburb.name] = []
    }
    packagesBySuburb[p.suburb.name].push(p)
    lastSuburb = p.suburb.name
  })
  if (Object.keys(packagesBySuburb).length < 5) {
    packagesBySuburb[''] = []
  }
</script>

<main>
  {#if challenge.packages.length < 6}
    ⚠️ Need more info!
  {/if}
  <div class="map">
    {#each Object.keys(packagesBySuburb) as suburb}
      <div class="map-suburb">
        {#if packagesBySuburb[suburb].length}
          <Suburb suburb={packagesBySuburb[suburb][0].suburb} />
          {#each packagesBySuburb[suburb] as _package}
            <div class="package-row">
              <div class="description">
                <img
                  on:error={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'inline'
                  }}
                  class="shippable"
                  src="shippable/{levelId}/{_package.item}.png"
                  alt={_package.item}
                  title={_package.item}
                />
                <span class="imgName {_package.bold && "bold"}">{_package.item}</span>
              </div>
              <div>
                {#each _package.labels as label}
                  <Label {label} />
                {/each}
              </div>
            </div>
          {/each}
        {:else}
          <span class="empty-suburb">{suburb}</span>
        {/if}
      </div>
    {/each}
  </div>
</main>

<style>
  main > div {
    text-align: left;
    display: grid;
    gap: 2rem 0;
    grid-template-columns: auto auto auto;
    margin: 2rem auto;
  }
  .imgName {
    display: none;
  }
  .imgName.bold {
    font-weight: bold;
  }
  .map {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2vw;
    padding: 0 2rem;
  }
  .package-row {
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
  }
  .package-row .description {
    flex: 1 1 auto;
  }
  .package-row .description img {
    width: 5rem;
    height: 5rem;
  }
  .map-suburb {
    flex: 0 0 30%;
  }
  @media (max-width: 1000px) {
    .map-suburb {
      flex-basis: 100%;
    }
    .empty-suburb {
      display: none;
    }
  }
  .empty-suburb {
    font-weight: bold;
    color: grey;
    display: inline-block;
    padding: .425rem .25rem .45rem;
    border-bottom: 1px solid grey;
    width: 100%;
  }
</style>

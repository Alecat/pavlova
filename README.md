# Pavlova

A reference website for cataloguing puzzle combinations, tech and other knowledge for speedrunning the game KeyWe.

## TODO

Some puzzles are missing minor amounts of information, eg in-letter destinations for dropoff depot levels.

Some languages use different names for out-letters in dropoff depot levels, things would need to be refactored to account for this.

Join us in the [KeyWe speedrunning Discord](https://discord.gg/JX3DvhXgRT) if you'd like to contribute information, or make a pull request to this repository :)

# Instructions for building the Svelte web app

## Get started

Install the dependencies...

```bash
git clone git@github.com:Alecat/pavlova.git
cd pavlova
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

Manually update the paths to the `bundle.css` and `bundle.js` files in `public/index.html` to reference the newly built files.

You can run the newly built app with `npm run start`.

## Deploying to the web

 Deploy the `public` folder, ensuring that its `index.html` file references the built js/css files.
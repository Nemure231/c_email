/*
|-------------------------------------------------------------------------------
| Development config               https://maizzle.com/docs/environments/#local
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run `maizzle build` or `maizzle serve` and it has
| the fastest build time, since most transformations are disabled.
|
*/

module.exports = {
  // removeUnusedCSS: true,
  removeAttributes: [
    {name: 'srcset'},
    {name: 'aria-label'},
  ],
  extraAttributes: {
    table: {
      role: 'presentation',
      border: '0',
      cellspacing: '0',
      cellpadding: '0'
    },

  },
  build: {
    templates: {
      source: 'src/templates',
      destination: {
        path: 'build_local',
      },
      assets: {
        source: 'src/images',
        destination: 'images',
      },
    },
  },
}

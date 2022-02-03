/*
|-------------------------------------------------------------------------------
| Production config           https://maizzle.com/docs/environments/#production
|-------------------------------------------------------------------------------
|
| This is where you define settings that optimize your emails for production.
| These will be merged on top of the base config.js, so you only need to
| specify the options that are changing.
|
*/

module.exports = {
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
  minify: true,
  prettify: true,
  build: {
    templates: {
      destination: {
        path: 'build_production',
      },
    },
  },
  inlineCSS: true,
  removeUnusedCSS: true,
}

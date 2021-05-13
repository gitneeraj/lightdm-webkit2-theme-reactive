const sveltePreprocess = require('svelte-preprocess')

module.exports = {
  preprocess: sveltePreprocess({
    scss: {
      prependData: `@import 'src/styles/variables.scss';`
    },
    postcss: {
      plugins: [require('autoprefixer')()]
    }
  })
}

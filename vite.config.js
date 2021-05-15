import { defineConfig } from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'

export default ({ mode }) => {
  let path = '/'

  if(mode === 'prod'){
    path = '/usr/share/lightdm-webkit/themes/reactive/'
  }else if (mode === 'ghpages'){
    path = 'lightdm-webkit2-theme-reactive/'
  }

  return defineConfig({
    plugins: [svelte()],
    base: path,
    build: {
      outDir: 'reactive'
    }
  })
}

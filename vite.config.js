import { defineConfig } from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'

export default () => {
  let path = '/'

  if(process.env.type === 'lightdm'){
    path = '/usr/share/lightdm-webkit/themes/reactive/'
  }else if (process.env.type === 'ghpages'){
    path = '/lightdm-webkit2-theme-reactive/'
  }

  return defineConfig({
    plugins: [svelte()],
    base: path,
    build: {
      outDir: 'reactive'
    }
  })
}

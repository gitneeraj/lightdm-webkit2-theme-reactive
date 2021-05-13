import { defineConfig } from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'

export default ({ mode }) => {
  const path =
    mode === 'prod' ? '/usr/share/lightdm-webkit/themes/reactive/' : '/'

  return defineConfig({
    plugins: [svelte()],
    base: path,
    build: {
      outDir: 'reactive'
    }
  })
}

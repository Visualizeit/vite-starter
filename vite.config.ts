import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'
import { defineConfig } from 'vite-plus'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        tailwindcss(),
        tanstackStart(),
        nitro(),
        viteReact({ compiler: true }),
    ],
    resolve: {
        tsconfigPaths: true,
    },
    server: {
        open: true,
    },
    staged: {
        '*.{js,jsx,ts,tsx,json,jsonc,yaml,yml,html,vue,hbs,handlebars,css,scss,less,graphql,gql,md,markdown}':
            'ultracite fix --unsafe --no-error-on-unmatched-pattern',
    },
})

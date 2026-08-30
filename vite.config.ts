import { defineConfig, lazyPlugins } from 'vite-plus'

import formatterConfig from './oxfmt.config'
import lintConfig from './oxlint.config'

// https://vitejs.dev/config/
export default defineConfig({
    fmt: formatterConfig,
    lint: lintConfig,
    plugins: lazyPlugins(async () => {
        const [
            { default: tailwindcss },
            { tanstackStart },
            { default: viteReact },
            { nitro },
        ] = await Promise.all([
            import('@tailwindcss/vite'),
            import('@tanstack/react-start/plugin/vite'),
            import('@vitejs/plugin-react'),
            import('nitro/vite'),
        ])

        return [
            tailwindcss(),
            tanstackStart(),
            nitro(),
            viteReact({ compiler: true }),
        ]
    }),
    resolve: {
        tsconfigPaths: true,
    },
    server: {
        open: true,
    },
    staged: {
        '*': 'vp check --fix',
    },
})

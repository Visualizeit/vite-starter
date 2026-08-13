import {
    ColorSchemeScript,
    MantineProvider,
    mantineHtmlProps,
} from '@mantine/core'
import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'

import MainLayout from '@/components/layout/main-layout'
import mantineTheme from '@/configs/mantine-theme'

import appCSSURL from '@/app.css?url'

const Component = () => (
    <html lang="en" {...mantineHtmlProps}>
        <head>
            <HeadContent />
            <ColorSchemeScript defaultColorScheme="auto" />
        </head>
        <body>
            <MantineProvider
                deduplicateInlineStyles
                theme={mantineTheme}
                defaultColorScheme="auto"
            >
                <MainLayout />
            </MantineProvider>
            <Scripts />
        </body>
    </html>
)

export const Route = createRootRoute({
    component: Component,
    head: () => ({
        links: [
            { href: '/favicon.svg', rel: 'icon', type: 'image/svg+xml' },
            { href: appCSSURL, rel: 'stylesheet' },
        ],
        meta: [
            {
                // oxlint-disable-next-line unicorn/text-encoding-identifier-case
                charSet: 'utf-8',
            },
            {
                content: 'width=device-width, initial-scale=1',
                name: 'viewport',
            },
            {
                title: 'TanStack Starter',
            },
        ],
    }),
})

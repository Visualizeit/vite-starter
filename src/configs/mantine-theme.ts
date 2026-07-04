import { Badge, Button, Container, createTheme, Switch } from '@mantine/core'
import type {
    DefaultMantineColor,
    DefaultMantineSize,
    MantineColorsTuple,
} from '@mantine/core'

type ExtendedCustomColors = 'brand' | DefaultMantineColor

type ExtendedCustomSpacing = 'xxs' | DefaultMantineSize

type ExtendedCustomRadius = 'full' | DefaultMantineSize

declare module '@mantine/core' {
    export interface MantineThemeColorsOverride {
        colors: Record<ExtendedCustomColors, MantineColorsTuple>
    }

    export interface MantineThemeSizesOverride {
        radius: Record<ExtendedCustomRadius, string>
        spacing: Record<ExtendedCustomSpacing, string>
    }
}

const mantineTheme = createTheme({
    activeClassName: 'active:brightness-90',
    colors: {
        brand: [
            '#e3f7ff',
            '#cde9ff',
            '#9cd0ff',
            '#67b6fd',
            '#3ca0fa',
            '#2292fa',
            '#0485f7',
            '#0078e1',
            '#006bca',
            '#005cb3',
        ],
    },
    components: {
        Badge: Badge.extend({
            classNames: { root: 'font-(--mantine-font-weight-regular)' },
        }),
        Button: Button.extend({
            classNames: { root: 'font-(--mantine-font-weight-regular)' },
        }),
        Container: Container.extend({ defaultProps: { strategy: 'grid' } }),
        Switch: Switch.extend({ defaultProps: { withThumbIndicator: false } }),
    },
    headings: {
        fontWeight: 'var(--mantine-font-weight-medium)',
    },
    primaryColor: 'brand',
    radius: {
        full: 'calc(infinity * 1px)',
    },
    spacing: {
        full: 'calc(infinity * 1px)',
        xxs: 'calc(0.5rem * var(--mantine-scale))',
    },
})

export default mantineTheme

import {
    Badge,
    Button,
    Container,
    createTheme,
    rem,
    Switch,
} from '@mantine/core'
import type {
    DefaultMantineColor,
    DefaultMantineSize,
    MantineColorsTuple,
} from '@mantine/core'

type ExtendedCustomColors = 'brand' | DefaultMantineColor

type ExtendedCustomSpacing = 'xxs' | '2xl' | '3xl' | '4xl' | DefaultMantineSize

type ExtendedCustomRadius = '2xl' | '3xl' | '4xl' | 'full' | DefaultMantineSize

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
        dark: [
            '#c1c2c5',
            '#a6a7ab',
            '#909296',
            '#5c5f66',
            '#373a40',
            '#2c2e33',
            '#25262b',
            '#1a1b1e',
            '#141517',
            '#101113',
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
        '2xl': rem(18),
        '3xl': rem(22),
        '4xl': rem(26),
        full: 'calc(infinity * 1px)',
        lg: rem(10),
        md: rem(8),
        sm: rem(6),
        xl: rem(14),
        xs: rem(4),
    },
    shadows: {
        // Adapted from shadow-plugin (MIT): github.com/flornkm/shadow-plugin
        lg: '0 25px 50px 0 rgba(0, 0, 0, 0.05), 0 12px 24px 0 rgba(0, 0, 0, 0.04), 0 6px 12px 0 rgba(0, 0, 0, 0.03), 0 3px 6px 0 rgba(0, 0, 0, 0.02), 0 1.5px 3px 0 rgba(0, 0, 0, 0.02)',
        md: '0 17.54px 23.39px 0 rgba(0, 0, 0, 0.04), 0 9.4px 12.5px 0 rgba(0, 0, 0, 0.03), 0 5.25px 7px 0 rgba(0, 0, 0, 0.02), 0 2.79px 3.72px -2px rgba(0, 0, 0, 0.01), 0 1.16px 1.5px 0 rgba(0, 0, 0, 0.01)',
        sm: '0 18px 47px 0 rgba(0, 0, 0, 0.03), 0 7.5px 19px 0 rgba(0, 0, 0, 0.02), 0 4px 10.5px 0 rgba(0, 0, 0, 0.02), 0 2.3px 5.8px 0 rgba(0, 0, 0, 0.01), 0 1.2px 3.1px 0 rgba(0, 0, 0, 0.01), 0 0.5px 1.3px 0 rgba(0, 0, 0, 0.01)',
        xl: '0 40px 80px 0 rgba(0, 0, 0, 0.06), 0 20px 40px 0 rgba(0, 0, 0, 0.05), 0 10px 20px 0 rgba(0, 0, 0, 0.04), 0 5px 10px 0 rgba(0, 0, 0, 0.03), 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
        xs: '0 0 4px 0 rgba(0, 0, 0, 0.04)',
    },
    spacing: {
        '2xl': rem(48),
        '3xl': rem(64),
        '4xl': rem(96),
        lg: rem(24),
        md: rem(16),
        sm: rem(12),
        xl: rem(32),
        xs: rem(8),
        xxs: rem(4),
    },
})

export default mantineTheme

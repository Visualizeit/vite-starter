import {
	type DefaultMantineColor,
	type MantineColorsTuple,
	createTheme,
} from '@mantine/core'

type ExtendedCustomColors = 'primary' | DefaultMantineColor

declare module '@mantine/core' {
	export interface MantineThemeColorsOverride {
		colors: Record<ExtendedCustomColors, MantineColorsTuple>
	}
}

const mantineTheme = createTheme({
	primaryColor: 'primary',
	defaultRadius: 'md',
	colors: {
		primary: [
			'#e5f4ff',
			'#cde2ff',
			'#9bc2ff',
			'#64a0ff',
			'#3984fe',
			'#1d72fe',
			'#0969ff',
			'#0058e4',
			'#004ecc',
			'#0043b5',
		],
	},
})

export default mantineTheme

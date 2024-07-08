import { config as defaultConfig } from '@epic-web/config/eslint'

/** @type {import("eslint").Linter.FlatConfig} */
export default [
	...defaultConfig,
	{
		ignores: ['src/routeTree.gen.ts'],
	},
]

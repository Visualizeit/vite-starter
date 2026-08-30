import antiSlop from 'ultracite/oxlint/anti-slop'
import core from 'ultracite/oxlint/core'
import react from 'ultracite/oxlint/react'
import tanstack from 'ultracite/oxlint/tanstack'
import type { OxlintConfig } from 'vite-plus/lint'

export default {
    extends: [core, antiSlop, react, tanstack],
    ignorePatterns: core.ignorePatterns,
    options: {
        typeAware: true,
        typeCheck: true,
    },
    rules: {
        'promise/prefer-await-to-then': 'off',
    },
} satisfies OxlintConfig

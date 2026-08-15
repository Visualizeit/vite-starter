import { defineConfig } from 'oxlint'
import antiSlop from 'ultracite/oxlint/anti-slop'
import core from 'ultracite/oxlint/core'
import react from 'ultracite/oxlint/react'
import tanstack from 'ultracite/oxlint/tanstack'

export default defineConfig({
    extends: [core, antiSlop, react, tanstack],
    ignorePatterns: core.ignorePatterns,
    rules: {
        'promise/prefer-await-to-then': 'off',
    },
})

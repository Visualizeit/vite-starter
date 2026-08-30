import ultracite from 'ultracite/oxfmt'
import type { OxfmtConfig } from 'vite-plus/fmt'

export default {
    ...ultracite,
    semi: false,
    singleQuote: true,
    tabWidth: 4,
} satisfies OxfmtConfig

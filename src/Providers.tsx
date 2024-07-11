import { MantineProvider } from '@mantine/core'
import { QueryClientProvider } from '@tanstack/react-query'
import { type PropsWithChildren } from 'react'
import queryClient from './configs/queryClient'

import '@mantine/core/styles.css'

const Providers = ({ children }: PropsWithChildren) => {
	return (
		<QueryClientProvider client={queryClient}>
			<MantineProvider>{children}</MantineProvider>
		</QueryClientProvider>
	)
}

export default Providers

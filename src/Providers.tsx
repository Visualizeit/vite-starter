import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type PropsWithChildren, useState } from 'react'

const Providers = ({ children }: PropsWithChildren) => {
	const [queryClient] = useState(() => new QueryClient())

	return (
		<QueryClientProvider client={queryClient}>
			<MantineProvider>{children}</MantineProvider>
		</QueryClientProvider>
	)
}

export default Providers

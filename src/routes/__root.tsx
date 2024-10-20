import { type QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

interface RouterContext {
	queryClient: QueryClient
}

const AppRoot = () => (
	<>
		<Outlet />
		<TanStackRouterDevtools />
	</>
)

export const Route = createRootRouteWithContext<RouterContext>()({
	component: AppRoot,
})

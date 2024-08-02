import {
	AppShell,
	AppShellHeader,
	AppShellMain,
	Group,
	Title,
} from '@mantine/core'
import { createFileRoute, Outlet } from '@tanstack/react-router'

const AppLayout = () => {
	return (
		<AppShell padding="md" header={{ height: 64 }}>
			<AppShellHeader>
				<Group className="h-full" align="center" px="xl">
					<Title>ACME</Title>
				</Group>
			</AppShellHeader>
			<AppShellMain className="flex">
				<Outlet />
			</AppShellMain>
		</AppShell>
	)
}

export const Route = createFileRoute('/_layout')({ component: AppLayout })

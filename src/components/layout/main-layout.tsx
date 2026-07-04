import { AppShell, Box, Group, Title } from '@mantine/core'
import { Link, Outlet } from '@tanstack/react-router'

const MainLayout = () => (
    <AppShell header={{ height: 56 }} padding="md">
        <AppShell.Header>
            <Group align="center" className="h-full" px="xl">
                <Link to="/">
                    <Title>Title</Title>
                </Link>
            </Group>
        </AppShell.Header>
        <AppShell.Main className="flex">
            <Box className="w-full relative">
                <Outlet />
            </Box>
        </AppShell.Main>
    </AppShell>
)

export default MainLayout

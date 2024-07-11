import { Title } from '@mantine/core'
import { createFileRoute } from '@tanstack/react-router'

const HomePage = () => {
	return (
		<div className="p-2">
			<Title>Welcome Home!</Title>
		</div>
	)
}

export const Route = createFileRoute('/')({
	component: HomePage,
})

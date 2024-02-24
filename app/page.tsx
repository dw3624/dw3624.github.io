import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
	return (
		<main className="flex items-center justify-center h-full w-full">
			<Button asChild>
				<Link href="/posts/pages/1">Go!</Link>
			</Button>
		</main>
	)
}

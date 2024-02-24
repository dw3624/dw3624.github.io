'use client'

import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

const Footer = () => {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = React.useState(false)
	React.useEffect(() => {
		setMounted(true)
	}, [])

	return (
		<footer className="container max-w-3xl">
			<div className="h-20 flex justify-between items-center font-sm">
				<span className="inline-flex items-center justify-center text-muted-foreground">
					© dw3624
				</span>
				{mounted && (
					<div className="border">
						<Button
							variant={theme === 'light' ? 'secondary' : 'ghost'}
							size="iconSm"
							onClick={() => setTheme('light')}
						>
							<Sun size={16} />
						</Button>
						<Button
							variant={theme === 'system' ? 'secondary' : 'ghost'}
							size="iconSm"
							onClick={() => setTheme('system')}
						>
							<Monitor size={16} />
						</Button>
						<Button
							variant={theme === 'dark' ? 'secondary' : 'ghost'}
							size="iconSm"
							onClick={() => setTheme('dark')}
						>
							<Moon size={16} />
						</Button>
					</div>
				)}
			</div>
		</footer>
	)
}

export default Footer

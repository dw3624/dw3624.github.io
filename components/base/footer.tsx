'use client'

import { Button } from '@/components/ui/button'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React from 'react'

const Footer = () => {
	const { theme, setTheme } = useTheme()

	return (
		<footer className="container max-w-3xl">
			<div className="h-20 flex justify-between items-center font-sm">
				<span className="inline-flex items-center justify-center text-muted-foreground">
					© dw3624
				</span>
				<div className="border">
					<Button
						variant="ghost"
						size="iconSm"
						onClick={() => setTheme('light')}
						className={
							theme === 'light' ? 'bg-accent text-accent-foreground' : ''
						}
					>
						<Sun size={16} />
					</Button>
					<Button
						variant="ghost"
						size="iconSm"
						onClick={() => setTheme('system')}
						className={
							theme === 'system' ? 'bg-accent text-accent-foreground' : ''
						}
					>
						<Monitor size={16} />
					</Button>
					<Button
						variant="ghost"
						size="iconSm"
						onClick={() => setTheme('dark')}
						className={
							theme === 'dark' ? 'bg-accent text-accent-foreground' : ''
						}
					>
						<Moon size={16} />
					</Button>
				</div>
			</div>
		</footer>
	)
}

export default Footer

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
			</div>
		</footer>
	)
}

export default Footer

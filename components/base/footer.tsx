'use client'

import { Button } from '@/components/ui/button'
import { Monitor, Moon, Sun } from 'lucide-react'
import React from 'react'

const Footer = () => {
	const toggle = () => {
		document.documentElement.classList.toggle('dark')
	}

	return (
		<footer className="container max-w-3xl">
			<div className="h-20 flex justify-between items-center font-sm">
				<span className="inline-flex items-center justify-center text-muted-foreground">
					© dw3624
				</span>
				<div className="border">
					<Button variant="ghost" size="iconSm" onClick={() => toggle()}>
						<Sun size={16} />
					</Button>
					<Button variant="ghost" size="iconSm" onClick={() => toggle()}>
						<Monitor size={16} />
					</Button>
					<Button variant="ghost" size="iconSm" onClick={() => toggle()}>
						<Moon size={16} />
					</Button>
				</div>
			</div>
		</footer>
	)
}

export default Footer

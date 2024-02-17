'use client'

import { Button } from '@/components/ui/button'
import { MoonStar } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NavMenu = ({
	href,
	children,
}: { href: string; children: React.ReactNode }) => {
	return (
		<Link
			href={href}
			className="inline-flex items-center justify-center text-foreground/60"
		>
			{children}
		</Link>
	)
}

const Header = () => {
	const toggle = () => {
		document.documentElement.classList.toggle('dark')
	}

	return (
		<header className="container max-w-3xl">
			<div className="flex items-center justify-between h-16">
				<div className="flex gap-10 capitalize">
					<Link
						href="/"
						className="inline-flex items-center justify-center text-primary"
					>
						<MoonStar size={24} />
						<span className="inline-flex center h-full ml-2 font-bold">
							title
						</span>
					</Link>
					<nav className="flex gap-6">
						<NavMenu href="/tags">tags</NavMenu>
					</nav>
				</div>
				<nav>
					<Button variant="ghost" size="icon" onClick={() => toggle()}>
						<MoonStar size={16} />
					</Button>
				</nav>
			</div>
		</header>
	)
}

export default Header

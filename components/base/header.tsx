'use client'

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
					<div>Hi.</div>
				</nav>
			</div>
		</header>
	)
}

export default Header

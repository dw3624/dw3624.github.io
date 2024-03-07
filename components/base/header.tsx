'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {
	const pathname = usePathname()
	const routes = [
		{
			href: '/posts/pages/1',
			label: 'Posts',
			active: pathname.startsWith('/posts'),
		},
		{ href: '/tags', label: 'Tags', active: pathname.startsWith('/tags') },
		{
			href: 'https://www.notion.so/69a26827954545ee94ba401f49b42ccb',
			label: 'Resume',
			active: false,
		},
	]

	return (
		<header className="container max-w-3xl">
			<div className="flex items-center justify-between h-16">
				<div className="flex gap-8 capitalize">
					<Link
						href="/"
						className="inline-flex items-center justify-center text-primary hover:text-primary/80"
					>
						<span className="inline-flex items-center h-full ml-2 font-bold">
							~/
						</span>
					</Link>
					<nav className="flex gap-4">
						{routes.map((route, i) => (
							<Link
								key={i}
								href={route.href}
								target={route.href.startsWith('http') ? '_blank' : '_self'}
								className={cn(
									'inline-flex items-center justify-center font-semibold hover:text-foreground/80',
									route.active ? 'text-foreground' : 'text-foreground/60',
								)}
							>
								{route.label}
							</Link>
						))}
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

'use client'

import { cn } from '@/lib/utils'
import { Cookie, MoonStar } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavMenu = ({
	href,
	children,
}: { href: string; children: React.ReactNode }) => {
	return (
		<Link
			href={href}
			className="inline-flex items-center justify-center text-foreground/60 hover:text-foreground/80"
		>
			{children}
		</Link>
	)
}

const Header = () => {
	const pathname = usePathname()
	const routes = [
		{
			href: '/posts/pages/1',
			label: 'Posts',
			active: pathname.startsWith('/posts'),
		},
		{ href: '/tags', label: 'Tags', active: pathname.startsWith('/tags') },
	]

	return (
		<header className="container max-w-3xl">
			<div className="flex items-center justify-between h-16">
				<div className="flex gap-10 capitalize">
					<Link
						href="/"
						className="inline-flex items-center justify-center text-primary hover:text-primary/80"
					>
						<Cookie size={24} />
						<span className="inline-flex items-center h-full ml-2 font-bold">
							Blog
						</span>
					</Link>
					<nav className="flex gap-4">
						{routes.map((route, i) => (
							<Link
								key={i}
								href={route.href}
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

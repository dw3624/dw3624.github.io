import { badgeVariants } from '@/components/ui/badge'
import { getTagList } from '@/lib/tag'
import Link from 'next/link'
import * as React from 'react'

const PostsPage = () => {
	const tags = getTagList()

	return (
		<section>
			<header>
				<h1 className="text-4xl font-bold lg:text-5xl">Posts</h1>
			</header>
			<hr className="my-3 md:my-4" />
			<div className="flex flex-wrap gap-2">
				{tags.map((tag: { name: string; count: number }, i: number) => (
					<Link
						key={i}
						href={`/tags/${tag.name}`}
						className={badgeVariants({ variant: 'default' })}
					>
						{tag.count} {tag.name}
					</Link>
				))}
			</div>
		</section>
	)
}

export default PostsPage

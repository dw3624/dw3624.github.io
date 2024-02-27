import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import * as React from 'react'

export type PostCardType = {
	post: {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		frontMatter: { [key: string]: any }
		slug: string
	}
}

const PostCard = ({ post }: PostCardType) => {
	const date = formatDate(post.frontMatter.date)

	return (
		<article className="flex flex-col gap-2">
			<div className="space-y-1">
				<h3 className="text-2xl font-semibold tracking-tight">
					<Link
						href={`/posts/${post.slug}`}
						className="transition-colors hover:text-primary/80"
					>
						{post.frontMatter.title}
					</Link>
				</h3>
				{post.frontMatter.description && (
					<p className="text-secondary-foreground">
						{post.frontMatter.description}
					</p>
				)}
			</div>
			<time className="text-sm font-bold text-muted-foreground font-mono">
				{date}
			</time>
		</article>
	)
}

export default PostCard

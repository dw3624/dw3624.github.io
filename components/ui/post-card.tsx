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
		<article className="py-5 flex flex-col space-y-1">
			<Link
				href={`/posts/${post.slug}`}
				className="transition-colors text-foreground hover:text-primary/80"
			>
				<h3 className="text-lg md:text-xl font-semibold tracking-tight">
					{post.frontMatter.title}
				</h3>
			</Link>
			{post.frontMatter.description && (
				<Link href={`/posts/${post.slug}`}>
					<p className="text-sm text-foreground/80 break-keep leading-6">
						{post.frontMatter.description}
					</p>
				</Link>
			)}
			<time className="pt-1 text-xs text-muted-foreground font-mono">
				{date}
			</time>
		</article>
	)
}

export default PostCard

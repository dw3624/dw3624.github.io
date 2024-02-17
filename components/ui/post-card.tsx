import { badgeVariants } from '@/components/ui/badge'
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
		<article>
			<time className="text-sm font-bold text-muted-foreground font-mono">
				{date}
			</time>
			<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
				<Link
					href={`posts/${post.slug}`}
					className=" transition-colors hover:text-primary/80"
				>
					{post.frontMatter.title}
				</Link>
			</h3>
			{post.frontMatter.description && (
				<p className="text-foreground/60">{post.frontMatter.description}</p>
			)}
			<div className="mt-6 flex flex-wrap gap-2">
				{post.frontMatter.tags.map((tag: string, i: number) => (
					<Link
						key={i}
						href={`/tags/${tag}`}
						className={badgeVariants({ variant: 'default' })}
					>
						{tag}
					</Link>
				))}
			</div>
		</article>
	)
}

export default PostCard

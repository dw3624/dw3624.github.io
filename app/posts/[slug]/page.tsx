import fs from 'fs'
import path from 'path'
import { mdxComponents } from '@/components/base/mdx-components'
import { badgeVariants } from '@/components/ui/badge'
import { NavButton } from '@/components/ui/nav-button'
import { getPost, getPostList } from '@/lib/post'
import { formatDate } from '@/lib/utils'
import { mdxOptions } from '@/mdx.config'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import React from 'react'

import '@/styles/mdx.css'

export const generateStaticParams = async () => {
	const postsDirectory = path.join(process.cwd(), 'posts')
	const filenames = fs.readdirSync(postsDirectory)
	return filenames.map((filename) => ({
		slug: filename.replace(/\.md$/, ''),
	}))
}

const PostSlugPage = async ({
	params,
}: {
	params: {
		slug: string
	}
}) => {
	const posts = await getPostList()
	const currentPost = posts.find((post) => post.slug === params.slug)
	if (!currentPost) return null

	const currentIndex = posts.indexOf(currentPost)
	const prevPostSlug = currentIndex > 0 ? posts[currentIndex - 1] : null
	const nextPostSlug =
		currentIndex < posts.length ? posts[currentIndex + 1] : null
	const post = await getPost(params.slug)
	const { frontMatter, body } = post

	const date = formatDate(frontMatter.date)

	return (
		<section className="flex flex-col gap-8 h-full justify-between">
			<article>
				<header>
					<time className="text-sm font-bold text-muted-foreground font-mono">
						{date}
					</time>
					<h1 className="mt-2 text-3xl md:text-4xl font-bold lg:text-5xl">
						{frontMatter.title}
					</h1>
					{post.frontMatter.description && (
						<p className="mt-2 text-foreground/80">
							{post.frontMatter.description}
						</p>
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
				</header>
				<div className="mt-16">
					<MDXRemote
						source={body}
						components={mdxComponents}
						// @ts-ignore
						options={mdxOptions}
					/>
				</div>
			</article>
			<nav className="w-full flex flex-col gap-2 mt-6 mx-auto md:flex-row">
				<NavButton
					variant="prev"
					slug={prevPostSlug ? `/posts/${prevPostSlug.slug}` : ''}
					text={prevPostSlug?.frontMatter.title}
				/>
				<NavButton
					variant="next"
					slug={nextPostSlug ? `/posts/${nextPostSlug.slug}` : ''}
					text={nextPostSlug?.frontMatter.title}
				/>
			</nav>
		</section>
	)
}

export default PostSlugPage

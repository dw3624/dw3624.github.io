import fs from 'fs'
import path from 'path'
import { mdxComponents } from '@/components/base/mdx-components'
import { getPost, getPostList } from '@/lib/post'
import { mdxOptions } from '@/mdx.config'
import { MDXRemote } from 'next-mdx-remote/rsc'
import React from 'react'

export const generateStaticParams = async () => {
	const postsDirectory = path.join(process.cwd(), 'posts')
	const filenames = fs.readdirSync(postsDirectory)
	return filenames.map((filename) => ({
		slug: filename.replace(/\\.md$/, ''),
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
	const nextPostSlut =
		currentIndex < posts.length ? posts[currentIndex + 1] : null

	const post = await getPost(params.slug)
	const { slug, frontMatter, body } = post

	return (
		<div>
			<MDXRemote
				source={body}
				components={mdxComponents}
				options={mdxOptions}
			/>
		</div>
	)
}

export default PostSlugPage

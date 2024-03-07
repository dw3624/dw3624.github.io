import PostCard from '@/components/ui/post-card'
import { getTagList, getTagPostList } from '@/lib/tag'
import React from 'react'

export const generateStaticParams = () => {
	const tags = getTagList()
	return tags.map((tag) => ({ slug: tag.name }))
}

const TagPostsPage = ({ params }: { params: { slug: string } }) => {
	const posts = getTagPostList(params.slug)

	return (
		<section>
			<header>
				<h1 className="text-3xl md:text-4xl font-bold">
					Tag: <span className="text-primary">{params.slug}</span>
				</h1>
			</header>
			<hr className="mt-6 mb-6 md:mb-8" />
			<div className="grid gap-6 md:gap-8">
				{posts.map((post, i) => (
					<PostCard key={i} post={post} />
				))}
			</div>
		</section>
	)
}

export default TagPostsPage

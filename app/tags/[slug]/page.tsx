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
				<h1 className="text-4xl font-bold lg:text-5xl">Tag: {params.slug}</h1>
			</header>
			<hr className="my-3 md:my-4" />
			<div className="grid gap-8">
				{posts.map((post, i) => (
					<PostCard key={i} post={post} />
				))}
			</div>
		</section>
	)
}

export default TagPostsPage

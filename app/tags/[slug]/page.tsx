import PostCard from '@/components/ui/post-card'
import { getTagPostList } from '@/lib/tag'
import React from 'react'

const TagPostsPage = async ({ params }: { params: { slug: string } }) => {
	const posts = await getTagPostList(params.slug)

	return (
		<section>
			<header>
				<h1 className="text-4xl font-bold lg:text-5xl">Posts</h1>
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

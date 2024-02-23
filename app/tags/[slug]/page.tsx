import React from 'react'

import PostCard from '@/components/ui/post-card'
import { getPostList } from '@/lib/post'

const TagPostsPage = () => {
	const posts = getPostList()

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

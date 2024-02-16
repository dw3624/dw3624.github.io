import Link from 'next/link'
import React from 'react'

import { getPostList } from '@/lib/post'

const PostsPage = () => {
	const posts = getPostList()

	return (
		<div>
			{posts.map((post, i) => (
				<Link key={i} href={`posts/${post.slug}`}>
					{post.slug}
				</Link>
			))}
		</div>
	)
}

export default PostsPage

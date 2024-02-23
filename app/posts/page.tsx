import React from 'react'

import { NavButton } from '@/components/ui/nav-button'
import PostCard from '@/components/ui/post-card'
import { getPostList } from '@/lib/post'

const PostsPage = ({
	searchParams,
}: {
	searchParams?: {
		page?: string
	}
}) => {
	const posts = getPostList()

	const currentPage = Number(searchParams?.page) || 1
	const maxPostNum = 2
	const maxPage = Math.ceil(posts.length / maxPostNum)
	const prevPage = currentPage - 1 > 0 ? currentPage - 1 : null
	const nextPage = currentPage + 1 > maxPage ? null : currentPage + 1

	return (
		<section className="flex flex-col justify-between h-full">
			<div>
				<header>
					<h1 className="text-4xl font-bold lg:text-5xl">Posts</h1>
				</header>
				<hr className="my-3 md:my-4" />
				<div className="grid gap-8 flex-1">
					{posts
						.slice(maxPostNum * (currentPage - 1), maxPostNum * currentPage)
						.map((post, i) => (
							<PostCard key={i} post={post} />
						))}
				</div>
			</div>
			<nav className="w-full flex flex-col gap-2 mt-6 mx-auto 3xl:flex-row">
				<NavButton
					variant="prev"
					slug={prevPage ? `?page=${currentPage - 1}` : ''}
					text={`Page ${currentPage - 1}`}
				/>
				<NavButton
					variant="next"
					slug={nextPage ? `?page=${currentPage + 1}` : ''}
					text={`Page ${currentPage + 1}`}
				/>
			</nav>
		</section>
	)
}

export default PostsPage

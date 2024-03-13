import { Button, buttonVariants } from '@/components/ui/button'
import PostCard from '@/components/ui/post-card'
import { MAX_POST_NUM } from '@/lib/config'
import { getPostList, getPostNum } from '@/lib/post'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

export const generateStaticParams = () => {
	const postNum = getPostNum()
	const maxPage = Math.ceil(postNum / MAX_POST_NUM)
	return Array.from({ length: maxPage }, (_, i) => ({ slug: `${i + 1}` }))
}

const PostsPage = ({ params }: { params: { slug: string } }) => {
	const posts = getPostList()

	const currentPage = Number(params.slug)
	const maxPage = Math.ceil(posts.length / MAX_POST_NUM)
	const prevPage = currentPage - 1 > 0 ? currentPage - 1 : null
	const nextPage = currentPage + 1 > maxPage ? null : currentPage + 1

	return (
		<section className="flex flex-col justify-between h-full">
			<div>
				<header>
					<h1 className="text-3xl md:text-4xl font-bold">{currentPage}</h1>
				</header>
				<hr className="mt-6 mb-6 md:mb-8" />
				<div className="grid gap-6 md:gap-8 flex-1">
					{posts
						.slice(MAX_POST_NUM * (currentPage - 1), MAX_POST_NUM * currentPage)
						.map((post, i) => (
							<PostCard key={i} post={post} />
						))}
				</div>
			</div>
			<div className="flex justify-between">
				<Link
					href={`/posts/pages/${currentPage - 1}`}
					className={cn(
						buttonVariants({ variant: 'ghost' }),
						!prevPage && 'pointer-events-none opacity-50',
					)}
				>
					이전
				</Link>
				<div>{currentPage}</div>
				<Link
					href={`/posts/pages/${currentPage + 1}`}
					className={cn(
						buttonVariants({ variant: 'ghost' }),
						!nextPage && 'pointer-events-none opacity-50',
					)}
				>
					다음
				</Link>
			</div>
		</section>
	)
}

export default PostsPage

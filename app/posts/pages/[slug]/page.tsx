import React from 'react'

import { buttonVariants } from '@/components/ui/button'
import PostCard from '@/components/ui/post-card'
import { MAX_POST_NUM } from '@/lib/config'
import { getPostList, getPostNum } from '@/lib/post'
import { cn } from '@/lib/utils'
import Link from 'next/link'

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
          <h1 className="text-4xl font-bold">{currentPage}</h1>
        </header>
        <div className="py-6">
          {posts
            .slice(MAX_POST_NUM * (currentPage - 1), MAX_POST_NUM * currentPage)
            .map((post, i) => (
              <PostCard key={i} post={post} />
            ))}
        </div>
      </div>
      <nav className="flex justify-between items-center">
        <Link
          href={`/posts/pages/${currentPage - 1}`}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            !prevPage && 'pointer-events-none opacity-50',
          )}
        >
          Previous
        </Link>
        <div>{currentPage}</div>
        <Link
          href={`/posts/pages/${currentPage + 1}`}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            !nextPage && 'pointer-events-none opacity-50',
          )}
        >
          Next
        </Link>
      </nav>
      {/* <nav className="w-full flex flex-col gap-2 md:flex-row">
        <NavButton
          variant="prev"
          slug={prevPage ? `/posts/pages/${currentPage - 1}` : ''}
          text={`Page ${currentPage - 1}`}
        />
        <NavButton
          variant="next"
          slug={nextPage ? `/posts/pages/${currentPage + 1}` : ''}
          text={`Page ${currentPage + 1}`}
        />
      </nav> */}
    </section>
  )
}

export default PostsPage

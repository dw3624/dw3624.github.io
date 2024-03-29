import { badgeVariants } from '@/components/ui/badge'
import { getTagList } from '@/lib/tag'
import Link from 'next/link'
import * as React from 'react'

const PostsPage = () => {
  const tags = getTagList()

  return (
    <section>
      <header>
        <h1 className="text-4xl font-bold">Tags</h1>
      </header>
      <div className="py-6 flex flex-wrap gap-2">
        {tags.map((tag: { name: string; count: number }, i: number) => (
          <Link
            key={i}
            href={`/tags/${tag.name}`}
            className={badgeVariants({ variant: 'default' })}
          >
            {tag.count} {tag.name}
          </Link>
        ))}
      </div>
    </section>
  )
}

export default PostsPage

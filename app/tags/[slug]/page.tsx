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
        <h1 className="text-4xl font-bold text-primary">{params.slug}</h1>
      </header>
      <div className="py-6">
        {posts.map((post, i) => (
          <PostCard key={i} post={post} />
        ))}
      </div>
    </section>
  )
}

export default TagPostsPage

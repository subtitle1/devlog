import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { sortedBlogPost, allCoreContent } from 'pliny/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
// import { NewsletterForm } from 'pliny/ui/NewsletterForm'
import { allBlogs } from 'contentlayer/generated'
import type { Blog } from 'contentlayer/generated'
import FeaturedProjects from '@/components/FeaturedProjects'
import PostCard from '@/components/PostCard'

export const getStaticProps = async () => {
  const sortedPosts = sortedBlogPost(allBlogs) as Blog[]
  const posts = allCoreContent(sortedPosts)

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            blog title
          </h1>
          <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
            blog description
          </p>
        </div> */}
        <div className="mx-auto grid max-w-xl grid-cols-1 justify-between lg:gap-y-20 lg:max-w-none lg:grid-cols-2">
          <PostCard post={posts} />
          <FeaturedProjects />
        </div>
      </div>
    </>
  )
}

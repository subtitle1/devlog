import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { sortedBlogPost, allCoreContent } from 'pliny/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
// import { NewsletterForm } from 'pliny/ui/NewsletterForm'
import { allBlogs } from 'contentlayer/generated'
import type { Blog } from 'contentlayer/generated'
import { RxRocket } from 'react-icons/rx'
import Link from 'next/link'
import Tag from '@/components/Tag'
import { formatDate } from 'pliny/utils/formatDate'

const MAX_DISPLAY = 5

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
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            안녕하세요! 🖐️
          </h1>
          <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
            개발 및 취미로 하는 블로그입니다
          </p>
        </div>
        <div className="mx-auto my-12 grid max-w-xl grid-cols-1 justify-between gap-y-20 lg:max-w-none lg:grid-cols-2">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((post) => {  const { slug, date, title, summary, tags } = post
              return (
                <li key={post.slug} className="py-12">
                  <article className="group flex-col items-start">
                    <div className="space-y-2 rounded-3xl p-7 hover:bg-gray-100 dark:hover:bg-gray-800 xl:grid xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-3 xl:col-span-3">
                        <div className="">
                          <div>
                            <Link href={`/blog/${slug}`}>
                              <span className="relative text-justify text-lg font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                                {title}
                              </span>
                            </Link>
                          </div>
                          <div className="text-justify text-gray-500 dark:text-gray-400">
                            {summary}
                          </div>
                            <div className="flex flex-wrap mt-2">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
          <div className="mt-10 space-y-10 lg:pl-16 xl:pl-24">
            <div className="flex items-center rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <RxRocket size="23" color="#ec4899" />
              <span className="pl-2 text-sm font-semibold">Featured Projects</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

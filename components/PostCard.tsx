import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import Tag from '@/components/Tag'
import { formatDate } from 'pliny/utils/formatDate'

const MAX_DISPLAY = 3

export default function PostCard({ post }) {
  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {!post.length && 'No posts found.'}
      {post.slice(0, MAX_DISPLAY).map((post) => {
        const { slug, date, title, summary, tags } = post
        return (
          <li key={post.slug} className="py-12">
            <div className="group flex-col items-start">
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
                    <div className="text-justify text-gray-500 dark:text-gray-400">{summary}</div>
                    <div className="mt-2 flex flex-wrap">
                      {tags?.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

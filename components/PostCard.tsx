import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import { formatDate } from 'pliny/utils/formatDate'
import { motion } from "framer-motion"
import MotionLayout from '@/layouts/MotionLayout'
import TagText from './TagText'

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const MAX_DISPLAY = 3

export default function PostCard({ post }) {
  return (
    <MotionLayout>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {!post.length && 'No posts found.'}
        {post.slice(0, MAX_DISPLAY).map((post) => {
          const { slug, date, title, summary, tags } = post
          return (
            <motion.li key={post.slug} variants={itemVariants} className="py-12">
              <Link href={`/blog/${slug}`}>
                <div className="group flex-col items-start">
                  <div className="space-y-2 rounded-3xl p-7 hover:bg-gray-100 dark:hover:bg-gray-800 xl:grid xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-3 xl:col-span-3">
                      <div>
                        <div>
                          <span className="relative text-justify text-lg font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                            {title}
                          </span>
                        </div>
                        <div className="text-justify text-gray-500 dark:text-gray-400 mb-1">{summary}</div>
                        <div className="flex flex-wrap">
                          {tags?.map((tag) => (
                            <TagText key={tag} text={tag} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.li>
          )
        })}
      </ul>
    </MotionLayout>
  )
}

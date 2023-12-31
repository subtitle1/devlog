import projectsData from '@/data/projectsData'
import SocialIcon from '@/components/social-icons'
import { RxRocket } from 'react-icons/rx'
import { formatDate } from 'pliny/utils/formatDate'
import { motion } from "framer-motion"
import MotionLayout from '@/layouts/MotionLayout'

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function FeaturedProjects() {
  return (
    <MotionLayout>
      <div className="my-10 space-y-10 xl:pl-16">
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
          <div className="flex items-center">
            <RxRocket size="23" color="#ec4899" />
            <span className="pl-2 text-sm font-semibold">Featured Projects</span>
          </div>
          <div className="mt-5">
            <ol>
              {projectsData.map((data) => (
                <motion.li variants={itemVariants} className="mt-6 mb-3" key={data.href}>
                  <dl className="mt-3 flex flex-auto flex-wrap gap-x-2">
                    <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      <div className="flex items-center justify-between">
                        <span className="mt-1 flex w-full text-sm text-zinc-500 dark:text-zinc-400">
                          {data.title}
                        </span>
                        <SocialIcon kind="link" href={data.href} size={5} />
                      </div>
                    </dd>
                    {/* <dd className='flex-none w-full mt-1 text-sm text-zinc-500 dark:text-zinc-400'>
                                  {data.description}
                              </dd> */}
                  </dl>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {data.tags.map((tag) => (
                      <small key={tag} className="rounded-2xl bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-800 dark:bg-zinc-600 dark:text-zinc-300">
                        {tag}
                      </small>
                    ))}
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </MotionLayout>
  )
}

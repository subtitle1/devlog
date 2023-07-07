import projectsData from '@/data/projectsData'
import SocialIcon from '@/components/social-icons'

export default function FeaturedProjects() {
  return (
    <div className='mt-5'>
        <ol>
            {projectsData.map((data) => (
            <li className='my-3'>
                <dl className='flex flex-wrap mt-3 flex-auto gap-x-2'>
                <dd className='flex-none w-full text-sm font-medium text-zinc-900 dark:text-zinc-100'>
                    <div className='flex items-center justify-between'>
                    <span className='flex w-full mt-1 text-sm text-zinc-500 dark:text-zinc-400'>{data.title}</span>
                    <SocialIcon className='items-center' kind="link" href={data.href} size={5}/>
                    </div>
                </dd>
                {/* <dd className='flex-none w-full mt-1 text-sm text-zinc-500 dark:text-zinc-400'>
                    {data.description}
                </dd> */}
                </dl>
                <div class="flex flex-wrap gap-2 mt-3">
                {data.tags.map((tag) => (
                    <small
                    className='bg-zinc-100 text-zinc-800 text-xs font-medium px-2.5 py-0.5 rounded-2xl dark:bg-zinc-600 dark:text-zinc-300'>
                    {tag}
                    </small>
                ))}
                </div>
            </li>
            ))}
        </ol>
    </div>
  )
}
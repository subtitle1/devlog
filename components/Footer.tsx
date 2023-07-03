import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-end mb-8">
        <div className="mb-3 flex gap-3 justify-between">
          {/* <SocialIcon kind="mail" href={siteMetadata.email} /> */}
          {/* <SocialIcon kind="instagram" href={siteMetadata.instagram} /> */}
          <SocialIcon kind="github" href={siteMetadata.github} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          {/* <div>{siteMetadata.author}</div>
          <div>{` • `}</div> */}
          <div>{`© ${new Date().getFullYear()}`}</div>
          {/* <div>{` • `}</div> */}
          <Link href="/">{siteMetadata.title}</Link>
          <div>{` • `}</div>
          <div>
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

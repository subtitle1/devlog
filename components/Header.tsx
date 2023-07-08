'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  const pathName = usePathname();

  return (
    <header className="sticky z-50 top-0 border-b dark:border-gray-700 backdrop-blur-sm flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div
                className={classNames(
                  'horizontal-underline italic hidden text-3xl font-extrabold sm:block',
                  {
                    'horizontal-underline-active': pathName === '/',
                  }
                )}
              >{siteMetadata.headerTitle}
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center text-base leading-5">
      <div className="hidden space-x-5 sm:block">
        {headerNavLinks.map(({title, href}) => {
          const active = pathName.includes(href);
          return (<Link
            key={title}
            href={href}
            className={classNames(
              'horizontal-underline font-bold text-gray-900 dark:text-gray-100 p-1',
              {
                'horizontal-underline-active': active,
              }
            )}
            aria-label={title}>
            {title}
          </Link>)
          })}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header

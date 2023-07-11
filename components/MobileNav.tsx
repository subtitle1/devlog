import { useState } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <div className="sm:hidden">
      <button
        className="ml-1 mr-1 h-8 w-8 rounded py-1"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-gray-900 dark:text-gray-100"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`fixed left-0 top-0 z-100 h-full w-full transform duration-300 ease-in-out ${
          navShow ? 'translate-x-0 opacity-95' : 'translate-x-full opacity-0'
        }`}
      >
        <nav className="mt-5 bg-white dark:bg-[#18181B] rounded-2xl">
          <div className='absolute top-0 left-0 w-screen h-screen bg-slate-100/70'>
            <div className='flex flex-col justify-center items-center h-full w-full z-200 '>
              {headerNavLinks.map((link) => (
                <div key={link.title} className="px-12 py-4">
                  <Link
                    href={link.href}
                    className="box-border text-pink-500 text-3xl font-bold tracking-widest"
                    onClick={onToggleNav}
                  >
                    {link.title}
                  </Link>
                </div>
              ))}
                <div className="justify-end p-3">
                  <button
                    className=" h-5 w-5 rounded"
                    aria-label="Toggle Menu"
                    onClick={onToggleNav}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="text-gray-900 dark:text-gray-100"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            
          </div>
          </nav>
        </div>
      </div>
  )
}

export default MobileNav
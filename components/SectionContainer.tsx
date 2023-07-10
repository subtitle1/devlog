import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="mx-auto max-w-3xl border-slate-100 px-6 bg-white dark:border-gray-800 dark:bg-[#18181B] sm:px-6 xl:max-w-4xl xl:px-14">
      {children}
    </section>
  )
}

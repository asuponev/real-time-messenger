'use client'

import clsx from 'clsx'
import Link from 'next/link'

interface IMobileItemProps {
  href: string
  icon: any
  active?: boolean
  onClick?: () => void
}

const MobileItem: React.FC<IMobileItemProps> = ({
  href,
  icon: Icon,
  active,
  onClick
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick()
    }
  }

  return (
    <Link
      onClick={handleClick}
      href={href}
      className={clsx(
        `group flex justify-center gap-x-3 p-4 text-sm leading-6 font-semibold w-full text-gray-500 hover:text-black hover:bg-gray-100`,
        active && 'bg-gray-100 text-black'
      )}
    >
      <Icon className='h-6 w-6' />
    </Link>
  )
}

export default MobileItem
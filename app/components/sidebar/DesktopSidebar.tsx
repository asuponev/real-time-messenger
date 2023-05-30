'use client'

import { useState } from 'react'
import { User } from '@prisma/client'

import useRoutes from '@/app/hooks/useRoutes'

import DesktopItem from './DesktopItem'
import Avatar from '../Avatar'

interface IDesktopSidebarProps {
  currentUser: User
}

const DesktopSidebar: React.FC<IDesktopSidebarProps> = ({
  currentUser
}) => {
  const routes = useRoutes()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='hidden lg:fixed inset-y-0 left-0 z-40 w-20 overflow-y-auto bg-white border-r-[1px] pb-4 lg:flex flex-col justify-between xl:px-6'>
      <nav className='mt-4 flex flex-col justify-between'>
        <ul
          role='list'
          className='flex flex-col items-center space-y-1'
        >
          {routes.map((item) => (
            <DesktopItem
              key={item.label}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={item.active}
              onClick={item.onClick}
            />
          ))}
        </ul>
      </nav>
      <nav className='mt-4 flex flex-col justify-between items-center'>
        <div
          onClick={() => setIsOpen(true)}
          className='cursor-pointer hover:opacity-75 transition'
        >
          <Avatar user={currentUser} />
        </div>
      </nav>
    </div>
  )
}

export default DesktopSidebar
'use client'

import useConversation from '@/app/hooks/useConversation'
import useRoutes from '@/app/hooks/useRoutes'

import MobileItem from './MobileItem'

const MobileFooter: React.FC = () => {
  const routes = useRoutes()
  const { isOpen } = useConversation()

  if (isOpen) {
    return null
  }

  return (
    <div
      className='fixed flex justify-between items-center w-full bottom-0 z-40 bg-white border-t-[1px] lg:hidden'
    >
      {routes.map((item) => (
        <MobileItem
          key={item.href}
          href={item.href}
          icon={item.icon}
          active={item.active}
          onClick={item.onClick}
        />
      ))}
    </div>
  )
}

export default MobileFooter
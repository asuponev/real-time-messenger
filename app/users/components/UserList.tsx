'use client'

import { User } from '@prisma/client'

import UserBox from './UserBox'

interface IUserListProps {
  items: User[]
}

const UserList: React.FC<IUserListProps> = ({
  items
}) => {
  return (
    <aside className='fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80 overflow-y-auto border-r block w-full left-0'>
      <div className='px-5'>
        <div className='flex flex-col'>
          <div className='text-xl font-bold text-neutral-800 py-4'>
            People
          </div>
        </div>
        {items.map((item) => (
          <UserBox
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </aside>
  )
}

export default UserList
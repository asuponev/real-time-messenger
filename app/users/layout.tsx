import getUsers from '@/app/actions/getUsers'

import Sidebar from '@/app/components/sidebar/Sidebar'
import UserList from './components/UserList'

export default async function UsersLayout({
  children
}: {
  children: React.ReactNode
}) {
  const users = await getUsers()

  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className='h-full'>
        <UserList items={users} />
        {children}
      </div>
    </Sidebar>
  )
}
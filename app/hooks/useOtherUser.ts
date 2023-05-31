import { useMemo } from 'react'
import { useSession } from 'next-auth/react'
import { User } from '@prisma/client'
import { FullConversationType } from '../types'

const useOtherUser = (conversation: FullConversationType | {
  users: User[]
}) => {
  const session = useSession()

  const otherUser = useMemo(() => {
    const currentUserEmail = session?.data?.user?.email

    return conversation.users.filter((user) => user.email !== currentUserEmail)
  }, [session?.data?.user?.email, conversation.users])

  return otherUser[0]
}

export default useOtherUser
import getConversations from '@/app/actions/getConversations'
import Sidebar from '@/app/components/sidebar/Sidebar'
import ConversationsList from './components/ConversationsList'

export default async function ConversationsLayout({
  children
}: {
  children: React.ReactNode
}) {
  const conversations = await getConversations()

  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className='h-full'>
        <ConversationsList 
          initialItems={conversations}
        />
        {children}
      </div>
    </Sidebar>
  )
}
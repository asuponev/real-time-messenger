import EmptyState from '@/app/components/EmptyState'

const Users: React.FC = () => {
  return (
    <div className='hidden lg:block lg:pl-80 h-full'>
      <EmptyState />
    </div>
  )
}

export default Users
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form'

interface IMessageInputProps {
  id: string
  type?: string
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
  required?: boolean
  placeholder?: string
}

const MessageInput: React.FC<IMessageInputProps> = ({
  id,
  type,
  register,
  errors,
  required,
  placeholder
}) => {
  return (
    <div className='relative w-full'>
      <input
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className='text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus:outline-none'
      />
    </div>
  )
}

export default MessageInput
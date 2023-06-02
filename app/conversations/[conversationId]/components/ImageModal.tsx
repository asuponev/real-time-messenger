'use client'

import Modal from '@/app/components/Modal'
import Image from 'next/image'

interface IImageModalProps {
  onClose: () => void
  isOpen?: boolean
  src?: string | null
}

const ImageModal: React.FC<IImageModalProps> = ({
  onClose,
  src,
  isOpen
}) => {
  if (!src) {
    return null
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className='w-80 h-80'>
        <Image
          alt='image'
          fill
          src={src}
          className='object-cover'
        />
      </div>
    </Modal>
  )
}

export default ImageModal
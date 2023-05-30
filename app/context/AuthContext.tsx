'use client'

import { SessionProvider } from 'next-auth/react'

interface IAuthContextProps {
  children: React.ReactNode
}

export default function AuthContext({
  children
}: IAuthContextProps) {
  return <SessionProvider>{children}</SessionProvider>
}
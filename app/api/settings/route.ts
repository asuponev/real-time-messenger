import { NextResponse } from 'next/server'

import prisma from '@/app/libs/prismadb'
import getCurrentUser from '@/app/actions/getCurrentUser'

export async function POST(
  request: Request
) {
  try {
    const currentUser = await getCurrentUser()
    const body = await request.json()
    const { name, image } = body

    if (!currentUser?.id) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id
      },
      data: {
        name,
        image,
      }
    })

    return NextResponse.json(updatedUser)
  } catch (error: any) {
    console.log(error, 'SETTINGS_ERROR')
    return new NextResponse('Internal Error', { status: 500 })
  }
}
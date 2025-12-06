'use client'

import { Authenticated, Unauthenticated } from 'convex/react'
import { SignInButton, UserButton } from '@clerk/nextjs'
import { useQuery } from 'convex/react'
import { api } from '../convex/_generated/api'
import { ModNavBar } from '@/components/navbars/ModNavBar'
import LandingPage from './LandingPage/LandingPage'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Authenticated>
        <UserButton />
        <Content />
      </Authenticated>
      <Unauthenticated>
        <LandingPage />
      </Unauthenticated>
    </>
  )
}

function Content() {
  const messages = useQuery(api.messages.getForCurrentUser)
  return <div>
    <ModNavBar />
    Authenticated content: {messages?.length}
  </div>
}
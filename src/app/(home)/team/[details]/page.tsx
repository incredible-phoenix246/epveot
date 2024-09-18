import React from 'react'
import ProfilePage from './catd'
import Profile from '.'

export interface PageProps {
  searchParams: {
    [key: string]: string | undefined
  }
}

const page = ({ searchParams: { id } }: PageProps) => {
  return (
    <div className="md:container px-2">
      <Profile id={id ? parseInt(id) : 0} />
    </div>
  )
}

export default page

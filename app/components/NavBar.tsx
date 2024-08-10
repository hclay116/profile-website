import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className="bg-light-blue p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-xl font-bold text-gray-700">
              <Link href="/">Hannah Clay</Link>
            </div>
            <div className="space-x-4">
              <Link href="/" className="btn btn-outline">
                Home
              </Link>
              <Link href="/resume" className="btn btn-outline">
                Resume
              </Link>
              <Link href="/projects" className="btn btn-outline">
                Projects
              </Link>
            </div>
          </div>
        </nav>
  )
}

export default NavBar
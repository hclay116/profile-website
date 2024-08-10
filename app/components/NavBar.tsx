import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const NavBar = () => {
  return (
    <nav className="bg-background p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Links */}
        <div className="flex space-x-4">
          <Link href="https://github.com/hclay116" passHref>
              <Image
                src="/images/github-mark.png"
                alt="GitHub"
                width={32}
                height={32}
                className="hover:opacity-75"
              />
          </Link>
          <Link href="https://www.linkedin.com/in/hannahclay116" passHref>
              <Image
                src="/images/in-logo.png"
                alt="LinkedIn"
                width={32}
                height={32}
                className="hover:opacity-75"
              />
          </Link>
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
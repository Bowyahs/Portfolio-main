'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="py-4">
      <ul className="flex justify-center space-x-6 ">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/education">Education</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/experience">Experience</Link></li>
        <li><Link href="/skills">Skills</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
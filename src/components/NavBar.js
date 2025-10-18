'use client';

import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center p-[15px]">
            <Link href="/">ALECKSHEN</Link>
            <div className="flex gap-8">
                <Link href="/projects" className="relative cursor-pointer hover-underline">PROJECTS</Link>
                <Link href="#about" className="relative cursor-pointer hover-underline">ABOUT</Link>
                <Link href="#contact" className="relative cursor-pointer hover-underline">CONTACT</Link>
            </div>
        </nav>
    )
}
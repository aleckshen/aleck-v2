'use client';

import Link from 'next/link';

export default function NavBar() {

    const name = 'ALECKSHEN';
    return (
        <nav className="flex justify-between items-center p-[15px]">
            <Link href="/" className="swap-text">
                {/* split name into letters */}
                <span className="top">
                {name.split("").map((letter, i) => (
                    <span key={i} style={{ '--i': i }}>{letter}</span>
                ))}
                </span>
                <span className="bottom">
                {name.split("").map((letter, i) => (
                    <span key={i} style={{ '--i': i }}>{letter}</span>
                ))}
                </span>
            </Link>
            <div className="flex gap-8">
                <Link href="/projects" className="relative cursor-pointer hover-underline">PROJECTS</Link>
                <Link href="#about" className="relative cursor-pointer hover-underline">ABOUT</Link>
                <Link href="#contact" className="relative cursor-pointer hover-underline">CONTACT</Link>
            </div>
        </nav>
    )
}
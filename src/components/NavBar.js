'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function NavBar() {

    const name = 'ALECKSHEN';
    const pathname = usePathname();
    const router = useRouter();

    const handleLogoClick = (e) => {
        if (pathname === '/') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    const handleAboutCLick = (e) => {
        if (pathname !== '/') {
            e.preventDefault()
            router.push('/#about')
        }
    }

    const handleProjectsClick = (e) => {
        if (pathname === '/projects') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className="flex justify-between items-center p-[15px]">
            <Link href="/" className="swap-text" onClick={handleLogoClick}>
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
                <Link href="/projects" className="relative cursor-pointer hover-underline" onClick={handleProjectsClick}>PROJECTS</Link>
                <Link href="#about" scroll={true} className="relative cursor-pointer hover-underline" onClick={handleAboutCLick}>ABOUT</Link>
                <Link href="#contact" scroll={true} className="relative cursor-pointer hover-underline">CONTACT</Link>
            </div>
        </nav>
    )
}
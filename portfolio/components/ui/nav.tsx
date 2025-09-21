'use client';

import { useTransitionRouter } from 'next-view-transitions';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function Navbar() {
    const router = useTransitionRouter();
    const pathname = usePathname();

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects' },
    ];

    return (
        <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40">
            <div className="flex items-center gap-x-1 relative rounded-3xl bg-background border border-border p-1 shadow-lg shadow-background [view-transition-name:navbar]">
                <div 
                    className={`absolute bg-[#27272ae6] rounded-full border border-[#f4f4f533] transition-all duration-1000 w-24 h-9 ${
                        pathname === '/' ? 'translate-x-0' : 'translate-x-[100px]'
                    }`}
                    style={{ transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)' }}
                />
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`
                                    w-24 h-9 flex items-center justify-center relative rounded-full text-sm font-medium transition-all duration-200 ease-out z-10
                                ${isActive 
                                    ? 'text-primary cursor-not-allowed pointer-events-none'
                                    : 'text-muted hover:text-primary pointer-events-auto cursor-pointer'
                                }
                            `}
                            onClick={(e) => {
                                e.preventDefault();
                                router.push(item.href, {
                                    onTransitionReady: () => pageAnimation(pathname, item.href)
                                });
                            }}
                        >
                            {item.name}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}

const pageAnimation = (currentPath: string, targetPath: string) => {
    const isGoingToProjects = currentPath === '/' && targetPath === '/projects';
    
    const oldPageTranslateX = isGoingToProjects ? '-100px' : '100px';
    const newPageTranslateX = isGoingToProjects ? '100%' : '-100%';
    
    document.documentElement.animate(
        [
            {
                opacity: 1,
                scale: 1,
                transform: 'translateX(0)'
            },
            {
                opacity: 0,
                scale: 1,
                transform: `translateX(${oldPageTranslateX})`
            }
        ], {
            duration: 1000,
            easing: "cubic-bezier(0.76, 0, 0.24, 1)",
            fill: "forwards",
            pseudoElement: "::view-transition-old(root)",
        }
    );

    document.documentElement.animate(
        [
            {
                transform: `translateX(${newPageTranslateX})`
            },
            {
                transform: 'translateX(0)'
            }
        ], {
            duration: 1000,
            easing: "cubic-bezier(0.76, 0, 0.24, 1)",
            fill: "forwards",
            pseudoElement: "::view-transition-new(root)",
        }
    );
}
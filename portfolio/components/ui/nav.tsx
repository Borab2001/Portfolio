'use client';

import { useTransitionRouter } from 'next-view-transitions';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import GlassSurface from './glass';


export default function Navbar() {
    const router = useTransitionRouter();
    const pathname = usePathname();

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects' },
    ];

    return (
        <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40">
            {/* <div className="bg-background backdrop-blur-2xl border border-border-light rounded-full p-1 shadow-2xl">
                <div className="flex items-center space-x-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`
                                        w-24 h-9 flex items-center justify-center relative rounded-full text-sm font-medium transition-all duration-200 ease-out
                                    ${isActive 
                                        ? 'text-primary bg-backdrop border border-border shadow-lg' 
                                        // ? 'text-surface-text bg-primary border border-border shadow-lg' 
                                        : 'text-muted hover:text-primary'
                                    }
                                `}
                            >
                                {item.name}
                                {isActive && (
                                    <div className="absolute inset-0 bg-primary/10 rounded-full -z-10" />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div> */}
            <GlassSurface 
                width={204} 
                height={44}
                borderRadius={24}
                className=""
            >
                <div className="flex items-center gap-x-1 relative [view-transition-name:navbar]">
                    <div 
                        className={`absolute bg-[#f4f4f533] rounded-full border border-[#f4f4f580] transition-all duration-1000 w-24 h-9 ${
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
                                        w-24 h-9 flex items-center justify-center relative rounded-full text-sm font-medium transition-all duration-200 ease-out cursor-pointer z-10
                                    ${isActive 
                                        ? 'text-primary'
                                        : 'text-muted hover:text-primary'
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
            </GlassSurface>
            {/* <div className="fixed inset-0 bg-[#0a0a0a0d] backdrop-blur-[2px] -z-10 rounded-3xl" /> */}
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
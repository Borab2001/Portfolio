'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import GlassSurface from './glass';


export default function Navbar() {
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
                <div className="flex items-center gap-x-1 relative">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`
                                        w-24 h-9 flex items-center justify-center relative rounded-full text-sm font-medium transition-all duration-200 ease-out
                                    ${isActive 
                                        ? 'text-primary border border-[#f4f4f580]'
                                        : 'text-muted hover:text-primary'
                                    }
                                `}
                            >
                                {item.name}
                                {isActive && (
                                    <div className="absolute inset-0 bg-[#f4f4f533] rounded-full -z-10" />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </GlassSurface>
            {/* <div className="fixed inset-0 bg-[#0a0a0a0d] backdrop-blur-[2px] -z-10 rounded-3xl" /> */}
        </nav>
    );
}
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects' },
    ];

    return (
        <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-background backdrop-blur-2xl border border-zinc-700 rounded-full p-1 shadow-2xl">
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
                                        ? 'text-white bg-white/05 shadow-lg' 
                                        : 'text-white/70 hover:text-white'
                                    }
                                `}
                            >
                                {item.name}
                                {isActive && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-full -z-10" />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
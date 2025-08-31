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
        <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40">
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
                                        ? 'text-zinc-100 bg-zinc-800 shadow-lg' 
                                        : 'text-zinc-400 hover:text-zinc-100'
                                    }
                                `}
                            >
                                {item.name}
                                {isActive && (
                                    <div className="absolute inset-0 bg-zinc-100/10 rounded-full -z-10" />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
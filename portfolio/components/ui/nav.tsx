'use client';

import { useTransitionRouter } from 'next-view-transitions';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import projectsData from '@/data/projects.json';

export default function Navbar() {
    const router = useTransitionRouter();
    const pathname = usePathname();
    
    const getInitialProjectState = () => {
        const projectMatch = pathname.match(/^\/projects\/(.+)$/);
        if (projectMatch) {
            const projectId = projectMatch[1];
            const project = projectsData.find(p => p.id === projectId);
            return {
                isProjectPage: !!project,
                projectName: project?.navTitle || ''
            };
        }
        return { isProjectPage: false, projectName: '' };
    };
    
    const initialState = getInitialProjectState();
    const [isProjectPage, setIsProjectPage] = useState(initialState.isProjectPage);
    const [projectName, setProjectName] = useState(initialState.projectName);

    useEffect(() => {
        const projectMatch = pathname.match(/^\/projects\/(.+)$/);
        const newIsProjectPage = !!projectMatch;
        
        if (newIsProjectPage && projectMatch) {
            const projectId = projectMatch[1];
            const project = projectsData.find(p => p.id === projectId);
            if (project) {
                setProjectName(project.navTitle);
                setIsProjectPage(true);
            }
        } else {
            setIsProjectPage(false);
            setProjectName('');
        }
    }, [pathname]);

    const baseNavItems = [
        { id: 'home', name: 'Home', href: '/' },
        { id: 'projects', name: 'Projects', href: '/projects' },
        { id: 'project-detail', name: projectName, href: pathname } // Toujours présent dans le DOM
    ];

    const navItems = baseNavItems;

    const getActiveIndex = () => {
        if (pathname === '/') return 0;
        if (pathname === '/projects') return 1;
        if (pathname.startsWith('/projects/')) return 2;
        return -1;
    };

    const activeIndex = getActiveIndex();
    const navWidth = isProjectPage ? '306px' : '206px'; // 204px pour 2 éléments, 304px pour 3 éléments
    const indicatorTranslateX = activeIndex >= 0 ? `${activeIndex * 100}px` : '0px';

    return (
        <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40">
            <div 
                className="flex items-center gap-x-1 relative rounded-3xl bg-background border border-border p-1 shadow-lg shadow-background [view-transition-name:navbar] transition-all duration-1000"
                style={{ 
                    width: navWidth,
                    transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)'
                }}
            >
                <div 
                    className="absolute bg-[#27272ae6] rounded-full border border-[#f4f4f533] transition-all duration-1000 w-24 h-9"
                    style={{ 
                        transform: `translateX(${indicatorTranslateX})`,
                        transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)',
                        opacity: activeIndex >= 0 ? 1 : 0
                    }}
                />
                
                {navItems.map((item, index) => {
                    const isActive = activeIndex === index;
                    const isProjectItem = index === 2;
                    
                    return (
                        <div
                            key={item.id}
                            className="transition-all duration-1000 overflow-hidden"
                            style={{ 
                                width: isProjectItem 
                                    ? (isProjectPage ? '96px' : '0px')
                                    : '96px',
                                opacity: isProjectItem 
                                    ? (isProjectPage ? 1 : 0)
                                    : 1,
                                transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)'
                            }}
                        >
                            <Link
                                href={item.href}
                                className={`
                                    w-24 h-9 flex items-center justify-center relative rounded-full text-sm font-medium transition-all duration-200 ease-out z-10 whitespace-nowrap overflow-hidden text-ellipsis
                                    ${isActive 
                                        ? 'text-primary cursor-not-allowed pointer-events-none'
                                        : 'text-muted hover:text-primary pointer-events-auto cursor-pointer'
                                    }
                                `}
                                style={{
                                    transitionDelay: isProjectItem 
                                        ? (isProjectPage ? '1000ms' : '0ms')
                                        : '0ms'
                                }}
                                onClick={(e) => {
                                    if (isActive) return;
                                    e.preventDefault();
                                    router.push(item.href, {
                                        onTransitionReady: () => pageAnimation(pathname, item.href)
                                    });
                                }}
                            >
                                {item.name}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </nav>
    );
}

const pageAnimation = (currentPath: string, targetPath: string) => {
    const isGoingToProjects = currentPath === '/' && targetPath === '/projects';
    const isGoingHome = targetPath === '/';
    const isGoingToProjectDetail = targetPath.startsWith('/projects/') && targetPath !== '/projects';
    const isGoingFromProjectsToProject = currentPath === '/projects' && targetPath.startsWith('/projects/') && targetPath !== '/projects';
    const isGoingFromProjectToProjects = currentPath.startsWith('/projects/') && currentPath !== '/projects' && targetPath === '/projects';
    
    let oldPageTranslateX, newPageTranslateX;
    
    if (isGoingHome) {
        oldPageTranslateX = '100px';
        newPageTranslateX = '-100%';
    } else if (isGoingToProjects && currentPath === '/') {
        oldPageTranslateX = '-100px';
        newPageTranslateX = '100%';
    } else if (isGoingToProjectDetail || isGoingFromProjectsToProject) {
        oldPageTranslateX = '-100px';
        newPageTranslateX = '100%';
    } else if (isGoingFromProjectToProjects) {
        oldPageTranslateX = '100px';
        newPageTranslateX = '-100%';
    } else {
        // Cas par défaut
        oldPageTranslateX = '100px';
        newPageTranslateX = '-100%';
    }
    
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
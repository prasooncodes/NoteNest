import React, { useState } from 'react';
import Link from 'next/link';
import { navList } from '@/constants/data';
import { HiMenuAlt3, HiSun } from 'react-icons/hi';
import { HiMiniMoon } from 'react-icons/hi2';
import { useTheme } from 'next-themes';

const Sidebar = () => {
    const [closed, setClosed] = useState(false);
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <aside className={`h-screen bg-white dark:bg-gray-900 shadow-md border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ${closed ? 'w-16' : 'w-60'} flex flex-col justify-between`}>
            {/* Top Section */}
            <div>
                <div className="flex items-center justify-between px-4 py-5">
                    <h1 className={`text-2xl font-bold text-gray-800 dark:text-white transition-opacity duration-300 ${closed ? 'opacity-0 w-0' : 'opacity-100 w-auto'}`}>
                        NoteNest
                    </h1>
                    <button
                        onClick={() => setClosed(!closed)}
                        className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-full transition"
                    >
                        <HiMenuAlt3 className="text-xl" />
                    </button>
                </div>

                {/* Navigation List */}
                <nav className="flex flex-col px-2 space-y-1">
                    {navList.map((item, index) => (
                        <Link
                            href={`/${item.title.toLowerCase()}`}
                            key={index}
                            className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium text-sm transition-all
                                ${index === 0
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-700'
                                }`}
                        >
                            <span className="text-xl">{item.icon}</span>
                            {!closed && <span className="truncate">{item.title}</span>}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Bottom Section */}
            <div className="px-4 py-5 border-t border-gray-200 dark:border-gray-700">
                <button
                    onClick={toggleTheme}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm text-gray-800 dark:text-gray-200 transition"
                >
                    {theme === 'light' ? <HiMiniMoon className="text-lg" /> : <HiSun className="text-lg" />}
                    {!closed && <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>}
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;

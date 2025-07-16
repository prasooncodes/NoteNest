import React, { useState, useEffect, useRef } from 'react';
import { UserAuth } from '@/utils/auth';
import { FaSearch } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdOutlineNotifications } from 'react-icons/md';

const Navbar = () => {
    const { user, signOut } = UserAuth();
    const [display, setDisplay] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDisplay(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="p-4 flex justify-between items-center bg-white/80 backdrop-blur-md dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700 shadow-sm">
            {/* Search Bar */}
            <div className="relative w-full max-w-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 dark:text-gray-500">
                    <FaSearch />
                </div>
                <input
                    type="text"
                    id="search"
                    placeholder="Search notes..."
                    className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 dark:border-gray-600 text-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Right side - Notifications + Profile */}
            <div className="flex items-center gap-4 relative" ref={dropdownRef}>
                <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-100 dark:hover:bg-gray-700 transition">
                    <MdOutlineNotifications className="text-xl text-gray-700 dark:text-gray-300" />
                </button>

                <button
                    onClick={() => setDisplay(!display)}
                    className="flex items-center gap-2 rounded-full px-3 py-1.5 bg-blue-100 dark:bg-gray-700 text-sm font-medium text-gray-800 dark:text-gray-200 hover:shadow-sm transition"
                >
                    <img
                        src="/user.png"
                        alt="User avatar"
                        className="h-8 w-8 rounded-full object-cover"
                    />
                    <span className="truncate max-w-[6rem]">
                        {user?.displayName?.split(" ")[0] || "User"}
                    </span>
                    <MdKeyboardArrowDown />
                </button>

                {/* Dropdown */}
                {display && (
                    <div className="absolute right-0 top-14 w-36 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-md py-2 z-50">
                        <button className="w-full px-4 py-2 text-sm text-blue-600 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-gray-700 text-left">
                            Profile
                        </button>
                        <button
                            onClick={signOut}
                            className="w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-gray-700 text-left"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;

import React from 'react';
import { MdSave } from 'react-icons/md';
import Link from 'next/link';

const EditorNav = ({ handleSave }) => {
    return (
        <header className="fixed top-0 w-full z-50 shadow-sm bg-gradient-to-r from-white to-slate-100 dark:from-gray-900 dark:to-gray-800 border-b border-gray-200 dark:border-gray-700">
            <nav className="max-w-screen-xl mx-auto px-6 sm:px-10 py-3 flex justify-between items-center">
                {/* Logo Section */}
                <Link href="/dashboard" className="flex items-center gap-3 hover:opacity-90 transition">
                    <img src="/applogo-tp.png" alt="logo" className="w-9 h-9 rounded" />
                    <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                        NoteNest
                    </span>
                </Link>

                {/* Save Button */}
                <button
                    onClick={handleSave}
                    className="flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-blue-500 text-blue-600 dark:text-blue-300 font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all"
                >
                    <MdSave className="text-lg" />
                    <span className="text-sm">Save</span>
                </button>
            </nav>
        </header>
    );
};

export default EditorNav;

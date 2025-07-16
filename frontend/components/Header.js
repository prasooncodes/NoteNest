import React from 'react';
import { categories } from '@/constants/data';
import useNotesStore from '@/store/notesStore';

const Header = ({ count }) => {
    const { category, setCategory } = useNotesStore();

    return (
        <header className="mt-4 px-6">
            {/* Overview Title */}
            <div className="mb-4">
                <p className="text-xs text-gray-500 uppercase tracking-wide dark:text-gray-400">Overview</p>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Notes <span className="text-base font-medium text-gray-600 dark:text-gray-300">({count})</span>
                </h2>
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 hide-scrollbar">
                {[{ title: "All", id: null }, ...categories].map((item, index) => {
                    const isActive = category === item || (item.id === null && category === null);

                    return (
                        <button
                            key={index}
                            onClick={() => setCategory(item.id ?? null)}
                            className={`flex-shrink-0 px-4 py-1.5 text-sm rounded-full font-medium transition-all duration-200
                                ${isActive
                                    ? "bg-blue-600 text-white shadow"
                                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700"
                                }`}
                        >
                            {item.title}
                        </button>
                    );
                })}
            </div>
        </header>
    );
};

export default Header;

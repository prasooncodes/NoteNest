import React from 'react';

const EditorInfo = ({ tags = [], category = "general" }) => {
    return (
        <aside className="hidden lg:block w-2/12 px-4 pt-20 text-sm text-gray-800 dark:text-gray-200">
            {/* Category Display */}
            <div className="bg-white dark:bg-gray-900 shadow rounded-xl p-4 mb-6 border dark:border-gray-700">
                <h3 className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-2">
                    <span className="mr-2 text-green-500">●</span> Category
                </h3>
                <p className="capitalize font-medium">{category}</p>
            </div>

            {/* Tags Display */}
            <div className="bg-white dark:bg-gray-900 shadow rounded-xl p-4 border dark:border-gray-700">
                <h3 className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-2">
                    <span className="mr-1">#</span> Tags
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.length > 0 ? (
                        tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium"
                            >
                                {tag}
                            </span>
                        ))
                    ) : (
                        <p className="text-xs text-gray-400 italic">No tags yet</p>
                    )}
                </div>

                {/* Add Tag */}
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="New tag"
                        className="flex-1 px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full hover:bg-blue-700 transition">
                        Add
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default EditorInfo;

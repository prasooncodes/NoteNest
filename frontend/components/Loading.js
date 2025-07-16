import React from 'react';

const Loading = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="flex flex-col items-center gap-4">
                <div className="relative w-12 h-12">
                    <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-spin border-t-transparent"></div>
                    <div className="absolute inset-1.5 rounded-full bg-white dark:bg-gray-900"></div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-300 animate-pulse tracking-wide">
                    Syncing NoteNest magic...
                </p>
            </div>
        </div>
    );
};

export default Loading;

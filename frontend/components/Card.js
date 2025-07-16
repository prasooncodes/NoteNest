import React from 'react';
import Link from 'next/link';

const Card = ({ id, category, title, preview, timestamp, displayName }) => {
    const date = new Date(timestamp).toLocaleDateString();

    return (
        <Link href={{ pathname: `/edit/${id}`, query: { id } }} as={`/edit/${id}`}>
            <div className="group relative rounded-2xl bg-gradient-to-tr from-slate-50 to-slate-200 dark:from-gray-800 dark:to-gray-700 p-5 shadow-xl transition-transform hover:-translate-y-1 hover:shadow-2xl duration-300 cursor-pointer">
                
                {/* Category Tag */}
                <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide shadow">
                    {category || "Frontend"}
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 leading-tight group-hover:text-primary">
                    {title || "Untitled Note"}
                </h2>

                {/* Preview Text */}
                <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 mb-4">
                    {preview || "This is a brief preview of the note content..."}
                </p>

                <div className="flex justify-between items-center">
                    {/* Author */}
                    <div className="flex items-center gap-3">
                        <img src="/user.png" alt="user" className="h-8 w-8 rounded-full shadow-sm border border-white" />
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                            {displayName || "John Doe"}
                        </div>
                    </div>

                    {/* Timestamp */}
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                        {date || "N/A"}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;

import React from 'react';

const Footer = () => {
    return (
        <footer className="py-4 flex items-center justify-center w-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm">
            <p>&copy; {new Date().getFullYear()} NoteNest. All rights reserved.</p>
        </footer>
    );
};

export default Footer;

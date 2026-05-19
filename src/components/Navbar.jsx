import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '#hero', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#experience', label: 'Experience' },
        { href: '#education', label: 'Education' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white z-50 shadow-lg">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-cyan-400">MD Shakil</h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-sm font-medium">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="hover:text-cyan-400 transition">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                >
                    <motion.span
                        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className="block w-6 h-0.5 bg-white"
                    />
                    <motion.span
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="block w-6 h-0.5 bg-white"
                    />
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className="block w-6 h-0.5 bg-white"
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-gray-800 px-6 pb-4 flex flex-col gap-4 text-sm font-medium overflow-hidden"
                    >
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block hover:text-cyan-400 transition py-1">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
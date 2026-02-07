import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* Logo */}
                <div className="text-2xl font-bold tracking-tighter text-white">
                    STARK<span className="text-cyan-400">.</span>MEDIA
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {['Services', 'Work', 'Process', 'About'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="px-5 py-2 text-sm font-bold text-slate-900 bg-white hover:bg-cyan-400 transition-colors rounded-full"
                    >
                        Let's Talk
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 p-6 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-2">
                    {['Services', 'Work', 'Process', 'About'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-lg font-medium text-slate-300 hover:text-cyan-400"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="mt-4 px-5 py-3 text-center font-bold text-slate-900 bg-cyan-400 rounded-lg hover:bg-cyan-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Let's Talk
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

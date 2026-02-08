import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, MoveRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t.nav.services, href: "#services" },
        { name: t.nav.work, href: "#work" },
        { name: t.nav.process, href: "#process" },
        { name: t.nav.about, href: "#about" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div
                    className={`rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${scrolled
                            ? 'bg-background/80 backdrop-blur-md border border-white/10 shadow-lg'
                            : 'bg-transparent border border-transparent'
                        }`}
                >
                    {/* Logo */}
                    <div className="text-2xl font-display font-bold tracking-tighter text-white">
                        STARK<span className="text-primary">.</span>MEDIA
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                            </a>
                        ))}

                        <div className="h-4 w-px bg-white/10" />

                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                        >
                            <Globe className="w-4 h-4" />
                            <span>{language === 'en' ? 'ES' : 'EN'}</span>
                        </button>

                        <button className="bg-white text-background px-5 py-2 rounded-full text-sm font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2 group">
                            {t.nav.cta}
                            <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="text-zinc-400 hover:text-white transition-colors"
                        >
                            <span className="font-bold text-sm">{language === 'en' ? 'ES' : 'EN'}</span>
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white p-2"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 p-4 md:hidden"
                    >
                        <div className="bg-surface/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-zinc-300 hover:text-primary transition-colors py-2 border-b border-white/5 last:border-0"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="bg-primary text-background w-full py-3 rounded-xl font-bold mt-2">
                                {t.nav.cta}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github, Twitter, Linkedin } from 'lucide-react';
import RainbowButton from './ui/RainbowButton';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
                    <div className="max-w-xl text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            {t.footer.title} <span className="text-cyan-400">{t.footer.titleHighlight}</span> {t.footer.titleSuffix}
                        </h2>
                        <p className="text-slate-400 text-lg mb-8">
                            {t.footer.description}
                        </p>
                        <RainbowButton>{t.footer.cta}</RainbowButton>
                    </div>

                    <div className="flex gap-6">
                        {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all hover:scale-110"
                            >
                                <Icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
                    <div>© {new Date().getFullYear()} STARK.MEDIA. {t.footer.rights}</div>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-slate-300">{t.footer.privacy}</a>
                        <a href="#" className="hover:text-slate-300">{t.footer.terms}</a>
                    </div>
                </div>

            </div>

            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
        </footer>
    );
};

export default Footer;

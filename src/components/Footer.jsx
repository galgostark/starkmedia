import React from 'react';
import RainbowButton from './ui/RainbowButton';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="py-24 bg-background border-t border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 brightness-100 contrast-150 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
                    <div className="max-w-2xl">
                        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-[0.95] tracking-tight">
                            {t.footer.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">{t.footer.titleHighlight}</span> {t.footer.titleSuffix}
                        </h2>
                        <p className="text-zinc-400 text-lg mb-8 max-w-lg font-sans">
                            {t.footer.description}
                        </p>
                        <RainbowButton>{t.footer.cta}</RainbowButton>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-500 text-sm font-sans">
                    <div>© {new Date().getFullYear()} STARK.MEDIA. {t.footer.rights}</div>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
                        <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

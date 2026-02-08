import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Globe } from 'lucide-react';
import RainbowButton from './ui/RainbowButton';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">

            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/50 border border-white/10 backdrop-blur-md text-primary text-sm font-medium tracking-wide"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    {t.hero.availability}
                </motion.div>

                <motion.h1
                    className="font-display text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-8 text-white leading-[0.9]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    {t.hero.titleLine1} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                        {t.hero.titleLine2}
                    </span>
                </motion.h1>

                <motion.p
                    className="font-sans text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    {t.hero.description}
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                    <RainbowButton>{t.hero.ctaPrimary}</RainbowButton>

                    <button className="px-8 py-4 bg-transparent text-zinc-300 font-medium rounded-full border border-white/10 hover:bg-white/5 hover:text-white transition-all hover:scale-105 active:scale-95 backdrop-blur-sm">
                        {t.hero.ctaSecondary}
                    </button>
                </motion.div>

                {/* Floating Icons/Tech Stack using Framer Motion */}
                <div className="mt-24 flex justify-center gap-16 grayscale opacity-30 hover:opacity-100 transition-opacity duration-500">
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                        <Code className="w-8 h-8 md:w-10 md:h-10 text-zinc-500" />
                    </motion.div>
                    <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                        <Cpu className="w-8 h-8 md:w-10 md:h-10 text-zinc-500" />
                    </motion.div>
                    <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
                        <Globe className="w-8 h-8 md:w-10 md:h-10 text-zinc-500" />
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default Hero;

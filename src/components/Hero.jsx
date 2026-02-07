import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, Globe } from 'lucide-react';
import RainbowButton from './ui/RainbowButton';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 text-white selection:bg-cyan-500 selection:text-slate-900">

            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm text-cyan-400 text-sm font-medium"
                >
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    {t.hero.availability}
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    {t.hero.titleLine1} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                        {t.hero.titleLine2}
                    </span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    {t.hero.description}
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                    <RainbowButton>{t.hero.ctaPrimary}</RainbowButton>

                    <button className="px-8 py-4 bg-transparent text-slate-300 font-medium rounded-full border border-slate-700 hover:bg-slate-800 hover:text-white transition-all hover:scale-105 active:scale-95">
                        {t.hero.ctaSecondary}
                    </button>
                </motion.div>

                {/* Floating Icons/Tech Stack using Framer Motion */}
                <div className="mt-20 flex justify-center gap-12 grayscale opacity-50">
                    {/* Placeholder for tech logos or simple icons */}
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                        <Code className="w-8 h-8 md:w-12 md:h-12 text-slate-500" />
                    </motion.div>
                    <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                        <Cpu className="w-8 h-8 md:w-12 md:h-12 text-slate-500" />
                    </motion.div>
                    <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
                        <Globe className="w-8 h-8 md:w-12 md:h-12 text-slate-500" />
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default Hero;

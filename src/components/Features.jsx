import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Layout, Brain } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Features = () => {
    const { t } = useLanguage();

    const icons = {
        1: <Zap className="w-8 h-8 text-primary" />,
        2: <Layout className="w-8 h-8 text-purple-400" />,
        3: <Brain className="w-8 h-8 text-pink-400" />
    };

    return (
        <section id="services" className="py-32 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-24 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-display text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
                    >
                        {t.features.titleLine1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">{t.features.titleLine2}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-sans text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        {t.features.subtitle}
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {t.features.items.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative p-10 rounded-3xl bg-surface/30 border border-white/5 hover:bg-surface/50 transition-all duration-500 group hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(34,211,238,0.1)] backdrop-blur-sm"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

                            <div className="relative z-10 mb-8 p-4 rounded-2xl bg-surface/50 border border-white/5 inline-block group-hover:scale-110 group-hover:border-primary/30 transition-all duration-300">
                                {icons[feature.id]}
                            </div>
                            <h3 className="relative z-10 font-display text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                {feature.title}
                            </h3>
                            <p className="relative z-10 font-sans text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
    const { t } = useLanguage();

    return (
        <section className="py-32 bg-background relative overflow-hidden">
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 text-center">{t.testimonials.title}</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {t.testimonials.items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-surface/30 p-10 rounded-3xl border border-white/5 relative group hover:-translate-y-1 transition-transform duration-500"
                        >
                            <Quote className="absolute top-10 right-10 w-12 h-12 text-white/5 group-hover:text-primary/20 transition-colors duration-500" />

                            <p className="font-sans text-xl text-zinc-300 mb-10 relative z-10 leading-relaxed">
                                "{item.quote}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-background font-bold text-lg">
                                    {item.author[0]}
                                </div>
                                <div>
                                    <div className="text-white font-bold font-display tracking-tight">{item.author}</div>
                                    <div className="text-primary text-sm font-medium">{item.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

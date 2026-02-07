import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
    const { t } = useLanguage();

    const images = {
        1: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
        2: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
    };

    return (
        <section id="work" className="py-24 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.testimonials.title}</h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {t.testimonials.items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative"
                        >
                            <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-800" />
                            <p className="text-slate-300 text-lg mb-8 relative z-10 font-light italic">"{item.quote}"</p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={images[item.id]}
                                    alt={item.author}
                                    className="w-12 h-12 rounded-full border-2 border-cyan-500/20"
                                />
                                <div>
                                    <div className="text-white font-bold">{item.author}</div>
                                    <div className="text-cyan-400 text-sm">{item.role}</div>
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

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Layout, Brain } from 'lucide-react';

const features = [
    {
        validId: 1,
        icon: <Zap className="w-8 h-8 text-cyan-400" />,
        title: "Launch at Light Speed",
        description: "Stop wrestling with code. We deploy scalable, production-ready systems in days, not months. Your market won't wait, and neither should you."
    },
    {
        validId: 2,
        icon: <Layout className="w-8 h-8 text-purple-400" />,
        title: "Design That Converts",
        description: "Beauty is functional. We craft intuitive, fluid interfaces that guide your users seamlessly from 'visitor' to 'customer' without friction."
    },
    {
        validId: 3,
        icon: <Brain className="w-8 h-8 text-pink-400" />,
        title: "Intelligence Built-In",
        description: "Don't just automate—innovate. We weave custom AI solutions directly into your workflow to predict needs and personalize experiences."
    }
];

const Features = () => {
    return (
        <section id="services" className="py-24 bg-slate-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Not just code. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Business assets.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-400 max-w-2xl mx-auto text-lg"
                    >
                        We don't sell features. We sell the unfair advantage your business needs to dominate the digital landscape.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.validId}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative p-8 rounded-2xl bg-slate-800/20 border border-slate-700/50 hover:bg-slate-800/40 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(34,211,238,0.1)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                            <div className="relative z-10 mb-6 p-4 rounded-full bg-slate-900/50 border border-slate-800 inline-block group-hover:scale-110 group-hover:border-cyan-500/30 transition-all duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="relative z-10 text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="relative z-10 text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
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

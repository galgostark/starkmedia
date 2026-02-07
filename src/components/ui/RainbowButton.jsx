import React from 'react';
import { ArrowRight } from 'lucide-react';

const RainbowButton = ({ children, className = "", onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-slate-950 px-8 font-medium text-white transition-all duration-300 hover:w-auto hover:bg-slate-900 hover:scale-105 active:scale-95 ${className}`}
        >
            {/* Rainbow Gradient Background */}
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

            {/* Search/Inner Content Container */}
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900/90">
                {children}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
        </button>
    );
};

export default RainbowButton;

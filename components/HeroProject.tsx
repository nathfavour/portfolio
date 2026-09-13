import React from 'react';
import { Layers, ArrowUpRight, ShieldCheck, Cpu, Key, Coins } from 'lucide-react';
import { CV_CONFIG } from '../constants';
import { BentoCard, Tag } from './UI';

export const HeroProject: React.FC = () => {
    const { title, subtitle, description, stack, modules } = CV_CONFIG.flagship;

    const moduleIcons = [Key, ShieldCheck, Cpu, Coins];

    return (
        <div className="md:col-span-2">
            <BentoCard className="border-pink-500/30 hover:border-pink-500/50 bg-[#161412] relative overflow-hidden">
                {/* Subtle OpenBricks Ambient Glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="relative z-10 space-y-6">
                    {/* Header Row */}
                    <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1.5">
                            <div className="flex items-center gap-2">
                                <div className="p-2 rounded-xl bg-pink-500/15 border border-pink-500/30 text-pink-400">
                                    <Layers className="w-5 h-5" />
                                </div>
                                <span className="text-[11px] font-mono uppercase tracking-widest text-pink-400 font-bold">
                                    Flagship Ecosystem
                                </span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                                {title}
                            </h3>
                            <p className="text-xs sm:text-sm font-mono text-white/70">
                                {subtitle}
                            </p>
                        </div>

                        <a 
                            href="https://github.com/nathfavour/kylrix"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-black border border-white/15 hover:border-pink-500/50 text-white text-xs font-mono transition-all group"
                        >
                            <span>Repository</span>
                            <ArrowUpRight className="w-4 h-4 text-pink-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl font-normal">
                        {description}
                    </p>

                    {/* OpenBricks 4.0 Pitch-Black Module Wells */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {modules.map((mod, i) => {
                            const ModIcon = moduleIcons[i % moduleIcons.length];
                            return (
                                <div 
                                    key={i} 
                                    className="
                                        bg-black rounded-2xl p-3.5 
                                        border border-white/10 hover:border-pink-500/40
                                        transition-all duration-200 flex flex-col justify-between gap-2
                                    "
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold text-xs sm:text-sm text-white">{mod.name}</span>
                                        <ModIcon className="w-3.5 h-3.5 text-pink-400" />
                                    </div>
                                    <div className="text-[11px] text-white/60 leading-tight font-sans">{mod.desc}</div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Stack Footer */}
                    <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-white/10 text-xs font-mono">
                        <span className="text-white/50">Core Pillars:</span>
                        {stack.split('•').map((pill) => (
                            <Tag key={pill.trim()} className="bg-black text-pink-300 border-pink-500/20">
                                {pill.trim()}
                            </Tag>
                        ))}
                    </div>
                </div>
            </BentoCard>
        </div>
    );
};
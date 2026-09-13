import React from 'react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { CV_CONFIG } from '../constants';
import { Tag } from './UI';

export const ProjectGrid: React.FC = () => {
    // Render Core Systems and Protocols & Tools tiers (including Zup)
    const gridTiers = CV_CONFIG.projectTiers.filter(t => t.name !== "Flagship");

    return (
        <>
            {gridTiers.map((tier) => (
                <div key={tier.name} className="md:col-span-2 space-y-4">
                    {/* Tier Header with OpenBricks crisp hairline boundary */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-white/10 pb-2.5">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white font-mono">
                                {tier.name}
                            </h4>
                        </div>
                        <span className="text-xs font-mono text-white/50">
                            {tier.description}
                        </span>
                    </div>

                    {/* OpenBricks 4.0 Standard Action Tiles Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {tier.projects.map((p, i) => (
                            <div 
                                key={i}
                                className="
                                    p-5 bg-[#161412] border border-white/10 hover:border-white/30 
                                    rounded-[22px] shadow-xl flex flex-col justify-between gap-4 
                                    transition-all duration-200 group relative overflow-hidden
                                "
                            >
                                <div className="space-y-3">
                                    {/* Top: Inset Icon Well + Title + Role */}
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex items-center gap-3 min-w-0">
                                            <div className={`
                                                w-10 h-10 rounded-xl bg-black border border-white/10 
                                                flex items-center justify-center shrink-0 shadow-inner
                                                group-hover:scale-105 transition-transform
                                            `}>
                                                <p.icon className="w-5 h-5 text-white" />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <h4 className="text-white font-bold text-base tracking-tight truncate group-hover:text-pink-400 transition-colors">
                                                    {p.title}
                                                </h4>
                                                {p.role && (
                                                    <p className="text-[11px] font-mono text-white/60 tracking-tight truncate">
                                                        {p.role}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {p.link && (
                                            <a 
                                                href={p.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-xl bg-black border border-white/10 hover:border-pink-500/40 text-white/70 hover:text-white transition-colors"
                                                title={`View ${p.title}`}
                                            >
                                                <ArrowUpRight className="w-4 h-4 text-pink-400" />
                                            </a>
                                        )}
                                    </div>

                                    {/* Description */}
                                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                                        {p.desc}
                                    </p>
                                </div>

                                {/* Bottom: Tags & Hairline Action Link */}
                                <div className="space-y-3 pt-2 border-t border-white/10">
                                    <div className="flex flex-wrap gap-1.5">
                                        {p.tags.map(t => (
                                            <Tag key={t} className="bg-black text-white/80 border-white/10 text-[10px] sm:text-[11px]">
                                                {t}
                                            </Tag>
                                        ))}
                                    </div>

                                    {p.link && (
                                        <a 
                                            href={p.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between text-xs font-mono text-pink-400 hover:text-pink-300 pt-1 group/link"
                                        >
                                            <span className="font-medium">Inspect System Proof</span>
                                            <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};
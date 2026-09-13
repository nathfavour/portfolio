import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CV_CONFIG } from '../constants';
import { BentoCard, Tag } from './UI';

export const ProjectGrid: React.FC = () => {
    // Render Core Systems and Protocols & Tools tiers
    const gridTiers = CV_CONFIG.projectTiers.filter(t => t.name !== "Flagship");

    return (
        <>
            {gridTiers.map((tier) => (
                <div key={tier.name} className="md:col-span-2 space-y-4">
                    <div className="flex items-baseline justify-between border-b border-zinc-800 pb-2">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400">
                            {tier.name}
                        </h4>
                        <span className="text-xs font-mono text-zinc-500">
                            {tier.description}
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {tier.projects.map((p, i) => (
                            <BentoCard key={i} className="flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`
                                            p-2.5 rounded-xl bg-gradient-to-br border shadow-lg
                                            ${p.accentClass}
                                        `}>
                                            <p.icon className="w-6 h-6 drop-shadow-md" />
                                        </div>
                                        {p.link && (
                                            <div className="p-1.5 rounded-lg hover:bg-white/5 cursor-pointer text-zinc-600 hover:text-white transition-colors">
                                                <a href={p.link} target="_blank" rel="noopener noreferrer">
                                                    <ArrowUpRight className="w-5 h-5" />
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-1.5">{p.title}</h3>
                                    {p.role && <p className="text-xs text-indigo-400 font-mono mb-3">{p.role}</p>}
                                    <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                                        {p.desc}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {p.tags.map(t => (
                                        <Tag key={t} className="bg-transparent border-zinc-700">{t}</Tag>
                                    ))}
                                </div>
                            </BentoCard>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CV_CONFIG } from '../constants';
import { BentoCard, Tag } from './UI';

export const ProjectGrid: React.FC = () => {
    return (
        <>
            {CV_CONFIG.projects.map((p, i) => (
                <BentoCard key={i} className="flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <div className={`
                                p-2.5 rounded-xl bg-gradient-to-br border shadow-lg
                                ${p.accentClass}
                            `}>
                                <p.icon className="w-6 h-6 drop-shadow-md" />
                            </div>
                            <div className="p-1.5 rounded-lg hover:bg-white/5 cursor-pointer text-zinc-600 hover:text-white transition-colors">
                                <a href={p.link} target="_blank" rel="noopener noreferrer">
                                    <ArrowUpRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1.5">{p.title}</h3>
                        <p className="text-xs text-indigo-400 font-mono mb-3">{p.role}</p>
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
        </>
    );
};
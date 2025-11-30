import React from 'react';
import { Briefcase, GraduationCap, Users } from 'lucide-react';
import { CV_CONFIG } from '../constants';
import { BentoCard } from './UI';

export const History: React.FC = () => {
    const { experience, education, community } = CV_CONFIG;

    return (
        <div className="md:col-span-2">
             <BentoCard title="History & Education" icon={Briefcase}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    
                    {/* Work History */}
                    <div className="space-y-8">
                        <h4 className="text-sm text-zinc-500 uppercase tracking-wider font-bold border-b border-zinc-800 pb-2 drop-shadow-sm">Experience</h4>
                        {experience.map((e, i) => (
                            <div key={i} className="relative pl-6 border-l-2 border-zinc-800">
                                <div className="absolute left-[-7px] top-1.5 w-3 h-3 rounded-full bg-zinc-800 border-2 border-zinc-600 shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
                                <div className="flex justify-between items-baseline mb-1">
                                    <span className="font-bold text-white text-lg">{e.company}</span>
                                    <span className="text-xs font-mono text-zinc-500 bg-black/30 px-2 py-0.5 rounded border border-white/5">{e.period}</span>
                                </div>
                                <div className="text-xs text-indigo-400 mb-2 font-mono uppercase tracking-tight">{e.role}</div>
                                <p className="text-sm text-zinc-400 leading-relaxed">{e.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Education & Community */}
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-sm text-zinc-500 uppercase tracking-wider font-bold border-b border-zinc-800 pb-2 mb-4 drop-shadow-sm">Education</h4>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-black/20 border border-white/5 shadow-inner">
                                <GraduationCap className="w-6 h-6 text-zinc-500 mt-1" />
                                <div>
                                    <div className="font-bold text-white text-lg">{education.degree}</div>
                                    <div className="text-sm text-zinc-400">{education.school}</div>
                                    <div className="text-xs text-indigo-400 mt-2 font-mono">{education.focus}</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm text-zinc-500 uppercase tracking-wider font-bold border-b border-zinc-800 pb-2 mb-4 drop-shadow-sm">Community</h4>
                            <div className="space-y-3">
                                {community.map((c, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-default">
                                        <Users className="w-4 h-4 text-zinc-600" />
                                        <div className="flex flex-col">
                                            <span className="text-sm text-zinc-300">{c.role}, {c.label}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
             </BentoCard>
        </div>
    );
};
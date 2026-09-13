import React from 'react';
import { Briefcase, GraduationCap, Users } from 'lucide-react';
import { CV_CONFIG } from '../constants';
import { BentoCard } from './UI';

export const History: React.FC = () => {
    const { experience, education, community } = CV_CONFIG;

    return (
        <div className="md:col-span-2">
            <BentoCard title="Track Record & Education" icon={Briefcase} className="bg-[#161412] border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Work Experience */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                                Experience
                            </h4>
                        </div>

                        <div className="space-y-4">
                            {experience.map((e, i) => (
                                <div key={i} className="p-4 rounded-2xl bg-black border border-white/10 space-y-2">
                                    <div className="flex justify-between items-baseline gap-2">
                                        <span className="font-bold text-white text-sm sm:text-base tracking-tight">{e.company}</span>
                                        <span className="text-[10px] font-mono text-white/60 bg-[#161412] px-2 py-0.5 rounded-md border border-white/10">
                                            {e.period}
                                        </span>
                                    </div>
                                    <div className="text-xs text-pink-400 font-mono tracking-tight font-medium">
                                        {e.role}
                                    </div>
                                    <p className="text-xs text-white/75 leading-relaxed font-normal">
                                        {e.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education & Community */}
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                                    Education
                                </h4>
                            </div>

                            <div className="p-4 rounded-2xl bg-black border border-white/10 flex items-start gap-3.5">
                                <div className="p-2 rounded-xl bg-[#161412] border border-white/10 text-emerald-400 shrink-0 mt-0.5">
                                    <GraduationCap className="w-5 h-5" />
                                </div>
                                <div className="space-y-1">
                                    <div className="font-bold text-white text-sm sm:text-base">{education.degree}</div>
                                    <div className="text-xs text-white/70">{education.school}</div>
                                    <div className="text-[11px] text-emerald-400 font-mono pt-1">{education.focus}</div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                                    Leadership & Community
                                </h4>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {community.map((c, i) => (
                                    <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-black border border-white/10">
                                        <Users className="w-4 h-4 text-cyan-400 shrink-0" />
                                        <div className="flex flex-col min-w-0">
                                            <span className="text-xs font-bold text-white truncate">{c.role}</span>
                                            <span className="text-[10px] font-mono text-white/60 truncate">{c.label}</span>
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
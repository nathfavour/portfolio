import React from 'react';
import { Terminal, Cpu, HardDrive } from 'lucide-react';
import { CV_CONFIG } from '../constants';
import { BentoCard, Tag } from './UI';

export const TechStack: React.FC = () => {
    const { languages, core, environment } = CV_CONFIG.technicalArsenal;

    return (
        <BentoCard title="Technical Arsenal" icon={Terminal} className="h-full bg-[#161412] border-white/10">
            <div className="space-y-6">
                {/* Languages Section */}
                <div className="p-4 rounded-2xl bg-black border border-white/10 space-y-2.5">
                    <div className="flex items-center justify-between">
                        <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                            Systems & Languages
                        </h4>
                        <Terminal className="w-3.5 h-3.5 text-pink-400" />
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                        {languages.map(l => (
                            <Tag key={l} className="bg-[#161412] text-white border-white/10 font-bold">
                                {l}
                            </Tag>
                        ))}
                    </div>
                </div>

                {/* Core Focus Section */}
                <div className="p-4 rounded-2xl bg-black border border-white/10 space-y-2.5">
                    <div className="flex items-center justify-between">
                        <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                            Architectural Core
                        </h4>
                        <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                        {core.map(c => (
                            <Tag key={c} className="bg-[#161412] text-white/90 border-white/10">
                                {c}
                            </Tag>
                        ))}
                    </div>
                </div>

                {/* Runtime & Tooling Section */}
                <div className="p-4 rounded-2xl bg-black border border-white/10 space-y-2.5">
                    <div className="flex items-center justify-between">
                        <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                            Runtime & Tooling
                        </h4>
                        <HardDrive className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <div className="font-mono text-xs text-white/80 space-y-2">
                        {environment.map(s => (
                            <div key={s} className="flex items-center gap-2.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-pink-500 shadow-[0_0_6px_rgba(236,72,153,0.8)]"></div>
                                <span className="truncate">{s}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </BentoCard>
    );
};
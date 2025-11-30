import React from 'react';
import { Terminal } from 'lucide-react';
import { CV_CONFIG } from '../constants';
import { BentoCard, Tag } from './UI';

export const TechStack: React.FC = () => {
    const { languages, core, environment } = CV_CONFIG.technicalArsenal;

    return (
        <BentoCard title="Technical Arsenal" icon={Terminal} className="h-full">
            <div className="space-y-8">
                <div>
                    <h4 className="text-xs text-zinc-500 uppercase font-bold mb-3 tracking-wider shadow-black drop-shadow-sm">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                        {languages.map(l => (
                            <Tag key={l} className="bg-indigo-900/20 text-indigo-200 border-indigo-500/20">{l}</Tag>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="text-xs text-zinc-500 uppercase font-bold mb-3 tracking-wider">Core Focus</h4>
                    <div className="flex flex-wrap gap-2">
                        {core.map(c => (
                            <Tag key={c}>{c}</Tag>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="text-xs text-zinc-500 uppercase font-bold mb-3 tracking-wider">Environment</h4>
                    <div className="font-mono text-sm text-zinc-400 space-y-2">
                        {environment.map(s => (
                            <div key={s} className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]"></div>
                                {s}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </BentoCard>
    );
};
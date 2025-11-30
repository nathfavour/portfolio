import React from 'react';
import { LayoutGrid, Code } from 'lucide-react';
import { CV_CONFIG } from '../constants';
import { BentoCard } from './UI';

export const HeroProject: React.FC = () => {
    const { title, subtitle, description, stack, modules, icon: Icon } = CV_CONFIG.flagship;

    return (
        <div className="md:col-span-2">
            <BentoCard className="group/hero border-indigo-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/30 to-zinc-900/0 opacity-50 z-0"></div>
                {/* Background Icon */}
                <div className="absolute top-0 right-0 p-8 opacity-5 transform group-hover/hero:scale-110 transition-transform duration-700">
                    <Icon size={180} />
                </div>
                
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-indigo-500/20 shadow-inner border border-indigo-500/30">
                            <LayoutGrid className="w-6 h-6 text-indigo-400" />
                        </div>
                        <h3 className="text-3xl font-bold text-white drop-shadow-md">{title}</h3>
                    </div>
                    <p className="text-indigo-400 font-mono text-sm mb-5 pl-1">{subtitle}</p>
                    <p className="text-zinc-300 mb-8 max-w-2xl leading-relaxed text-lg drop-shadow-sm">
                        {description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {modules.map((mod, i) => (
                            <div key={i} className="
                                bg-black/30 rounded-lg p-3.5 
                                border-t border-white/5 border-b border-black
                                shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]
                                hover:bg-black/40 transition-colors
                            ">
                                <div className="font-bold text-sm text-white mb-1">{mod.name}</div>
                                <div className="text-xs text-zinc-500">{mod.desc}</div>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 bg-black/20 w-fit px-4 py-2 rounded-full border border-white/5">
                        <Code className="w-3 h-3" />
                        <span className="text-zinc-400">Stack:</span> {stack}
                    </div>
                </div>
            </BentoCard>
        </div>
    );
};
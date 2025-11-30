import React from 'react';
import { CV_CONFIG } from '../constants';
import { IconButton3D, StatBlock } from './UI';

export const Header: React.FC = () => {
    const { name, role, tagline, profileImage, openToWork, contact, stats } = CV_CONFIG;

    return (
        <header className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    
                    {/* Modular Profile Image */}
                    {profileImage && (
                        <div className="shrink-0 relative group mt-2">
                             {/* Container with similar 3D styling to BentoCard */}
                            <div className="
                                w-32 h-32 md:w-40 md:h-40 relative rounded-3xl overflow-hidden
                                bg-zinc-900 
                                border-t border-zinc-700/80 
                                border-l border-zinc-800/80
                                border-r border-black/50
                                border-b border-black/80
                                shadow-[0_8px_30px_rgb(0,0,0,0.6)]
                                group-hover:scale-[1.02] transition-transform duration-300
                            ">
                                <img 
                                    src={profileImage} 
                                    alt={name} 
                                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
                                />
                                
                                {/* Inner Gloss Overlay */}
                                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none"></div>
                            </div>

                            {/* Back Glow */}
                            <div className="absolute -inset-3 bg-indigo-500/20 blur-xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    )}

                    {/* Text Content */}
                    <div className="space-y-5 flex-1">
                        {openToWork && (
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 shadow-lg text-emerald-400 text-xs font-mono mb-2 backdrop-blur-md">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                OPEN TO R&D OPPORTUNITIES
                            </div>
                        )}
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-2xl">
                            {name}
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl drop-shadow-md">
                            {role}
                        </p>
                        <p className="text-zinc-500 max-w-xl leading-relaxed">
                            {tagline}
                        </p>
                        

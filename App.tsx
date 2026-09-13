import React from 'react';
import { Header } from './components/Header';
import { TechStack } from './components/TechStack';
import { HeroProject } from './components/HeroProject';
import { ProjectGrid } from './components/ProjectGrid';
import { History } from './components/History';

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-[#F5F2ED] font-sans antialiased selection:bg-pink-500/30">
            {/* OpenBricks 4.0 Ambient Backglow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-[1200px] h-[350px] bg-pink-500/[0.04] rounded-full blur-[140px] pointer-events-none -z-10"></div>
            <div className="fixed top-1/3 right-[-10%] w-[40vw] h-[40vw] bg-indigo-500/[0.03] rounded-full blur-[160px] pointer-events-none -z-10"></div>

            <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-10 lg:p-12 space-y-8 sm:space-y-10">
                {/* 1. OpenBricks Tactile Header */}
                <Header />

                {/* 2. Primary Systems & Proof-of-Work Grid */}
                <main className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                    
                    {/* Left Column: Technical Arsenal (Sticky on desktop) */}
                    <div className="lg:col-span-1 lg:sticky lg:top-8">
                        <TechStack />
                    </div>

                    {/* Right Column: 3-Tier Proof of Work & Track Record */}
                    <div className="lg:col-span-3 space-y-6">
                        {/* Tier 1: Kylrix Flagship Workspace */}
                        <HeroProject />

                        {/* Tiers 2 & 3: Core Systems, Sovereign Clients (Zup), Protocols & Tools */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ProjectGrid />
                        </div>

                        {/* Experience & Education */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                            <History />
                        </div>
                    </div>
                </main>

                {/* Footer status indicator */}
                <footer className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        <span>Systems operational • Local-first sovereign runtime</span>
                    </div>
                    <div>
                        <span>Engineered with OpenBricks 4.0</span>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default App;
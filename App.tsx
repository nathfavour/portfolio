import React from 'react';
import { Header } from './components/Header';
import { TechStack } from './components/TechStack';
import { HeroProject } from './components/HeroProject';
import { ProjectGrid } from './components/ProjectGrid';
import { History } from './components/History';

const App: React.FC = () => {
    return (
        <div className="min-h-screen font-sans p-4 md:p-8 lg:p-12 perspective-1000 overflow-x-hidden">
            
            {/* Global Ambient Light Source */}
            <div className="fixed top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

            <div className="max-w-6xl mx-auto space-y-8 relative z-10">
                
                {/* 1. Header Area */}
                <Header />

                {/* 2. Main Grid Layout */}
                <main className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {/* Left Column: Skills & Stack */}
                    <div className="md:col-span-1 h-full">
                        <TechStack />
                    </div>

                    {/* Middle/Right: Projects & Experience */}
                    <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* HERO Project */}
                        <HeroProject />

                        {/* Secondary Projects Grid */}
                        <ProjectGrid />

                        {/* Experience Section */}
                        <History />
                    </div>
                </main>

            </div>
        </div>
    );
};

export default App;
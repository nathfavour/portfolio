import React from 'react';
import { CV_CONFIG } from '../constants';
import { IconButton3D, StatBlock } from './UI';

export const Header: React.FC = () => {
    const { name, role, tagline, githubUsername, profileImage, openToWork, contact, stats } = CV_CONFIG;
    
    // Automatically infer GitHub avatar or fallback
    const inferredUsername = githubUsername || contact.find(c => c.label.toLowerCase() === 'github')?.value?.split('/')?.pop() || 'nathfavour';
    const [avatarUrl, setAvatarUrl] = React.useState<string>(
        profileImage || `https://github.com/${inferredUsername}.png`
    );

    React.useEffect(() => {
        if (!profileImage && inferredUsername) {
            fetch(`https://api.github.com/users/${inferredUsername}`)
                .then(res => res.json())
                .then(data => {
                    if (data && data.avatar_url) {
                        setAvatarUrl(data.avatar_url);
                    }
                })
                .catch(() => {});
        }
    }, [inferredUsername, profileImage]);

    return (
        <header className="p-6 sm:p-8 rounded-[26px] bg-[#161412] border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
                <div className="lg:col-span-2 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center">
                    
                    {/* Dynamic Avatar with OpenBricks 4.0 contouring */}
                    {avatarUrl && (
                        <div className="shrink-0 relative group">
                            <div className="
                                w-24 h-24 sm:w-32 sm:h-32 rounded-[22px] overflow-hidden
                                bg-black
                                border-2 border-white/15 group-hover:border-pink-500/50
                                shadow-2xl transition-all duration-300
                            ">
                                <img 
                                    src={avatarUrl} 
                                    alt={name} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    )}

                    {/* Header Info */}
                    <div className="space-y-3 flex-1 min-w-0">
                        {openToWork && (
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-tight">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                OPEN TO SYSTEMS & R&D ENGAGEMENTS
                            </div>
                        )}

                        <div className="space-y-1">
                            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-none">
                                {name}
                            </h1>
                            <p className="text-sm sm:text-base font-mono font-bold text-pink-400 tracking-tight">
                                {role}
                            </p>
                        </div>

                        <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-xl font-normal">
                            {tagline}
                        </p>
                    </div>
                </div>

                {/* Right Column: Stats & Tactile Actions */}
                <div className="flex flex-col gap-4 justify-center">
                    <div className="grid grid-cols-3 gap-2.5">
                        {stats.map((stat, i) => (
                            <StatBlock key={i} value={stat.value} label={stat.label} />
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                        {contact.map((item, i) => (
                            <IconButton3D 
                                key={i}
                                icon={item.icon}
                                text={item.label}
                                href={item.link}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

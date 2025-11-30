import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BentoCardProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
    icon?: LucideIcon;
    headerAction?: React.ReactNode;
}

export const BentoCard: React.FC<BentoCardProps> = ({ children, className = "", title, icon: Icon, headerAction }) => (
    <div className={`
        relative rounded-xl p-6 flex flex-col overflow-hidden group transition-all duration-300
        bg-zinc-900 
        bg-gradient-to-b from-zinc-800/80 to-zinc-950/90 
        backdrop-blur-xl
        border-t border-zinc-700/50 
        border-l border-zinc-800/50
        border-r border-black/50
        border-b border-black/80
        shadow-[0_8px_30px_rgb(0,0,0,0.6)]
        hover:shadow-[0_20px_40px_rgb(0,0,0,0.8)]
        hover:-translate-y-1
        ${className}
    `}>
        {/* Inner Highlight for extra gloss */}
        <div className="absolute inset-0 rounded-xl pointer-events-none shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"></div>

        {(title || Icon) && (
            <div className="flex justify-between items-start mb-4 z-10 relative">
                <div className="flex items-center gap-2 text-zinc-100 font-semibold drop-shadow-md">
                    {Icon && <Icon className="w-5 h-5 text-indigo-400 drop-shadow-[0_2px_4px_rgba(129,140,248,0.3)]" />}
                    <span>{title}</span>
                </div>
                {headerAction}
            </div>
        )}
        <div className="z-10 h-full relative">{children}</div>
        
        {/* Ambient Glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-500"></div>
    </div>
);

export const Tag: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "bg-zinc-800 text-zinc-300" }) => (
    <span className={`
        px-2.5 py-1 text-xs font-mono rounded-md 
        shadow-[0_2px_4px_rgba(0,0,0,0.4)] 
        border-t border-white/5 border-b border-black/50
        active:translate-y-[1px] active:shadow-none transition-all
        ${className}
    `}>
        {children}
    </span>
);

interface IconButton3DProps {
    icon: LucideIcon;
    href?: string;
    text: string;
    onClick?: () => void;
}

export const IconButton3D: React.FC<IconButton3DProps> = ({ icon: Icon, href, text, onClick }) => {
    const Component = href ? 'a' : 'button';
    return (
        <Component 
            href={href}
            onClick={onClick}
            target={href ? "_blank" : undefined}
            rel={href ? "noopener noreferrer" : undefined}
            className="
                group relative flex items-center gap-2 px-4 py-2.5 rounded-lg
                bg-gradient-to-b from-zinc-800 to-zinc-900
                border-t border-zinc-700 border-b border-black
                shadow-[0_4px_8px_rgba(0,0,0,0.5)]
                text-zinc-300 hover:text-white
                hover:-translate-y-[1px] hover:shadow-[0_6px_12px_rgba(0,0,0,0.6)]
                active:translate-y-[1px] active:shadow-[0_1px_2px_rgba(0,0,0,0.5)] active:border-t-black/20
                transition-all duration-150 cursor-pointer
            "
        >
            <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span className="text-sm font-mono">{text}</span>
            {/* Subtle gloss line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10 rounded-t-lg"></div>
        </Component>
    );
};

export const StatBlock: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="
        flex flex-col justify-center items-center p-4 rounded-xl
        bg-zinc-900/50
        shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]
        border-b border-white/5 border-t border-black/50
    ">
        <span className="text-2xl font-bold text-white drop-shadow-md">{value}</span>
        <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mt-1">{label}</span>
    </div>
);
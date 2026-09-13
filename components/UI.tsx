import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BentoCardProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
    icon?: LucideIcon;
    headerAction?: React.ReactNode;
    accent?: string;
}

/**
 * OpenBricks 4.0 Surface Card
 * Deep ash background (#161412), pitch-black inner contrast wells,
 * crisp solid outlines (border-white/10 to border-white/20), and generous rounded-[22px] radii.
 */
export const BentoCard: React.FC<BentoCardProps> = ({ 
    children, 
    className = "", 
    title, 
    icon: Icon, 
    headerAction,
    accent 
}) => (
    <div className={`
        relative rounded-[22px] p-5 sm:p-6 flex flex-col justify-between overflow-hidden group
        bg-[#161412]
        border border-white/10 hover:border-white/25
        transition-all duration-300
        shadow-xl hover:shadow-2xl
        ${className}
    `}>
        {(title || Icon) && (
            <div className="flex items-center justify-between mb-4 z-10 relative">
                <div className="flex items-center gap-2.5 text-white font-bold text-sm tracking-tight">
                    {Icon && (
                        <div className="w-8 h-8 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                            <Icon className="w-4 h-4 text-white" />
                        </div>
                    )}
                    <span>{title}</span>
                </div>
                {headerAction}
            </div>
        )}
        <div className="z-10 h-full relative">{children}</div>
    </div>
);

export const Tag: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
    children, 
    className = "" 
}) => (
    <span className={`
        inline-flex items-center px-2.5 py-1 text-[11px] font-mono font-medium rounded-lg
        bg-black/60 text-white
        border border-white/10
        transition-colors
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
                group relative inline-flex items-center justify-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl
                bg-[#161412] hover:bg-black
                border border-white/15 hover:border-white/35
                text-white text-xs sm:text-sm font-mono font-medium
                shadow-md hover:shadow-lg
                active:scale-[0.98] transition-all duration-150 cursor-pointer
            "
        >
            <Icon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            <span>{text}</span>
        </Component>
    );
};

export const StatBlock: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="
        flex flex-col justify-center items-center p-3 sm:p-4 rounded-xl
        bg-black border border-white/10
        shadow-inner
    ">
        <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">{value}</span>
        <span className="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-mono font-semibold mt-1">{label}</span>
    </div>
);
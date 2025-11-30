import { LucideIcon } from 'lucide-react';

export interface ContactItem {
    icon: LucideIcon;
    value: string;
    link: string;
    label: string;
}

export interface StatItem {
    label: string;
    value: string;
}

export interface TechStack {
    languages: string[];
    core: string[];
    environment: string[];
}

export interface ModuleItem {
    name: string;
    desc: string;
}

export interface FlagshipProject {
    title: string;
    subtitle: string;
    description: string;
    stack: string;
    modules: ModuleItem[];
    icon: LucideIcon;
}

export interface ProjectItem {
    title: string;
    role: string;
    desc: string;
    tags: string[];
    icon: LucideIcon;
    /** Tailwind classes for the icon container background and border colors */
    accentClass: string;
    link?: string;
}

export interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    desc: string;
}

export interface EducationItem {
    degree: string;
    school: string;
    focus: string;
}

export interface CommunityItem {
    role: string;
    label: string;
}

export interface CvConfig {
    name: string;
    role: string;
    tagline: string;
    profileImage?: string; // Optional profile image URL
    openToWork: boolean;
    contact: ContactItem[];
    stats: StatItem[];
    technicalArsenal: TechStack;
    flagship: FlagshipProject;
    projects: ProjectItem[];
    experience: ExperienceItem[];
    education: EducationItem;
    community: CommunityItem[];
}
import { 
    Mail, 
    Github, 
    Globe, 
    Zap, 
    Code, 
    Cpu, 
    Layers, 
    Linkedin,
    Twitter,
    Shield,
    Terminal,
    Network,
    Glasses,
    Package,
    KeyRound
} from 'lucide-react';
import { CvConfig } from './types';

/**
 * CV_CONFIG
 * 
 * Systems & autonomous agents engineer proof-of-work configuration.
 */
export const CV_CONFIG: CvConfig = {
    name: "Nath Favour",
    role: "Systems & Autonomous Agents Engineer",
    tagline: "Systems & autonomous agents engineer building local-first platforms, cryptographic rails, and low-level tooling.",
    profileImage: "https://res.cloudinary.com/dr266qqeo/image/upload/v1764510640/pfp3_xxonti.jpg",
    openToWork: true,
    
    contact: [
        { 
            icon: Mail, 
            value: "nathfavour02@gmail.com", 
            link: "mailto:nathfavour02@gmail.com", 
            label: "Email" 
        },
        { 
            icon: Github, 
            value: "github.com/nathfavour", 
            link: "https://github.com/nathfavour", 
            label: "GitHub" 
        },
        { 
            icon: Linkedin, 
            value: "linkedin.com/in/nathfavour", 
            link: "https://www.linkedin.com/in/nathfavour", 
            label: "LinkedIn" 
        },
        { 
            icon: Twitter, 
            value: "x.com/nathfavour_", 
            link: "https://x.com/nathfavour_", 
            label: "Twitter" 
        },
        { 
            icon: Globe, 
            value: "nathfavour.vercel.app", 
            link: "https://nathfavour.vercel.app", 
            label: "Portfolio" 
        },
    ],

    stats: [
        { label: "Grant Funding", value: "$50k" },
        { label: "Commits", value: "3k+" },
        { label: "Flagship Apps", value: "6" },
    ],

    technicalArsenal: {
        languages: ["Zig", "Rust", "TypeScript", "Python", "WebAssembly"],
        core: ["RISC-V Architectures", "Post-Quantum Cryptography", "Autonomous Agents", "Local-First Systems"],
        environment: ["Freestanding Wasm", "TEE / Enclave Security", "Solana", "Linux Internals", "Docker", "Git"],
    },

    flagship: {
        title: "Kylrix",
        subtitle: "Flagship Unified Local-First Workspace",
        description: "Unified, local-first workspace combining private notes, vaults, and autonomous AI agents with passkey authentication and non-custodial crypto checkout.",
        stack: "Local-First • AI Agents • Passkeys • Crypto Checkout",
        icon: Layers,
        modules: [
            { name: "Private Notes", desc: "Local-first knowledge workspace" },
            { name: "Vaults", desc: "Passkey-authenticated storage" },
            { name: "AI Agents", desc: "Autonomous local execution" },
            { name: "Checkout", desc: "Non-custodial crypto rails" },
        ]
    },

    projectTiers: [
        {
            name: "Flagship",
            description: "Primary unified local-first platform",
            projects: [
                {
                    title: "Kylrix",
                    role: "Flagship Platform",
                    desc: "Unified, local-first workspace combining private notes, vaults, and autonomous AI agents with passkey authentication and non-custodial crypto checkout.",
                    tags: ["Local-First", "AI Agents", "Passkeys", "Crypto Checkout"],
                    icon: Layers,
                    accentClass: "from-indigo-500/20 to-indigo-900/10 border-indigo-500/30 text-indigo-300",
                    link: "https://github.com/nathfavour/kylrix"
                }
            ]
        },
        {
            name: "Core Systems",
            description: "Low-level kernels, cryptographic primitives, and execution engines",
            projects: [
                {
                    title: "keystone-zig",
                    role: "Security Framework",
                    desc: "RISC-V enclave security framework in Zig for isolated agent execution.",
                    tags: ["Zig", "RISC-V", "Enclave Security", "TEE"],
                    icon: Shield,
                    accentClass: "from-blue-500/20 to-blue-900/10 border-blue-500/30 text-blue-300",
                    link: "https://github.com/nathfavour/keystone-zig"
                },
                {
                    title: "poly16duo",
                    role: "PQC Primitive",
                    desc: "Post-quantum cryptographic primitives in Zig compiled to freestanding WebAssembly.",
                    tags: ["Zig", "WebAssembly", "Post-Quantum", "SIMD"],
                    icon: KeyRound,
                    accentClass: "from-cyan-500/20 to-cyan-900/10 border-cyan-500/30 text-cyan-300",
                    link: "https://github.com/nathfavour/poly16duo"
                },
                {
                    title: "settlerengine",
                    role: "Payment Engine",
                    desc: "High-throughput payment engine enabling direct crypto transactions between autonomous software agents.",
                    tags: ["Crypto Rails", "Agent Payments", "Settlement"],
                    icon: Zap,
                    accentClass: "from-yellow-500/20 to-yellow-900/10 border-yellow-500/30 text-yellow-300",
                    link: "https://github.com/nathfavour/settlerengine"
                },
                {
                    title: "clarigggzOS",
                    role: "OS Kernel",
                    desc: "Operating system kernel targeting RISC-V architectures for smart glasses.",
                    tags: ["Kernel", "RISC-V", "Smart Glasses", "OS"],
                    icon: Glasses,
                    accentClass: "from-emerald-500/20 to-emerald-900/10 border-emerald-500/30 text-emerald-300",
                    link: "https://github.com/nathfavour/clarigggzOS"
                }
            ]
        },
        {
            name: "Protocols & Tools",
            description: "Decentralized protocols, agent compilers, and privacy rails",
            projects: [
                {
                    title: "anyisland",
                    role: "Package Manager",
                    desc: "Decentralized package manager for distributing agentic software.",
                    tags: ["Package Manager", "Autonomous Agents", "Distribution"],
                    icon: Package,
                    accentClass: "from-purple-500/20 to-purple-900/10 border-purple-500/30 text-purple-300",
                    link: "https://github.com/nathfavour/anyisland"
                },
                {
                    title: "ship",
                    role: "Language & Compiler",
                    desc: "Programming language built specifically for agent-driven code generation.",
                    tags: ["Programming Language", "Compiler", "Code Generation"],
                    icon: Code,
                    accentClass: "from-rose-500/20 to-rose-900/10 border-rose-500/30 text-rose-300",
                    link: "https://github.com/nathfavour/ship"
                },
                {
                    title: "TMP",
                    role: "Messaging Protocol",
                    desc: "Decentralized messaging protocol replacing SMTP for Web3 and in-app inboxes.",
                    tags: ["Messaging Protocol", "Web3", "In-App Inboxes"],
                    icon: Network,
                    accentClass: "from-amber-500/20 to-amber-900/10 border-amber-500/30 text-amber-300",
                    link: "https://github.com/nathfavour/TMP"
                },
                {
                    title: "shadowprism",
                    role: "Privacy Sidecar",
                    desc: "Privacy protocol aggregator for Solana.",
                    tags: ["Solana", "Privacy Protocol", "Aggregator"],
                    icon: Shield,
                    accentClass: "from-teal-500/20 to-teal-900/10 border-teal-500/30 text-teal-300",
                    link: "https://github.com/nathfavour/shadowprism"
                }
            ]
        }
    ],

    projects: [
        {
            title: "keystone-zig",
            role: "Security Framework",
            desc: "RISC-V enclave security framework in Zig for isolated agent execution.",
            tags: ["Zig", "RISC-V", "Enclave Security"],
            icon: Shield,
            accentClass: "from-blue-500/20 to-blue-900/10 border-blue-500/30 text-blue-300",
            link: "https://github.com/nathfavour/keystone-zig"
        },
        {
            title: "poly16duo",
            role: "PQC Primitive",
            desc: "Post-quantum cryptographic primitives in Zig compiled to freestanding WebAssembly.",
            tags: ["Zig", "WebAssembly", "Post-Quantum"],
            icon: KeyRound,
            accentClass: "from-cyan-500/20 to-cyan-900/10 border-cyan-500/30 text-cyan-300",
            link: "https://github.com/nathfavour/poly16duo"
        },
        {
            title: "settlerengine",
            role: "Payment Engine",
            desc: "High-throughput payment engine enabling direct crypto transactions between autonomous software agents.",
            tags: ["Crypto Rails", "Agent Payments"],
            icon: Zap,
            accentClass: "from-yellow-500/20 to-yellow-900/10 border-yellow-500/30 text-yellow-300",
            link: "https://github.com/nathfavour/settlerengine"
        },
        {
            title: "clarigggzOS",
            role: "OS Kernel",
            desc: "Operating system kernel targeting RISC-V architectures for smart glasses.",
            tags: ["Kernel", "RISC-V", "Smart Glasses"],
            icon: Glasses,
            accentClass: "from-emerald-500/20 to-emerald-900/10 border-emerald-500/30 text-emerald-300",
            link: "https://github.com/nathfavour/clarigggzOS"
        },
        {
            title: "anyisland",
            role: "Package Manager",
            desc: "Decentralized package manager for distributing agentic software.",
            tags: ["Package Manager", "Autonomous Agents"],
            icon: Package,
            accentClass: "from-purple-500/20 to-purple-900/10 border-purple-500/30 text-purple-300",
            link: "https://github.com/nathfavour/anyisland"
        },
        {
            title: "ship",
            role: "Language & Compiler",
            desc: "Programming language built specifically for agent-driven code generation.",
            tags: ["Programming Language", "Code Generation"],
            icon: Code,
            accentClass: "from-rose-500/20 to-rose-900/10 border-rose-500/30 text-rose-300",
            link: "https://github.com/nathfavour/ship"
        },
        {
            title: "TMP",
            role: "Messaging Protocol",
            desc: "Decentralized messaging protocol replacing SMTP for Web3 and in-app inboxes.",
            tags: ["Messaging Protocol", "Web3"],
            icon: Network,
            accentClass: "from-amber-500/20 to-amber-900/10 border-amber-500/30 text-amber-300",
            link: "https://github.com/nathfavour/TMP"
        },
        {
            title: "shadowprism",
            role: "Privacy Sidecar",
            desc: "Privacy protocol aggregator for Solana.",
            tags: ["Solana", "Privacy Protocol"],
            icon: Shield,
            accentClass: "from-teal-500/20 to-teal-900/10 border-teal-500/30 text-teal-300",
            link: "https://github.com/nathfavour/shadowprism"
        }
    ],

    experience: [
        {
            company: "Independent Systems & R&D",
            role: "Systems & Autonomous Agents Engineer",
            period: "2023 - Present",
            desc: "Architecting local-first platforms, post-quantum cryptographic primitives, and agentic settlement rails in Zig, Rust, and TypeScript."
        },
        {
            company: "BainaryGlobe",
            role: "Backend & Systems Developer",
            period: "2021 - 2023",
            desc: "Engineered scalable backend architectures, APIs, and infrastructure for holding ventures."
        }
    ],

    education: {
        degree: "B.Sc. Mathematics & Computer Science",
        school: "National Open University of Nigeria",
        focus: "Distributed Systems & Applied Mathematics"
    },

    community: [
        { role: "Campus Lead", label: "Cowrywise" },
        { role: "Ambassador", label: "Cleva" }
    ]
};
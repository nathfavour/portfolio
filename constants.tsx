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
    githubUsername: "nathfavour",
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
        subtitle: "Unified Local-First Workspace & AI Runtime",
        description: "Unified, local-first workspace combining private notes, vaults, and autonomous AI agents with passkey authentication and non-custodial crypto checkout.",
        stack: "Local-First • AI Agents • Passkeys • Crypto Checkout",
        icon: Layers,
        modules: [
            { name: "Private Notes", desc: "Local-first knowledge workspace & shared cache" },
            { name: "Vaults", desc: "Passkey-authenticated zero-knowledge key vaults" },
            { name: "AI Agents", desc: "Autonomous local agents & MCP orchestration" },
            { name: "Crypto Rails", desc: "Non-custodial checkout & agent payments" },
        ]
    },

    // Strict priority curation: Kylrix, Zup, SettlerEngine, Anyisland, VibeAuracle, Threader
    projects: [
        {
            title: "Kylrix",
            role: "Flagship Platform",
            desc: "Unified, local-first workspace combining private notes, vaults, and autonomous AI agents with passkey authentication and non-custodial crypto checkout.",
            tags: ["Local-First", "AI Agents", "Passkeys", "Crypto Rails", "RxDB"],
            icon: Layers,
            accentClass: "from-pink-500/20 to-pink-900/10 border-pink-500/30 text-pink-300",
            link: "https://github.com/nathfavour/kylrix"
        },
        {
            title: "Zup",
            role: "Sovereign Nostr Client",
            desc: "Ultra-lean, client-only sovereign Nostr client with local RxDB storage, zero-knowledge MEK passkeys, and real-time relay indexing.",
            tags: ["Nostr", "Client-Only", "RxDB", "Passkeys", "Vite"],
            icon: Network,
            accentClass: "from-amber-500/20 to-amber-900/10 border-amber-500/30 text-amber-300",
            link: "https://github.com/nathfavour/zup"
        },
        {
            title: "settlerengine",
            role: "Agent Payment Engine",
            desc: "High-throughput payment gateway enabling direct crypto transactions and EIP-712 settlement between autonomous software agents via x402.",
            tags: ["x402 Protocol", "EIP-712", "Agent Payments", "Crypto Rails"],
            icon: Zap,
            accentClass: "from-yellow-500/20 to-yellow-900/10 border-yellow-500/30 text-yellow-300",
            link: "https://github.com/nathfavour/settlerengine"
        },
        {
            title: "anyisland",
            role: "Agentic Package Manager",
            desc: "Decentralized, platform-agnostic package manager engineered for distributing and orchestrating agentic software lifecycles.",
            tags: ["Package Manager", "Autonomous Agents", "Decentralized Distribution"],
            icon: Package,
            accentClass: "from-purple-500/20 to-purple-900/10 border-purple-500/30 text-purple-300",
            link: "https://github.com/nathfavour/anyisland"
        },
        {
            title: "vibeauracle",
            role: "Autonomous Coding Oracle",
            desc: "Unified AI gateway and autonomous agentic loop in Go that independently analyzes, maintains, and evolves codebases with zero user friction.",
            tags: ["Go", "Autonomous Coding", "AI Gateway", "Agentic Loop"],
            icon: Terminal,
            accentClass: "from-cyan-500/20 to-cyan-900/10 border-cyan-500/30 text-cyan-300",
            link: "https://github.com/nathfavour/vibeauracle"
        },
        {
            title: "threader",
            role: "Autonomous Marketing Engine",
            desc: "Multi-platform marketing and engagement engine automating high-signal content distribution across Nostr and Threads via AI synthesis.",
            tags: ["Nostr", "Threads", "Autonomous Marketing", "Multimodal AI"],
            icon: Cpu,
            accentClass: "from-emerald-500/20 to-emerald-900/10 border-emerald-500/30 text-emerald-300",
            link: "https://github.com/nathfavour/threader"
        }
    ],

    projectTiers: [
        {
            name: "Flagship",
            description: "Primary unified local-first platform",
            projects: [
                {
                    title: "Kylrix",
                    role: "Flagship Platform",
                    desc: "Unified, local-first workspace combining private notes, vaults, and autonomous AI agents with passkey authentication and non-custodial crypto checkout.",
                    tags: ["Local-First", "AI Agents", "Passkeys", "Crypto Rails", "RxDB"],
                    icon: Layers,
                    accentClass: "from-pink-500/20 to-pink-900/10 border-pink-500/30 text-pink-300",
                    link: "https://github.com/nathfavour/kylrix"
                }
            ]
        },
        {
            name: "Priority Systems & Rails",
            description: "Autonomous payment engines, sovereign clients, agent package managers, and coding oracles",
            projects: [
                {
                    title: "Zup",
                    role: "Sovereign Nostr Client",
                    desc: "Ultra-lean, client-only sovereign Nostr client with local RxDB storage, zero-knowledge MEK passkeys, and real-time relay indexing.",
                    tags: ["Nostr", "Client-Only", "RxDB", "Passkeys", "Vite"],
                    icon: Network,
                    accentClass: "from-amber-500/20 to-amber-900/10 border-amber-500/30 text-amber-300",
                    link: "https://github.com/nathfavour/zup"
                },
                {
                    title: "settlerengine",
                    role: "Agent Payment Engine",
                    desc: "High-throughput payment gateway enabling direct crypto transactions and EIP-712 settlement between autonomous software agents via x402.",
                    tags: ["x402 Protocol", "EIP-712", "Agent Payments", "Crypto Rails"],
                    icon: Zap,
                    accentClass: "from-yellow-500/20 to-yellow-900/10 border-yellow-500/30 text-yellow-300",
                    link: "https://github.com/nathfavour/settlerengine"
                },
                {
                    title: "anyisland",
                    role: "Agentic Package Manager",
                    desc: "Decentralized, platform-agnostic package manager engineered for distributing and orchestrating agentic software lifecycles.",
                    tags: ["Package Manager", "Autonomous Agents", "Decentralized Distribution"],
                    icon: Package,
                    accentClass: "from-purple-500/20 to-purple-900/10 border-purple-500/30 text-purple-300",
                    link: "https://github.com/nathfavour/anyisland"
                },
                {
                    title: "vibeauracle",
                    role: "Autonomous Coding Oracle",
                    desc: "Unified AI gateway and autonomous agentic loop in Go that independently analyzes, maintains, and evolves codebases with zero user friction.",
                    tags: ["Go", "Autonomous Coding", "AI Gateway", "Agentic Loop"],
                    icon: Terminal,
                    accentClass: "from-cyan-500/20 to-cyan-900/10 border-cyan-500/30 text-cyan-300",
                    link: "https://github.com/nathfavour/vibeauracle"
                },
                {
                    title: "threader",
                    role: "Autonomous Marketing Engine",
                    desc: "Multi-platform marketing and engagement engine automating high-signal content distribution across Nostr and Threads via AI synthesis.",
                    tags: ["Nostr", "Threads", "Autonomous Marketing", "Multimodal AI"],
                    icon: Cpu,
                    accentClass: "from-emerald-500/20 to-emerald-900/10 border-emerald-500/30 text-emerald-300",
                    link: "https://github.com/nathfavour/threader"
                }
            ]
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
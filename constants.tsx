import { 
    Mail, 
    Github, 
    Globe, 
    Zap, 
    Code, 
    Award, 
    Cpu, 
    Layers, 
    Linkedin,
    Twitter
} from 'lucide-react';
import { CvConfig } from './types';

/**
 * CV_CONFIG
 * 
 * Edit this file to customize the resume content. 
 * This separates data from UI logic, making it easy to fork and personalize.
 */
export const CV_CONFIG: CvConfig = {
    name: "Nath Favour",
    role: "R&D Architect & Engineer",
    tagline: "Building AGI Infrastructure & Privacy-First Ecosystems",
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
        languages: ["Rust", "TypeScript", "Python", "C++"],
        core: ["LLM Integration", "Zero-Knowledge Proofs", "Distributed Systems", "R&D Architecture"],
        environment: ["Arch Linux", "Neovim", "Tokio", "React", "Solidity", "TensorFlow"],
    },

    flagship: {
        title: "Whisperrnote Ecosystem",
        subtitle: "Privacy-First Google Workspace Alternative",
        description: "A comprehensive, local-first ecosystem leveraging on-device AI and blockchain encryption to replace centralized productivity suites.",
        stack: "Rust • TypeScript • IPFS",
        icon: Layers,
        modules: [
            { name: "Whisperrnote", desc: "Local-LLM Note Engine" },
            { name: "Whisperrflow", desc: "Task Management" },
            { name: "Whisperrkeep", desc: "ZK Password Vault" },
            { name: "Whisperrsend", desc: "P2P Encrypted Transfer" },
        ]
    },

    projects: [
        {
            title: "DeeperSensor AI",
            role: "Head of R&D",
            desc: "Advanced AI research lab competing with DeepMind on AGI utility and embedded neural architectures.",
            tags: ["Python", "PyTorch", "Embedded AI"],
            icon: Cpu,
            accentClass: "from-purple-500/20 to-purple-900/10 border-purple-500/30 text-purple-300"
        },
        {
            title: "Tenchat",
            role: "Technical Co-Founder",
            desc: "Secure communication platform. Secured $50k grant. Built MVP and managed technical roadmap.",
            tags: ["Grant Funded", "TypeScript", "Security"],
            icon: Award,
            accentClass: "from-emerald-500/20 to-emerald-900/10 border-emerald-500/30 text-emerald-300"
        },
        {
            title: "Paylancerr",
            role: "Lead Engineer",
            desc: "DeFi payment infrastructure bridging freelance marketplaces with autonomous escrow smart contracts.",
            tags: ["Solidity", "Web3", "DeFi"],
            icon: Zap,
            accentClass: "from-yellow-500/20 to-yellow-900/10 border-yellow-500/30 text-yellow-300"
        }
    ],

    experience: [
        {
            company: "Afrixlabs",
            role: "Blockchain Engineer",
            period: "2023 - 2024",
            desc: "Optimized gas efficiency for smart contracts and built core dApp infrastructure."
        },
        {
            company: "BainaryGlobe",
            role: "Co-Founder",
            period: "2022 - Present",
            desc: "Structured legal/tech frameworks for multi-venture software holdings."
        }
    ],

    education: {
        degree: "B.Sc. Mathematics & Computer Science",
        school: "National Open University of Nigeria",
        focus: "Distributed Systems & AI"
    },

    community: [
        { role: "Campus Lead", label: "Cowrywise" },
        { role: "Ambassador", label: "Cleva" }
    ]
};
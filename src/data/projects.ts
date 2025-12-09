export interface Project {
    id: number;
    slug: string;
    title: string;
    description: string;
    tags: string[];
    github: string;
    link: string;
    challenge: string;
    solution: string;
    roi: string;
    image?: string; // Optional for now
}

export const projects: Project[] = [
    {
        id: 1,
        slug: "ai-chat-interface",
        title: "AI Chat Interface",
        description: "Uma interface conversacional moderna construída com Next.js e integrações de API de LLM. Foco em UX e streaming de respostas.",
        tags: ["Next.js", "TypeScript", "OpenAI"],
        github: "#",
        link: "#",
        challenge: "Criar uma experiência de chat fluida que lidasse com a latência das respostas de IA sem frustrar o utilizador.",
        solution: "Implementação de streaming de dados (Server-Sent Events) e atualizações optimistas na UI para feedback instantâneo.",
        roi: "Aumento de 40% na retenção de utilizadores devido à melhoria na percepção de latência.",
        image: "https://placehold.co/1200x600/171717/FF9F1C.png?text=AI+Chat+Interface&v=2"
    },
    {
        id: 2,
        slug: "ecommerce-dashboard",
        title: "E-Commerce Dashboard",
        description: "Painel administrativo completo para gestão de vendas e stocks com gráficos em tempo real utilizando Supabase.",
        tags: ["React", "Chart.js", "Supabase"],
        github: "#",
        link: "#",
        challenge: "Centralizar dados de múltiplas fontes dispersas num único painel de controlo em tempo real.",
        solution: "Arquitetura baseada em Supabase Realtime para sincronização instantânea de dados de vendas e inventário.",
        roi: "Redução de 2 horas diárias no tempo de gestão de stocks da equipa operacional.",
        image: "https://placehold.co/1200x600/171717/FF9F1C.png?text=E-Commerce+Dashboard&v=2"
    },
    {
        id: 3,
        slug: "finance-tracker-app",
        title: "Finance Tracker App",
        description: "Aplicação mobile-first para controlo de finanças pessoais e objetivos de poupança, com modo offline.",
        tags: ["React Native", "Expo", "Node.js"],
        github: "#",
        link: "#",
        challenge: "Garantir a funcionalidade em áreas com baixa conectividade sem perda de dados.",
        solution: "Implementação de base de dados local (SQLite) com sincronização em background quando online.",
        roi: "Acessibilidade 100% garantida offline, aumentando o uso diário da app em 15%.",
        image: "https://placehold.co/1200x600/171717/FF9F1C.png?text=Finance+App&v=2"
    },
    {
        id: 4,
        slug: "design-system-library",
        title: "Design System Library",
        description: "Biblioteca de componentes reutilizáveis documentada com Storybook, garantindo consistência visual.",
        tags: ["CSS Modules", "Storybook", "A11y"],
        github: "#",
        link: "#",
        challenge: "Inconsistência visual em diferentes produtos da empresa e lentidão no desenvolvimento de novas features.",
        solution: "Criação de uma biblioteca de componentes atómicos documentada e testada.",
        roi: "Aceleração de 30% no desenvolvimento de novas interfaces e eliminação de inconsistências visuais.",
        image: "https://placehold.co/1200x600/171717/FF9F1C.png?text=Design+System&v=2"
    },
    {
        id: 5,
        slug: "project-alpha",
        title: "Project Alpha",
        description: "Sistema de gestão empresarial focado em automação de processos internos.",
        tags: ["Vue.js", "Firebase", "Sass"],
        github: "#",
        link: "#",
        challenge: "Processos manuais propensos a erro humano e lentidão na aprovação de documentos.",
        solution: "Automatização de workflows com Firebase Functions e interface reativa.",
        roi: "Redução de 80% nos erros de processamento manual.",
        image: "https://placehold.co/1200x600/171717/FF9F1C.png?text=Project+Alpha&v=2"
    },
    {
        id: 6,
        slug: "portfolio-v1",
        title: "Portfolio v1",
        description: "Primeira versão do meu portfólio pessoal, com animações personalizadas.",
        tags: ["HTML", "CSS", "GSAP"],
        github: "#",
        link: "#",
        challenge: "Apresentar trabalhos anteriores de forma criativa sem utilizar frameworks pesados.",
        solution: "Site estático otimizado com animações GSAP leves.",
        roi: "Tempo de carregamento inferior a 1s e alta pontuação no Lighthouse.",
        image: "https://placehold.co/1200x600/171717/FF9F1C.png?text=Portfolio+v1&v=2"
    }
];

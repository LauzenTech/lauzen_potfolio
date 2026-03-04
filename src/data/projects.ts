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
    video?: string; // Optional video URL
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
        slug: "ecommerce-genai-curation",
        title: "E-Commerce de Curadoria com GenAI",
        description: "Eu me perguntei: E se o software entendesse a minha intenção, em vez de apenas a minha palavra-chave? Construí uma PoC invertendo a lógica tradicional do e-commerce.",
        tags: ["Vite", "Google AI Studio", "Gemini API", "DummyJSON"],
        github: "#",
        link: "#",
        challenge: "O fardo da curadoria é do usuário: caçar item por item e torcer para tudo combinar numa ocasião especial.",
        solution: "Um e-commerce inteligente onde o Gemini atua como 'cérebro' para entender a intenção humana e orquestrar um carrinho de compras completo.",
        roi: "O papel do dev moderno não é apenas entregar telas, mas desenhar sistemas que tomam decisões inteligentes para o negócio e o usuário.",
        image: "https://placehold.co/1200x600/171717/FF9F1C.png?text=E-Commerce+Dashboard&v=2",
        video: "/ecommerce_video.mp4"
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
        id: 7,
        slug: "hydrosync",
        title: "HydroSync",
        description: "Plataforma AgriTech para gestão agrícola com base em IoT. Monitoriza recursos, prevê culturas e apresenta mapas interativos em tempo real.",
        tags: ["React", "Python", "PostgreSQL", "DeepSeek AI"],
        github: "#",
        link: "https://hydrosync-frontend.onrender.com/index.html",
        challenge: "Criar uma solução eficiente para otimização de consumos (água e energia) e tomada de decisão preditiva suportada por GenAI.",
        solution: "Dashboard mobile-first com integração de mapa local, relatórios detalhados e um chatbot AI com histórico e previsão de culturas.",
        roi: "Apresentado e estruturado para o Timbuktoo AgriTech Hackathon, resultando num MVP completo focado na sustentabilidade.",
        image: "/hydrosync.png"
    }
];

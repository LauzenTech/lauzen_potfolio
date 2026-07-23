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
        id: 3,
        slug: "bfa",
        title: "BFA Enquete",
        description: "Uma solução desenvolvida para o Banco BFA, focada em transformar a gestão de campanhas em informação acionável.",
        tags: ["React", "Java"],
        github: "#",
        link: "#",
        challenge: "Na Blend, participei como desenvolvedor na criação de uma plataforma web para o Banco BFA, destinada ao registo e monitorização dos cartazes promocionais distribuídos pelas agências.",
        solution: "O sistema centraliza as informações das campanhas, facilita o acompanhamento da sua implementação e melhora o controlo operacional através de uma gestão mais organizada e segura dos dados.",
        roi: "Contributo: Desenvolvimento frontend e backend de funcionalidades da plataforma.",
        image: "/bfa.png"
    },

    {
        id: 7,
        slug: "hydrosync",
        title: "HydroSync",
        description: "Como utilizar tecnologia para apoiar decisões agrícolas mais inteligentes? Uma plataforma criada para transformar dados em informação útil para quem precisa decidir todos os dias.",
        tags: ["React", "Python", "PostgreSQL", "DeepSeek AI"],
        github: "#",
        link: "https://hydrosync-frontend.onrender.com/index.html",
        challenge: "Criar uma solução tecnológica capaz de apoiar agricultores na otimização de água, energia e previsão de culturas com base em dados.",
        solution: "Dashboard mobile-first com mapas, relatórios, histórico e chatbot com IA para apoiar decisões agrícolas de forma simples.",
        roi: "Projeto apresentado no Timbuktoo AgriTech Hackathon, nos Estados Unidos, como MVP focado em sustentabilidade, inovação e impacto social.",
        image: "/hydrosync.png"
    },
    {
        id: 8,
        slug: "wasi",
        title: "Wasi Metalic Works",
        description: "Website Institucional para a Wasi Metalic Works.",
        tags: ["Website Institucional"],
        github: "#",
        link: "https://wasi.appblend.pt/",
        challenge: "Como apresentar serviços e infraestruturas de forma corporativa e moderna na web?",
        solution: "Desenvolvimento de um website focado em destacar a credibilidade, serviços e o portfólio da empresa.",
        roi: "Criação de uma forte presença digital para captação de clientes corporativos.",
        image: "/wasi.png"
    },
    {
        id: 9,
        slug: "dardano",
        title: "Dardano Santos",
        description: "Website portfólio focado na marca pessoal de um coach profissional.",
        tags: ["Portfólio", "Marca Pessoal"],
        github: "#",
        link: "https://dardanos.appblend.pt/",
        challenge: "Como traduzir a metodologia, experiência e impacto de um coach numa plataforma digital própria?",
        solution: "Criação de um website focado em construir autoridade, expor serviços e atrair novos mentorados.",
        roi: "Centralização da comunicação e facilitação do contacto direto com clientes.",
        image: "/dardano.png"
    },
    {
        id: 10,
        slug: "cuatir",
        title: "Cuatir",
        description: "Website de uma reserva natural situada em Angola.",
        tags: ["Conservação", "Reserva Natural"],
        github: "#",
        link: "https://cuatirnaturereserve.co.ao/",
        challenge: "Como comunicar o valor ambiental e atrair o turismo ecológico para uma reserva natural?",
        solution: "Uma plataforma digital que imerge o visitante na biodiversidade e nas iniciativas de conservação do espaço.",
        roi: "Expansão da visibilidade internacional da reserva e maior facilidade na atração de visitantes e parceiros.",
        image: "/cuatir.png"
    },
    {
        id: 2,
        slug: "ecommerce-genai-curation",
        title: "Curadoria com IA",
        description: "Como ajudar pessoas a tomar melhores decisões utilizando Inteligência Artificial? Uma experiência construída para organizar informação complexa e transformá-la em conhecimento acionável.",
        tags: ["Vite", "Google AI Studio", "Gemini API", "DummyJSON"],
        github: "#",
        link: "#",
        challenge: "Reduzir o esforço de escolha do utilizador, que normalmente precisa procurar item por item até formar uma compra coerente.",
        solution: "Um e-commerce inteligente onde o Gemini interpreta contexto, ocasião e intenção para montar recomendações completas.",
        roi: "Mostra como software pode deixar de ser apenas interface e passar a atuar como parceiro criativo na tomada de decisão.",
        image: "/guga.png",
        video: "/ecommerce_video.mp4"
    }
];

export type ProfileLinkGithub = {
  url: string;
  username: string;
};

export type ProfileSkillGroup = {
  title: string;
  items: string[];
};

export type ProfileExperience = {
  company: string;
  type: string;
  location: string;
  title: string;
  start: string;
  end: string;
  description: string;
  skills: string[];
};

export type ProfileEducation = {
  school: string;
  degree: string;
  start?: string;
  end?: string;
  activities: string[];
  description: string;
};

export type HighlightFromPost = {
  title: string;
  description: string;
  tags: string[];
};

export type Profile = {
  name: string;
  headline: string;
  about: string;
  highlights: string[];
  featuredRepos: string[];
  links: {
    intra42: string;
    linkedin: string;
    github: ProfileLinkGithub;
  };
  location: string;
  followerStats: { followers: number; connections: number };
  openToRoles: string[];
  services: string[];
  skills: ProfileSkillGroup[];
  experience: ProfileExperience[];
  education: ProfileEducation[];
  highlightsFromPosts: HighlightFromPost[];
  fortyTwoHighlights: string[];
};

export const profile: Profile = {
  name: "Leonardo Jorge",
  headline:
    "Full Stack Developer || React || React Native || Node.js (TS) || UI/UX Design (Figma) || SQL || C and C++ programming || UNIX Systems || Algorithms && AI",
  about:
    "Sou desenvolvedor full stack e estudante de engenharia de software na 42. Gosto de construir produtos com UI/UX bem pensada, performance e uma base forte em sistemas (C/Unix). Estou focado em criar soluções que resolvem problemas reais e tornam a vida das pessoas mais simples e acessível.",
  highlights: [
    "Full Stack",
    "React",
    "React Native",
    "Node.js (TS)",
    "UI/UX (Figma)",
    "3+ anos (Freelance)",
    "SQL",
    "C/C++",
    "UNIX",
  ],
  featuredRepos: ["minishell", "raycaster2D", "fallen-edge-game", "inception", "containers"],
  links: {
    intra42: "https://profile.intra.42.fr/users/lleodev",
    linkedin: "https://www.linkedin.com/in/leonardo-jorge-65aaab269/",
    github: { url: "https://github.com/lleodev", username: "lleodev" },
  },
  location: "Luanda, Luanda, Angola",
  followerStats: { followers: 68, connections: 34 },
  openToRoles: [
    "Desenvolvedor Javascript",
    "Desenvolvedor de back end",
    "Desenvolvedor de front-end",
    "Desenvolvedor de aplicativos móveis",
    "Designer da web",
  ],
  services: ["Web design", "Desenvolvimento web", "Desenvolvimento de aplicativos móveis"],
  skills: [
    { title: "Frontend", items: ["React", "Next.js", "Tailwind", "Framer Motion"] },
    { title: "Mobile", items: ["React Native"] },
    { title: "Backend", items: ["Node.js", "TypeScript", "SQL", "APIs"] },
    { title: "UI/UX", items: ["Figma", "Web Design", "Prototipagem"] },
    { title: "Systems", items: ["C", "C++", "UNIX", "Algoritmos"] },
  ],
  experience: [
    {
      company: "Freelance",
      type: "Remoto",
      location: "Luanda, Angola",
      title: "Rede Social de Descoberta de Lugares (Mobile)",
      start: "2023",
      end: "2024",
      description:
        "Rede social mobile para descoberta e partilha de lugares (casas, hotéis, restaurantes), com sistema de seguidores e conteúdos voltados à hotelaria/turismo e amantes de imóveis.",
      skills: [
        "React Native",
        "Social graph",
        "Auth",
        "Conteúdo",
        "UX",
      ],
    },
    {
      company: "Freelance",
      type: "Remoto",
      location: "Luanda, Angola",
      title: "ECONOMIZA — Comparação de Preços e Promoções (Mobile)",
      start: "2024",
      end: "2025",
      description:
        "Aplicativo mobile para comparação de preços de produtos em supermercados, com promoções, ofertas e sorteios. Foco em otimizar decisões de compra com UX intuitiva e integração com APIs para dados atualizados.",
      skills: [
        "React Native",
        "Integração com APIs",
        "UX",
        "Performance",
        "Notificações",
      ],
    },
    {
      company: "Freelance",
      type: "Remoto",
      location: "Luanda, Angola",
      title: "ZUWO — Conexão entre Clientes e Corretores (Mobile)",
      start: "2025",
      end: "2025",
      description:
        "Plataforma que conecta clientes a corretores de imóveis, com busca, filtragem e gestão de anúncios. Foco em geração de leads, experiência do usuário e escalabilidade.",
      skills: [
        "React Native",
        "Filtros",
        "Imobiliário",
        "Leads",
        "Escalabilidade",
      ],
    },
    {
      company: "Freelance",
      type: "Remoto",
      location: "Luanda, Angola",
      title: "MAPAZZZ — MapaZZZ (Mobile)",
      start: "2025",
      end: "2026",
      description:
        "Usuários cadastram zonas de risco e validam dados uns dos outros, enquanto mapas de calor interativos mostram em tempo real as áreas mais críticas. Colaboração, tecnologia e prevenção para proteger a comunidade.",
      skills: [
        "React Native",
        "Mapas de calor",
        "Validação",
        "Colaboração",
        "Tempo real",
      ],
    },
  ],
  education: [
    {
      school: "42 Luanda (42 The Network)",
      degree: "Cursus — Engenharia de Software",
      start: "mai de 2024",
      end: "presente",
      activities: ["Projetos em C/UNIX", "Trabalho em equipa", "Resolução de problemas"],
      description:
        "Percurso no cursus da 42: base forte em C/UNIX, estruturas de dados, processos/sinais, networking e desenvolvimento de projetos. Alguns projetos: libft, ft_printf, get_next_line, born2beroot, push_swap, so_long, philosophers, cub3d, minishell, inception, ft_transcendence.",
    },
    {
      school: "42 Luanda (42 The Network)",
      degree: "Piscine — Programação em C e UNIX",
      start: "nov de 2023",
      end: "dez de 2023",
      activities: ["C", "Shell", "Peer learning", "Persistência"],
      description:
        "Experiência intensa e imersiva de aprendizagem na 42: fundamentos de programação, lógica, disciplina e colaboração — com foco em C, UNIX e resolução de problemas sob pressão.",
    },
    {
      school: "IPIL",
      degree:
        "Colegial Técnico — Computer Programming, Specific Applications",
      start: "fev de 2020",
      end: "fev de 2024",
      activities: [],
      description:
        "Base em programação e aplicações específicas, incluindo TypeScript e integração com APIs (ex.: Google Maps API).",
    },
  ],
  highlightsFromPosts: [
    {
      title: "GameJamPlus (10ª edição, 2025–26)",
      description:
        "Desenvolvi um jogo do zero usando Godot e GDScript; prática de programação de jogos, mecânicas e resolução rápida de problemas sob pressão.",
      tags: ["Godot", "GDScript", "Game Jam"],
    },
    {
      title: "Minishell (42)",
      description:
        "Projeto em grupo inspirado num shell real: execução de programas, redirections, pipes, variáveis de ambiente e sinais/processos (C/Unix).",
      tags: ["C", "UNIX", "Pipes", "Signals"],
    },
    {
      title: "so_long (42)",
      description:
        "Jogo 2D em C com MiniLibX. Bónus: inimigos no mapa com algoritmo de comportamento/movimento aleatório procurando o jogador.",
      tags: ["C", "MiniLibX", "Game Dev"],
    },
  ],
  fortyTwoHighlights: [
    "libft",
    "ft_printf",
    "get_next_line",
    "born2beroot",
    "push_swap",
    "so_long",
    "minitalk",
    "pipex",
    "philosophers",
    "cub3d",
    "minishell",
    "ft_irc",
    "netpractice",
    "inception",
    "ft_transcendence",
  ],
};

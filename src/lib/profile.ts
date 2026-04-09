export const profile = {
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
      company: "42 Luanda",
      type: "No local",
      location: "Luanda, Angola",
      title: "Aprendiz (42 Cadet)",
      start: "mai de 2024",
      end: "o momento",
      description:
        "Estudante/cadet na 42 Luanda, desenvolvendo projetos com forte base em C, UNIX, estruturas de dados, trabalho em equipa e resolução de problemas.",
      skills: ["Unix", "C", "Algoritmos", "Trabalho em equipe"],
    },
    {
      company: "42 Luanda",
      type: "No local",
      location: "Luanda, Angola",
      title: "42 Pisciner",
      start: "nov de 2023",
      end: "o momento",
      description:
        "Participação na Piscine da 42 Luanda: experiência intensa de aprendizagem, perseverança e colaboração, com foco em fundamentos de programação e C.",
      skills: ["UNIX", "Shell", "C", "Colaboração"],
    },
  ],
  education: [
    {
      school: "42 (42 The Network)",
      degree: "Computer Software Engineering",
      start: "",
      end: "",
      activities: ["football", "voleyball", "basketball", "Karaokê"],
      description:
        "Hi there, I am a software engineering student at 42school. recently admitted as a cadet. I love technology and am fascinated by it. solve problems in society and make people's lives simpler and more accessible by applying programming :)",
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
} as const;

"use client";

import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Gamepad2,
  MonitorPlay,
  Smartphone,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";
import { Badge } from "@/components/ui/Badge";

type FeaturedProject = {
  title: string;
  type: "web" | "mobile" | "game";
  eyebrow: string;
  description: string;
  status: string;
  tags: string[];
  href?: string;
  viewLabel: string;
  screenshots: string[];
};

const projects: FeaturedProject[] = [
  {
    title: "Arena +244",
    type: "web",
    eyebrow: "Plataforma web",
    description:
      "Plataforma angolana de streaming de jogos para conectar jogadores, criadores de conteudo e espectadores, com lives, chat em tempo real e monetizacao em AOA.",
    status:
      "Produto web pensado para fortalecer o ecossistema gaming nacional e reduzir dependencia de plataformas estrangeiras.",
    tags: ["Web platform", "Streaming", "Gaming", "Chat em tempo real", "AOA"],
    href: "https://res.cloudinary.com/dd4jkzuob/video/upload/v1782045180/VIP2_dvezna.mp4",
    viewLabel: "Preview web",
    screenshots: [
      "https://res.cloudinary.com/dd4jkzuob/video/upload/v1782045180/VIP2_dvezna.mp4",
    ],
  },
  {
    title: "Economiza",
    type: "mobile",
    eyebrow: "Design mobile · Figma",
    description:
      "Experiencia de comparacao e visualizacao de precos que ajuda consumidores a encontrar melhores ofertas e permite que lojas promovam campanhas, promocoes e sorteios.",
    status: "Design mobile preparado para apresentacao de produto.",
    tags: ["UI/UX", "Figma", "Marketplace", "Comparacao de precos"],
    viewLabel: "View mobile",
    screenshots: [
      "/projects/economiza/home.png",
      "/projects/economiza/main.png",
      "/projects/economiza/details.png",
    ],
  },
  {
    title: "Ponto Especifico",
    type: "mobile",
    eyebrow: "Mobile app · React Native",
    description:
      "Aplicativo de divulgacao e publicidade de servicos de hotelaria, turismo e lazer, conectando usuarios a estabelecimentos e profissionais locais.",
    status:
      "Disponivel na Play Store para testadores; lancamento global previsto em 3 dias.",
    tags: ["React Native", "Play Store", "Turismo", "Servicos locais"],
    viewLabel: "View mobile",
    screenshots: [
      "/projects/ponto-especifico/home.jpg",
      "/projects/ponto-especifico/details.jpg",
      "/projects/ponto-especifico/map.jpg",
    ],
  },
  {
    title: "Fallen Edge",
    type: "game",
    eyebrow: "Game dev · Godot",
    description:
      "Jogo 2D desenvolvido em Godot com cenarios em camadas, colisao por layers, hitbox/hurtbox com Area2D, sinais, animacoes, inimigos com vida e colecionaveis.",
    status:
      "Projeto focado em fundamentos de game engine, construcao de cenarios, sistemas de colisao, dano, ataque e feedback visual.",
    tags: ["Godot", "GDScript", "Game dev", "Area2D", "Tilemap"],
    href: "https://github.com/lleodev/fallen-edge-game",
    viewLabel: "Gameplay preview",
    screenshots: [
      "https://raw.githubusercontent.com/lleodev/fallen-edge-game/master/video-demo.gif",
    ],
  },
];

const PHONE_SCREEN_PATH =
  "M280.927 23.3588L77.2956 84.8978C62.9994 89.2182 54.2266 105.646 57.7008 121.59L174.288 656.631C177.762 672.575 192.168 681.998 206.464 677.678L410.096 616.139C424.392 611.818 433.165 595.391 429.69 579.447L313.104 44.4052C309.629 28.4612 295.224 19.0384 280.927 23.3588Z";

const slideTransition = {
  duration: 0.45,
  ease: [0.2, 0.9, 0.2, 1] as const,
};

function PhoneViewer({
  image,
  alt,
  className = "",
}: {
  image: string;
  alt: string;
  className?: string;
}) {
  const reactId = useId();
  const clipId = `phone-screen-${reactId.replace(/:/g, "")}`;

  return (
    <div
      className={`relative mx-auto aspect-[465/763] w-full max-w-[360px] ${className}`}
      role="img"
      aria-label={alt}
    >
      <Image
        src="/projects/mobile-viewer.svg"
        alt=""
        fill
        sizes="360px"
        className="z-0 object-contain"
      />
      <svg
        className="absolute inset-0 z-10 h-full w-full"
        viewBox="0 0 465 763"
        aria-hidden="true"
      >
        <defs>
          <clipPath id={clipId}>
            <path d={PHONE_SCREEN_PATH} />
          </clipPath>
        </defs>
        <g clipPath={`url(#${clipId})`}>
          <image
            href={image}
            x="0"
            y="0"
            width="286"
            height="750"
            preserveAspectRatio="xMidYMin slice"
            transform="translate(38 82) rotate(-13.8)"
          />
        </g>
        <path
          d="M124.547 72.5652L129.37 94.6982C130.768 101.114 134.343 103.452 140.095 101.714L243.637 70.4226C249.389 68.6842 251.566 64.6074 250.168 58.192L245.345 36.059L124.547 72.5652Z"
          fill="#0A0A0A"
        />
        <path
          d="M197.396 60.8062L168.059 69.672C166.63 70.1041 165.752 71.7468 166.1 73.3412C166.447 74.9356 167.888 75.8779 169.317 75.4458L198.654 66.5801C200.084 66.148 200.961 64.5053 200.614 62.9109C200.266 61.3165 198.826 60.3742 197.396 60.8062Z"
          fill="#1A1A1A"
        />
        <path
          d="M218.921 62.5072C221.304 61.7871 222.766 59.0492 222.187 56.3919C221.608 53.7345 219.207 52.1641 216.824 52.8841C214.441 53.6042 212.979 56.3421 213.558 58.9995C214.137 61.6568 216.538 63.2273 218.921 62.5072Z"
          fill="#111111"
        />
        <path
          d="M63.398 99.7345C63.638 99.1365 63.758 98.8375 63.919 98.5592C64.08 98.2809 64.2795 98.0277 64.6785 97.5214L69.6737 91.1826C70.5122 90.1186 70.9314 89.5865 71.4716 89.2129C72.0118 88.8393 72.6368 88.6492 73.8867 88.2688L250.219 34.6117C255.769 32.9229 258.544 32.0785 260.073 33.5893C261.603 35.1 260.919 38.0108 259.553 43.8322L156.909 481.077C153.807 494.291 152.256 500.898 149.167 501.099C146.077 501.301 144.603 494.892 141.656 482.073L57.8465 117.596C57.5547 116.327 57.4088 115.692 57.4635 115.04C57.5181 114.387 57.7697 113.761 58.2729 112.507L63.398 99.7345Z"
          fill="white"
          fillOpacity="0.18"
        />
      </svg>
    </div>
  );
}

function MediaViewer({ project }: { project: FeaturedProject }) {
  const source = project.screenshots[0];
  const isVideo = source.endsWith(".mp4");

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -18, scale: 0.97 }}
      transition={slideTransition}
      className="w-full overflow-hidden rounded-3xl border border-stroke bg-[#10131d] shadow-[0_28px_80px_rgba(0,0,0,0.38)]"
    >
      <div className="flex h-14 items-center gap-2 border-b border-stroke bg-background/50 px-4">
        <span className="h-3 w-3 rounded-full bg-[#ff6b6b]" />
        <span className="h-3 w-3 rounded-full bg-[#ffd166]" />
        <span className="h-3 w-3 rounded-full bg-[#06d6a0]" />
        <span className="ml-3 truncate rounded-full border border-stroke bg-foreground/35 px-4 py-2 font-mono text-xs text-muted">
          arena244.app / livestream
        </span>
      </div>
      <div className="relative aspect-video bg-background">
        {isVideo ? (
          <video
            className="h-full w-full object-cover"
            src={source}
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={source}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover object-center"
          />
        )}
      </div>
    </motion.div>
  );
}

function MobileView({ project }: { project: FeaturedProject }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -18, scale: 0.97 }}
      transition={slideTransition}
      className="grid w-full items-center gap-5 md:grid-cols-[1fr_0.72fr]"
    >
      <motion.div
        initial={{ rotate: -2 }}
        animate={{ rotate: 0 }}
        transition={{ ...slideTransition, delay: 0.08 }}
      >
          <PhoneViewer
            image={project.screenshots[0]}
            alt={`${project.title} screenshot principal`}
            className="max-w-[340px] sm:max-w-[380px]"
          />
      </motion.div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
        {project.screenshots.slice(1).map((screenshot, index) => (
          <motion.div
            key={screenshot}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...slideTransition, delay: 0.12 + index * 0.06 }}
            className="overflow-hidden rounded-2xl border border-stroke bg-background/50 p-2"
          >
            <div className="relative aspect-[9/16] overflow-hidden rounded-xl bg-background">
              <Image
                src={screenshot}
                alt={`${project.title} foto ${index + 2}`}
                fill
                sizes="180px"
                className="object-cover object-top"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function FeaturedProjectsPresentation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = projects[activeIndex];

  function goTo(offset: number) {
    setActiveIndex((current) => (current + offset + projects.length) % projects.length);
  }

  return (
    <section id="featured-projects" className="container-max mt-16 sm:mt-24">
      <div className="overflow-hidden rounded-[2rem] border border-stroke bg-foreground/35 shadow-[0_28px_100px_rgba(0,0,0,0.45)]">
        <div className="grid h-[1220px] sm:h-[1120px] lg:h-[840px] lg:grid-cols-12">
          <div className="flex min-h-0 flex-col justify-between gap-8 border-b border-stroke p-6 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r">
            <div className="min-h-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-stroke bg-background/35 px-4 py-2 text-sm text-muted">
                <MonitorPlay className="h-4 w-4" />
                Projetos em destaque
              </div>
              <div className="relative mt-6 h-[500px] overflow-hidden sm:h-[420px] lg:h-[500px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, x: 26, filter: "blur(8px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -26, filter: "blur(8px)" }}
                    transition={slideTransition}
                    className="absolute inset-0"
                  >
                    <p className="font-mono text-sm text-muted">
                      0{activeIndex + 1} / 0{projects.length}
                    </p>
                    <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                      {project.title}
                    </h2>
                    <div className="mt-3 inline-flex items-center gap-2 text-sm text-muted">
                      {project.type === "mobile" ? (
                        <Smartphone className="h-4 w-4" />
                      ) : project.type === "game" ? (
                        <Gamepad2 className="h-4 w-4" />
                      ) : (
                        <MonitorPlay className="h-4 w-4" />
                      )}
                      {project.eyebrow}
                    </div>
                    <p className="mt-6 max-w-lg text-base leading-8 text-muted">
                      {project.description}
                    </p>
                    <div className="mt-5 rounded-3xl border border-stroke bg-background/35 p-5 text-sm leading-7 text-text/90">
                      {project.status}
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={`${project.title}-${tag}`}>{tag}</Badge>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {projects.map((item, index) => (
                  <motion.button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`rounded-2xl border px-3 py-3 text-left text-sm transition-colors ${
                      index === activeIndex
                        ? "border-accent bg-accent/15 text-text"
                        : "border-stroke bg-background/30 text-muted hover:text-text"
                    }`}
                    aria-pressed={index === activeIndex}
                  >
                    <span className="block font-mono text-xs">0{index + 1}</span>
                    <span className="mt-1 block truncate">{item.title}</span>
                  </motion.button>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between gap-3">
                <div className="flex gap-2">
                  <motion.button
                    type="button"
                    onClick={() => goTo(-1)}
                    whileHover={{ x: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stroke bg-background/35 text-muted transition-colors hover:text-text"
                    aria-label="Projeto anterior"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => goTo(1)}
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stroke bg-background/35 text-muted transition-colors hover:text-text"
                    aria-label="Projeto seguinte"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-stroke bg-background/35 px-4 text-sm text-muted transition-colors hover:text-text"
                  >
                    Abrir demo <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </div>
          </div>

          <div className="min-h-0 lg:col-span-7">
            <div className="flex h-full flex-col p-6 sm:p-8">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm text-muted">View</div>
                  <h3 className="mt-1 text-2xl font-semibold">{project.viewLabel}</h3>
                </div>
                <span className="rounded-full border border-stroke bg-background/35 px-4 py-2 font-mono text-xs text-muted">
                  {project.type === "mobile"
                    ? "Smartphone"
                    : project.type === "game"
                      ? "Gameplay"
                      : "Desktop"}
                </span>
              </div>

              <div className="relative flex h-[660px] shrink-0 items-center justify-center overflow-hidden rounded-[1.75rem] border border-stroke bg-background/25 p-4 sm:h-[720px] sm:p-6 lg:h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${project.title}-${project.type}`}
                    initial={{ opacity: 0, x: 34 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -34 }}
                    transition={slideTransition}
                    className="absolute inset-4 flex items-center justify-center sm:inset-6"
                  >
                    {project.type === "mobile" ? (
                      <MobileView project={project} />
                    ) : (
                      <MediaViewer project={project} />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import clsx from "clsx";
import Image from "next/image";
import { GitFork, BriefcaseBusiness, ExternalLink } from "lucide-react";
import { profile } from "@/lib/profile";

const links = [
  { href: "#about", label: "Sobre" },
  { href: "#experience", label: "Experiência" },
  { href: "#education", label: "Formação" },
  { href: "#highlights", label: "Destaques" },
  { href: "#projects", label: "Projetos" },
  { href: "#42", label: "42" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-stroke/70 bg-background/70 backdrop-blur-xl">
      <div className="container-max flex h-16 items-center justify-between">
        <a
          href="#about"
          className="sr-only rounded-full border border-stroke bg-foreground/50 px-4 py-2 text-sm text-text focus:not-sr-only"
        >
          Saltar para o conteúdo
        </a>
        <a
          href="#top"
          className="group inline-flex items-center gap-2 font-mono text-sm text-text/95"
        >
          <span className="relative inline-flex h-7 w-7 overflow-hidden rounded-lg border border-stroke bg-foreground/45 shadow-[0_0_0_6px_rgba(61,84,255,0.08)]">
            <Image
              src="/avatar.jpg"
              alt={`${profile.name} — foto`}
              fill
              sizes="28px"
              className="object-cover"
              priority
            />
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
          <span className="text-muted transition-colors group-hover:text-text">
            /dev
          </span>
        </a>

        <nav className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={clsx(
                "rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-text",
                "hover:bg-foreground/35",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-foreground/35 text-muted transition-colors hover:text-text"
            href={profile.links.github.url}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <GitFork className="h-4 w-4" />
          </a>
          <a
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-foreground/35 text-muted transition-colors hover:text-text"
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <BriefcaseBusiness className="h-4 w-4" />
          </a>
          <a
            className="hidden h-10 items-center gap-2 rounded-full border border-stroke bg-foreground/35 px-4 text-sm text-muted transition-colors hover:text-text sm:inline-flex"
            href={profile.links.intra42}
            target="_blank"
            rel="noreferrer"
            aria-label="Intra 42"
          >
            <ExternalLink className="h-4 w-4" />
            Intra
          </a>
        </div>
      </div>
    </header>
  );
}

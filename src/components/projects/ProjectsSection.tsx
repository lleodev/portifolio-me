"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { type GithubRepo } from "@/lib/github";

type Props = {
  repos: GithubRepo[];
};

function repoLabel(repo: GithubRepo) {
  const lang = repo.language ?? "—";
  const updated = new Date(repo.updated_at).toLocaleDateString("pt-PT");
  return `${lang} · ★ ${repo.stargazers_count} · ${updated}`;
}

export function ProjectsSection({ repos }: Props) {
  const languages = useMemo(() => {
    const set = new Set<string>();
    for (const r of repos) if (r.language) set.add(r.language);
    return ["Todos", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, [repos]);

  const [language, setLanguage] = useState<string>("Todos");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    const data =
      language === "Todos"
        ? repos
        : repos.filter((r) => (r.language ?? "") === language);
    return showAll ? data : data.slice(0, 12);
  }, [language, repos, showAll]);

  return (
    <div className="mt-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <label className="text-sm text-muted" htmlFor="lang">
            Filtrar:
          </label>
          <select
            id="lang"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="h-10 rounded-full border border-stroke bg-foreground/35 px-4 text-sm text-text/90 shadow-[0_16px_50px_rgba(0,0,0,0.18)]"
          >
            {languages.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          className="h-10 rounded-full border border-stroke bg-foreground/35 px-4 text-sm text-muted transition-colors hover:text-text"
        >
          {showAll ? "Mostrar menos" : "Mostrar mais"}
        </button>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((repo, idx) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.45,
              ease: [0.2, 0.9, 0.2, 1],
              delay: Math.min(idx * 0.02, 0.22),
            }}
            className="group"
          >
            <div className="glass h-full rounded-2xl p-5 transition-transform duration-300 group-hover:-translate-y-1">
              <div className="flex items-center justify-between gap-4">
                <div className="truncate font-mono text-sm text-text/95">
                  {repo.name}
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted transition-colors group-hover:text-text" />
              </div>
              <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted">
                {repo.description || "Sem descrição."}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted">
                <span className="rounded-full border border-stroke bg-foreground/40 px-2 py-1">
                  {repoLabel(repo)}
                </span>
                {repo.homepage ? (
                  <span className="rounded-full border border-stroke bg-foreground/40 px-2 py-1">
                    demo
                  </span>
                ) : null}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}


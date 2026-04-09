import {
  BriefcaseBusiness,
  ExternalLink,
  ArrowUpRight,
  GitFork,
} from "lucide-react";
import { profile } from "@/lib/profile";
import {
  getGithubProfile,
  getGithubReadmeSnippet,
  getGithubRepo,
  getGithubRepos,
} from "@/lib/github";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MotionIn } from "@/components/motion/MotionIn";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import DevScene from "@/components/three/DevScene";
import { ProjectsSection } from "@/components/projects/ProjectsSection";

function summarizeLanguages(repos: { language: string | null }[]) {
  const map = new Map<string, number>();
  for (const r of repos) {
    const key = r.language ?? "Outros";
    map.set(key, (map.get(key) ?? 0) + 1);
  }
  return Array.from(map.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([lang, count]) => `${lang} (${count})`)
    .join(" · ");
}

export default async function Home() {
  const [ghProfile, repos, featured] = await Promise.all([
    getGithubProfile(profile.links.github.username),
    getGithubRepos(profile.links.github.username),
    Promise.all(
      profile.featuredRepos.map(async (name) => {
        const [repo, readme] = await Promise.all([
          getGithubRepo(profile.links.github.username, name),
          getGithubReadmeSnippet(profile.links.github.username, name),
        ]);
        return { repo, readme };
      }),
    ),
  ]);

  return (
    <div className="relative flex flex-1 flex-col">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[720px] grid-surface opacity-70"
      />

      <SiteHeader />

      <main className="flex-1">
        <section id="top" className="container-max pt-20 sm:pt-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-32">
            <div className="lg:col-span-5">
              <MotionIn>
                <div className="inline-flex items-center gap-2 rounded-full border border-stroke bg-foreground/35 px-4 py-2 text-sm text-muted">
                  <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_4px_rgba(61,84,255,0.18)]" />
                  Disponível para projetos e colaboração
                </div>
              </MotionIn>

              <MotionIn delay={0.05}>
                <div className="mt-5 flex items-center gap-4">
                  <h1 className="text-6xl md:text-[9rem] font-black tracking-tighter leading-[0.85] mb-10 text-gradient">
                    {profile.name}
                  </h1>
                </div>
              </MotionIn>

              <MotionIn delay={0.1}>
                <p className="mt-4 text-balance text-lg leading-8 text-muted">
                  {ghProfile?.bio ? ghProfile.bio : profile.headline}{" "}
                  <span className="text-text/95">
                    {ghProfile?.location ? `— ${ghProfile.location}` : ""}
                  </span>
                </p>
              </MotionIn>

              <MotionIn delay={0.15}>
                <div className="mt-6 flex flex-wrap gap-2">
                  {profile.highlights.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </MotionIn>

              <MotionIn delay={0.2}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    href={profile.links.github.url}
                    target="_blank"
                    rel="noreferrer"
                    iconLeft={<GitFork className="h-4 w-4" />}
                  >
                    GitHub
                  </Button>
                  <Button
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    variant="secondary"
                    iconLeft={<BriefcaseBusiness className="h-4 w-4" />}
                  >
                    LinkedIn
                  </Button>
                  <Button
                    href={profile.links.intra42}
                    target="_blank"
                    rel="noreferrer"
                    variant="ghost"
                    iconRight={<ExternalLink className="h-4 w-4" />}
                  >
                    Intra 42
                  </Button>
                </div>
              </MotionIn>

              <MotionIn delay={0.25}>
                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  <Card>
                    <div className="text-sm text-muted">Repos</div>
                    <div className="mt-1 text-2xl font-semibold">
                      {ghProfile?.public_repos ?? "—"}
                    </div>
                  </Card>
                  <Card>
                    <div className="text-sm text-muted">Followers</div>
                    <div className="mt-1 text-2xl font-semibold">
                      {ghProfile?.followers ?? "—"}
                    </div>
                  </Card>
                  <Card>
                    <div className="text-sm text-muted">Desde</div>
                    <div className="mt-1 text-2xl font-semibold">
                      {ghProfile?.created_at
                        ? new Date(ghProfile.created_at).getFullYear()
                        : "—"}
                    </div>
                  </Card>
                </div>
              </MotionIn>
            </div>

            <div className="lg:col-span-7 lg:pl-16">
              <MotionIn delay={0.1}>
                <div className="glass glow-ring overflow-hidden rounded-3xl">
                  <div className="flex items-center justify-between border-b border-stroke px-5 py-4">
                    <div className="font-mono text-xs text-muted">
                      ~/portfolio/scene.tsx
                    </div>
                    <a
                      href="#projects"
                      className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
                    >
                      Ver projetos <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
                  <div className="p-2 sm:p-3">
                    <DevScene />
                  </div>
                </div>
              </MotionIn>
            </div>
          </div>
        </section>

        <section id="about" className="container-max mt-16 sm:mt-24">
          <MotionIn>
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Sobre
                </h2>
                <p className="mt-4 leading-8 text-muted">
                  {profile.about}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {ghProfile?.login ? (
                    <Badge className="font-mono">@{ghProfile.login}</Badge>
                  ) : null}
                  {ghProfile?.location ? <Badge>{ghProfile.location}</Badge> : null}
                  {ghProfile?.public_repos ? (
                    <Badge>{ghProfile.public_repos} repos públicos</Badge>
                  ) : null}
                  <Badge>{profile.followerStats.followers} seguidores</Badge>
                  <Badge>{profile.followerStats.connections} conexões</Badge>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="grid gap-3 sm:grid-cols-2">
                  {profile.skills.map((s) => (
                    <Card key={s.title}>
                      <div className="text-sm text-muted">{s.title}</div>
                      <div className="mt-2 font-mono text-sm text-text/90">
                        {s.items.join(" · ")}
                      </div>
                    </Card>
                  ))}
                  <Card className="sm:col-span-2">
                    <div className="text-sm text-muted">Linguagens (GitHub)</div>
                    <div className="mt-2 font-mono text-sm text-text/90">
                      {summarizeLanguages(repos) || "—"}
                    </div>
                  </Card>
                  <Card className="sm:col-span-2">
                    <div className="text-sm text-muted">Serviços</div>
                    <div className="mt-2 font-mono text-sm text-text/90">
                      {profile.services.join(" · ")}
                    </div>
                    <div className="mt-4 text-sm text-muted">
                      Buscando: {profile.openToRoles.join(" · ")}
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </MotionIn>
        </section>

        <section id="experience" className="container-max mt-16 sm:mt-24">
          <MotionIn>
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Experiência
                </h2>
                <p className="mt-2 text-muted">{profile.location}</p>
              </div>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hidden items-center gap-2 text-sm text-muted transition-colors hover:text-text sm:inline-flex"
              >
                Ver no LinkedIn <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 grid gap-3 lg:grid-cols-2">
              {profile.experience.map((e) => (
                <div key={`${e.company}-${e.title}`} className="glass rounded-3xl p-6 sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="text-lg font-semibold text-text/95">
                      {e.title}
                    </div>
                    <div className="font-mono text-xs text-muted">
                      {e.start} — {e.end}
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-muted">
                    {e.company} · {e.type} · {e.location}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-muted">{e.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {e.skills.map((s) => (
                      <Badge key={`${e.title}-${s}`}>{s}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </MotionIn>
        </section>

        <section id="education" className="container-max mt-16 sm:mt-24">
          <MotionIn>
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Formação
                </h2>
                <p className="mt-2 text-muted">Trajetória e base técnica</p>
              </div>
            </div>

            <div className="mt-8 grid gap-3 lg:grid-cols-2">
              {profile.education.map((ed) => (
                <div key={`${ed.school}-${ed.degree}`} className="glass rounded-3xl p-6 sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="text-lg font-semibold text-text/95">
                      {ed.school}
                    </div>
                    {ed.start || ed.end ? (
                      <div className="font-mono text-xs text-muted">
                        {[ed.start, ed.end].filter(Boolean).join(" — ")}
                      </div>
                    ) : null}
                  </div>
                  <div className="mt-2 text-sm text-muted">{ed.degree}</div>
                  <p className="mt-4 text-sm leading-7 text-muted">{ed.description}</p>
                  {ed.activities.length ? (
                    <div className="mt-5 text-sm text-muted">
                      Atividades: {ed.activities.join(" · ")}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </MotionIn>
        </section>

        <section id="highlights" className="container-max mt-16 sm:mt-24">
          <MotionIn>
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Destaques
                </h2>
                <p className="mt-2 text-muted">Do LinkedIn e projetos pessoais</p>
              </div>
            </div>

            <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {profile.highlightsFromPosts.map((h) => (
                <div key={h.title} className="glass rounded-3xl p-6 sm:p-8">
                  <div className="text-lg font-semibold text-text/95">{h.title}</div>
                  <p className="mt-3 text-sm leading-7 text-muted">{h.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {h.tags.map((t) => (
                      <Badge key={`${h.title}-${t}`}>{t}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </MotionIn>
        </section>

        <section id="projects" className="container-max mt-16 sm:mt-24">
          <MotionIn>
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Projetos recentes
                </h2>
                <p className="mt-2 text-muted">
                  Atualizado automaticamente pelo GitHub.
                </p>
              </div>
              <a
                href={profile.links.github.url}
                target="_blank"
                rel="noreferrer"
                className="hidden items-center gap-2 text-sm text-muted transition-colors hover:text-text sm:inline-flex"
              >
                Ver todos <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 grid gap-3 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="glass rounded-3xl p-6 sm:p-8">
                  <h3 className="text-xl font-semibold tracking-tight">
                    Destaques
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    Uma seleção automática (com snippet do README quando
                    disponível).
                  </p>
                  <div className="mt-6 grid gap-3">
                    {featured
                      .map((f) => ({
                        repo: f.repo,
                        readme: f.readme,
                      }))
                      .filter((f) => !!f.repo)
                      .slice(0, 5)
                      .map((f) => (
                        <a
                          key={f.repo!.id}
                          href={f.repo!.html_url}
                          target="_blank"
                          rel="noreferrer"
                          className="group rounded-2xl border border-stroke bg-foreground/30 p-4 transition-colors hover:bg-foreground/40"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="font-mono text-sm text-text/95">
                                {f.repo!.name}
                              </div>
                              <div className="mt-1 text-xs text-muted">
                                {f.repo!.language ?? "—"} · ★{" "}
                                {f.repo!.stargazers_count} ·{" "}
                                {new Date(f.repo!.updated_at).toLocaleDateString(
                                  "pt-PT",
                                )}
                              </div>
                            </div>
                            <ArrowUpRight className="mt-0.5 h-4 w-4 text-muted transition-colors group-hover:text-text" />
                          </div>
                          {f.readme ? (
                            <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted">
                              {f.readme}
                            </p>
                          ) : null}
                        </a>
                      ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <ProjectsSection repos={repos} />
              </div>
            </div>
          </MotionIn>
        </section>

        <section id="42" className="container-max mt-16 pb-24 sm:mt-24">
          <MotionIn>
            <div className="glass rounded-3xl p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    Trajetória na 42 (inspirado no Intra)
                  </h2>
                  <p className="mt-2 max-w-2xl text-muted">
                    Um mapa em 3D que representa alguns projetos do cursus. (O
                    Intra pode exigir login — aqui deixo o link direto.)
                  </p>
                </div>
                <Button
                  href={profile.links.intra42}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  iconRight={<ExternalLink className="h-4 w-4" />}
                >
                  Abrir Intra
                </Button>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {profile.fortyTwoHighlights.map((p) => (
                  <div
                    key={p}
                    className="rounded-2xl border border-stroke bg-foreground/35 px-4 py-4"
                  >
                    <div className="font-mono text-sm text-text/90">{p}</div>
                    <div className="mt-1 text-xs text-muted">
                      projeto 42
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-stroke bg-foreground/25 px-4 py-4 text-sm text-muted">
                {profile.experienceNote}
              </div>
            </div>
          </MotionIn>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

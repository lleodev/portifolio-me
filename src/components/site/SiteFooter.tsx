import { GitFork, BriefcaseBusiness, ExternalLink } from "lucide-react";
import { profile } from "@/lib/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-stroke/70 bg-background/40">
      <div className="container-max flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js + R3F.
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href={profile.links.github.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-stroke bg-foreground/35 px-4 py-2 text-sm text-muted transition-colors hover:text-text"
          >
            <GitFork className="h-4 w-4" /> GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-stroke bg-foreground/35 px-4 py-2 text-sm text-muted transition-colors hover:text-text"
          >
            <BriefcaseBusiness className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href={profile.links.intra42}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-stroke bg-foreground/35 px-4 py-2 text-sm text-muted transition-colors hover:text-text"
          >
            <ExternalLink className="h-4 w-4" /> Intra 42
          </a>
        </div>
      </div>
    </footer>
  );
}

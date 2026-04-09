export type GithubProfile = {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  location: string | null;
  public_repos: number;
  followers: number;
  created_at?: string;
};

export type GithubRepo = {
  id: number;
  name: string;
  full_name?: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count?: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
  homepage?: string | null;
};

export async function getGithubProfile(
  username: string,
): Promise<GithubProfile | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 60 * 60 },
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) return null;
    return (await res.json()) as GithubProfile;
  } catch {
    return null;
  }
}

export async function getGithubRepos(username: string): Promise<GithubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      {
        next: { revalidate: 60 * 60 },
        headers: { Accept: "application/vnd.github+json" },
      },
    );
    if (!res.ok) return [];
    const data = (await res.json()) as GithubRepo[];
    return data
      .filter((r) => !r.fork && !r.archived)
      .sort(
        (a, b) =>
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
      );
  } catch {
    return [];
  }
}

export async function getGithubRepo(
  username: string,
  repo: string,
): Promise<GithubRepo | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${username}/${repo}`, {
      next: { revalidate: 60 * 60 },
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) return null;
    return (await res.json()) as GithubRepo;
  } catch {
    return null;
  }
}

function decodeBase64Utf8(input: string) {
  return Buffer.from(input, "base64").toString("utf8");
}

export async function getGithubReadmeSnippet(
  username: string,
  repo: string,
): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${username}/${repo}/readme`,
      {
        next: { revalidate: 60 * 60 },
        headers: { Accept: "application/vnd.github+json" },
      },
    );
    if (!res.ok) return null;
    const data = (await res.json()) as { content?: string };
    if (!data.content) return null;
    const text = decodeBase64Utf8(data.content)
      .replace(/\r\n/g, "\n")
      .replace(/```[\s\S]*?```/g, "")
      .replace(/\n{3,}/g, "\n\n")
      .trim();
    if (!text) return null;
    return text.length > 220 ? `${text.slice(0, 220).trim()}…` : text;
  } catch {
    return null;
  }
}

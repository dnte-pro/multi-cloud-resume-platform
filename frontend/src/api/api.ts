/**
 * In development FastAPI is reached directly. In a deployed environment set
 * VITE_API_URL to the public API URL, or route `/api` to FastAPI with a reverse
 * proxy.
 */
const API_URL = (
  import.meta.env.VITE_API_URL ??
  (import.meta.env.DEV ? "http://127.0.0.1:8000" : "/api")
).replace(/\/$/, "");

async function request(path: string, init?: RequestInit): Promise<Response> {
  try {
    return await fetch(`${API_URL}${path}`, init);
  } catch {
    throw new Error(`Cannot reach the resume API at ${API_URL}. Start FastAPI on port 8000.`);
  }
}

export type Project = {
  name: string;
  description: string;
};

export type Resume = {
  name: string;
  title: string;
  location: string;
  summary: string;
  skills: string[];
  projects: Project[];
};

export async function getResume(): Promise<Resume> {
  const response = await request("/resume");

  if (!response.ok) {
    throw new Error(`Resume API returned ${response.status} at ${API_URL}/resume.`);
  }

  return response.json() as Promise<Resume>;
}

export async function recordVisit(): Promise<number> {
  const response = await request("/visit", { method: "POST" });

  if (!response.ok) {
    throw new Error("Failed to record visit");
  }

  const data = (await response.json()) as { visitors: number };
  return data.visitors;
}

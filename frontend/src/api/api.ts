const API_URL = "http://localhost:8000";

export async function getResume() {
    const response = await fetch(`${API_URL}/resume`);

    if (!response.ok) {
        throw new Error("Failed to fetch resume");
    }

    return response.json();
}
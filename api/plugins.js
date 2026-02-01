// Cloudflare Workers or Vercel Edge Function to fetch Figma plugins
export default async function handler(request) {
  const figmaUrl =
    "https://www.figma.com/api/plugins/profile/134689?fuid=987658461863261647";

  try {
    const response = await fetch(figmaUrl);
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
}

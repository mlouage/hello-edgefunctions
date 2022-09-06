import type { Context } from "https://edge.netlify.com";

export default async (_req: Request, { geo }: Context): Promise<Response> => {
  const res = new Response(`Hello from ${geo.city}!`);
  const text = await res.text();

  return new Response(text.toUpperCase(), res);
}
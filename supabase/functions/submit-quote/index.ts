import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { z } from "https://esm.sh/zod@3.25.76";
const cors = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type", "Access-Control-Allow-Methods": "POST, OPTIONS" };
const text = (max: number) => z.string().trim().min(1).max(max);
const schema = z.object({
 product: text(200), quantity_mt: z.coerce.number().positive().max(1000000), destination: text(200), packaging: text(200),
 required_ship_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine(v => !Number.isNaN(Date.parse(v)) && v >= new Date().toISOString().slice(0,10)),
 incoterm: text(100), company: text(150), contact_name: text(100), email: z.string().trim().email().max(255),
 whatsapp: z.string().trim().min(7).max(30).regex(/^\+?[\d\s()-]+$/),
}).strict();
const respond = (body: object, status = 200) => new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });
Deno.serve(async req => {
 if (req.method === "OPTIONS") return new Response(null, { headers: cors });
 if (req.method !== "POST") return respond({ error: "Method not allowed" }, 405);
 try {
  const raw = await req.text();
  if (raw.length > 6000) return respond({ error: "Request too large" }, 413);
  const result = schema.safeParse(JSON.parse(raw));
  if (!result.success) return respond({ error: "Please check your quotation details." }, 400);
  const client = createClient(Deno.env.get("SUPABASE_URL") ?? "", Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "");
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const hash = async (value: string) => Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value)))).map(n => n.toString(16).padStart(2,"0")).join("");
  for (const key of ["ip:" + ip, "email:" + result.data.email.toLowerCase()]) {
   const { data, error } = await client.rpc("allow_quote_request", { _key: await hash(key) });
   if (error) return respond({ error: "Unable to receive your enquiry. Please try again." }, 503);
   if (!data) return respond({ error: "Too many enquiries. Please try again later or contact us directly." }, 429);
  }
  const { data, error } = await client.from("quote_requests").insert(result.data).select("id").single();
  if (error) return respond({ error: "Unable to save your enquiry. Please try again." }, 503);
  return respond({ id: data.id }, 201);
 } catch { return respond({ error: "Please check your enquiry and try again." }, 400); }
});

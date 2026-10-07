import { useState } from "react";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { products } from "@/data/products";
import { business } from "@/data/business";
import { quoteSchema } from "@/lib/quote-schema";
import { supabase } from "@/integrations/supabase/client";
const confirmation = "Thank you for your enquiry. Our export team has received your requirement and will review availability, specifications and logistics before sending your quotation.";
export default function LeadForm({ selectedProduct, onClose }: { selectedProduct: string; onClose: () => void }) {
 const [form, setForm] = useState({ product: selectedProduct, quantity_mt: "", destination: "", packaging: "", required_ship_date: "", incoterm: "", company: "", contact_name: "", email: "", whatsapp: "" });
 const [errors, setErrors] = useState<Record<string,string>>({});
 const [busy,setBusy] = useState(false); const [success,setSuccess] = useState(false); const [error,setError] = useState("");
 const change = (key: keyof typeof form, value: string) => setForm(prev => ({ ...prev, [key]: value }));
 async function submit(e: React.FormEvent) {
  e.preventDefault(); setError("");
  const result = quoteSchema.safeParse(form);
  if (!result.success) { setErrors(Object.fromEntries(result.error.issues.map(i => [i.path[0], i.message]))); return; }
  setErrors({}); setBusy(true);
  try {
   const { data, error: submitError } = await supabase.functions.invoke("submit-quote", { body: result.data });
   if (submitError || !data?.id) throw new Error("Your enquiry could not be saved. Please try again or contact us directly.");
   setSuccess(true);
  } catch (err) { setError(err instanceof Error ? err.message : "Please try again."); } finally { setBusy(false); }
 }
 const fields: { key: keyof typeof form; label: string; type?: string; max?: number; placeholder?: string }[] = [
 {key:"product",label:"Product",max:200}, {key:"quantity_mt",label:"Quantity (MT)",type:"number"},
 {key:"destination",label:"Destination Country/Port",max:200}, {key:"packaging",label:"Packaging Preference",max:200,placeholder:"Requested size and material"},
 {key:"required_ship_date",label:"Required Ship Date",type:"date"}, {key:"incoterm",label:"Incoterm",max:100,placeholder:"Requested term or Ask export team"},
 {key:"company",label:"Company",max:150}, {key:"contact_name",label:"Contact Name",max:100},
 {key:"email",label:"Email",type:"email",max:255}, {key:"whatsapp",label:"WhatsApp",type:"tel",max:30},
 ];
 return <Dialog open onOpenChange={open => { if (!open && !busy) onClose(); }}><DialogContent className="max-w-2xl w-[calc(100%-2rem)] max-h-[90dvh] overflow-y-auto"><DialogHeader><DialogTitle>{success ? "Enquiry received" : "Request a Quote"}</DialogTitle><DialogDescription>{success ? "Zair Global Trade" : "Product and logistics requirements"}</DialogDescription></DialogHeader>{success ? <div className="py-5"><CheckCircle2 className="text-accent mb-4 h-8 w-8"/><p role="status" className="leading-relaxed">{confirmation}</p><Button className="mt-6" onClick={onClose}>Close</Button></div> : <form onSubmit={submit} noValidate className="space-y-5"><div className="grid sm:grid-cols-2 gap-4">{fields.map(f => <div key={f.key}><label htmlFor={`rfq-${f.key}`} className="block text-sm font-medium mb-2">{f.label} *</label><Input id={`rfq-${f.key}`} type={f.type ?? "text"} value={form[f.key]} onChange={e => change(f.key,e.target.value)} required maxLength={f.max} min={f.type === "date" ? new Date().toISOString().slice(0,10) : f.type === "number" ? "0.001" : undefined} max={f.type === "number" ? "1000000" : undefined} step={f.type === "number" ? "any" : undefined} list={f.key === "product" ? "rfq-products" : f.key === "packaging" ? "rfq-packs" : undefined} placeholder={f.placeholder} aria-invalid={Boolean(errors[f.key])} aria-describedby={errors[f.key] ? `error-${f.key}` : undefined}/>{errors[f.key] && <p id={`error-${f.key}`} className="text-sm text-destructive mt-1">{errors[f.key]}</p>}</div>)}</div><datalist id="rfq-products">{products.map(p => <option key={p.id} value={p.name}/>)}</datalist><datalist id="rfq-packs">{["5 kg", "10 kg", "25 kg", "50 kg", "Ask export team"].map(v => <option key={v} value={v}/>)}</datalist><p className="text-xs text-muted-foreground">Packaging sizes and Incoterms entered here are preferences, subject to confirmation.</p>{error && <p role="alert" className="text-sm text-destructive">{error}</p>}<Button type="submit" disabled={busy} className="w-full">{busy ? <Loader2 className="animate-spin"/> : <Send/>}{busy ? "Submitting…" : "Submit Enquiry"}</Button><p className="text-xs text-muted-foreground">By submitting, you agree to be contacted about this enquiry.</p><a className="text-sm text-primary underline" href={business.whatsapp} target="_blank" rel="noopener noreferrer">Contact us on WhatsApp instead</a></form>}</DialogContent></Dialog>;
}

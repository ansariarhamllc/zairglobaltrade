import PageShell from "@/components/PageShell";
import QuoteButton from "@/components/QuoteButton";
import { Button } from "@/components/ui/button";
import { business } from "@/data/business";
import { Mail, Phone } from "lucide-react";
export default function Contact() {
 const enquiries = [
 ["Quotations", "Send your product, quantity, destination, packing preference and shipment requirements."],
 ["Product Enquiries", "Discuss a listed product, variety, specification or document requirement."],
 ["Sourcing", "Share your commodity requirement and destination for a sourcing discussion."],
 ["Partnerships", "Contact Shahbaz Ansari about supplier or buyer partnerships."],
 ];
 return <PageShell title="Contact Zair Global Trade" intro="Quotations, product enquiries, sourcing and partnerships — using the company's existing direct contact details."><section className="py-16"><div className="container mx-auto px-4 max-w-5xl"><div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">{enquiries.map(([type,desc]) => <div key={type} className="border-t border-border pt-6"><h2 className="text-2xl mb-3">{type}</h2><p className="text-sm text-muted-foreground leading-relaxed mb-5">{desc}</p>{type === "Quotations" ? <QuoteButton/> : <Button asChild variant="outline"><a href={`${business.whatsapp}?text=${encodeURIComponent(`Hello Zair Global Trade, I would like to discuss ${type.toLowerCase()}.`)}`} target="_blank" rel="noopener noreferrer"><Phone/>Discuss {type}</a></Button>}<Button asChild variant="link" className="mt-2 px-0 block h-auto"><a href={`mailto:${business.email}?subject=${encodeURIComponent(type + " — Zair Global Trade")}`}><Mail/>Email {type.toLowerCase()}</a></Button></div>)}</div><div className="mt-12 pt-8 border-t border-border"><h2 className="text-2xl mb-5">Direct contact</h2><p className="text-muted-foreground mb-4">{business.address}</p><a className="block underline mb-3" href="tel:+919560288244">{business.phone}</a><a className="block underline break-all" href={`mailto:${business.email}`}>{business.email}</a></div></div></section></PageShell>;
}

import { buyerReasons } from "@/data/business";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
export function BuyerReasons() {
 return <section className="py-16 border-b border-border"><div className="container mx-auto px-4 max-w-5xl"><h2 className="text-3xl mb-8">Why buyers trust us</h2><ul className="grid md:grid-cols-2 gap-x-12 gap-y-6">{buyerReasons.map(([title, body]) => <li key={title} className="border-t border-border pt-4"><h3 className="font-semibold mb-2">{title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{body}</p></li>)}</ul></div></section>;
}
export function ExportProcess() {
 const steps = ["Enquiry", "Confirmation", "Quality Inspection", "Packing", "Documentation", "Loading", "Shipping", "Delivery"];
 return <section className="py-16 bg-muted border-y border-border"><div className="container mx-auto px-4 max-w-6xl"><h2 className="text-3xl mb-8">How We Export</h2><ol className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5">{steps.map((s,i) => <li key={s}><span className="text-sm text-muted-foreground tabular-nums">{String(i+1).padStart(2,"0")} →</span><p className="font-medium mt-2 text-sm">{s}</p></li>)}</ol></div></section>;
}
export function Certifications() {
 return <section className="py-16 border-b border-border"><div className="container mx-auto px-4 max-w-5xl"><h2 className="text-3xl mb-5">Certifications &amp; shipment documents</h2><p className="text-muted-foreground leading-relaxed mb-4">No named company certification with an issuer, registration number or validity period is currently listed.</p><p className="border-l-2 border-accent pl-4 text-sm mb-6">[ADD: confirmed certification name, issuer, certificate number, validity dates and verification link]</p><p className="text-sm leading-relaxed">Certificates of Analysis (CoA), Phytosanitary Certificates, Certificates of Origin (CoO) and Fumigation Certificates are issued per shipment where applicable, not held as static company certifications.</p><p className="text-sm text-muted-foreground mt-3">[ADD: which documents Zair supplies for each product and destination, issuing authorities and example copies]</p></div></section>;
}
export function BuyerFAQ() {
 const items = [
 ["Which countries have you supplied?", "The existing export records list UAE, Malaysia, UK, Saudi Arabia, Russia and Qatar. [ADD: shipment references and current destination restrictions]"],
 ["What is the minimum order quantity?", "[ADD: MOQ for each product, variety and packing format]"],
 ["Can I order a mixed container?", "[ADD: mixed-container availability, compatible products and minimum quantities]"],
 ["Do you offer private label packing?", "[ADD: private-label capability, artwork requirements and minimum runs]"],
 ["Are samples available?", "[ADD: sample availability, charges and shipping arrangements]"],
 ["How is quality checked?", "The existing company description covers harvesting, grading, packaging and farm-to-port oversight. [ADD: inspection stages, sampling method, acceptance limits and laboratory details]"],
 ["Which export documents are provided?", "Export documentation is part of the listed service. CoA, Phytosanitary, CoO and Fumigation documents are shipment-specific where applicable. [ADD: confirmed document list by product and destination]"],
 ["Which payment methods do you accept?", "[ADD: accepted payment methods, currency and payment schedule]"],
 ["Which Incoterms do you offer?", "[ADD: offered Incoterms, named ports and included costs]"],
 ["How do I request a quotation?", "Submit the product, quantity, destination, packaging preference, required ship date, requested Incoterm and company contact details. Our export team reviews availability, specifications and logistics before sending a quotation."],
 ];
 return <section className="py-16"><div className="container mx-auto px-4 max-w-5xl"><h2 className="text-3xl mb-7">For Buyers — Frequently asked questions</h2><Accordion type="single" collapsible>{items.map(([q,a],i) => <AccordionItem key={q} value={String(i)}><AccordionTrigger className="text-left">{q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{a}</AccordionContent></AccordionItem>)}</Accordion></div></section>;
}

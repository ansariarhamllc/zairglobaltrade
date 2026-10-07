import { useState } from "react";
import ProductCard from "./ProductCard";
import LeadForm from "./LeadForm";
import { products } from "@/data/products";
import QuoteButton from "./QuoteButton";
export default function ProductsSection() {
 const [selected,setSelected] = useState<string | null>(null);
 return <section id="products" className="py-16"><div className="container mx-auto px-4 max-w-6xl"><div className="mb-10 max-w-3xl"><h2 className="text-3xl mb-4">Agricultural commodities &amp; FMCG products</h2><p className="text-muted-foreground leading-relaxed">Our existing catalogue, with listed varieties and product forms. Specifications marked [ADD: …] are not yet confirmed; availability, packing and shipment terms are reviewed before quotation.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">{products.map(p => <ProductCard key={p.id} {...p} isSelected={selected?.startsWith(p.name) ?? false} onSelect={v => setSelected(v ? `${p.name} — ${v}` : p.name)}/>)}</div><div className="mt-12 border-t border-border pt-8"><h3 className="text-xl mb-4">Custom sourcing enquiry</h3><QuoteButton product="Custom Product Inquiry" label="Discuss a Sourcing Requirement" variant="outline"/></div></div>{selected && <LeadForm selectedProduct={selected} onClose={() => setSelected(null)}/>}</section>;
}

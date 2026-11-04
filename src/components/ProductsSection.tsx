import { useState } from "react";
import ProductCard from "./ProductCard";
import LeadForm from "./LeadForm";
import { products } from "@/data/products";
import QuoteButton from "./QuoteButton";
import bananaLeaves from "@/assets/banana-leaves.jpg";
import leafAccent from "@/assets/banana-leaf-accent.png";

const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

const quoteSteps = [
  ["1", "Pick your product", "Tap a product and choose a variety — or leave it blank and we'll recommend one."],
  ["2", "Tell us quantity & destination", "Rough numbers are fine. Add your port or country and any packing preference."],
  ["3", "Receive your quotation", "Our export team confirms availability, specifications and shipping options, then sends your quote."],
];

export default function ProductsSection() {
  const [selected, setSelected] = useState<string | null>(null);
  const [category, setCategory] = useState("All");
  const visible = category === "All" ? products : products.filter(p => p.category === category);

  return (
    <section id="products" className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl mb-4">Agricultural commodities &amp; FMCG products</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our current export catalogue. Choose a product and variety, then request your quotation in three simple steps — no export experience needed.
          </p>
        </div>

        {/* Quote guide for first-time importers */}
        <div className="relative rounded-xl border border-border bg-muted/40 p-6 mb-10 overflow-hidden">
          <img src={leafAccent} alt="" aria-hidden="true" loading="lazy" width={1024} height={1024} className="pointer-events-none absolute -right-6 -top-10 h-40 w-auto opacity-15 -rotate-12"/>
          <h3 className="text-lg mb-1 relative">How to get a quote — 3 simple steps</h3>
          <p className="text-sm text-muted-foreground mb-5 relative">You don't need exact specifications to start. If anything is unclear, our team guides you through it.</p>
          <ol className="grid sm:grid-cols-3 gap-5 relative">
            {quoteSteps.map(([num, title, body]) => (
              <li key={num} className="flex gap-3">
                <span className="shrink-0 h-8 w-8 rounded-full bg-accent text-accent-foreground text-sm font-medium flex items-center justify-center" aria-hidden="true">{num}</span>
                <div>
                  <p className="font-medium text-sm mb-1">{title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter products by category">
          {categories.map(c => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                category === c ? "border-accent bg-accent text-accent-foreground" : "border-border text-foreground hover:border-accent/50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {visible.map(p => (
            <ProductCard
              key={p.id}
              {...p}
              isSelected={selected?.startsWith(p.name) ?? false}
              onSelect={v => setSelected(v ? `${p.name} — ${v}` : p.name)}
            />
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <h3 className="text-xl mb-2">Looking for something not listed?</h3>
          <p className="text-sm text-muted-foreground mb-4">Tell us the product and destination — we review sourcing availability before confirming anything.</p>
          <QuoteButton product="Custom Product Inquiry" label="Discuss a Sourcing Requirement" variant="outline" />
        </div>
      </div>

      {selected && <LeadForm selectedProduct={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

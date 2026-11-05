import { useState } from "react";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface ProductCardProps {
  name: string;
  category: string;
  image: string;
  varieties?: string[];
  isSelected: boolean;
  onSelect: (variety?: string) => void;
  index?: number;
}

export default function ProductCard({ name, category, image, varieties = [], onSelect, isSelected }: ProductCardProps) {
  const [variety, setVariety] = useState<string | null>(null);
  const [otherOpen, setOtherOpen] = useState(false);
  const [otherText, setOtherText] = useState("");
  const [specsOpen, setSpecsOpen] = useState(false);
  const chosenVariety = otherOpen ? (otherText.trim() ? `Other — ${otherText.trim()}` : undefined) : variety ?? undefined;

  const specs = [
    ["Origin", "India · [ADD: growing region / processing location]"],
    ["Variety", chosenVariety ?? varieties.join("; ")],
    ["Grade", `[ADD: ${name} grade and grading standard]`],
    ["Key quality parameters", `[ADD: ${name} measurable specifications, tolerances and test method]`],
    ["Packaging sizes", "[ADD: confirm 5 / 10 / 25 / 50 kg availability, pack material and any product-specific formats]"],
    ["MOQ", `[ADD: minimum ${name} order in MT by format]`],
    ["Incoterms offered", "[ADD: supported Incoterms and named ports]"],
    ["Shelf life", "[ADD: shelf life and storage / transit conditions]"],
    ["Documents / certificates", "[ADD: confirm CoA, Phytosanitary, CoO and Fumigation applicability for this product and destination]"],
  ];

  const idBase = name.replace(/\s/g, "-");

  return (
    <article className={`bg-card border rounded-xl overflow-hidden flex flex-col ${isSelected ? "border-accent" : "border-border"}`}>
      <img src={image} alt={name} loading="lazy" width={800} height={600} className="w-full aspect-[4/3] object-cover" />

      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 font-medium">{category} · India</p>
        <h3 className="text-xl mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4">Export-ready · varieties below</p>

        {varieties.length > 0 && (
          <fieldset className="mb-5">
            <legend className="text-sm font-medium mb-2">Choose a variety <span className="text-muted-foreground font-normal">(optional)</span></legend>
            <div className="flex flex-wrap gap-2">
              {varieties.map(v => {
                const label = v.split(" — ")[0];
                const detail = v.split(" — ")[1];
                const active = !otherOpen && variety === v;
                return (
                  <button
                    key={v}
                    type="button"
                    aria-pressed={active}
                    onClick={() => { setOtherOpen(false); setVariety(active ? null : v); }}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors ${
                      active ? "border-accent bg-accent/10 text-accent" : "border-border text-foreground hover:border-accent/50"
                    }`}
                  >
                    {active && <Check className="h-3.5 w-3.5" />}
                    <span>{label}</span>
                    {detail && <span className="text-muted-foreground text-xs">· {detail}</span>}
                  </button>
                );
              })}
              <button
                type="button"
                aria-pressed={otherOpen}
                aria-controls={`other-${idBase}`}
                onClick={() => { setVariety(null); setOtherOpen(o => !o); }}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors ${
                  otherOpen ? "border-accent bg-accent/10 text-accent" : "border-border text-foreground hover:border-accent/50"
                }`}
              >
                {otherOpen && <Check className="h-3.5 w-3.5" />}
                <span>Other</span>
              </button>
            </div>
            {otherOpen && (
              <div id={`other-${idBase}`} className="mt-3">
                <label htmlFor={`other-input-${idBase}`} className="sr-only">Your {name} variety or requirement</label>
                <Input
                  id={`other-input-${idBase}`}
                  value={otherText}
                  onChange={e => setOtherText(e.target.value)}
                  maxLength={120}
                  placeholder="Type your variety or requirement"
                />
              </div>
            )}
            <p className="text-xs text-muted-foreground mt-2">Not sure which variety fits your market? Leave it blank — our export team will recommend one.</p>
          </fieldset>
        )}

        <Button
          variant="outline"
          size="sm"
          onClick={() => setSpecsOpen(o => !o)}
          aria-expanded={specsOpen}
          aria-controls={`spec-${idBase}`}
          className="w-full justify-between mb-1"
        >
          Specifications
          <ChevronDown className={`h-4 w-4 transition-transform ${specsOpen ? "rotate-180" : ""}`} />
        </Button>
        <div id={`spec-${idBase}`} hidden={!specsOpen}>
          <dl className="text-sm">
            {specs.map(([label, value]) => (
              <div key={label} className="border-t border-border py-3">
                <dt className="font-medium mb-1">{label}</dt>
                <dd className="text-muted-foreground leading-relaxed">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Button className="w-full mt-5 whitespace-normal h-auto min-h-11 py-3" onClick={() => onSelect(chosenVariety)}>
          Get Quote for {name}
          <ArrowRight />
        </Button>
      </div>
    </article>
  );
}

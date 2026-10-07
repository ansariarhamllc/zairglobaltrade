import { ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
interface ProductCardProps { name: string; category: string; image: string; varieties?: string[]; isSelected: boolean; onSelect: (variety?: string) => void; index?: number }
export default function ProductCard({ name, category, image, varieties = [], onSelect, isSelected }: ProductCardProps) {
 const [open,setOpen] = useState(false);
 const specs = [
 ["Origin", "India · [ADD: growing region / processing location]"],
 ["Variety", varieties.join("; ")],
 ["Grade", `[ADD: ${name} grade and grading standard]`],
 ["Key quality parameters", `[ADD: ${name} measurable specifications, tolerances and test method]`],
 ["Packaging sizes", "[ADD: confirm 5 / 10 / 25 / 50 kg availability, pack material and any product-specific formats]"],
 ["MOQ", `[ADD: minimum ${name} order in MT by format]`],
 ["Incoterms offered", "[ADD: supported Incoterms and named ports]"],
 ["Shelf life", "[ADD: shelf life and storage / transit conditions]"],
 ["Applicable documents / certificates", "[ADD: confirm CoA, Phytosanitary, CoO and Fumigation applicability for this product and destination]"],
 ];
 return <article className={`bg-card border rounded-lg overflow-hidden flex flex-col ${isSelected ? "border-accent" : "border-border"}`}><img src={image} alt={name} loading="lazy" className="w-full aspect-[4/3] object-cover"/><div className="p-5 flex flex-col flex-1"><p className="text-sm text-muted-foreground mb-2">{category}</p><h3 className="text-xl mb-3">{name}</h3><p className="text-sm text-muted-foreground mb-4">Origin: India · [ADD: region]</p><Button variant="outline" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-controls={`spec-${name.replace(/\s/g,"-")}`} className="w-full justify-between">Varieties &amp; specifications<ChevronDown className={open ? "rotate-180" : ""}/></Button><div id={`spec-${name.replace(/\s/g,"-")}`} hidden={!open}><ul className="space-y-2 mt-4">{varieties.map(v => <li key={v}><Button variant="ghost" onClick={() => onSelect(v)} className="w-full h-auto justify-between whitespace-normal text-left py-2 px-0"><span>{v}</span><ArrowRight/></Button></li>)}</ul><dl className="text-sm mt-5">{specs.map(([label,value]) => <div key={label} className="border-t border-border py-3"><dt className="font-semibold mb-1">{label}</dt><dd className="text-muted-foreground leading-relaxed">{value}</dd></div>)}</dl></div><Button className="w-full mt-5 whitespace-normal h-auto min-h-11 py-3" onClick={() => onSelect()}>Request {name} Quotation<ArrowRight/></Button></div></article>;
}

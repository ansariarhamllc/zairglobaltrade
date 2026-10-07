import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import LeadForm from "./LeadForm";
export default function QuoteButton({ product = "", label = "Request a Quote", variant = "default" }: { product?: string; label?: string; variant?: "default" | "outline" | "heroOutline" }) {
 const [open, setOpen] = useState(false);
 return <><Button variant={variant} onClick={() => setOpen(true)} className="whitespace-normal h-auto min-h-11 py-3">{label}<ArrowRight /></Button>{open && <LeadForm selectedProduct={product} onClose={() => setOpen(false)} />}</>;
}

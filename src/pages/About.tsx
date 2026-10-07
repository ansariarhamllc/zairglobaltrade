import PageShell from "@/components/PageShell";
import { BuyerReasons, BuyerFAQ, Certifications, ExportProcess } from "@/components/BuyerSections";
import QuoteButton from "@/components/QuoteButton";
import { business } from "@/data/business";
import farm from "@/assets/hero-banner.jpg";
export default function About() {
 return <PageShell title="About Zair Global Trade" intro="An India-based agricultural commodity and FMCG exporter led by Shahbaz Ansari in Malegaon, Maharashtra."><section className="py-16"><div className="container mx-auto px-4 max-w-5xl"><img src={farm} alt="Agricultural field" loading="lazy" className="w-full aspect-[3/1] object-cover rounded-lg mb-10"/><h2 className="text-3xl mb-5">From sourcing to dispatch</h2><div className="max-w-3xl space-y-5 text-muted-foreground leading-relaxed"><p>Our base is {business.address}. Zair Global Trade sources agricultural commodities and FMCG products from Indian farmers, cooperatives and processing facilities.</p><p>Our existing company description includes growers in Maharashtra and farm-to-port involvement in harvesting, grading, packaging, documentation and cold-chain logistics.</p><p>Founder Shahbaz Ansari stays involved in sourcing and port-side dispatch. Buyers can discuss their product, packing and destination requirements directly with the company.</p><p>[ADD: supplier locations by product, inspection responsibilities, cold-chain conditions and documentation team details]</p><QuoteButton/></div></div></section><BuyerReasons/><ExportProcess/><Certifications/><BuyerFAQ/></PageShell>;
}

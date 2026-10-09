import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { BuyerReasons, ExportProcess, Certifications } from "@/components/BuyerSections";
import { products } from "@/data/products";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export default function Index() {
 useEffect(() => {
  const title = "Indian Agricultural & FMCG Exporter | Zair Global Trade";
  const description = "Explore Indian agricultural products and FMCG exports from Zair Global Trade in Malegaon. Browse green banana, onion, basmati rice and more, and request an export quotation.";
  document.title = title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
  document.querySelector('meta[property="og:url"]')?.setAttribute("content", "https://zairglobaltrade.lovable.app/");
  document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", title);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", description);
  document.querySelector('link[rel="canonical"]')?.setAttribute("href", "https://zairglobaltrade.lovable.app/");
 }, []);
 const trust = ["India-based Exporter", "Quality Checked at Source", "Export Documentation Handled In-House", "Global Logistics Coordination", "Direct Buyer Support"];
 return <PageTransition><Header/><main><Hero/><section className="border-b border-border bg-background"><div className="container mx-auto px-4 py-7 max-w-6xl"><ul className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">{trust.map((claim,i) => <li key={claim} className="text-sm font-medium border-l-2 border-accent pl-3">{claim}{i === 1 && <p className="text-xs text-muted-foreground mt-2">[ADD: source inspection checklist and evidence]</p>}{i === 2 && <p className="text-xs text-muted-foreground mt-2">[ADD: confirm in-house team and document scope]</p>}</li>)}</ul></div></section><BuyerReasons/><section className="py-16"><div className="container mx-auto px-4 max-w-6xl"><div className="flex flex-wrap justify-between items-center gap-5 mb-8"><h2 className="text-3xl">From the current catalogue</h2><Button variant="outline" asChild><Link to="/commodities">View Products<ArrowRight/></Link></Button></div><div className="grid sm:grid-cols-3 gap-6">{products.slice(0,3).map(p => <Link key={p.id} to="/commodities" className="group"><img src={p.image} alt={p.name} loading="lazy" className="w-full aspect-[4/3] object-cover rounded-lg"/><p className="text-sm text-muted-foreground mt-4">{p.category} · India</p><h3 className="text-xl mt-1">{p.name}</h3></Link>)}</div></div></section><ExportProcess/><Certifications/><section className="py-16"><div className="container mx-auto px-4 max-w-5xl"><h2 className="text-3xl mb-8">Get to know Zair Global Trade</h2><div className="grid sm:grid-cols-2 gap-6">{[["/about","About","Our Malegaon base, sourcing approach and buyer FAQs."],["/experience","Our Export Experience","Product and destination records with missing evidence marked."],["/founder","Founder — Shahbaz Ansari","Direct founder contact and the approach already described on our site."],["/contact","Contact","Quotations, product enquiries, sourcing and partnerships."]].map(([to,title,desc]) => <Link key={to} to={to} className="border-t border-border pt-4"><h3 className="text-lg mb-2 flex items-center gap-2">{title}<ArrowRight className="h-4 w-4"/></h3><p className="text-sm text-muted-foreground">{desc}</p></Link>)}</div></div></section></main><Footer/></PageTransition>;
}

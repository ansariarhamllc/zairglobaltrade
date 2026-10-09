import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import PageTransition from "./PageTransition";
export default function PageShell({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
 const location = useLocation();
 useEffect(() => {
  const routeMetadata: Record<string, { title: string; description: string }> = {
   "/commodities": {
    title: "Indian Agricultural Products & FMCG Exports | Zair Global Trade",
    description: "Browse Zair Global Trade's Indian export catalogue: green banana, onion, green chilli, basmati rice, grapes, honey, coffee and other listed agricultural and FMCG products.",
   },
   "/about": {
    title: "About Zair Global Trade | Indian Exporter",
    description: "Meet Zair Global Trade, an India-based agricultural commodity and FMCG exporter led by Shahbaz Ansari in Malegaon, Maharashtra.",
   },
   "/experience": {
    title: "Export Experience & Listed Markets | Zair Global Trade",
    description: "Review Zair Global Trade's listed product and destination records, including shipments recorded for the UAE, Malaysia, UK, Saudi Arabia, Russia and Qatar.",
   },
   "/founder": {
    title: "Shahbaz Ansari | Founder, Zair Global Trade",
    description: "Contact Shahbaz Ansari, founder of Zair Global Trade, an Indian agricultural commodity and FMCG export business based in Malegaon.",
   },
   "/contact": {
    title: "Contact Zair Global Trade | Export Quotations & Enquiries",
    description: "Contact Zair Global Trade for export quotations, product enquiries, sourcing and partnerships using the company's listed phone, WhatsApp and email.",
   },
  };
  const metadata = routeMetadata[location.pathname];
  const fullTitle = metadata?.title ?? `${title} — Zair Global Trade`;
  const description = metadata?.description ?? intro;
  const canonicalUrl = new URL(location.pathname, "https://zairglobaltrade.lovable.app").toString();
  document.title = fullTitle;
  document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", fullTitle);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
  document.querySelector('meta[property="og:url"]')?.setAttribute("content", canonicalUrl);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", fullTitle);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", description);
  document.querySelector('link[rel="canonical"]')?.setAttribute("href", canonicalUrl);
 }, [title, intro, location.pathname]);
 return <PageTransition><Header /><main className="pt-24"><section className="py-14 border-b border-border"><div className="container mx-auto px-4 max-w-5xl"><p className="text-sm text-muted-foreground mb-4">Zair Global Trade · Malegaon, India</p><h1 className="text-4xl md:text-5xl leading-tight mb-5">{title}</h1><p className="max-w-3xl text-muted-foreground leading-relaxed">{intro}</p></div></section>{children}</main><Footer /></PageTransition>;
}

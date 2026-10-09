import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import PageTransition from "./PageTransition";
export default function PageShell({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
 const location = useLocation();
 useEffect(() => {
  const fullTitle = `${title} — Zair Global Trade`;
  const canonicalUrl = new URL(location.pathname, "https://zairglobaltrade.lovable.app").toString();
  document.title = fullTitle;
  document.querySelector('meta[name="description"]')?.setAttribute("content", intro);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", fullTitle);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", intro);
  document.querySelector('meta[property="og:url"]')?.setAttribute("content", canonicalUrl);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", fullTitle);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", intro);
  document.querySelector('link[rel="canonical"]')?.setAttribute("href", canonicalUrl);
 }, [title, intro, location.pathname]);
 return <PageTransition><Header /><main className="pt-24"><section className="py-14 border-b border-border"><div className="container mx-auto px-4 max-w-5xl"><p className="text-sm text-muted-foreground mb-4">Zair Global Trade · Malegaon, India</p><h1 className="text-4xl md:text-5xl leading-tight mb-5">{title}</h1><p className="max-w-3xl text-muted-foreground leading-relaxed">{intro}</p></div></section>{children}</main><Footer /></PageTransition>;
}

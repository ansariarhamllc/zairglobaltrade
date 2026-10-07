import { useEffect, type ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PageTransition from "./PageTransition";
export default function PageShell({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
 useEffect(() => { document.title = `${title} — Zair Global Trade`; const meta = document.querySelector('meta[name="description"]'); meta?.setAttribute("content", intro); }, [title, intro]);
 return <PageTransition><Header /><main className="pt-24"><section className="py-14 border-b border-border"><div className="container mx-auto px-4 max-w-5xl"><p className="text-sm text-muted-foreground mb-4">Zair Global Trade · Malegaon, India</p><h1 className="text-4xl md:text-5xl leading-tight mb-5">{title}</h1><p className="max-w-3xl text-muted-foreground leading-relaxed">{intro}</p></div></section>{children}</main><Footer /></PageTransition>;
}

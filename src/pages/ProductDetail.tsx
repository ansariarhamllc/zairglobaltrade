import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, FileDown, MessageCircle } from "lucide-react";
import PageShell from "@/components/PageShell";
import NotFound from "@/pages/NotFound";
import QuoteButton from "@/components/QuoteButton";
import { Button } from "@/components/ui/button";
import { productBySlug, shipmentDocuments, packagingOptions, productDetails, productDims } from "@/data/productDetails";
import { business } from "@/data/business";
import { SITE_URL } from "@/lib/seo";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = slug ? productBySlug(slug) : undefined;

  useEffect(() => {
    if (!product) return;
    const jsonLd = [
      {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.intro,
        image: `${SITE_URL}${product.image.startsWith("http") ? "" : ""}`,
        category: product.category,
        brand: { "@type": "Brand", name: "Zair Global Trade" },
        manufacturer: { "@type": "Organization", name: "Zair Global Trade" },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Commodities & Products", item: `${SITE_URL}/commodities` },
          { "@type": "ListItem", position: 3, name: product.name, item: `${SITE_URL}/commodities/${product.slug}` },
        ],
      },
    ];
    let script = document.getElementById("product-jsonld") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "product-jsonld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
    return () => { script?.remove(); };
  }, [product]);

  if (!product) return <NotFound />;

  const related = productDetails.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, 3);
  const dims = productDims(product.name);
  const whatsappHref = `${business.whatsapp}?text=${encodeURIComponent(`Hello Zair Global Trade, I'd like to ask about ${product.name} (${product.category}) — variety, availability and export terms.`)}`;

  return (
    <PageShell
      title={`${product.name} — Export Product`}
      intro={product.intro}
    >
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-accent">Home</Link> › <Link to="/commodities" className="hover:text-accent">Commodities &amp; Products</Link> › <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-10 items-start mb-14">
            <img
              src={product.image}
              alt={`${product.name} — ${product.category} from India`}
              width={dims.width}
              height={dims.height}
              loading="lazy"
              decoding="async"
              className="w-full aspect-[4/3] object-cover rounded-lg"
            />
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">{product.category} · India</p>
              <h2 className="text-3xl mb-4">{product.name}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">Listed varieties and product forms:</p>
              <ul className="space-y-2 mb-8">
                {product.varieties.map((v) => <li key={v} className="border-t border-border pt-2 text-sm">{v}</li>)}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <QuoteButton product={product.name} label={`Request Quotation for ${product.name}`} />
                <Button variant="outline" asChild>
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle />Ask about this product on WhatsApp</a>
                </Button>
              </div>
            </div>
          </div>

          <h2 className="text-2xl mb-6">Specification</h2>
          <dl className="text-sm mb-14">
            {product.specRows.map(([label, value]) => (
              <div key={label} className="border-t border-border py-3 sm:grid sm:grid-cols-3 sm:gap-6">
                <dt className="font-semibold mb-1 sm:mb-0">{label}</dt>
                <dd className="text-muted-foreground leading-relaxed sm:col-span-2">{value}</dd>
              </div>
            ))}
          </dl>

          <h2 className="text-2xl mb-4">Packaging options</h2>
          <div className="flex flex-wrap gap-3 mb-3">
            {packagingOptions.map((option) => (
              <span key={option} className="border border-border rounded-full px-4 py-1.5 text-sm">{option}</span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mb-14">Private label available on request. Sizes shown are preferences subject to confirmation.</p>

          <h2 className="text-2xl mb-4">Documents provided per shipment</h2>
          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3 mb-4 text-sm">
            {shipmentDocuments.map((doc) => <li key={doc} className="border-t border-border pt-2">{doc}</li>)}
          </ul>
          <p className="text-sm text-muted-foreground mb-14">Documents are prepared per shipment where applicable — not held as static certifications. [ADD: confirmed document list for {product.name} by destination]</p>

          <h2 className="text-2xl mb-6">Related products</h2>
          {related.length > 0 ? (
            <div className="grid sm:grid-cols-3 gap-6 mb-14">
              {related.map((p) => (
                <Link key={p.slug} to={`/commodities/${p.slug}`} className="group">
                  <img src={p.image} alt={p.name} width={p.width} height={p.height} loading="lazy" className="w-full aspect-[4/3] object-cover rounded-lg" />
                  <p className="text-sm text-muted-foreground mt-3">{p.category} · India</p>
                  <h3 className="text-lg mt-1 group-hover:text-accent">{p.name}</h3>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground mb-14">Related products will appear here as the catalogue grows.</p>
          )}

          {/* Hidden until a spec-sheet PDF file is attached in the data module. */}
          {false && (
            <Button variant="outline" asChild>
              <a href="#" download><FileDown />Download spec sheet (PDF)</a>
            </Button>
          )}
          <Button variant="link" asChild className="px-0">
            <Link to="/commodities">Back to full catalogue <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}

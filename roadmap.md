# Buyer transparency update
- [ ] Replace vague claims across Home, About, Experience, Founder and shared content.
- [ ] Add existing-product specifications, quotation CTAs, certification details, export process and buyer FAQs.
- [ ] Add validated, stored RFQ submissions and segmented contact page.
- [ ] Verify pages and quotation delivery; report publishing and email limitations.

# SEO optimization
- [x] Research export-related search phrases with Semrush for US and India where data was available.
- [x] Improve accurate homepage and route metadata, canonical URL, favicon reference, and crawler sitemap discovery.
- [ ] Verify the updated SEO findings and preview behavior.

# Prerequisite build before Phase 4 (approved 2026-11-03)
- [ ] Email sender domain setup for zairglobaltrade.com; email infrastructure after DNS verification (no sends this pass).
- [ ] GA4 loader (env-var measurement ID, empty-safe) with rfq_submit and whatsapp_click events; document_request/brochure_download helpers.
- [ ] Product detail pages /commodities/[slug] for all 13 listed products, spec sheets with "On request" placeholders, RFQ + WhatsApp CTAs, Product JSON-LD.
- [ ] Category filter tabs on /commodities.
- [ ] Technical SEO: sitemap + robots, canonicals to https://zairglobaltrade.com, Organization/Product/FAQPage/BreadcrumbList JSON-LD, WebP + width/height images, redirects, broken-link audit.
- [ ] QA pass: missing title/meta/H1/alt audit, mobile layout of /commodities, product pages, RFQ form; confirm nothing removed.
- Deferred (needs lead system first): Phase 4 follow-up automation, daily summary email, /admin/leads WhatsApp buttons, /admin/insights, buyer_portal schema.

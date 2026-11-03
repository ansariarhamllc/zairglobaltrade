# Zair Global Trade — prerequisite build before Phase 4

Per your choices: stop before Phase 4's lead automation (it needs the lead system from the earlier phases, which isn't built yet), set up the email sender domain now, wire GA4 so it's ready for an ID, and build the product detail pages so the sitemap can include them.

## 1. Email sender domain (starts now, sends later)
- Open the email-domain setup card for zairglobaltrade.com so you can complete the DNS step.
- Once the domain verifies, set up the email infrastructure (queues, unsubscribe handling) so every later phase can send immediately.
- No emails are sent by this pass: follow-up emails, the daily summary and buyer acknowledgements belong to the deferred lead-automation work and will switch on after the lead system is built.

## 2. GA4 conversion tracking (empty-safe)
- Add a Google Analytics loader that reads the Measurement ID from an environment variable; when the ID is empty, nothing breaks and no requests are sent.
- Fire `rfq_submit` when an enquiry is saved, and `whatsapp_click` on WhatsApp CTA clicks. `document_request` and `brochure_download` get helper functions now and fire once those features exist.
- A connect card for Google Analytics (browser tracking) lets you supply the real G-XXXXXXX ID; the pasted email address can't be used as an ID, so tracking stays inert until one is connected or pasted.

## 3. Product detail pages (/commodities/[slug])
One spec-sheet page per listed product (Green Banana, Onion, Onion Barista, Green Chilli, Tomato, Drumstick, Custard Apple, Basmati Rice, Yellow Corn, Honey, Arabica Coffee, Farm Fresh Grapes, Rose Water), using slugs like /commodities/green-banana:
- Specification table (origin, variety, grade, size, moisture, shelf life, season, HS code, packaging options, MOQ, container loading, Incoterms) — every unconfirmed value shows "On request"; nothing invented.
- Quality and documents block: CoA, Phytosanitary, CoO, Fumigation, Packing List, Commercial Invoice, Pre-shipment Inspection, labelled "Documents provided per shipment".
- Packaging option chips, "Private label available on request" note, related products, "Download spec sheet (PDF)" hidden until a file exists.
- "Request Quotation for [Product]" (RFQ pre-filled) and "Ask about this product on WhatsApp" with a pre-filled message.
- All values live in one data module so you can fill them in one place.
- Category filter tabs on /commodities (Fresh Produce, Rice & Grains, FMCG, Beverages — only categories that contain products). All existing catalogue content stays.

## 4. Technical SEO
- sitemap.xml covering /, /commodities, every product page, /about, /experience, /founder, /contact; robots.txt with a Sitemap directive.
- Canonical URLs and og:url point to https://zairglobaltrade.com, as you specified (not lovable.app).
- JSON-LD: existing Organization updated, plus Product (each detail page), FAQPage (buyer FAQ), BreadcrumbList (product pages).
- Descriptive width/height on catalogue images and WebP conversion of local product images where it saves weight.
- Redirects for any renamed paths; audit and fix broken internal links.
- Final QA pass, reported to you: pages missing title/meta description/H1/alt text, mobile layout of /commodities, product pages and the RFQ form, and confirmation that no existing content was removed.

## Deferred until the lead system exists (your call)
Phase 4 items A (follow-up email sequences, daily summary, admin WhatsApp buttons), B (insights charts), E (buyer portal schema) and the /admin/leads page — held until the earlier phases build the lead system they depend on.

## Technical notes
- New table-free pass: no database changes; the enquiry form keeps storing to its existing table.
- The GA4 Measurement ID will be read from a project environment variable, never hardcoded.
- Emails need the verified domain from step 1; nothing else in this pass depends on it.

// Google Analytics 4 (GA4) conversion tracking.
// The Measurement ID comes from an environment variable; when it is empty the
// loader does nothing, so the site never breaks or sends requests without it.
const env = import.meta.env as Record<string, string | undefined>;
const GA_ID = env.VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY || env.VITE_GA4_MEASUREMENT_ID || "";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function initAnalytics() {
  if (!GA_ID || typeof window === "undefined" || window.gtag) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  // Track every WhatsApp click-to-chat link site-wide (wa.me buttons).
  document.addEventListener(
    "click",
    (event) => {
      const link = (event.target as HTMLElement | null)?.closest?.('a[href*="wa.me"]');
      if (link) trackEvent("whatsapp_click", { page_path: window.location.pathname });
    },
    true
  );
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (!GA_ID || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

// Fired when a quotation request is saved successfully.
export const trackRfqSubmit = (product: string) => trackEvent("rfq_submit", { product });

// Ready for the upcoming documents/brochure features; they call these when built.
export const trackDocumentRequest = (documentName: string) => trackEvent("document_request", { document: documentName });
export const trackBrochureDownload = (asset: string) => trackEvent("brochure_download", { asset });

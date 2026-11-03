// Single editable source for product spec-sheet data.
// Every value not confirmed by Zair Global Trade stays "On request" — nothing invented.
import greenBananaImg from "@/assets/green-banana.webp";
import onionImg from "@/assets/onion.webp";
import greenChilliImg from "@/assets/green-chilli.webp";
import custardAppleImg from "@/assets/custard-apple.webp";
import grapesImg from "@/assets/grapes.webp";
import drumstickImg from "@/assets/drumstick.webp";
import roseWaterImg from "@/assets/rose-water.webp";
import tomatoImg from "@/assets/tomato.webp";
import basmatiRiceImg from "@/assets/basmati-rice.webp";
import yellowCornImg from "@/assets/yellow-corn.webp";
import honeyImg from "@/assets/honey.webp";
import arabicaCoffeeImg from "@/assets/arabica-coffee.webp";
import onionBaristaImg from "@/assets/onion-barista.webp";

export const ON_REQUEST = "On request";

// Documents provided per shipment where applicable — not certifications held.
export const shipmentDocuments = [
  "Certificate of Analysis (CoA)",
  "Phytosanitary Certificate",
  "Certificate of Origin (CoO)",
  "Fumigation Certificate",
  "Packing List",
  "Commercial Invoice",
  "Pre-shipment Inspection (where applicable)",
];

// Packaging sizes shown as unconfirmed buyer preferences, per catalogue rules.
export const packagingOptions = ["5 kg", "10 kg", "25 kg", "50 kg", "Custom — on request"];

export interface ProductDetail {
  name: string;
  slug: string;
  category: string;
  image: string;
  width: number;
  height: number;
  varieties: string[];
  intro: string;
  specRows: [string, string][];
}

export const slugify = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const imageDims: Record<string, [string, number, number]> = {
  "Green Banana": [greenBananaImg, 1168, 1840],
  "Onion": [onionImg, 1276, 1920],
  "Onion Barista": [onionBaristaImg, 928, 720],
  "Green Chilli": [greenChilliImg, 1824, 1368],
  "Tomato": [tomatoImg, 928, 720],
  "Drumstick": [drumstickImg, 1920, 1299],
  "Custard Apple": [custardAppleImg, 1390, 1920],
  "Basmati Rice": [basmatiRiceImg, 928, 720],
  "Yellow Corn": [yellowCornImg, 928, 720],
  "Honey": [honeyImg, 928, 720],
  "Arabica Coffee": [arabicaCoffeeImg, 928, 720],
  "Farm Fresh Grapes": [grapesImg, 1440, 1920],
  "Rose Water": [roseWaterImg, 1536, 1024],
};

export const productImage = (name: string) => imageDims[name]?.[0] ?? "";
export const productDims = (name: string) => ({ width: imageDims[name]?.[1] ?? 800, height: imageDims[name]?.[2] ?? 600 });

const varietiesFor: Record<string, string[]> = {
  "Green Banana": ["Cavendish — Fresh green", "Robusta — Fresh green", "Grand Naine — Fresh green", "Nendran — Semi-ripe"],
  "Onion": ["Red Onion — Fresh bulb", "White Onion — Fresh bulb", "Pink Onion — Fresh bulb", "Dehydrated Onion — Dried flakes"],
  "Onion Barista": ["Barista Fried Onion — Crispy fried", "Golden Fried Onion — Crispy fried", "Onion Flakes — Dehydrated", "Onion Powder — Dried powder"],
  "Green Chilli": ["G4 Chilli — Fresh green", "Jwala Chilli — Fresh green", "Byadgi Chilli — Dried red", "Teja Chilli — Dried red"],
  "Tomato": ["Roma Tomato — Fresh firm", "Round Tomato — Fresh firm", "Cherry Tomato — Fresh firm"],
  "Drumstick": ["PKM-1 Moringa — Fresh pods", "PKM-2 Moringa — Fresh pods", "Moringa Leaves — Fresh leaves"],
  "Custard Apple": ["Balanagar — Fresh fruit", "Arka Sahan — Fresh fruit", "Red Sitaphal — Fresh fruit"],
  "Basmati Rice": ["1121 Steam — Parboiled rice", "1121 Sella — Parboiled rice", "Pusa Basmati — Raw rice", "Golden Sella — Parboiled rice"],
  "Yellow Corn": ["Feed Corn — Dried kernels", "Food-Grade Corn — Dried kernels", "Sweet Corn — Fresh cobs"],
  "Honey": ["Multiflora Honey — Raw liquid", "Acacia Honey — Raw liquid", "Organic Honey — Raw liquid", "Bulk Honey — Liquid drum"],
  "Arabica Coffee": ["Green Arabica Beans — Unroasted", "Roasted Arabica Beans — Whole roasted", "Ground Arabica Coffee — Ground"],
  "Farm Fresh Grapes": ["Thompson Seedless — Fresh table grapes", "Flame Seedless — Fresh table grapes", "Black Seedless — Fresh table grapes"],
  "Rose Water": ["Pure Rose Water — Liquid", "Edible Rose Water — Food grade liquid", "Rose Water — Bulk liquid"],
};

const catalogNames = Object.keys(imageDims);

export const productDetails: ProductDetail[] = catalogNames.map((name) => {
  const [image, width, height] = imageDims[name];
  return {
    name,
    slug: slugify(name),
    category: name === "Basmati Rice" || name === "Yellow Corn" ? "Grains" : name === "Honey" || name === "Rose Water" ? "FMCG" : name === "Arabica Coffee" ? "Beverages" : name === "Green Banana" || name === "Custard Apple" || name === "Farm Fresh Grapes" ? "Fruits" : "Vegetables",
    image,
    width,
    height,
    varieties: varietiesFor[name] ?? [],
    intro: `${name} from India, offered for export by Zair Global Trade, Malegaon, Maharashtra. Listed varieties and product forms are shown; unconfirmed specifications are marked On request.`,
    specRows: [
      ["Origin", "India — Malegaon, Maharashtra (sourcing region: On request)"],
      ["Variety", (varietiesFor[name] ?? []).join("; ")],
      ["Grade", ON_REQUEST],
      ["Size / count", ON_REQUEST],
      ["Moisture", ON_REQUEST],
      ["Broken / defect", ON_REQUEST],
      ["Shelf life", ON_REQUEST],
      ["Season", ON_REQUEST],
      ["HS Code", ON_REQUEST],
      ["Packaging options", "5 / 10 / 25 / 50 kg and custom packing — preferences, subject to confirmation"],
      ["MOQ", ON_REQUEST],
      ["Container loading quantity", ON_REQUEST],
      ["Available Incoterms", ON_REQUEST],
    ],
  };
});

export const productBySlug = (slug: string) => productDetails.find((p) => p.slug === slug);

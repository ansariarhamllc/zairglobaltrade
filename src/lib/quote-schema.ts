import { z } from "zod";
const text = (max: number) => z.string().trim().min(1, "This field is required.").max(max);
export const quoteSchema = z.object({
  product: text(200), quantity_mt: z.coerce.number().positive("Enter a quantity greater than zero.").max(1000000),
  destination: text(200), packaging: text(200),
  required_ship_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Choose a ship date.").refine(v => !Number.isNaN(Date.parse(v)) && v >= new Date().toISOString().slice(0,10), "Choose today or a future date."),
  incoterm: text(100), company: text(150), contact_name: text(100),
  email: z.string().trim().email("Enter a valid email address.").max(255),
  whatsapp: z.string().trim().min(7).max(30).regex(/^\+?[\d\s()-]+$/, "Enter a valid WhatsApp number."),
});

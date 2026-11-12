import { MessageCircle } from "lucide-react";
import { business } from "@/data/business";
import { Button } from "./ui/button";

export default function WhatsAppContact() {
  return (
    <div className="fixed bottom-5 right-5 z-40">
      <Button asChild className="shadow-lg" aria-label="Chat with Zair Global Trade on WhatsApp at +91 9560288244">
        <a href={business.whatsapp} target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp">
          <MessageCircle aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
      </Button>
    </div>
  );
}
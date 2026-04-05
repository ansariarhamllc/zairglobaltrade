import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                <Globe className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-black">ZAIR GLOBAL TRADE</h3>
                <p className="text-[10px] text-primary-foreground/60 uppercase tracking-widest">Export & Import Excellence</p>
              </div>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-md leading-relaxed">
              Connecting premium Indian agricultural commodities and FMCG products to markets worldwide. 
              Your reliable partner for international trade with 2+ years of trust.
            </p>
            
            <div className="flex gap-3">
              <a
                href="https://wa.me/919560288244"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-primary-foreground/10 hover:bg-accent/20 flex items-center justify-center transition-all hover-lift"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/zairglobaltrade"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-primary-foreground/10 hover:bg-accent/20 flex items-center justify-center transition-all hover-lift"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-5 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">Home</Link></li>
              <li><Link to="/commodities" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">Commodities</Link></li>
              <li><Link to="/about" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">About Us</Link></li>
              <li><Link to="/experience" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">Experience</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-5 text-accent">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-1 text-accent" />
                <span className="text-primary-foreground/60 text-sm">
                  Sr.42 Appartment.9, Nayaislampura, Malegaon 423203, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href="tel:+919560288244" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                  +91 9560288244
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href="mailto:zairglobaltrade@gmail.com" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                  zairglobaltrade@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/40">
          <p>© {new Date().getFullYear()} Zair Global Trade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import QuoteButton from "./QuoteButton";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/commodities", label: "Commodities & Products" },
    { to: "/about", label: "About" },
    { to: "/experience", label: "Our Export Experience" },
    { to: "/founder", label: "Founder" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 border-b border-border/50 shadow-sm" style={{ willChange: 'auto' }}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:shadow-lg transition-shadow">
            <Globe className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <p className="text-sm lg:text-lg font-bold text-foreground">ZAIR GLOBAL TRADE</p>
            <p className="text-[11px] text-muted-foreground uppercase tracking-[0.2em] font-medium">Indian Agri & FMCG Exports</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative font-medium transition-colors text-sm tracking-wide ${
                location.pathname === link.to
                  ? "text-accent"
                  : "text-foreground hover:text-accent"
              }`}
            >
              {link.label}
              {location.pathname === link.to && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full" />
              )}
            </Link>
          ))}
          <QuoteButton />
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" aria-label="Toggle navigation" aria-expanded={isMenuOpen} className="xl:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="xl:hidden bg-background border-t border-border px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              className={`font-medium transition-colors text-left py-2 px-3 rounded-lg ${
                location.pathname === link.to
                  ? "text-accent bg-accent/10"
                  : "text-foreground hover:text-accent hover:bg-accent/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <QuoteButton />
        </nav>
      )}
    </header>
  );
};

export default Header;

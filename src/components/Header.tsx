import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/commodities", label: "Commodities" },
    { to: "/about", label: "About" },
    { to: "/experience", label: "Experience" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:shadow-lg transition-shadow">
            <Globe className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-black text-foreground tracking-tight">ZAIR GLOBAL TRADE</h1>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Export & Import Excellence</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
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
          <Button asChild variant="default" className="rounded-xl px-6 shadow-lg">
            <Link to="/commodities">Get Quote</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-4 py-6 flex flex-col gap-4">
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
          <Button asChild variant="default" className="w-full rounded-xl mt-2">
            <Link to="/commodities" onClick={() => setIsMenuOpen(false)}>Get Quote</Link>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;

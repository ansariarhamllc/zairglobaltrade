import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-xl font-bold text-foreground tracking-tight">ZAIR GLOBAL TRADE</h1>
            <p className="text-xs text-muted-foreground">Export & Import Excellence</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors font-medium">
            Home
          </button>
          <button onClick={() => scrollToSection("products")} className="text-foreground hover:text-primary transition-colors font-medium">
            Products
          </button>
          <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors font-medium">
            About
          </button>
          <Button onClick={() => scrollToSection("products")} variant="default">
            Get Quote
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-background border-t border-border px-4 py-4 flex flex-col gap-4">
          <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors font-medium text-left">
            Home
          </button>
          <button onClick={() => scrollToSection("products")} className="text-foreground hover:text-primary transition-colors font-medium text-left">
            Products
          </button>
          <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors font-medium text-left">
            About
          </button>
          <Button onClick={() => scrollToSection("products")} variant="default" className="w-full">
            Get Quote
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;

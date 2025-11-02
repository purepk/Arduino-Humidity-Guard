import { Button } from "@/components/ui/button";
import { ThermometerSun, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Components", href: "#components" },
    { name: "Demo", href: "#demo" },
    { name: "Source Code", href: "#sourcecode" },
    { name: "Member", href: "#member" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <ThermometerSun className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="font-bold text-foreground">Smart Humidity Guard</h1> 
              <p className="text-xs text-muted-foreground">Arduino Project</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="atmospheric" size="sm" onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}>
              Watch Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-smooth font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="atmospheric" size="sm" className="w-fit" onClick={() => {
                document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}>
                Watch Demo
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
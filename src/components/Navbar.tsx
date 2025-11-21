import { Link } from "react-router-dom";
import { ShoppingCart, PawPrint, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const { getTotalItems } = useCart();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/catalog", label: "Pets" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <PawPrint className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-bold bg-[var(--gradient-hero)] bg-clip-text text-transparent">
              PawStore
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-foreground hover:text-primary transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center animate-scale-in">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
            </Link>
            <Link to="/auth" className="hidden md:block">
              <Button>Sign In</Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link to="/auth">
                    <Button className="w-full">Sign In</Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

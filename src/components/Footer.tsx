import { Link } from "react-router-dom";
import { PawPrint, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <PawPrint className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">PawStore</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your trusted companion for finding the perfect pet. We provide healthy,
              happy pets to loving families.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="hover:text-primary transition-colors">
                  Pets Catalog
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-primary transition-colors">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/catalog?category=dogs" className="hover:text-primary transition-colors">
                  Dogs
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=cats" className="hover:text-primary transition-colors">
                  Cats
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=birds" className="hover:text-primary transition-colors">
                  Birds
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=fish" className="hover:text-primary transition-colors">
                  Fish
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@pawstore.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Pet Street, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PawStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

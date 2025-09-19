import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import ngsLogo from "@/assets/ngs-logo.jpg";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={ngsLogo}
                alt="NGS Mart"
                className="h-12 w-auto object-contain bg-white rounded p-1"
              />
              <div>
                <h3 className="text-xl font-bold">NGS MART</h3>
                <p className="text-sm text-primary-foreground/80">Pick n Pay. Inspired by You</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Premium Gift-Packs & Festive Corporate Gifting solutions for all your celebration needs.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:bg-primary-light">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-light">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-light">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About Us
              </Link>
              <Link to="/corporate-orders" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Corporate Orders
              </Link>
              <Link to="/pre-booking" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Pre-Booking
              </Link>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Products</h4>
            <div className="space-y-2">
              <Link to="/products/dry-fruits" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Dry Fruits Boxes
              </Link>
              <Link to="/products/real-juices" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Real Juices Gift Packs
              </Link>
              <Link to="/products/snack-packs" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Snack Factory Packs
              </Link>
              <Link to="/products/cremica" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Cremica Products
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-secondary" />
                <div className="text-sm text-primary-foreground/80">
                  <p>Sector-5, Shop No 1, Vaishali GZB 201010</p>
                  <p>Sector-9, Shop No-50/51, Vasundhara GZB 201010</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <div className="text-sm text-primary-foreground/80">
                  <p>9999723571, 9999733571</p>
                  <p>9999000853, 9910597641</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <p className="text-sm text-primary-foreground/80">Ngshelpdeskv9@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/80">
              © 2025 NGS Mart. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/terms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/returns" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Return/Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
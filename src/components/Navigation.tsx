import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ngsLogo from "@/assets/ngs-logo.jpg";

// ✅ Import your product PDFs
import realJuicePDF from "@/assets/NGS REAL JUICE.pdf";
import snacksPDF from "@/assets/NGS Snack Factory.pdf";
import dryfruitPDF from "@/assets/NGS DRY FRUITS BOX.pdf";
import bikanoPDF from "@/assets/NGS BIKANO SWEETS.pdf";
import cremicaPDF from "@/assets/NGS Cremica bisc.pdf";
import haldiramPDF from "@/assets/NGS HALDIRAM .pdf";
import mixerPDF from "@/assets/NGS GLEN mixer.pdf";
import GUJRATIDryFruitBoxPDF from "@/assets/NGS GUJRATI BOX CATELOGUE.pdf";
import miltonPDF from "@/assets/NGS MILTON pro.pdf";
import thaliPDF from "@/assets/NGS THALIS , TRAYS,BOXES.pdf";

// ✅ Product list linked to PDF files
const productCategories = [
  { name: "Premium Dry Fruits Box", path: dryfruitPDF },
  { name: "Real Juices Gift Packs", path: realJuicePDF },
  { name: "Snack Factory Packs", path: snacksPDF },
  { name: "Cremica Products", path: cremicaPDF },
   { name: "Haldiram Assorted Snacks Pack", path: haldiramPDF },
  { name: "Glen Kitchen Appliances Combo", path: mixerPDF },
  { name: "Bikano Snaks", path: bikanoPDF },
  { name: "NGS Dry Fruit Metal Box", path: GUJRATIDryFruitBoxPDF },
   { name: "Milton Kitchen Essentials", path: miltonPDF },
  { name: "NGS Kitchen Essentials", path: thaliPDF },

];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isProductsActive = () => location.pathname.startsWith("/products");

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>9999723571, 9999733571</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>Ngshelpdeskv9@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background border-b border-border shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={ngsLogo}
                alt="NGS Mart"
                className="h-12 w-auto object-contain"
              />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-primary">NGS MART</h1>
                <p className="text-xs text-muted-foreground">
                  Pick n Pay. Inspired by You
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                to="/"
                className={`font-medium transition-colors hover:text-primary ${
                  isActive("/") ? "text-primary" : "text-foreground"
                }`}>
                Home
              </Link>

              <Link
                to="/about"
                className={`font-medium transition-colors hover:text-primary ${
                  isActive("/about") ? "text-primary" : "text-foreground"
                }`}>
                About Us
              </Link>

              {/* Products Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`flex items-center gap-1 font-medium transition-colors hover:text-primary ${
                    isProductsActive() ? "text-primary" : "text-foreground"
                  }`}>
                  Products <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-background border-border shadow-lg">
                  {productCategories.map((category) => (
                    <DropdownMenuItem key={category.path}>
                      <a
                        href={category.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full hover:text-primary transition-colors">
                        {category.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                to="/corporate-orders"
                className={`font-medium transition-colors hover:text-primary ${
                  isActive("/corporate-orders")
                    ? "text-primary"
                    : "text-foreground"
                }`}>
                Corporate Orders
              </Link>

              <Link
                to="/pre-booking"
                className={`font-medium transition-colors hover:text-primary ${
                  isActive("/pre-booking") ? "text-primary" : "text-foreground"
                }`}>
                Pre-Booking
              </Link>

              <Link
                to="/contact"
                className={`font-medium transition-colors hover:text-primary ${
                  isActive("/contact") ? "text-primary" : "text-foreground"
                }`}>
                Contact Us
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="premium" size="lg" asChild>
                <Link to="/pre-booking">Book Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-6">
                  <Link
                    to="/"
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}>
                    About Us
                  </Link>

                  <div className="space-y-2">
                    <p className="text-lg font-medium text-primary">Products</p>
                    {productCategories.map((category) => (
                      <a
                        key={category.path}
                        href={category.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block pl-4 text-base hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}>
                        {category.name}
                      </a>
                    ))}
                  </div>

                  <Link
                    to="/corporate-orders"
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}>
                    Corporate Orders
                  </Link>
                  <Link
                    to="/pre-booking"
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}>
                    Pre-Booking
                  </Link>
                  <Link
                    to="/contact"
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}>
                    Contact Us
                  </Link>

                  <Button variant="premium" size="lg" className="mt-6" asChild>
                    <Link to="/pre-booking" onClick={() => setIsOpen(false)}>
                      Book Now
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
};

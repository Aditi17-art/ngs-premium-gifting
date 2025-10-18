import { Link } from "react-router-dom";
import {
  ArrowRight,
  Star,
  Shield,
  Truck,
  Clock,
  Gift,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/Hero-banner1.jpeg";
import dryFruitsImage from "@/assets/dry-fruits-hero.jpg";
import corporateImage from "@/assets/bikano.jpeg";
import corporateIMG from "@/assets/corporate-gifts.jpg";
import realJuiceImage from "@/assets/real-juice.webp";
import snackPackImage from "@/assets/snack-pack.jpg";
import cremicaImage from "@/assets/cremica.jpeg";
import haldiramImage from "@/assets/haldiram.png";
import mixerImage from "@/assets/mixer.jpeg";
import GUJRATIDryFruitBoxImage from "@/assets/ngs-metal-box.jpeg";
import miltonImage from "@/assets/milton.png";
import thaliImage from "@/assets/ngs-thali,plate.jpeg";

// ✅ Import your PDF file
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

const featuredProducts = [
  {
    id: 1,
    name: "Premium Dry Fruits Box",
    description: "Finest cashews, almonds, and pistachios",
    image: dryFruitsImage,
    category: "Dry Fruits",
    path: dryfruitPDF,
    isPDF: true,
  },
  {
    id: 2,
    name: "Real Juice Gift Pack",
    description: "Family pack with assorted flavors",
    image: realJuiceImage,
    category: "Juices",
    path: realJuicePDF, // PDF path here
    isPDF: true, // Flag to handle PDF opening
  },
  {
    id: 3,
    name: "Bikano snaks",
    description: "Professional gifting solutions",
    image: corporateImage,
    category: "Sweets",
    path: bikanoPDF,
    isPDF: true,
  },
  {
    id: 4,
    name: "Snack Factory Pack",
    description: "Premium makhana and snacks combo",
    image: snackPackImage,
    category: "Snacks",
    path: snacksPDF,
    isPDF: true,
  },
  {
    id: 5,
    name: "Cremica Biscuit & Cookies Assortment",
    description: "A delightful combo of Cremica’s favorite biscuits",
    image: cremicaImage,
    category: "Snacks & Biscuits",
    path: cremicaPDF,
    isPDF: true,
  },
  {
    id: 6,
    name: "Haldiram Assorted Snacks Pack",
    description:
      "An irresistible selection of Haldiram’s popular namkeens and sweets",
    image: haldiramImage,
    category: "Snacks & Sweets",
    path: haldiramPDF,
    isPDF: true,
  },
  {
    id: 7,
    name: "Glen Kitchen Appliances Combo",
    description: "A premium collection of Glen home appliances",
    image: mixerImage,
    category: "Home & Kitchen Appliances",
    path: mixerPDF,
    isPDF: true,
  },
  {
    id: 8,
    name: "NGS Dry Fruit Metal Box",
    description:
      "Elegant metal box filled with premium dry fruits — perfect for gifting and festive occasions.",
    image: GUJRATIDryFruitBoxImage,
    category: "Dry Fruits & Gifts",
    path: GUJRATIDryFruitBoxPDF,
    isPDF: true,
  },
  {
    id: 9,
    name: "Milton Kitchen Essentials",
    description:
      "A versatile range of Milton products including bottles, lunch boxes, flasks, and containers for everyday use.",
    image: miltonImage,
    category: "Home & Kitchen",
    path: miltonPDF,
    isPDF: true,
  },
  {
    id: 10,
    name: "NGS Kitchen Essentials",
    description:
      "Premium thalis, storage boxes, and serving trays — durable, stylish, and perfect for everyday use or festive occasions.",
    image: thaliImage,
    category: "Gifts and Storage",
    path: thaliPDF,
    isPDF: true,
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Premium Quality",
    description:
      "Only the finest ingredients and materials for superior taste and freshness",
  },
  {
    icon: Gift,
    title: "Expert Packaging",
    description:
      "Beautiful, professional packaging that makes every gift special",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "Timely delivery across Delhi NCR with careful handling",
  },
  {
    icon: Clock,
    title: "Fresh Products",
    description: "Direct sourcing ensures maximum freshness and quality",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <Badge className="mb-6 bg-secondary text-secondary-foreground animate-pulse">
              Pre-Booking Now Open: 12 Sep - 18 Oct 2025
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
              Premium Gift-Packs &
              <span className="text-premium block mt-2">
                Festive Corporate Gifting
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-up">
              Celebrate every occasion with our carefully curated collection of
              premium dry fruits, fresh juices, and gourmet snacks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up">
              <Button variant="premium" size="xl" asChild>
                <Link to="/pre-booking">
                  Start Pre-Booking <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular gift collections, perfect for every
              celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="group hover-lift hover:shadow-premium transition-all duration-300 bg-gradient-card border-0"
                style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
                    {product.category}
                  </Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-industrial">
                    {product.name}
                  </CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary"></span>
                    <div className="flex items-center text-secondary">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>

                  {/* ✅ Open PDF directly if it's a PDF product */}
                  {product.isPDF ? (
                    <Button
                      variant="hero"
                      className="w-full"
                      onClick={() => window.open(product.path, "_blank")}>
                      View More <ArrowRight className="ml-2" />
                    </Button>
                  ) : (
                    <Button variant="hero" className="w-full" asChild>
                      <Link to={product.path}>
                        Shop Now <ArrowRight className="ml-2" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Why Choose NGS Mart?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to delivering exceptional quality and service for
              all your gifting needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Booking CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Don't Miss Out - Pre-Book Now!
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Secure your festive gifts early! Pre-booking is open from 12
              September to 18 October 2025. Get the best selection and ensure
              availability for your celebrations.
            </p>

            <div className="flex items-center justify-center gap-2 mb-8">
              <CheckCircle className="h-5 w-5 text-secondary" />
              <span>Early Bird Benefits</span>
              <CheckCircle className="h-5 w-5 text-secondary" />
              <span>Guaranteed Availability</span>
              <CheckCircle className="h-5 w-5 text-secondary" />
              <span>Premium Quality</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="xl"
                asChild
                className="shadow-lg">
                <Link to="/pre-booking">
                  Start Pre-Booking Now <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

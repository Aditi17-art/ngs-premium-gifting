import { useState } from "react";
import { Filter, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { dryFruitsBoxes } from "@/data/products";
import dryFruitsImage from "@/assets/dry-fruits-hero.jpg";

export default function DryFruits() {
  const [sortBy, setSortBy] = useState("name");
  const [filter, setFilter] = useState("all");

  const filteredProducts = dryFruitsBoxes
    .filter((product) => filter === "all" || product.grade === filter)
    .sort((a, b) => {
      if (sortBy === "price-low") return a.mrp - b.mrp;
      if (sortBy === "price-high") return b.mrp - a.mrp;
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Premium Dry Fruits Boxes
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Finest quality cashews, almonds, pistachios, and more -
                carefully selected and beautifully packaged for your special
                occasions.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-secondary text-secondary-foreground text-base px-4 py-2">
                  A & B Available
                </Badge>
                <Badge className="bg-accent text-accent-foreground text-base px-4 py-2">
                  Premium Packaging
                </Badge>
              </div>
            </div>

            <div className="animate-scale-in">
              <img
                src={dryFruitsImage}
                alt="Premium Dry Fruits"
                className="w-full h-96 object-cover rounded-lg shadow-premium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Sort */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-primary" />
              <span className="font-medium">Filter & Sort:</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Select onValueChange={setFilter} defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All </SelectItem>
                  <SelectItem value=" A"> A</SelectItem>
                  <SelectItem value=" B"> B</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={setSortBy} defaultValue="name">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="hover-lift hover:shadow-premium transition-all duration-300 bg-gradient-card border-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative">
                  <img
                    src={dryFruitsImage}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                    {product.grade}
                  </Badge>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-industrial text-lg">
                      {product.name}
                    </CardTitle>
                    <div className="flex items-center text-secondary">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">
                      Contents:
                    </h4>
                    <ul className="space-y-1">
                      {product.contents.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-center">
                          <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="text-2xl font-bold text-primary">
                        ₹{product.mrp}
                      </span>
                      <p className="text-sm text-muted-foreground">
                        MRP Inclusive
                      </p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {product.packSize}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button variant="premium" size="sm">
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Quality Assurance</h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Every dry fruit is carefully selected, quality-tested, and packed
            with love to ensure you receive only the finest products.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">100%</div>
              <p className="text-white/90">Quality Tested</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">
                Fresh
              </div>
              <p className="text-white/90">Direct Sourcing</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">
                Premium
              </div>
              <p className="text-white/90">Packaging</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

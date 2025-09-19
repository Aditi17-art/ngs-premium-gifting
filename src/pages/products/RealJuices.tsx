import { useState } from "react";
import { Filter, ShoppingCart, Star, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { realJuicesPacks } from "@/data/products";
import realJuiceImage from "@/assets/real-juice-hero.jpg";

export default function RealJuices() {
  const [sortBy, setSortBy] = useState("name");

  const sortedProducts = realJuicesPacks.sort((a, b) => {
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
                Real Juice Gift Packs
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Authentic fruit goodness in beautiful gift packaging. Perfect for 
                sharing joy and health with your loved ones.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-secondary text-secondary-foreground text-base px-4 py-2">
                  100% Natural
                </Badge>
                <Badge className="bg-accent text-accent-foreground text-base px-4 py-2">
                  Multiple Pack Sizes
                </Badge>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <img
                src={realJuiceImage}
                alt="Real Juice Gift Packs"
                className="w-full h-96 object-cover rounded-lg shadow-premium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sort Options */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-primary" />
              <span className="font-medium">Sort Products:</span>
            </div>
            
            <Select onValueChange={setSortBy} defaultValue="name">
              <SelectTrigger className="w-48">
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
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product, index) => (
              <Card 
                key={product.id}
                className="hover-lift hover:shadow-premium transition-all duration-300 bg-gradient-card border-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img
                    src={realJuiceImage}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">
                    {product.packSize}
                  </Badge>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-industrial text-lg">{product.name}</CardTitle>
                    <div className="flex items-center text-secondary">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2 flex items-center">
                      <Package className="h-4 w-4 mr-2" />
                      Pack Contents:
                    </h4>
                    <ul className="space-y-1">
                      {product.contents.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="text-2xl font-bold text-primary">₹{product.mrp}</span>
                      <p className="text-sm text-muted-foreground">MRP Inclusive</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      SKU: {product.sku}
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

      {/* Pack Types Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Choose Your Perfect Pack</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="text-center hover-lift bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="text-secondary">Book Pack</CardTitle>
                <CardDescription>Premium 1L bottles in book-style packaging</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="text-secondary">Bucket Pack</CardTitle>
                <CardDescription>Family-sized bucket with assorted flavors</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="text-secondary">Family Pack</CardTitle>
                <CardDescription>Mixed sizes perfect for families</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="text-secondary">Handle Pack</CardTitle>
                <CardDescription>Convenient carry pack with handle</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="text-secondary">Box Pack</CardTitle>
                <CardDescription>Compact gift box with 180ml bottles</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Brand Promise */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Real Goodness, Real Joy</h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Each Real Juice pack is crafted with authentic fruit flavors and packed with love 
            to bring real moments of joy to your celebrations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">100%</div>
              <p className="text-white/90">Natural Flavors</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">Fresh</div>
              <p className="text-white/90">Quality Assured</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">Gift</div>
              <p className="text-white/90">Ready Packaging</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">Joy</div>
              <p className="text-white/90">In Every Sip</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
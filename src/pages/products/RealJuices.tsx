import { useState } from "react";
import { Filter, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { realJuicesPacks } from "@/data/products";
import realJuiceImage from "@/assets/real-juice.webp";
import realJuicePDF from "@/assets/NGS REAL JUICEpdf.pdf"; // ✅ imported PDF

export default function RealJuices() {
  const [sortBy, setSortBy] = useState("name");

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Real Juice Gift Packs
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Authentic fruit goodness in beautiful gift packaging.
          </p>
        </div>
      </section>

      {/* ✅ Embedded PDF Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Real Juice Brochure
          </h2>
          <iframe
            src={realJuicePDF}
            width="100%"
            height="700px"
            title="Real Juice Brochure"
            className="rounded-lg shadow-premium border"></iframe>
        </div>
      </section>

      {/* Example Product Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {realJuicesPacks.map((p) => (
            <Card key={p.id}>
              <CardHeader>
                <CardTitle>{p.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{p.description}</p>
                <Button variant="premium" className="mt-4">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

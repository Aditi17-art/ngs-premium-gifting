import { useState } from "react";
import { Building, Users, Gift, Award, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import corporateImage from "@/assets/corporate-gifts.jpg";

const corporateBenefits = [
  {
    icon: Building,
    title: "Bulk Pricing",
    description: "Special discounted rates for corporate orders above 100 units"
  },
  {
    icon: Gift,
    title: "Custom Branding",
    description: "Add your company logo and branding to gift packaging"
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Personal account manager for all your corporate gifting needs"
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Finest selection of products to represent your brand perfectly"
  }
];

const orderTypes = [
  "Employee Appreciation Gifts",
  "Client & Partner Gifts",
  "Festival Corporate Gifts",
  "Conference & Event Gifts",
  "New Year Corporate Hampers",
  "Diwali Corporate Gifts",
  "Custom Requirements"
];

export default function CorporateOrders() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    designation: "",
    email: "",
    phone: "",
    orderType: "",
    quantity: "",
    budget: "",
    deliveryDate: "",
    requirements: ""
  });

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Corporate Order Inquiry Submitted!",
      description: "Thank you for your interest. Our corporate team will contact you within 24 hours with a customized proposal.",
    });

    // Reset form
    setFormData({
      companyName: "",
      contactPerson: "",
      designation: "",
      email: "",
      phone: "",
      orderType: "",
      quantity: "",
      budget: "",
      deliveryDate: "",
      requirements: ""
    });
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <Badge className="mb-6 bg-secondary text-secondary-foreground text-lg px-4 py-2">
                Corporate Gifting Solutions
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Premium Corporate
                <span className="text-premium block mt-2">Gift Solutions</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Strengthen business relationships with our curated corporate gift packages. 
                Perfect for employees, clients, and partners.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="xl">
                  Get Quote <ArrowRight className="ml-2" />
                </Button>
                <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                  View Catalog
                </Button>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <img
                src={corporateImage}
                alt="Corporate Gifts"
                className="w-full h-96 object-cover rounded-lg shadow-premium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Us for Corporate Gifting?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We understand the importance of representing your brand with quality and elegance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {corporateBenefits.map((benefit, index) => (
              <Card 
                key={index}
                className="text-center hover-lift bg-gradient-card border-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-industrial">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Corporate Pricing Tiers</h2>
            <p className="text-xl text-muted-foreground">
              Competitive pricing based on order volume
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="hover-lift bg-gradient-card border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-industrial">Starter</CardTitle>
                <CardDescription>Perfect for small teams</CardDescription>
                <div className="text-3xl font-bold text-primary mt-4">50-99 Units</div>
              </CardHeader>
              <CardContent className="text-center">
                <Badge className="mb-4 bg-secondary text-secondary-foreground">
                  5% Discount
                </Badge>
                <p className="text-muted-foreground">
                  Basic packaging with company details
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-gradient-secondary text-secondary-foreground border-0 transform scale-105">
              <CardHeader className="text-center">
                <CardTitle>Professional</CardTitle>
                <CardDescription className="text-secondary-foreground/80">Most popular choice</CardDescription>
                <div className="text-3xl font-bold mt-4">100-499 Units</div>
              </CardHeader>
              <CardContent className="text-center">
                <Badge className="mb-4 bg-white text-secondary">
                  10% Discount
                </Badge>
                <p className="text-secondary-foreground/80">
                  Custom branding + premium packaging
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-gradient-card border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-industrial">Enterprise</CardTitle>
                <CardDescription>For large organizations</CardDescription>
                <div className="text-3xl font-bold text-primary mt-4">500+ Units</div>
              </CardHeader>
              <CardContent className="text-center">
                <Badge className="mb-4 bg-accent text-accent-foreground">
                  15% Discount
                </Badge>
                <p className="text-muted-foreground">
                  Full customization + dedicated support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-premium border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-industrial">Request Corporate Quote</CardTitle>
                <CardDescription className="text-lg">
                  Fill out the form below and our corporate team will prepare a customized proposal for you
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input
                        id="companyName"
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => handleInputChange("companyName", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="contactPerson">Contact Person *</Label>
                      <Input
                        id="contactPerson"
                        type="text"
                        required
                        value={formData.contactPerson}
                        onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="designation">Designation</Label>
                      <Input
                        id="designation"
                        type="text"
                        value={formData.designation}
                        onChange={(e) => handleInputChange("designation", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="orderType">Order Type *</Label>
                      <Select onValueChange={(value) => handleInputChange("orderType", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select order type" />
                        </SelectTrigger>
                        <SelectContent>
                          {orderTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="quantity">Approximate Quantity *</Label>
                      <Input
                        id="quantity"
                        type="text"
                        required
                        value={formData.quantity}
                        onChange={(e) => handleInputChange("quantity", e.target.value)}
                        placeholder="e.g., 200 units"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-50k">Under ₹50,000</SelectItem>
                          <SelectItem value="50k-1l">₹50,000 - ₹1,00,000</SelectItem>
                          <SelectItem value="1l-2l">₹1,00,000 - ₹2,00,000</SelectItem>
                          <SelectItem value="2l-5l">₹2,00,000 - ₹5,00,000</SelectItem>
                          <SelectItem value="above-5l">Above ₹5,00,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="deliveryDate">Required Delivery Date</Label>
                      <Input
                        id="deliveryDate"
                        type="date"
                        value={formData.deliveryDate}
                        onChange={(e) => handleInputChange("deliveryDate", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="requirements">Special Requirements</Label>
                    <Textarea
                      id="requirements"
                      value={formData.requirements}
                      onChange={(e) => handleInputChange("requirements", e.target.value)}
                      placeholder="Please describe any specific requirements, customizations, branding needs, etc."
                      className="mt-1 min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" variant="premium" size="lg" className="w-full">
                    Submit Corporate Inquiry <ArrowRight className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Immediate Assistance?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our corporate sales team is ready to help you create the perfect gifting solution for your business
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6 text-secondary" />
              <div className="text-left">
                <p className="font-semibold">Corporate Hotline</p>
                <p className="text-white/90">9999723571, 9999733571</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6 text-secondary" />
              <div className="text-left">
                <p className="font-semibold">Corporate Email</p>
                <p className="text-white/90">Ngshelpdeskv9@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
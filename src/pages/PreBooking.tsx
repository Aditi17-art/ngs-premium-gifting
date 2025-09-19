import { useState } from "react";
import { Calendar, Clock, Gift, CheckCircle, ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const preBookingBenefits = [
  "Guaranteed product availability during festival season",
  "Priority processing and faster delivery",
  "Early bird discounts on bulk orders",
  "Customization options for corporate gifts",
  "Personal consultation for large orders",
  "Flexible payment options"
];

const productCategories = [
  "Dry Fruits Boxes",
  "Real Juice Gift Packs",
  "Snack Factory Packs",
  "Cremica Products",
  "Custom Corporate Packs"
];

export default function PreBooking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    category: "",
    quantity: "",
    deliveryDate: "",
    specialRequirements: "",
    agreeToTerms: false
  });

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast({
        title: "Terms & Conditions",
        description: "Please agree to the terms and conditions to proceed.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Pre-Booking Submitted!",
      description: "Thank you for your pre-booking. We'll contact you within 24 hours to confirm your order.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      category: "",
      quantity: "",
      deliveryDate: "",
      specialRequirements: "",
      agreeToTerms: false
    });
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-secondary text-secondary-foreground animate-pulse text-lg px-4 py-2">
            Pre-Booking Open: 12 Sep - 18 Oct 2025
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
            Secure Your Festive Gifts Early
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-up">
            Don't wait for the festival rush! Pre-book your premium gift packs now and enjoy 
            guaranteed availability with exclusive benefits.
          </p>
        </div>
      </section>

      {/* Pre-Booking Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">Pre-Booking Timeline</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover-lift bg-gradient-card border-0">
                <CardHeader>
                  <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-industrial">Pre-Booking Period</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge className="mb-4 bg-secondary text-secondary-foreground">
                    12 Sep - 18 Oct 2025
                  </Badge>
                  <CardDescription>
                    Submit your pre-booking requests during this period to secure your orders
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift bg-gradient-card border-0">
                <CardHeader>
                  <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-industrial">Processing Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge className="mb-4 bg-accent text-accent-foreground">
                    19 Oct - 5 Nov 2025
                  </Badge>
                  <CardDescription>
                    Order confirmation, payment processing, and preparation begins
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift bg-gradient-card border-0">
                <CardHeader>
                  <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-industrial">Delivery Period</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge className="mb-4 bg-primary text-primary-foreground">
                    6 Nov - 15 Nov 2025
                  </Badge>
                  <CardDescription>
                    Fresh products prepared and delivered right before the festival season
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">Pre-Booking Benefits</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {preBookingBenefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Booking Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-premium border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-industrial">Submit Your Pre-Booking</CardTitle>
                <CardDescription className="text-lg">
                  Fill out the form below and we'll contact you within 24 hours to confirm your order
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
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

                  <div>
                    <Label htmlFor="company">Company Name (Optional)</Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="For corporate orders"
                      className="mt-1"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="category">Product Category *</Label>
                      <Select onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {productCategories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
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
                        placeholder="e.g., 50 boxes"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="deliveryDate">Preferred Delivery Date</Label>
                    <Input
                      id="deliveryDate"
                      type="date"
                      value={formData.deliveryDate}
                      onChange={(e) => handleInputChange("deliveryDate", e.target.value)}
                      min="2025-11-06"
                      max="2025-11-15"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="requirements">Special Requirements</Label>
                    <Textarea
                      id="requirements"
                      value={formData.specialRequirements}
                      onChange={(e) => handleInputChange("specialRequirements", e.target.value)}
                      placeholder="Any specific requirements, customizations, or preferences..."
                      className="mt-1 min-h-[100px]"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the terms and conditions and privacy policy *
                    </Label>
                  </div>

                  <Button type="submit" variant="premium" size="lg" className="w-full">
                    Submit Pre-Booking Request <ArrowRight className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help with Your Pre-Booking?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is here to help you choose the perfect gifts and customize your order
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6 text-secondary" />
              <div className="text-left">
                <p className="font-semibold">Call Us</p>
                <p className="text-white/90">9999723571, 9999733571</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6 text-secondary" />
              <div className="text-left">
                <p className="font-semibold">Email Us</p>
                <p className="text-white/90">Ngshelpdeskv9@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
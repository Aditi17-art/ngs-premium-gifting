import { useState } from "react";
import { Building, Users, Gift, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import corporateImage from "@/assets/bikano.jpeg";
// ✅ Correct import for EmailJS
import emailjs from "emailjs-com";

const corporateBenefits = [
  {
    icon: Building,
    title: "Bulk Pricing",
    description:
      "Special discounted rates for corporate orders above 100 units",
  },
  {
    icon: Gift,
    title: "Custom Branding",
    description: "Add your company logo and branding to gift packaging",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "Personal account manager for all your corporate gifting needs",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Finest selection of products to represent your brand perfectly",
  },
];

const productCategories = [
  "Corporate Hampers",
  "Festival Gifts",
  "Client Gifts",
  "Employee Rewards",
  "Conference Packs",
  "New Year Gifts",
];

export default function CorporateOrders() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    category: "",
    quantity: "",
    specialRequirements: "",
    agreeToTerms: false,
  });

  const { toast } = useToast();

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreeToTerms) {
      toast({
        title: "Agreement Required",
        description:
          "Please agree to the terms and conditions before submitting.",
        variant: "destructive",
      });
      return;
    }

    // ✅ Send form data via EmailJS
    emailjs
      .send(
        "service_z6qf3of", // Replace with your EmailJS Service ID
        "template_m436slh", // Replace with your EmailJS Template ID
        formData,
        "PnKD0Lf4TomvWmp7_" // Replace with your EmailJS Public Key
      )
      .then(() => {
        toast({
          title: "Pre-Booking Submitted!",
          description:
            "Thank you for your interest. Our team will contact you within 24 hours to confirm your order.",
        });

        // ✅ Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          company: "",
          category: "",
          quantity: "",
          specialRequirements: "",
          agreeToTerms: false,
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast({
          title: "Submission Failed",
          description:
            "There was an issue sending your inquiry. Please try again later.",
          variant: "destructive",
        });
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
                Strengthen business relationships with our curated corporate
                gift packages. Perfect for employees, clients, and partners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg">
                  Get Quote <ArrowRight className="ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary">
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
            <h2 className="text-4xl font-bold text-primary mb-4">
              Why Choose Us for Corporate Gifting?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We understand the importance of representing your brand with
              quality and elegance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {corporateBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover-lift bg-gradient-card border-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-industrial">
                    {benefit.title}
                  </CardTitle>
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

      {/* Updated Form Section */}
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-premium border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-industrial">
                  Submit Your Pre-Booking
                </CardTitle>
                <CardDescription className="text-lg">
                  Fill out the form below and we'll contact you within 24 hours
                  to confirm your order.
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
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
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
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
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
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Company Name (Optional)</Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                      placeholder="For corporate orders"
                      className="mt-1"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="category">Product Category *</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) =>
                          handleInputChange("category", value)
                        }>
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
                        onChange={(e) =>
                          handleInputChange("quantity", e.target.value)
                        }
                        placeholder="e.g., 50 boxes"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="requirements">Special Requirements</Label>
                    <Textarea
                      id="requirements"
                      value={formData.specialRequirements}
                      onChange={(e) =>
                        handleInputChange("specialRequirements", e.target.value)
                      }
                      placeholder="Any specific requirements, customizations, or preferences..."
                      className="mt-1 min-h-[100px]"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) =>
                        handleInputChange("agreeToTerms", checked === true)
                      }
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the terms and conditions and privacy policy *
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    variant="premium"
                    size="lg"
                    className="w-full">
                    Submit Pre-Booking Request <ArrowRight className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

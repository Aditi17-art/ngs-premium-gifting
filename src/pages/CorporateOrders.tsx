import { useState } from "react";
import {
  Building,
  Users,
  Gift,
  Award,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
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
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import corporateImage from "@/assets/bikano.jpeg";
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

const orderTypes = [
  "Employee Appreciation Gifts",
  "Client & Partner Gifts",
  "Festival Corporate Gifts",
  "Conference & Event Gifts",
  "New Year Corporate Hampers",
  "Diwali Corporate Gifts",
  "Custom Requirements",
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
    requirements: "",
  });

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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
          title: "Corporate Order Inquiry Submitted!",
          description:
            "Thank you for your interest. Our corporate team will contact you within 24 hours with a customized proposal.",
        });

        // Reset form after success
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
          requirements: "",
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
                <Button variant="secondary" size="xl">
                  Get Quote <ArrowRight className="ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="xl"
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
              quality and elegance
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

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-premium border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-industrial">
                  Request Corporate Quote
                </CardTitle>
                <CardDescription className="text-lg">
                  Fill out the form below and our corporate team will prepare a
                  customized proposal for you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Company Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input
                        id="companyName"
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) =>
                          handleInputChange("companyName", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="contactPerson">Contact Person *</Label>
                      <Input
                        id="contactPerson"
                        type="text"
                        required
                        value={formData.contactPerson}
                        onChange={(e) =>
                          handleInputChange("contactPerson", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  {/* Designation & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="designation">Designation</Label>
                      <Input
                        id="designation"
                        type="text"
                        value={formData.designation}
                        onChange={(e) =>
                          handleInputChange("designation", e.target.value)
                        }
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
                      />
                    </div>
                  </div>

                  {/* Email */}
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
                    />
                  </div>

                  {/* Order Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="orderType">Order Type *</Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("orderType", value)
                        }>
                        <SelectTrigger>
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
                        onChange={(e) =>
                          handleInputChange("quantity", e.target.value)
                        }
                        placeholder="e.g., 200 units"
                      />
                    </div>
                  </div>

                  {/* Budget & Date */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("budget", value)
                        }>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-50k">
                            Under ₹50,000
                          </SelectItem>
                          <SelectItem value="50k-1l">
                            ₹50,000 - ₹1,00,000
                          </SelectItem>
                          <SelectItem value="1l-2l">
                            ₹1,00,000 - ₹2,00,000
                          </SelectItem>
                          <SelectItem value="2l-5l">
                            ₹2,00,000 - ₹5,00,000
                          </SelectItem>
                          <SelectItem value="above-5l">
                            Above ₹5,00,000
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="deliveryDate">
                        Required Delivery Date
                      </Label>
                      <Input
                        id="deliveryDate"
                        type="date"
                        value={formData.deliveryDate}
                        onChange={(e) =>
                          handleInputChange("deliveryDate", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  {/* Requirements */}
                  <div>
                    <Label htmlFor="requirements">Special Requirements</Label>
                    <Textarea
                      id="requirements"
                      value={formData.requirements}
                      onChange={(e) =>
                        handleInputChange("requirements", e.target.value)
                      }
                      placeholder="Please describe any specific requirements, customizations, branding needs, etc."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="premium"
                    size="lg"
                    className="w-full">
                    Submit Corporate Inquiry <ArrowRight className="ml-2" />
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

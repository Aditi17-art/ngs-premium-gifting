import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
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
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

// Contact Information
const contactInfo = [
  {
    icon: MapPin,
    title: "Store Locations",
    details: [
      "Sector-5, Shop No 1, Vaishali GZB 201010",
      "Sector-9, Shop No-50/51, Vasundhara GZB 201010",
    ],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["9999723571", "9999733571", "9999000853", "9910597641"],
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["Ngshelpdeskv9@gmail.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Monday - Saturday: 9:00 AM - 8:00 PM",
      "Sunday: 10:00 AM - 6:00 PM",
    ],
  },
];

// Product categories for Select dropdown
const productCategories = [
  "Cakes & Chocolates",
  "Flowers & Bouquets",
  "Personalized Gifts",
  "Festival Hampers",
  "Premium Accessories",
  "Corporate Gifts",
  "Other",
];

export default function Contact() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreeToTerms) {
      toast({
        title: "Please agree to the terms and conditions.",
        variant: "destructive",
      });
      return;
    }

    try {
      await emailjs.send(
        "service_u9v7q1i", // Replace with your EmailJS Service ID
        "template_hnsrr8m", // Replace with your EmailJS Template ID
        {
          to_name: "NGS Mart",
          from_name: formData.name,
          phone: formData.phone,
          email: formData.email,
          company: formData.company || "N/A",
          category: formData.category || "N/A",
          quantity: formData.quantity || "N/A",
          specialRequirements: formData.specialRequirements || "N/A",
        },
        "jzV2-vkEoF2PDnRiy" // Replace with your EmailJS Public Key
      );

      toast({
        title: "Pre-Booking Submitted!",
        description:
          "Thank you for your interest. Our team will contact you within 24 hours to confirm your order.",
      });

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
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-up">
            We're here to help with all your gifting and pre-booking needs.
            Reach out to us for personalized assistance and premium service.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, idx) => (
            <Card
              key={idx}
              className="shadow-premium border-0 text-center hover:shadow-xl transition">
              <CardHeader>
                <info.icon className="mx-auto h-10 w-10 text-industrial" />
                <CardTitle className="mt-4 text-xl">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-600">
                    {detail}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pre-Booking Form Section */}
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

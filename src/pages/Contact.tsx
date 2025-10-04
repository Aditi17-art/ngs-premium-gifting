import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
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

// Inquiry Types
const inquiryTypes = [
  "General Inquiry",
  "Product Information",
  "Bulk Orders",
  "Corporate Gifting",
  "Pre-Booking",
  "Complaint/Feedback",
  "Partnership Opportunity",
];

// Product Interest Options
const productInterests = [
  "Cakes & Chocolates",
  "Flowers & Bouquets",
  "Personalized Gifts",
  "Festival Hampers",
  "Premium Accessories",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    productInterest: "",
    subject: "",
    message: "",
  });

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_dfrjgvs", // ✅ Replace with your EmailJS Service ID
        "template_dvveowk", // ✅ Replace with your EmailJS Template ID
        {
          to_name: "NGS Mart",
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone.trim() || "not filled",
          company: formData.company.trim() || "not filled",
          inquiryType: formData.inquiryType || "not filled",
          productInterest: formData.productInterest || "not filled",
          subject: formData.subject.trim() || "not filled",
          message: formData.message.trim() || "not filled",
        },
        "PnKD0Lf4TomvWmp7_" // ✅ Replace with your EmailJS Public Key
      );

      toast({
        title: "Message Sent Successfully!",
        description:
          "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        inquiryType: "",
        productInterest: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error",
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
            We're here to help with all your gifting needs. Reach out to us for
            personalized assistance and premium customer service.
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

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="shadow-premium border-0">
            <CardHeader>
              <CardTitle className="text-3xl text-industrial">
                Send Us a Message
              </CardTitle>
              <CardDescription className="text-lg">
                Fill out the form and we'll respond within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <Label>Name</Label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <Label>Phone</Label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>

                {/* Company */}
                <div>
                  <Label>Company</Label>
                  <Input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      handleInputChange("company", e.target.value)
                    }
                  />
                </div>

                {/* Inquiry Type */}
                <div>
                  <Label>Inquiry Type</Label>
                  <Select
                    onValueChange={(val) =>
                      handleInputChange("inquiryType", val)
                    }
                    value={formData.inquiryType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      {inquiryTypes.map((type, i) => (
                        <SelectItem key={i} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Product Interest */}
                <div>
                  <Label>Product Interest</Label>
                  <Select
                    onValueChange={(val) =>
                      handleInputChange("productInterest", val)
                    }
                    value={formData.productInterest}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a product" />
                    </SelectTrigger>
                    <SelectContent>
                      {productInterests.map((item, i) => (
                        <SelectItem key={i} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Subject */}
                <div>
                  <Label>Subject</Label>
                  <Input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      handleInputChange("subject", e.target.value)
                    }
                  />
                </div>

                {/* Message */}
                <div>
                  <Label>Message</Label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="premium"
                  size="lg"
                  className="w-full">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

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

const inquiryTypes = [
  "General Inquiry",
  "Product Information",
  "Bulk Orders",
  "Corporate Gifting",
  "Pre-Booking",
  "Complaint/Feedback",
  "Partnership Opportunity",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
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
        "service_dfrjgvs", // Service ID
        "template_xxxxx", // Template ID (change this)
        {
          to_name: "NGS Mart",
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone.trim() || "not filled",
          inquiryType: formData.inquiryType || "not filled",
          subject: formData.subject.trim() || "not filled",
          message: formData.message.trim() || "not filled",
        },
        "PnKD0Lf4TomvWmp7_" // Public key
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
        inquiryType: "",
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

      {/* Contact Information */}
      {/* ---- (baaki code aapka same hi rahega) ---- */}

      {/* Contact Form */}
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
                {/* ---- form fields same as pehle ---- */}
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

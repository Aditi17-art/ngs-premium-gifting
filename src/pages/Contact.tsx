import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Store Locations",
    details: [
      "Sector-5, Shop No 1, Vaishali GZB 201010",
      "Sector-9, Shop No-50/51, Vasundhara GZB 201010"
    ]
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: [
      "9999723571",
      "9999733571", 
      "9999000853",
      "9910597641"
    ]
  },
  {
    icon: Mail,
    title: "Email Address",
    details: [
      "Ngshelpdeskv9@gmail.com"
    ]
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Monday - Saturday: 9:00 AM - 8:00 PM",
      "Sunday: 10:00 AM - 6:00 PM"
    ]
  }
];

const inquiryTypes = [
  "General Inquiry",
  "Product Information",
  "Bulk Orders",
  "Corporate Gifting",
  "Pre-Booking",
  "Complaint/Feedback",
  "Partnership Opportunity"
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      inquiryType: "",
      subject: "",
      message: ""
    });
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
            We're here to help with all your gifting needs. Reach out to us for personalized 
            assistance and premium customer service.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Contact Information</h2>
            <p className="text-xl text-muted-foreground">
              Multiple ways to reach us for your convenience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="text-center hover-lift bg-gradient-card border-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-industrial">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-premium border-0">
                <CardHeader>
                  <CardTitle className="text-3xl text-industrial">Send Us a Message</CardTitle>
                  <CardDescription className="text-lg">
                    Fill out the form and we'll respond within 24 hours
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
                      <Label htmlFor="inquiryType">Inquiry Type *</Label>
                      <Select onValueChange={(value) => handleInputChange("inquiryType", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder="Brief subject of your inquiry"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Please provide details about your inquiry..."
                        className="mt-1 min-h-[120px]"
                      />
                    </div>

                    <Button type="submit" variant="premium" size="lg" className="w-full">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <Card className="shadow-premium border-0">
                <CardHeader>
                  <CardTitle className="text-industrial">Visit Our Stores</CardTitle>
                  <CardDescription>
                    Come visit us at either of our convenient locations in Ghaziabad
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-primary mb-2">Vaishali Store</h4>
                      <p className="text-muted-foreground">
                        Sector-5, Shop No 1, Vaishali<br />
                        Ghaziabad - 201010
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-semibold text-primary mb-2">Vasundhara Store</h4>
                      <p className="text-muted-foreground">
                        Sector-9, Shop No-50/51, Vasundhara<br />
                        Ghaziabad - 201010
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-premium border-0 bg-gradient-primary text-white">
                <CardHeader>
                  <CardTitle>Quick Response Guarantee</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Email responses within 2-4 hours</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Phone support during business hours</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Dedicated corporate support team</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Multi-language support available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="text-industrial text-xl">What are your delivery areas?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We deliver across Delhi NCR including Ghaziabad, Noida, Delhi, and Gurgaon. 
                  Extended delivery options available for bulk orders.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="text-industrial text-xl">Do you offer same-day delivery?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Same-day delivery is available for orders placed before 2 PM within Ghaziabad. 
                  Additional charges may apply.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="text-industrial text-xl">What payment methods do you accept?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We accept cash, UPI, credit/debit cards, and net banking. 
                  For corporate orders, we also offer invoice-based payments.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="text-industrial text-xl">Can I customize my gift packages?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! We offer customization for corporate orders and special occasions. 
                  Contact us to discuss your specific requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
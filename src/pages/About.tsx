import { Users, Target, Award, Heart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import corporateImage from "@/assets/bikano.jpeg";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide premium quality gift packs and corporate gifting solutions that create memorable experiences and strengthen relationships.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Quality, integrity, and customer satisfaction are at the heart of everything we do. We believe every gift should tell a story.",
  },
  {
    icon: Award,
    title: "Our Quality",
    description:
      "We source only the finest ingredients and use premium packaging to ensure every product meets our high standards.",
  },
  {
    icon: Users,
    title: "Our Service",
    description:
      "Dedicated customer support and personalized service to make your gifting experience seamless and enjoyable.",
  },
];

const achievements = [
  { number: "5000+", label: "Happy Customers" },
  { number: "10000+", label: "Orders Delivered" },
  { number: "500+", label: "Corporate Clients" },
  { number: "99%", label: "Customer Satisfaction" },
];

export default function About() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
              About NGS Mart
            </h1>
            <p className="text-xl md:text-2xl text-white/90 animate-fade-up">
              Your trusted partner for premium gift-packs and festive corporate
              gifting solutions since our inception.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  NGS Mart began with a simple yet powerful vision: to make
                  every celebration special through carefully curated gift packs
                  and premium quality products. What started as a passion for
                  bringing joy to people's lives has evolved into a trusted name
                  in the gifting industry.
                </p>
                <p>
                  Based in the heart of Delhi NCR, we have built our reputation
                  on the foundation of quality, reliability, and exceptional
                  customer service. Our motto "Pick n Pay. Inspired by You"
                  reflects our commitment to understanding and fulfilling our
                  customers' unique gifting needs.
                </p>
                <p>
                  Today, we proudly serve thousands of customers across the
                  region, from individual families celebrating special moments
                  to large corporations seeking premium corporate gifting
                  solutions. Every product we offer is carefully selected and
                  packaged to ensure it meets our high standards of quality and
                  presentation.
                </p>
              </div>
            </div>

            <div className="animate-scale-in">
              <img
                src={corporateImage}
                alt="NGS Mart Story"
                className="w-full h-96 object-cover rounded-lg shadow-premium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence in every aspect of our business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="hover-lift bg-gradient-card border-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="text-center">
                  <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-industrial">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-muted-foreground">
              Numbers that speak for our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              What Makes Us Special
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-secondary">
                    Premium Ingredients
                  </h3>
                  <p className="text-white/90">
                    We source only the finest dry fruits, juices, and snacks
                    from trusted suppliers, ensuring every product meets our
                    strict quality standards.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-secondary">
                    Expert Packaging
                  </h3>
                  <p className="text-white/90">
                    Our professional packaging team ensures every gift is
                    beautifully presented, making every unboxing a memorable
                    experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-secondary">
                    Custom Solutions
                  </h3>
                  <p className="text-white/90">
                    From small personal gifts to large corporate orders, we
                    provide customized solutions tailored to your specific needs
                    and budget.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-secondary">
                    Reliable Delivery
                  </h3>
                  <p className="text-white/90">
                    Our efficient delivery network ensures your gifts reach
                    their destination on time, every time, across Delhi NCR and
                    beyond.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-secondary">
                    Competitive Pricing
                  </h3>
                  <p className="text-white/90">
                    We believe premium quality shouldn't come at a premium
                    price. Our competitive pricing makes quality gifting
                    accessible to everyone.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-secondary">
                    Customer Support
                  </h3>
                  <p className="text-white/90">
                    Our dedicated customer support team is always ready to help
                    you choose the perfect gift and resolve any queries
                    promptly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

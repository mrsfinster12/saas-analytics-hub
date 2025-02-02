import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Check, Star } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-6">
            Advanced Website Analysis for E-commerce Success
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get detailed insights into your competitors' strategies and optimize
            your online presence with our powerful analysis tools.
          </p>
          <Button
            onClick={() => navigate("/auth")}
            size="lg"
            className="bg-white text-primary hover:bg-gray-100"
          >
            Start Free Analysis
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Analysis?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Deep SEO Analysis",
                description:
                  "Get insights into meta tags, headings, content structure, and more.",
              },
              {
                title: "Competitor Tracking",
                description:
                  "Monitor your competitors' strategies and stay ahead of the game.",
              },
              {
                title: "Performance Metrics",
                description:
                  "Analyze loading times, mobile responsiveness, and user experience.",
              },
            ].map((feature) => (
              <Card
                key={feature.title}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold">Free</h3>
                <p className="text-gray-600 mt-2">Perfect to get started</p>
                <p className="text-4xl font-bold mt-4">€0</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  1 analysis per month
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  Basic SEO metrics
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  Email support
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                Start Free
              </Button>
            </Card>

            <Card className="p-8 border-primary">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold">Pro</h3>
                <p className="text-gray-600 mt-2">For serious businesses</p>
                <p className="text-4xl font-bold mt-4">€10</p>
                <p className="text-gray-600">per month</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  Unlimited analyses
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  Advanced SEO metrics
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  Competitor tracking
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  Priority support
                </li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "Fashion Boutique",
                text: "Our online sales increased by 150% after implementing the insights from the analysis.",
                rating: 5,
              },
              {
                name: "Mike Chen",
                company: "Tech Gadgets Store",
                text: "The competitor analysis helped us identify gaps in our strategy and double our conversion rate.",
                rating: 5,
              },
              {
                name: "Emma Davis",
                company: "Home Decor Shop",
                text: "The SEO recommendations helped us reach page 1 on Google and increase organic traffic by 200%.",
                rating: 5,
              },
            ].map((testimonial) => (
              <Card key={testimonial.name} className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
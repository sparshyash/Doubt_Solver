import { Check, Sparkles, Crown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free Trial",
    price: "₹0",
    period: "First Doubt Free",
    description: "Try our service with no commitment",
    icon: Sparkles,
    features: [
      "1 Free Doubt Solution",
      "Video or Text Response",
      "24-48 Hour Response Time",
      "Basic Follow-up Support",
    ],
    buttonVariant: "outline" as const,
    buttonText: "Try Free",
    popular: false,
  },
  {
    name: "Student Pack",
    price: "₹99",
    period: "per doubt",
    description: "Perfect for occasional help",
    icon: Zap,
    features: [
      "Pay Per Doubt",
      "Video + Audio + Text Response",
      "12-24 Hour Response Time",
      "Unlimited Follow-ups",
      "Priority Support",
    ],
    buttonVariant: "hero" as const,
    buttonText: "Get Started",
    popular: true,
  },
  {
    name: "Monthly Pro",
    price: "₹999",
    period: "per month",
    description: "Best value for serious students",
    icon: Crown,
    features: [
      "Unlimited Doubts",
      "All Response Formats",
      "6-12 Hour Response Time",
      "Concept Clarity Sessions",
      "Exam Tips & Tricks",
      "Dedicated Support",
    ],
    buttonVariant: "accent" as const,
    buttonText: "Go Pro",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Affordable Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your Plan
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Start with a free trial, then pick what works best for you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 ${
                plan.popular ? "border-primary shadow-glow" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="gradient-hero text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg ${plan.popular ? "gradient-hero" : "bg-primary/10"}`}>
                  <plan.icon className={`w-6 h-6 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">{plan.name}</h3>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground ml-2">/{plan.period}</span>
                <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant={plan.buttonVariant} size="lg" className="w-full">
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

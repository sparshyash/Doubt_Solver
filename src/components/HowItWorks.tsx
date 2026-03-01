import { MessageSquare, Video, CheckCircle, Send } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Ask Your Doubt",
    description: "Submit your question with images, text, or even voice notes. Be as detailed as you want!",
    color: "bg-blue-500",
  },
  {
    icon: Send,
    title: "We Receive & Analyze",
    description: "I personally review each doubt and prepare a comprehensive solution tailored to your level.",
    color: "bg-purple-500",
  },
  {
    icon: Video,
    title: "Get Multi-Format Solution",
    description: "Receive your answer as video explanation, images, audio walkthrough, or detailed text.",
    color: "bg-orange-500",
  },
  {
    icon: CheckCircle,
    title: "Clear Your Concept",
    description: "Understand the concept thoroughly. Ask follow-ups if needed until you're fully satisfied.",
    color: "bg-green-500",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Getting your doubts solved is as easy as 1-2-3-4
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                <div className={`inline-flex p-4 rounded-xl ${step.color} text-white mb-4 mt-2`}>
                  <step.icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-card-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

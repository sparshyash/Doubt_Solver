import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Send, Image, FileText, Mic } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const subjects = ["Physics", "Chemistry", "Mathematics", "Computer Science"];
const classes = ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12", "Engineering"];

export function DoubtForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    class: "",
    doubt: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Doubt Submitted! 🎉",
      description: "Your doubt has been received. You'll get a solution within 24-48 hours.",
    });

    setFormData({ name: "", email: "", subject: "", class: "", doubt: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="ask-doubt" className="py-24 gradient-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
              Get Started
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Ask Your Doubt Now
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              First doubt is absolutely FREE! Fill in the details and get your personalized solution.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Your Name</label>
                <Input
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Email Address</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Subject</label>
                <Select value={formData.subject} onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject} value={subject}>
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Class/Level</label>
                <Select value={formData.class} onValueChange={(value) => setFormData({ ...formData, class: value })}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                  <SelectContent>
                    {classes.map((cls) => (
                      <SelectItem key={cls} value={cls}>
                        {cls}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-card-foreground mb-2">Your Doubt</label>
              <Textarea
                placeholder="Describe your doubt in detail. Include chapter name, topic, and specific problem..."
                value={formData.doubt}
                onChange={(e) => setFormData({ ...formData, doubt: e.target.value })}
                required
                className="min-h-[150px] resize-none"
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-card-foreground mb-3">Attach Files (Optional)</label>
              <div className="grid grid-cols-3 gap-4">
                <button
                  type="button"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-dashed border-border hover:border-primary hover:bg-primary/5 transition-colors"
                >
                  <Image className="w-6 h-6 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Image</span>
                </button>
                <button
                  type="button"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-dashed border-border hover:border-primary hover:bg-primary/5 transition-colors"
                >
                  <FileText className="w-6 h-6 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">PDF</span>
                </button>
                <button
                  type="button"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-dashed border-border hover:border-primary hover:bg-primary/5 transition-colors"
                >
                  <Mic className="w-6 h-6 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Voice</span>
                </button>
              </div>
            </div>

            <Button type="submit" variant="hero" size="xl" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Your Doubt (Free Trial)
                </>
              )}
            </Button>

            <p className="text-center text-muted-foreground text-sm mt-4">
              🎉 Your first doubt is FREE! No credit card required.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

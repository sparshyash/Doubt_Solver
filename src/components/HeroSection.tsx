import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">First Doubt FREE!</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              <span className="text-foreground">Stuck on a</span>
              <br />
              <span className="text-gradient">Problem?</span>
              <br />
              <span className="text-foreground">I'll Solve It.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Get personalized doubt solutions in <strong>video, audio, images & text</strong>. 
              From Class 6 to Engineering — Physics, Chemistry, Maths & CS. 
              <span className="text-primary font-semibold"> Expert help, simplified.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="xl" asChild>
                <a href="#ask-doubt">
                  Ask Your Doubt Free
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#how-it-works">
                  <Play className="w-5 h-5" />
                  See How It Works
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">500+ Students Helped</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <span className="text-sm font-medium">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden lg:block">
            <div className="relative animate-float">
              {/* Main Card */}
              <div className="bg-card rounded-3xl p-8 shadow-2xl border border-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 gradient-hero opacity-10 rounded-full blur-2xl" />
                
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-bold">
                    Q
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">Class 12 • Physics</p>
                    <p className="text-card-foreground font-medium">
                      "How to solve projectile motion problems with air resistance?"
                    </p>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center text-accent-foreground font-bold">
                      A
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-muted-foreground">Solution Ready</span>
                        <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                      </div>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">📹 Video</span>
                        <span className="px-3 py-1 rounded-full bg-success/10 text-success text-xs font-medium">📝 Notes</span>
                        <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">🎙️ Audio</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                Solved in 6 hours!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

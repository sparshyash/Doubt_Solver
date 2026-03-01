import { Button } from "@/components/ui/button";

export default function Developer() {
  return (
    <div className="min-h-screen pt-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          About the Developer
        </h1>

        <p className="text-muted-foreground text-lg mb-8">
          This DoubtSolver platform is built to help students get instant,
          accurate, and affordable academic help using modern web technologies.
        </p>

        {/* Developer Card */}
        <div className="rounded-2xl border border-border p-6 bg-card shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">
            👨‍💻 Developer: Sparsh Garg
          </h2>

          <p className="text-muted-foreground mb-4">
            Computer Science student passionate about Full Stack Development,
            TypeScript, React, and AI-powered applications.
          </p>

          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-1">
            <li>React + TypeScript</li>
            <li>Lovable AI-based UI</li>
            <li>Clean architecture & scalable design</li>
            <li>Focus on student-first experience</li>
          </ul>


          <div className="flex gap-4">
            <Button variant="hero" asChild>
              <a href="https://github.com/sparshyash" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </Button>

            <Button variant="outline" asChild>
              <a href="https://gargsparsh12@gmail.com">
                Contact
              </a>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}

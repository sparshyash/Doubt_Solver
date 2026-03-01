import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">D</span>
            </div>
            <span className="text-xl font-bold text-foreground">DoubtSolver</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-muted-foreground font-medium">
            <a href="#how-it-works">How It Works</a>
            <a href="#subjects">Subjects</a>
            <a href="#pricing">Pricing</a>
            <a href="#ask-doubt">Ask Doubt</a>
            <a href="/developer">Developer</a>

            {role === "admin" && (
              <a href="/admin/dashboard">Admin</a>
            )}

            {role === "student" && (
              <a href="/student/dashboard">My Doubts</a>
            )}

            {!role && (
              <>
                <a href="/auth/student-login">Student Login</a>
                <a href="/auth/admin-login">Admin Login</a>
              </>
            )}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button variant="hero" asChild>
              <a href="#ask-doubt">Get Free Help</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4 text-muted-foreground font-medium">
              <a href="#how-it-works">How It Works</a>
              <a href="#subjects">Subjects</a>
              <a href="#pricing">Pricing</a>
              <a href="#ask-doubt">Ask Doubt</a>
              <a href="/developer">Developer</a>

              {role === "admin" && <a href="/admin/dashboard">Admin</a>}
              {role === "student" && <a href="/student/dashboard">My Doubts</a>}

              {!role && (
                <>
                  <a href="/auth/student-login">Student Login</a>
                  <a href="/auth/admin-login">Admin Login</a>
                </>
              )}

              <Button variant="hero" className="w-full mt-2" asChild>
                <a href="#ask-doubt" onClick={() => setIsOpen(false)}>
                  Get Free Help
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

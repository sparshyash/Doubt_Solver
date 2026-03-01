import { BookOpen, GraduationCap, Atom, Binary, Cpu, Calculator } from "lucide-react";

const subjects = [
  {
    name: "Physics",
    icon: Atom,
    description: "Mechanics, Thermodynamics, Optics, Electromagnetism & more",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Chemistry",
    icon: BookOpen,
    description: "Organic, Inorganic, Physical Chemistry & Lab Problems",
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "Mathematics",
    icon: Calculator,
    description: "Algebra, Calculus, Geometry, Statistics & Trigonometry",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Computer Science",
    icon: Binary,
    description: "Programming, Data Structures, Algorithms & Web Dev",
    color: "from-orange-500 to-red-500",
  },
];

const classes = ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12", "Engineering"];

export function SubjectSection() {
  return (
    <section id="subjects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            What We Cover
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Subjects & Classes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get expert help across all major subjects from Class 6 to Engineering level
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {subjects.map((subject, index) => (
            <div
              key={subject.name}
              className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${subject.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${subject.color} text-white mb-4`}>
                <subject.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">{subject.name}</h3>
              <p className="text-muted-foreground text-sm">{subject.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-card-foreground">Classes We Support</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {classes.map((cls) => (
              <span
                key={cls}
                className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
              >
                {cls}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

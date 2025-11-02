import { Button } from "@/components/ui/button";
import { ThermometerSun, Github, Mail, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <ThermometerSun className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">HumidityDetector</h3>
                <p className="text-xs text-muted-foreground">Arduino Research</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Advanced humidity monitoring system using Arduino microcontrollers 
              for precise environmental measurements.
            </p>
          </div>

          {/* Project Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Project</h4>
            <nav className="flex flex-col gap-2">
              <a href="#details" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Technical Details
              </a>
              <a href="#docs" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Documentation
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Source Code
              </a>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Resources</h4>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Arduino Guide
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Wiring Diagram
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Troubleshooting
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex flex-col gap-3">
              <Button variant="ghost" size="sm" className="justify-start p-0 h-auto" asChild>
                <a
                  href= "https://github.com/purepk/Smart-Humidity-Guard.git" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="justify-start p-0 h-auto">
                <Mail className="w-4 h-4 mr-2" />
                Contact Researcher
              </Button>
              <Button variant="ghost" size="sm" className="justify-start p-0 h-auto">
                <ExternalLink className="w-4 h-4 mr-2" />
                Research Paper
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © Year 2 Semester 1/2025 Arduino Humidity Guard. Physical Computer Mini Project, IT KMITL
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground">Presented to</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-xs font-medium text-foreground">Prof. Panwit Tuwanut</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
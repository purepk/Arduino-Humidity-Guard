import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Github, FileCode } from "lucide-react";

export function SourceCodeSection() {
  return (
    <section id="sourcecode" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
            Source Code
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center">
            Explore the code structure, functionality, and implementation details of the 
            Arduino humidity detection system.
          </p>

          <Card className="p-8 bg-gradient-data border-0 shadow-soft">
            <div className="text-center">
              <Github className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                View Full Source Code
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Access the complete project repository including Arduino sketches, web application code, 
                documentation, and setup instructions on GitHub.
              </p>
              <Button variant="atmospheric" size="lg" asChild>
                <a
                  href="https://github.com/purepk/Smart-Humidity-Guard/tree/88dcb4a8b7356473b5e43eb96748f7ad1717cea2/code" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                <Github className="w-5 h-5" />
                View on GitHub
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

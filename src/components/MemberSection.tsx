import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import build from "@/assets/200.jpg";
import pruf from "@/assets/209.jpg";
import pure from "@/assets/227.jpg";
import prem from "@/assets/251.jpg";

const members = [
  {
    name: "Nutpong Promkaew",
    role: "Project Lead & Web Developer",
    description: "Responsible for system architecture and Web development",
    image: pure,
    initials: "YN"
  },
  {
    name: "Jinnawat Ladloi",
    role: "Hardware & Software Developer",
    description: "Specializes in sensor integration and circuit design",
    image: pruf,
    initials: "TM"
  },
  {
    name: "Arwitsakorn Tangpraditchai",
    role: "Presentation Team",
    description: "Make presentation plan and presentation video",
    image: build,
    initials: "TM"
  },
  {
    name: "Prem Supphasrisan",
    role: "Presentation Team",
    description: "Make presentation plan and presentation video",
    image: prem,
    initials: "TM"
  }
];

export function MemberSection() {
  return (
    <section id="member" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Project Team
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {members.map((member, index) => (
            <Card key={index} className="p-6 bg-card shadow-soft border-0 hover:shadow-elevation transition-smooth text-center">
              <Avatar className="w-32 h-32 mx-auto mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback className="text-2xl">{member.initials}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-primary mb-3">
                {member.role}
              </p>
              <p className="text-sm text-muted-foreground">
                {member.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

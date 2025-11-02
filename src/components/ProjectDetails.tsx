import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cpu, 
  Zap, 
  Wifi, 
  Database,
  Settings,
  BookOpen,
  Target,
  Users
} from "lucide-react";

const components = [
  {
    name: "Arduino Uno R3",
    description: "Main microcontroller unit",
    specs: "ATmega328P, 16MHz, 32KB Flash",
    icon: Cpu,
  },
  {
    name: "DHT22 Sensor",
    description: "Digital humidity & temperature sensor",
    specs: "±2% humidity, ±0.5°C temperature",
    icon: Zap,
  },
  {
    name: "ESP8266 Module",
    description: "WiFi connectivity for data transmission",
    specs: "802.11 b/g/n, 2.4GHz band",
    icon: Wifi,
  },
  {
    name: "Data Logger",
    description: "Local storage and cloud sync",
    specs: "SD card + real-time upload",
    icon: Database,
  },
];

const features = [
  {
    title: "Real-time Monitoring",
    description: "Continuous humidity and temperature tracking with 5-second update intervals",
    icon: Settings,
  },
  {
    title: "Data Visualization",
    description: "Weather-style interface with charts, trends, and historical data analysis",
    icon: BookOpen,
  },
  {
    title: "Smart Alerts",
    description: "Automated notifications for extreme humidity levels and environmental changes",
    icon: Target,
  },
  {
    title: "Remote Access",
    description: "WiFi-enabled remote monitoring through web interface and mobile compatibility",
    icon: Users,
  },
];

export function ProjectDetails() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Project Overview */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Research Project
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Project Methodology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            This Arduino-based humidity detection system combines precision sensors 
            with modern data visualization to create an advanced environmental monitoring solution.
          </p>
        </div>

        {/* Hardware Components */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            Hardware Components
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {components.map((component, index) => (
              <Card key={index} className="p-6 bg-card shadow-soft border-0 hover:shadow-elevation transition-smooth">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <component.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">{component.name}</h4>
                </div>
                <p className="text-muted-foreground mb-3">{component.description}</p>
                <Badge variant="secondary" className="text-xs">
                  {component.specs}
                </Badge>
              </Card>
            ))}
          </div>
        </div>

        {/* System Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            System Features
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 bg-gradient-data border-0 shadow-soft hover:shadow-elevation transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <Card className="p-8 bg-muted/30 border-0 shadow-soft">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Technical Specifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Measurement Range</h4>
              <p className="text-muted-foreground">Humidity: 0-100% RH</p>
              <p className="text-muted-foreground">Temperature: -40 to 80°C</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Accuracy</h4>
              <p className="text-muted-foreground">Humidity: ±2% RH</p>
              <p className="text-muted-foreground">Temperature: ±0.5°C</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Power Supply</h4>
              <p className="text-muted-foreground">5V DC via USB</p>
              <p className="text-muted-foreground">Power consumption: &lt;50mA</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Connectivity</h4>
              <p className="text-muted-foreground">WiFi 802.11 b/g/n</p>
              <p className="text-muted-foreground">Serial communication</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Update Rate</h4>
              <p className="text-muted-foreground">5-second intervals</p>
              <p className="text-muted-foreground">Real-time data streaming</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Data Storage</h4>
              <p className="text-muted-foreground">Local SD card logging</p>
              <p className="text-muted-foreground">Cloud synchronization</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
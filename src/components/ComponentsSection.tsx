import { Card } from "@/components/ui/card";
import { Cpu, Thermometer, Wallpaper } from "lucide-react";
import DHT22 from "@/assets/DHT22.jpg";
import Arduino from "@/assets/arduino-uno.jpg";
import LCD from "@/assets/LCD.jpg";
const components = [
  {
    name: "Arduino Uno R4",
    description: "Main microcontroller unit that processes sensor data and coordinates system operations.",
    icon: Cpu,
    image: Arduino
  },
  {
    name: "DHT22 Sensor",
    description: "Digital humidity and temperature sensor providing high-precision environmental measurements.",
    icon: Thermometer,
    image: DHT22
  },
  {
    //Change to LCD Display
    name: "LCD Display",
    description: "Enables wireless connectivity for remote data transmission and monitoring capabilities.",
    icon: Wallpaper,
    image: LCD
  }
];

export function ComponentsSection() {
  return (
    <section id="components" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Hardware Components
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {components.map((component, index) => (
            <Card key={index} className="overflow-hidden bg-card shadow-soft border-0 hover:shadow-elevation transition-smooth">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img 
                  src={component.image} 
                  alt={component.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-3 left-3 p-2 bg-primary/20 backdrop-blur-sm rounded-lg">
                  <component.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {component.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {component.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThermometerSun, Activity, Zap } from "lucide-react";
import heroImage from "@/assets/arduino-humidity.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-atmosphere overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-data opacity-50" />
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-medium">
                <Activity className="w-5 h-5" />
                <span>Arduino IoT Research Project</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Smart Humidity
                <span className="block bg-gradient-sky bg-clip-text text-transparent">
                  Detection System
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Real-time environmental monitoring using Arduino UNO R4 
                and DHT22 humidity and temperature sensors for precise measurements.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="atmospheric" size="xl" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                <ThermometerSun className="w-5 h-5" />
                Learn More
              </Button>
              <Button variant="weather" size="xl" onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}>
                <Zap className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevation">
              <img 
                src={heroImage} 
                alt="Arduino humidity sensor setup showing microcontroller and DHT22 sensor on breadboard"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-sky/10" />
            </div>
            
            {/* Floating Elements */}
            <Card className="absolute -top-6 -right-6 p-4 bg-card shadow-glow border-0">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                <span className="text-sm font-medium">Arduino UNO</span>
              </div>
            </Card>
            
            <Card className="absolute -bottom-6 -left-6 p-4 bg-card shadow-glow border-0">
              <div className="text-center">
                <div className="text-lg font-bold text-primary">DHT22</div>
                <div className="text-xs text-muted-foreground">Sensor Model</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
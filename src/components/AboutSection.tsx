import { Card } from "@/components/ui/card";
import { Droplets, TrendingDown, Wallpaper } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
            About this Project
          </h2>

          <p className="text-lg text-muted-foreground mb-12 text-center leading-relaxed">
            Smart Humidity Guard is an IoT research project utilizing Arduino Uno R4 
            for real-time environmental monitoring. The system measures humidity and temperature 
            levels with high precision, providing researchers and enthusiasts with valuable 
            atmospheric data for various applications including agriculture, climate studies, 
            and indoor environment optimization.
          </p>
          <h3 className="text-4xl font-bold text-foreground mb-8 text-center">
            Abstract
          </h3>

          <p className="text-lg text-muted-foreground mb-12 text-center leading-relaxed">
            This project aims to develop an automatic temperature and humidity monitoring system using 
            the Arduino UNO R4 WiFi board and the DHT22 sensor, which accurately measures ambient temperature 
            and relative humidity. The collected data are displayed in real-time on an LCD screen, allowing users 
            to conveniently observe environmental conditions. Additionally, the system calculates the dew point 
            to assess the risk of condensation. When the dew point approaches the ambient temperature beyond a 
            defined threshold, the system displays a warning message on the LCD screen to help prevent possible 
            damage to equipment or stored materials. This project provides an efficient way to monitor environmental 
            conditions and can be further expanded into an IoT-based weather monitoring system for remote observation 
            and data logging in the future.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card shadow-soft border-0 hover:shadow-elevation transition-smooth">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Droplets className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Automated Monitoring
                </h3>
                <p className="text-muted-foreground text-sm">
                  The system uses DHT22 sensor to continuously measure humidity and temperature, 
                  providing real-time data updates every seconds for accurate environmental tracking.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card shadow-soft border-0 hover:shadow-elevation transition-smooth">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Wallpaper className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  LCD Data Display
                </h3>
                <p className="text-muted-foreground text-sm">
                  The measured temperature and humidity values from the DHT22 sensor are displayed directly on an LCD
                  screen in real time. This allows users to easily monitor environmental conditions without the need for an
                  external device or network connection.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card shadow-soft border-0 hover:shadow-elevation transition-smooth">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <TrendingDown className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Efficient Data Collection
                </h3>
                <p className="text-muted-foreground text-sm">
                  By providing precise atmospheric measurements, this system helps researchers 
                  make informed decisions while optimizing resource usage and improving accuracy.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

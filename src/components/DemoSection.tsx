import { Card } from "@/components/ui/card";
import { Play, X } from "lucide-react";
import { useState } from "react";

export function DemoSection() {
    const [isPlaying, setIsPlaying] = useState(false);

    // 3. URL ของวิดีโอ - แก้ไขเป็นรูปแบบ /embed/
    // และเพิ่ม ?autoplay=1&mute=1 เพื่อให้เล่นอัตโนมัติ (และต้องปิดเสียง)
    const videoSrc = "https://www.youtube.com/embed/xVUT3IJWjfM?autoplay=1&mute=1";

    return (
        <section id="demo" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
                        Video Demo
                    </h2>
                    <p className="text-lg text-muted-foreground mb-12 text-center">
                        Watch the Arduino Humidity Guard system in action, demonstrating real-time
                        monitoring and display though LCD.
                    </p>

                    <Card className="overflow-hidden shadow-elevation border-0">
                        <div className="aspect-video bg-muted relative group">

                            {/* 4. "หน้าปก" (Cover) - จะแสดงเมื่อ !isPlaying */}
                            {!isPlaying && (
                                <div
                                    className="absolute inset-0 flex items-center justify-center bg-gradient-data cursor-pointer"
                                    onClick={() => setIsPlaying(true)} // <-- คลิกเพื่อตั้งค่า state เป็น true
                                >
                                    <div className="text-center">
                                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm mb-4 group-hover:scale-110 transition-smooth">
                                            <Play className="w-10 h-10 text-primary ml-1" />
                                        </div>
                                        <p className="text-foreground font-medium">Project Demo Video</p>
                                        <p className="text-sm text-muted-foreground mt-2">Click to watch demonstration</p>
                                    </div>
                                </div>
                            )}

                            {/* 5. "วิดีโอ" (Iframe) - จะแสดงเมื่อ isPlaying */}
                            {isPlaying && (
                                <>
                                    <iframe
                                        className="absolute inset-0 w-full h-full"
                                        src={videoSrc} // <-- ใช้ URL ที่แก้ไขแล้ว
                                        title="Arduino Humidity Detection Demo"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />

                                    {/* 6. "ปุ่มปิด" - เพื่อซ่อนวิดีโอและกลับไปหน้าปก */}
                                    <button
                                        onClick={() => setIsPlaying(false)} // <-- คลิกเพื่อตั้งค่า state เป็น false
                                        className="absolute top-2 right-2 z-10 p-2 bg-background/50 backdrop-blur-sm rounded-full text-foreground hover:bg-background/80"
                                        aria-label="Close video"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </>
                            )}

                        </div>
                    </Card>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-muted-foreground">
                            This demonstration showcases the project's monitoring functionality,
                            data accuracy, and user interface in real-world conditions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
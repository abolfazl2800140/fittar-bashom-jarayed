import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto text-center">
          {/* CTA Button */}
          <div className="flex justify-center items-center animate-bounce-in">
            <Button className="btn-hero text-xl px-10 py-6 shadow-2xl">
              <Play className="h-6 w-6 mr-3" />
              شروع کنید
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
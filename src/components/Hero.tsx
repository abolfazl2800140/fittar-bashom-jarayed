import { Button } from "@/components/ui/button";
import { Play, TrendingUp, Users, Star } from "lucide-react";
import heroImage from "@/assets/hero-fitness.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="ورزش و فناوری" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Stats Bar */}
          <div className="flex justify-center items-center space-x-8 space-x-reverse mb-8 animate-fade-in">
            <div className="flex items-center space-x-2 space-x-reverse text-sm font-medium">
              <Users className="h-5 w-5 text-primary" />
              <span>۱۰۰۰+ مربی</span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse text-sm font-medium">
              <Star className="h-5 w-5 text-accent" />
              <span>۴.۹ امتیاز</span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse text-sm font-medium">
              <TrendingUp className="h-5 w-5 text-success" />
              <span>۵۰۰۰+ کاربر فعال</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-gradient-primary">مربی</span>{" "}
            <span className="text-foreground">ایده‌آل خود را</span>
            <br />
            <span className="text-gradient-accent">پیدا کنید</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            پلتفرم هوشمند ارتباط مربیان و ورزشکاران با امکانات پیشرفته AI برای برنامه‌ریزی تمرین و تغذیه شخصی‌سازی شده
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-bounce-in">
            <Button className="btn-hero text-xl px-10 py-6">
              <Play className="h-6 w-6 mr-3" />
              شروع کنید
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-background/80 backdrop-blur-sm">
              مشاهده مربیان
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in">
            <div className="card-energy p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">مربیان حرفه‌ای</h3>
              <p className="text-muted-foreground text-sm">دسترسی به بهترین مربیان با تجربه و تخصص‌های مختلف</p>
            </div>

            <div className="card-energy p-6 text-center">
              <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">پیشرفت هوشمند</h3>
              <p className="text-muted-foreground text-sm">ردیابی پیشرفت با هوش مصنوعی و گزارش‌های تحلیلی</p>
            </div>

            <div className="card-energy p-6 text-center">
              <div className="w-12 h-12 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">جامعه فعال</h3>
              <p className="text-muted-foreground text-sm">عضویت در چالش‌ها و رقابت‌های سالم با سایر کاربران</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-accent rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;
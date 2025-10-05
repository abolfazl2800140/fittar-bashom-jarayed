import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Clock, Users } from "lucide-react";
import Header from "@/components/Header";

const VideoDetail = () => {
  const { id } = useParams();

  const videos = {
    "1": {
      title: "تمرین HIIT مبتدی",
      duration: "۲۰:۳۰",
      instructor: "مربی سارا محمدی",
      level: "مبتدی",
      views: "۲,۸۴۳",
      description: "یک تمرین HIIT کامل برای مبتدی‌ها که شامل حرکات ساده و موثر است.",
      equipment: "بدون نیاز به وسیله",
      sections: [
        { time: "۰:۰۰ - ۲:۰۰", title: "گرم کردن" },
        { time: "۲:۰۰ - ۱۵:۰۰", title: "تمرین اصلی" },
        { time: "۱۵:۰۰ - ۲۰:۳۰", title: "سرد کردن و کشش" },
      ],
    },
    "2": {
      title: "یوگای صبحگاهی",
      duration: "۱۵:۰۰",
      instructor: "مربی نیلوفر احمدی",
      level: "همه سطوح",
      views: "۱,۹۲۷",
      description: "یک جلسه یوگای آرامش‌بخش برای شروع روز با انرژی و آرامش.",
      equipment: "مت یوگا",
      sections: [
        { time: "۰:۰۰ - ۳:۰۰", title: "تنفس و تمرکز" },
        { time: "۳:۰۰ - ۱۲:۰۰", title: "حرکات یوگا" },
        { time: "۱۲:۰۰ - ۱۵:۰۰", title: "مدیتیشن" },
      ],
    },
    "3": {
      title: "تمرین قدرتی خانگی",
      duration: "۲۵:۴۵",
      instructor: "مربی محمد رضایی",
      level: "متوسط",
      views: "۳,۱۵۶",
      description: "تمرین قدرتی کامل برای تمام بدن با استفاده از وزن بدن و دمبل.",
      equipment: "دمبل، مت",
      sections: [
        { time: "۰:۰۰ - ۵:۰۰", title: "گرم کردن پویا" },
        { time: "۵:۰۰ - ۲۰:۰۰", title: "تمرین قدرتی" },
        { time: "۲۰:۰۰ - ۲۵:۴۵", title: "کشش" },
      ],
    },
  };

  const video = videos[id as keyof typeof videos];

  if (!video) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">ویدیو یافت نشد</h1>
          <Link to="/">
            <Button>بازگشت به صفحه اصلی</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowRight className="h-4 w-4 ml-2" />
            بازگشت
          </Button>
        </Link>

        <Card className="card-energy p-0 overflow-hidden">
          {/* Video Player Placeholder */}
          <div className="aspect-video bg-gradient-primary flex items-center justify-center">
            <div className="text-center text-white">
              <Play className="h-20 w-20 mx-auto mb-4" />
              <p className="text-lg">پخش ویدیو</p>
            </div>
          </div>

          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold">{video.title}</h1>
              <Badge variant="outline" className="text-base px-4 py-1">
                {video.level}
              </Badge>
            </div>

            <div className="flex items-center space-x-6 space-x-reverse mb-6 text-muted-foreground">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Clock className="h-4 w-4" />
                <span>{video.duration}</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Users className="h-4 w-4" />
                <span>{video.views} بازدید</span>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-lg mb-2">مربی: <span className="font-semibold">{video.instructor}</span></p>
              <p className="text-muted-foreground">{video.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="font-bold mb-2">وسایل مورد نیاز:</h3>
              <Badge variant="secondary">{video.equipment}</Badge>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-4">بخش‌های ویدیو</h3>
              <div className="space-y-3">
                {video.sections.map((section, index) => (
                  <Card key={index} className="p-4 bg-muted/30">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{section.title}</span>
                      <span className="text-sm text-muted-foreground">{section.time}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default VideoDetail;

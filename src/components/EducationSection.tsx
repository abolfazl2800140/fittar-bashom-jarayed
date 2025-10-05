import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, BookOpen, Award, Clock, Users } from "lucide-react";

const EducationSection = () => {
  const articles = [
    {
      id: "1",
      title: "راهنمای کامل تغذیه ورزشکاران",
      excerpt: "همه چیز درباره تغذیه صحیح قبل، حین و بعد از تمرین",
      author: "دکتر احمد نوری",
      readTime: "۸ دقیقه",
      category: "تغذیه",
      isVerified: true,
    },
    {
      id: "2", 
      title: "تکنیک‌های صحیح بدنسازی",
      excerpt: "آموزش حرکات اصولی برای جلوگیری از آسیب",
      author: "مربی علی رضایی",
      readTime: "۱۲ دقیقه",
      category: "تمرین",
      isVerified: true,
    },
    {
      id: "3",
      title: "اهمیت استراحت در برنامه تمرینی",
      excerpt: "چرا استراحت بخش مهمی از پیشرفت شماست",
      author: "دکتر مریم احمدی",
      readTime: "۶ دقیقه", 
      category: "ریکاوری",
      isVerified: true,
    },
  ];

  const videos = [
    {
      id: "1",
      title: "تمرین HIIT مبتدی",
      duration: "۲۰:۳۰",
      instructor: "مربی سارا محمدی",
      level: "مبتدی",
      views: "۲,۸۴۳",
    },
    {
      id: "2",
      title: "یوگای صبحگاهی",
      duration: "۱۵:۰۰",
      instructor: "مربی نیلوفر احمدی",
      level: "همه سطوح",
      views: "۱,۹۲۷",
    },
    {
      id: "3",
      title: "تمرین قدرتی خانگی",
      duration: "۲۵:۴۵",
      instructor: "مربی محمد رضایی",
      level: "متوسط",
      views: "۳,۱۵۶",
    },
  ];

  return (
    <div className="min-h-screen bg-muted/30 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-primary">آموزش</span> و محتوای آموزشی
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            مجموعه کاملی از مقالات تخصصی و ویدئوهای آموزشی تایید شده توسط متخصصان
          </p>
        </div>

        {/* Featured Article */}
        <Card className="card-energy p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-gradient-accent text-white">
                مقاله ویژه
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                راهنمای جامع شروع ورزش
              </h2>
              <p className="text-muted-foreground mb-6">
                مجموعه کاملی از نکات و راهنمایی‌ها برای شروع صحیح ورزش و تناسب اندام. 
                این مقاله توسط تیم متخصصان ما تهیه شده است.
              </p>
              <div className="flex items-center space-x-4 space-x-reverse mb-6">
                <div className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span>۱۵ دقیقه مطالعه</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
                  <Award className="h-4 w-4 text-success" />
                  <span>تایید شده</span>
                </div>
              </div>
              <Button className="btn-hero">
                <BookOpen className="h-5 w-5 ml-2" />
                شروع مطالعه
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-primary rounded-lg flex items-center justify-center">
                <Play className="h-16 w-16 text-white" />
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Articles Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <BookOpen className="h-6 w-6 ml-2 text-primary" />
              مقالات تخصصی
            </h2>
            <div className="space-y-4">
              {articles.map((article) => (
                <Card key={article.id} className="card-energy p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant={article.category === "تغذیه" ? "default" : 
                                  article.category === "تمرین" ? "secondary" : "outline"}>
                      {article.category}
                    </Badge>
                    {article.isVerified && (
                      <div className="flex items-center space-x-1 space-x-reverse text-success text-sm">
                        <Award className="h-4 w-4" />
                        <span>تایید شده</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2">{article.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      <p>نویسنده: {article.author}</p>
                      <div className="flex items-center space-x-1 space-x-reverse mt-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <Link to={`/article/${article.id}`}>
                      <Button variant="outline" size="sm">
                        مطالعه
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Videos Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Play className="h-6 w-6 ml-2 text-accent" />
              ویدئوهای آموزشی
            </h2>
            <div className="space-y-4">
              {videos.map((video) => (
                <Link key={video.id} to={`/video/${video.id}`}>
                  <Card className="card-energy p-6 hover:shadow-lg transition-all cursor-pointer">
                    <div className="flex items-start space-x-4 space-x-reverse">
                      <div className="relative">
                        <div className="w-20 h-16 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <Play className="h-6 w-6 text-white" />
                        </div>
                        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-bold mb-2">{video.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          مربی: {video.instructor}
                        </p>
                        <div className="flex items-center space-x-4 space-x-reverse text-xs text-muted-foreground">
                          <Badge variant="outline" className="text-xs">
                            {video.level}
                          </Badge>
                          <div className="flex items-center space-x-1 space-x-reverse">
                            <Users className="h-3 w-3" />
                            <span>{video.views} بازدید</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Categories */}
        <Card className="card-energy p-6">
          <h2 className="text-xl font-bold mb-4">دسته‌بندی محتوا</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "تغذیه", count: 45, icon: "🥗" },
              { name: "تمرین", count: 62, icon: "💪" },
              { name: "ریکاوری", count: 28, icon: "😴" },
              { name: "انگیزشی", count: 34, icon: "🔥" },
            ].map((category) => (
              <Button
                key={category.name}
                variant="outline"
                className="h-auto p-4 flex flex-col items-center space-y-2"
              >
                <span className="text-2xl">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
                <span className="text-xs text-muted-foreground">
                  {category.count} محتوا
                </span>
              </Button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EducationSection;
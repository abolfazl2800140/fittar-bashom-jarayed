import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  TrendingUp, 
  Calendar, 
  Brain, 
  Bell, 
  BookOpen,
  DollarSign,
  Target,
  MessageSquare,
  Camera
} from "lucide-react";

const CoachDashboard = () => {
  const coachStats = {
    totalTrainees: 45,
    activePrograms: 23,
    monthlyRevenue: 28500000,
    avgRating: 4.9,
    newRequests: 7,
    completedSessions: 156,
  };

  const trainees = [
    {
      id: "1",
      name: "احمد محمدی",
      avatar: "👨‍💼",
      program: "کاهش وزن",
      progress: 78,
      lastActivity: "۲ ساعت پیش",
      needsAttention: false,
    },
    {
      id: "2", 
      name: "مریم احمدی",
      avatar: "👩‍💼",
      program: "عضله‌سازی",
      progress: 45,
      lastActivity: "دیروز",
      needsAttention: true,
    },
    {
      id: "3",
      name: "علی رضایی",
      avatar: "👨‍💻",
      program: "تناسب اندام",
      progress: 92,
      lastActivity: "۱ ساعت پیش",
      needsAttention: false,
    },
  ];

  const notifications = [
    {
      id: "1",
      type: "new_request",
      title: "درخواست جدید",
      message: "سارا احمدی درخواست مربیگری کرده",
      time: "۱۰ دقیقه پیش",
      isRead: false,
    },
    {
      id: "2",
      type: "review",
      title: "نظر جدید",
      message: "علی رضایی ۵ ستاره داده",
      time: "۳۰ دقیقه پیش",
      isRead: false,
    },
    {
      id: "3",
      type: "payment",
      title: "پرداخت دریافتی",
      message: "پرداخت ماهانه احمد محمدی",
      time: "۲ ساعت پیش",
      isRead: true,
    },
  ];

  const aiSuggestions = [
    {
      trainee: "احمد محمدی",
      suggestion: "کاهش شدت تمرین کاردیو و تمرکز بر تمرینات قدرتی",
      confidence: 85,
      reason: "بر اساس تحلیل تصاویر، عضله‌سازی خوبی داشته",
    },
    {
      trainee: "مریم احمدی", 
      suggestion: "افزایش پروتئین در رژیم غذایی",
      confidence: 92,
      reason: "کمبود پروتئین در تحلیل غذایی مشخص است",
    },
  ];

  return (
    <div className="min-h-screen bg-muted/30 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              داشبورد <span className="text-gradient-primary">مربی</span>
            </h1>
            <p className="text-muted-foreground">مدیریت ورزشکاران و برنامه‌های تمرینی</p>
          </div>
          <div className="flex items-center space-x-4 space-x-reverse mt-4 md:mt-0">
            <Button variant="outline">
              <Bell className="h-4 w-4 ml-2" />
              اعلان‌ها ({coachStats.newRequests})
            </Button>
            <Button className="btn-hero">
              <Brain className="h-4 w-4 ml-2" />
              دستیار AI
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="card-energy p-4 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-2">
              <Users className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold">{coachStats.totalTrainees}</p>
            <p className="text-sm text-muted-foreground">ورزشکار فعال</p>
          </Card>

          <Card className="card-energy p-4 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-accent rounded-full mx-auto mb-2">
              <Target className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold">{coachStats.activePrograms}</p>
            <p className="text-sm text-muted-foreground">برنامه فعال</p>
          </Card>

          <Card className="card-energy p-4 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-success rounded-full mx-auto mb-2">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold">{(coachStats.monthlyRevenue / 1000000).toFixed(1)}M</p>
            <p className="text-sm text-muted-foreground">درآمد ماهانه</p>
          </Card>

          <Card className="card-energy p-4 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-2">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold">{coachStats.avgRating}</p>
            <p className="text-sm text-muted-foreground">امتیاز میانگین</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Trainees */}
          <div className="lg:col-span-2">
            <Card className="card-energy p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center">
                  <Users className="h-5 w-5 ml-2 text-primary" />
                  ورزشکاران فعال
                </h2>
                <Button variant="outline" size="sm">
                  مشاهده همه
                </Button>
              </div>

              <div className="space-y-4">
                {trainees.map((trainee) => (
                  <div 
                    key={trainee.id} 
                    className={`p-4 rounded-lg border transition-colors ${
                      trainee.needsAttention 
                        ? "border-accent/30 bg-accent/5" 
                        : "border-border bg-background"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <div className="text-2xl">{trainee.avatar}</div>
                        <div>
                          <h3 className="font-medium">{trainee.name}</h3>
                          <p className="text-sm text-muted-foreground">{trainee.program}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 space-x-reverse">
                        {trainee.needsAttention && (
                          <Badge variant="destructive" className="text-xs">
                            نیاز به توجه
                          </Badge>
                        )}
                        <span className="text-xs text-muted-foreground">
                          {trainee.lastActivity}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>پیشرفت برنامه</span>
                        <span>{trainee.progress}%</span>
                      </div>
                      <Progress value={trainee.progress} className="h-2" />
                    </div>

                    <div className="flex items-center space-x-2 space-x-reverse mt-4">
                      <Button variant="outline" size="sm">
                        <MessageSquare className="h-3 w-3 ml-1" />
                        پیام
                      </Button>
                      <Button variant="outline" size="sm">
                        <Calendar className="h-3 w-3 ml-1" />
                        برنامه
                      </Button>
                      <Button variant="outline" size="sm">
                        <Camera className="h-3 w-3 ml-1" />
                        تحلیل AI
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Notifications & AI */}
          <div className="space-y-6">
            {/* Notifications */}
            <Card className="card-energy p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold flex items-center">
                  <Bell className="h-5 w-5 ml-2 text-accent" />
                  اعلان‌ها
                </h2>
                <Badge variant="secondary">
                  {notifications.filter(n => !n.isRead).length} جدید
                </Badge>
              </div>

              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-3 rounded-lg transition-colors ${
                      !notification.isRead 
                        ? "bg-primary/10 border border-primary/20" 
                        : "bg-muted/50"
                    }`}
                  >
                    <h4 className="font-medium text-sm">{notification.title}</h4>
                    <p className="text-xs text-muted-foreground mb-1">
                      {notification.message}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {notification.time}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* AI Suggestions */}
            <Card className="card-energy p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Brain className="h-5 w-5 ml-2 text-accent" />
                پیشنهادات AI
              </h2>

              <div className="space-y-4">
                {aiSuggestions.map((suggestion, index) => (
                  <div key={index} className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-sm">{suggestion.trainee}</h4>
                      <Badge variant="outline" className="text-xs">
                        {suggestion.confidence}% اطمینان
                      </Badge>
                    </div>
                    <p className="text-sm mb-2">{suggestion.suggestion}</p>
                    <p className="text-xs text-muted-foreground">
                      {suggestion.reason}
                    </p>
                    <div className="flex items-center space-x-2 space-x-reverse mt-3">
                      <Button variant="outline" size="sm" className="text-xs">
                        اعمال
                      </Button>
                      <Button variant="ghost" size="sm" className="text-xs">
                        نادیده بگیر
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="card-energy p-4 text-center hover:shadow-lg transition-all cursor-pointer">
            <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-bold mb-1">درخواست‌های جدید</h3>
            <p className="text-sm text-muted-foreground">{coachStats.newRequests} درخواست</p>
          </Card>

          <Card className="card-energy p-4 text-center hover:shadow-lg transition-all cursor-pointer">
            <BookOpen className="h-8 w-8 mx-auto mb-2 text-accent" />
            <h3 className="font-bold mb-1">ایجاد برنامه</h3>
            <p className="text-sm text-muted-foreground">برنامه تمرینی جدید</p>
          </Card>

          <Card className="card-energy p-4 text-center hover:shadow-lg transition-all cursor-pointer">
            <Brain className="h-8 w-8 mx-auto mb-2 text-success" />
            <h3 className="font-bold mb-1">تحلیل AI</h3>
            <p className="text-sm text-muted-foreground">تحلیل عکس ورزشکار</p>
          </Card>

          <Card className="card-energy p-4 text-center hover:shadow-lg transition-all cursor-pointer">
            <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-bold mb-1">تقویم</h3>
            <p className="text-sm text-muted-foreground">برنامه‌ریزی جلسات</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CoachDashboard;
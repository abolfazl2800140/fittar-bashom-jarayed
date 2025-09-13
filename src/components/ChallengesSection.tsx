import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Users, Calendar, Target, Clock, Flame } from "lucide-react";

const ChallengesSection = () => {
  const activeChallenge = {
    id: "1",
    title: "چالش ۳۰ روزه شکم",
    description: "۳۰ روز تمرین مداوم برای عضلات شکم",
    progress: 65,
    daysLeft: 11,
    participants: 1247,
    reward: "مدال طلایی + ۵۰۰ امتیاز",
    dailyTask: "۵۰ دراز و نشست + ۳۰ ثانیه پلانک",
  };

  const availableChallenges = [
    {
      id: "2",
      title: "هفته قدرت",
      description: "۷ روز تمرین قدرتی پیشرفته",
      duration: "۷ روز",
      difficulty: "سخت",
      participants: 523,
      reward: "مدال نقره‌ای",
      startDate: "۱۵ آذر",
      category: "قدرت",
      isPopular: true,
    },
    {
      id: "3",
      title: "چالش ۱۰۰۰۰ قدم",
      description: "روزانه ۱۰ هزار قدم برای یک ماه",
      duration: "۳۰ روز",
      difficulty: "متوسط",
      participants: 892,
      reward: "مدال برنزی",
      startDate: "۲۰ آذر",
      category: "کاردیو",
      isPopular: false,
    },
    {
      id: "4",
      title: "یوگا صبحگاهی",
      description: "۲۱ روز یوگا برای آرامش و انعطاف",
      duration: "۲۱ روز",
      difficulty: "آسان",
      participants: 654,
      reward: "گواهی تکمیل",
      startDate: "۲۵ آذر",
      category: "یوگا",
      isPopular: true,
    },
    {
      id: "5",
      title: "چالش کراس فیت",
      description: "تمرینات WOD روزانه برای ۲ هفته",
      duration: "۱۴ روز",
      difficulty: "سخت",
      participants: 287,
      reward: "جایزه نقدی",
      startDate: "۱ دی",
      category: "کراس فیت",
      isPopular: false,
    },
  ];

  const leaderboard = [
    { rank: 1, name: "احمد محمدی", score: 2840, avatar: "👨‍💼" },
    { rank: 2, name: "مریم احمدی", score: 2690, avatar: "👩‍💼" },
    { rank: 3, name: "علی رضایی", score: 2580, avatar: "👨‍💻" },
    { rank: 4, name: "شما", score: 2420, avatar: "👤", isCurrentUser: true },
    { rank: 5, name: "فاطمه نوری", score: 2380, avatar: "👩‍🔬" },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "آسان": return "success";
      case "متوسط": return "warning";
      case "سخت": return "destructive";
      default: return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-primary">چالش‌های</span> گروهی
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            با سایر ورزشکاران همراه شوید و در چالش‌های مختلف شرکت کنید
          </p>
        </div>

        {/* Active Challenge */}
        <Card className="card-energy p-6 md:p-8 border-2 border-primary/20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Trophy className="h-6 w-6 text-accent" />
              <h2 className="text-xl font-bold">چالش فعال شما</h2>
            </div>
            <Badge className="bg-gradient-accent text-white">
              در حال انجام
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">{activeChallenge.title}</h3>
              <p className="text-muted-foreground mb-4">{activeChallenge.description}</p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">پیشرفت کلی</span>
                    <span className="text-sm text-muted-foreground">
                      {activeChallenge.progress}%
                    </span>
                  </div>
                  <Progress value={activeChallenge.progress} className="h-3" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <Clock className="h-5 w-5 mx-auto mb-1 text-primary" />
                    <p className="text-sm font-medium">{activeChallenge.daysLeft} روز</p>
                    <p className="text-xs text-muted-foreground">باقی مانده</p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <Users className="h-5 w-5 mx-auto mb-1 text-success" />
                    <p className="text-sm font-medium">{activeChallenge.participants.toLocaleString('fa-IR')}</p>
                    <p className="text-xs text-muted-foreground">شرکت‌کننده</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-muted/50 rounded-lg p-6">
                <h4 className="font-bold mb-4 flex items-center">
                  <Target className="h-5 w-5 ml-2 text-accent" />
                  تسک امروز
                </h4>
                <p className="text-lg mb-4">{activeChallenge.dailyTask}</p>
                <Button className="btn-success w-full mb-4">
                  ثبت تکمیل تسک
                </Button>
                
                <div className="p-3 bg-success/10 border border-success/20 rounded-lg">
                  <h5 className="font-medium text-success mb-1">جایزه نهایی</h5>
                  <p className="text-sm text-muted-foreground">{activeChallenge.reward}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Available Challenges */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Flame className="h-6 w-6 ml-2 text-accent" />
              چالش‌های در دسترس
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {availableChallenges.map((challenge, index) => (
                <Card 
                  key={challenge.id} 
                  className="card-energy p-6 h-full animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="outline">{challenge.category}</Badge>
                      {challenge.isPopular && (
                        <Badge className="bg-gradient-accent text-white">محبوب</Badge>
                      )}
                    </div>

                    <h3 className="font-bold text-lg mb-2">{challenge.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                      {challenge.description}
                    </p>

                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{challenge.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{challenge.participants}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <Badge variant={getDifficultyColor(challenge.difficulty) as any}>
                          {challenge.difficulty}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          شروع: {challenge.startDate}
                        </span>
                      </div>

                      <div className="p-3 bg-muted/50 rounded-lg">
                        <p className="text-sm font-medium mb-1">جایزه:</p>
                        <p className="text-xs text-muted-foreground">{challenge.reward}</p>
                      </div>

                      <Button variant="outline" className="w-full">
                        ثبت نام
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Leaderboard */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Trophy className="h-6 w-6 ml-2 text-accent" />
              جدول امتیازات
            </h2>

            <Card className="card-energy p-6">
              <div className="space-y-3">
                {leaderboard.map((user) => (
                  <div
                    key={user.rank}
                    className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                      user.isCurrentUser 
                        ? "bg-primary/10 border border-primary/20" 
                        : "bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        user.rank === 1 ? "bg-gradient-accent text-white" :
                        user.rank === 2 ? "bg-muted text-muted-foreground" :
                        user.rank === 3 ? "bg-gradient-success text-white" :
                        "bg-muted text-muted-foreground"
                      }`}>
                        {user.rank}
                      </div>
                      <span className="text-xl">{user.avatar}</span>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        {user.isCurrentUser && (
                          <Badge variant="outline" className="text-xs">شما</Badge>
                        )}
                      </div>
                    </div>
                    <div className="text-left">
                      <p className="font-bold">{user.score.toLocaleString('fa-IR')}</p>
                      <p className="text-xs text-muted-foreground">امتیاز</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Challenge Stats */}
            <Card className="card-energy p-6 mt-6">
              <h3 className="font-bold mb-4">آمار شما</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm">چالش‌های تکمیل شده</span>
                  <span className="font-bold">۷</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">امتیاز کل</span>
                  <span className="font-bold">۲,۴۲۰</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">رتبه کلی</span>
                  <span className="font-bold">#۲۴</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">نشان‌های کسب شده</span>
                  <span className="font-bold">۳</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengesSection;
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Target, 
  Award, 
  Camera, 
  Brain, 
  CalendarDays,
  Dumbbell,
  Heart,
  Zap
} from "lucide-react";

const UserDashboard = () => {
  const userStats = {
    currentWeight: 75,
    targetWeight: 70,
    weeklyProgress: 85,
    totalWorkouts: 24,
    streak: 7,
    caloriesBurned: 2340,
  };

  const progressData = [
    { week: "هفته ۱", weight: 78, muscle: 32 },
    { week: "هفته ۲", weight: 77, muscle: 32.5 },
    { week: "هفته ۳", weight: 76, muscle: 33 },
    { week: "هفته ۴", weight: 75, muscle: 33.5 },
  ];

  const leaderboardData = [
    { rank: 1, name: "احمد محمدی", score: 2840, avatar: "👨‍💼" },
    { rank: 2, name: "شما", score: 2750, avatar: "👤", isCurrentUser: true },
    { rank: 3, name: "مریم احمدی", score: 2690, avatar: "👩‍💼" },
    { rank: 4, name: "علی رضایی", score: 2580, avatar: "👨‍💻" },
    { rank: 5, name: "فاطمه نوری", score: 2420, avatar: "👩‍🔬" },
  ];

  return (
    <div className="min-h-screen bg-muted/30 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center md:text-right">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            سلام، <span className="text-gradient-primary">امیر!</span>
          </h1>
          <p className="text-muted-foreground">امروز روز عالی برای تمرین است 💪</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="card-energy p-4 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-2">
              <Dumbbell className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold">{userStats.totalWorkouts}</p>
            <p className="text-sm text-muted-foreground">تمرین انجام شده</p>
          </Card>

          <Card className="card-energy p-4 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-accent rounded-full mx-auto mb-2">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold">{userStats.streak}</p>
            <p className="text-sm text-muted-foreground">روز پیاپی</p>
          </Card>

          <Card className="card-energy p-4 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-success rounded-full mx-auto mb-2">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold">{userStats.caloriesBurned}</p>
            <p className="text-sm text-muted-foreground">کالری سوزانده</p>
          </Card>

          <Card className="card-energy p-4 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-2">
              <Target className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold">{userStats.currentWeight}kg</p>
            <p className="text-sm text-muted-foreground">وزن فعلی</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Progress Section */}
          <Card className="card-energy p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <TrendingUp className="h-5 w-5 ml-2 text-primary" />
                پیشرفت هفتگی
              </h2>
              <Badge variant="secondary">{userStats.weeklyProgress}% تکمیل شده</Badge>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">هدف وزن</span>
                  <span className="text-sm text-muted-foreground">
                    {userStats.currentWeight}kg / {userStats.targetWeight}kg
                  </span>
                </div>
                <Progress value={userStats.weeklyProgress} className="h-2" />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                {progressData.map((data, index) => (
                  <div key={index} className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">{data.week}</p>
                    <p className="font-bold">{data.weight}kg</p>
                    <p className="text-xs text-success">{data.muscle}% عضله</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* AI Analysis */}
          <Card className="card-energy p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <Brain className="h-5 w-5 ml-2 text-accent" />
                تحلیل هوشمند
              </h2>
              <Button className="btn-energy" size="sm">
                <Camera className="h-4 w-4 ml-1" />
                آپلود تصویر
              </Button>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-medium mb-2">گزارش هوش مصنوعی</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  بر اساس تصاویر شما، پیشرفت قابل توجهی در عضله‌سازی داشته‌اید. 
                  توصیه می‌شود تمرینات کاردیو را افزایش دهید.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    کاهش ۳% چربی
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    افزایش ۵% عضله
                  </Badge>
                </div>
              </div>

              <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                <h4 className="font-medium text-success mb-2">مکمل پیشنهادی</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  پروتئین وی + کراتین برای بهبود عملکرد
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  مشاهده مکمل‌ها
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Leaderboard */}
        <Card className="card-energy p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold flex items-center">
              <Award className="h-5 w-5 ml-2 text-accent" />
              جدول امتیازات
            </h2>
            <Badge variant="secondary">رتبه ۲ در سطح شما</Badge>
          </div>

          <div className="space-y-3">
            {leaderboardData.map((user) => (
              <div
                key={user.rank}
                className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                  user.isCurrentUser 
                    ? "bg-primary/10 border border-primary/20" 
                    : "bg-muted/50 hover:bg-muted/80"
                }`}
              >
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    user.rank === 1 ? "bg-gradient-accent text-white" :
                    user.rank === 2 ? "bg-gradient-primary text-white" :
                    user.rank === 3 ? "bg-gradient-success text-white" :
                    "bg-muted text-muted-foreground"
                  }`}>
                    {user.rank}
                  </div>
                  <span className="text-2xl">{user.avatar}</span>
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

          <Button variant="outline" className="w-full mt-4">
            مشاهده جدول کامل
          </Button>
        </Card>

        {/* Today's Schedule */}
        <Card className="card-energy p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold flex items-center">
              <CalendarDays className="h-5 w-5 ml-2 text-primary" />
              برنامه امروز
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <h3 className="font-medium mb-2">تمرین صبح</h3>
              <p className="text-sm text-muted-foreground mb-2">۳۰ دقیقه کاردیو</p>
              <p className="text-xs text-success">۹:۰۰ صبح</p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h3 className="font-medium mb-2">وعده غذایی</h3>
              <p className="text-sm text-muted-foreground mb-2">۲۰۰گ سینه مرغ</p>
              <p className="text-xs text-accent">۱۲:۰۰ ظهر</p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h3 className="font-medium mb-2">تمرین عصر</h3>
              <p className="text-sm text-muted-foreground mb-2">تمرین قدرتی</p>
              <p className="text-xs text-primary">۱۸:۰۰ عصر</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;
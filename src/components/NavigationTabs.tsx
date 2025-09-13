import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Home, 
  Users, 
  BookOpen, 
  Pill, 
  Trophy, 
  MessageSquare, 
  User, 
  Settings,
  Dumbbell,
  Brain
} from "lucide-react";
import CoachesSection from "./CoachesSection";
import UserDashboard from "./UserDashboard";
import EducationSection from "./EducationSection";
import SupplementsSection from "./SupplementsSection";
import ChallengesSection from "./ChallengesSection";
import ChatSection from "./ChatSection";
import CoachDashboard from "./CoachDashboard";
import SettingsSection from "./SettingsSection";

const NavigationTabs = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [userType, setUserType] = useState<"trainee" | "coach">("trainee");

  const traineeTabsData = [
    { id: "home", label: "خانه", icon: Home },
    { id: "coaches", label: "مربیان", icon: Users },
    { id: "education", label: "آموزش", icon: BookOpen },
    { id: "supplements", label: "مکمل‌ها", icon: Pill },
    { id: "challenges", label: "چالش‌ها", icon: Trophy },
    { id: "chat", label: "پیام‌ها", icon: MessageSquare },
    { id: "profile", label: "پروفایل", icon: User },
    { id: "settings", label: "تنظیمات", icon: Settings },
  ];

  const coachTabsData = [
    { id: "dashboard", label: "داشبورد", icon: Dumbbell },
    { id: "trainees", label: "ورزشکاران", icon: Users },
    { id: "ai-assistant", label: "دستیار AI", icon: Brain },
    { id: "content", label: "محتوا", icon: BookOpen },
    { id: "chat", label: "پیام‌ها", icon: MessageSquare },
    { id: "profile", label: "پروفایل", icon: User },
    { id: "settings", label: "تنظیمات", icon: Settings },
  ];

  const tabsData = userType === "trainee" ? traineeTabsData : coachTabsData;

  return (
    <div className="min-h-screen bg-background">
      {/* User Type Switcher */}
      <div className="container mx-auto px-4 pt-4">
        <div className="flex justify-center mb-6">
          <div className="card-energy p-1 flex rounded-full">
            <button
              onClick={() => setUserType("trainee")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                userType === "trainee"
                  ? "bg-gradient-primary text-white shadow-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              ورزشکار
            </button>
            <button
              onClick={() => setUserType("coach")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                userType === "coach"
                  ? "bg-gradient-primary text-white shadow-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              مربی
            </button>
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        {/* Mobile Bottom Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border">
          <TabsList className="w-full h-16 grid grid-cols-4 gap-0 bg-transparent">
            {tabsData.slice(0, 4).map((tab) => {
              const IconComponent = tab.icon;
              return (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="flex flex-col items-center justify-center h-full data-[state=active]:bg-transparent data-[state=active]:text-primary"
                >
                  <IconComponent className="h-5 w-5 mb-1" />
                  <span className="text-xs">{tab.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>

        {/* Desktop Sidebar Navigation */}
        <div className="hidden md:flex">
          <div className="fixed left-0 top-16 h-full w-64 bg-card border-r border-border p-4 overflow-y-auto">
            <TabsList className="flex flex-col w-full h-auto gap-2 bg-transparent">
              {tabsData.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="w-full justify-start h-12 data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:border-l-2 data-[state=active]:border-primary"
                  >
                    <IconComponent className="h-5 w-5 ml-3" />
                    {tab.label}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>
          
          <div className="mr-64 w-full">
            {/* Tab Contents */}
            {userType === "trainee" ? (
              <>
                <TabsContent value="home" className="m-0">
                  <UserDashboard />
                </TabsContent>
                <TabsContent value="coaches" className="m-0">
                  <CoachesSection />
                </TabsContent>
                <TabsContent value="education" className="m-0">
                  <EducationSection />
                </TabsContent>
                <TabsContent value="supplements" className="m-0">
                  <SupplementsSection />
                </TabsContent>
                <TabsContent value="challenges" className="m-0">
                  <ChallengesSection />
                </TabsContent>
                <TabsContent value="chat" className="m-0">
                  <ChatSection />
                </TabsContent>
                <TabsContent value="profile" className="m-0">
                  <UserDashboard />
                </TabsContent>
                <TabsContent value="settings" className="m-0">
                  <SettingsSection />
                </TabsContent>
              </>
            ) : (
              <>
                <TabsContent value="dashboard" className="m-0">
                  <CoachDashboard />
                </TabsContent>
                <TabsContent value="trainees" className="m-0">
                  <CoachDashboard />
                </TabsContent>
                <TabsContent value="ai-assistant" className="m-0">
                  <CoachDashboard />
                </TabsContent>
                <TabsContent value="content" className="m-0">
                  <EducationSection />
                </TabsContent>
                <TabsContent value="chat" className="m-0">
                  <ChatSection />
                </TabsContent>
                <TabsContent value="profile" className="m-0">
                  <UserDashboard />
                </TabsContent>
                <TabsContent value="settings" className="m-0">
                  <SettingsSection />
                </TabsContent>
              </>
            )}
          </div>
        </div>

        {/* Mobile Tab Contents */}
        <div className="md:hidden pb-20">
          {userType === "trainee" ? (
            <>
              <TabsContent value="home" className="m-0">
                <UserDashboard />
              </TabsContent>
              <TabsContent value="coaches" className="m-0">
                <CoachesSection />
              </TabsContent>
              <TabsContent value="education" className="m-0">
                <EducationSection />
              </TabsContent>
              <TabsContent value="supplements" className="m-0">
                <SupplementsSection />
              </TabsContent>
            </>
          ) : (
            <>
              <TabsContent value="dashboard" className="m-0">
                <CoachDashboard />
              </TabsContent>
              <TabsContent value="trainees" className="m-0">
                <CoachDashboard />
              </TabsContent>
              <TabsContent value="ai-assistant" className="m-0">
                <CoachDashboard />
              </TabsContent>
              <TabsContent value="content" className="m-0">
                <EducationSection />
              </TabsContent>
            </>
          )}
        </div>
      </Tabs>
    </div>
  );
};

export default NavigationTabs;
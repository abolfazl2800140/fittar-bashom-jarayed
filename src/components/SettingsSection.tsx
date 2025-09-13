import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  Smartphone,
  CreditCard,
  HelpCircle,
  LogOut
} from "lucide-react";

const SettingsSection = () => {
  return (
    <div className="min-h-screen bg-muted/30 p-4 md:p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center md:text-right">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient-primary">تنظیمات</span> حساب کاربری
          </h1>
          <p className="text-muted-foreground">مدیریت تنظیمات و ترجیحات شخصی</p>
        </div>

        {/* Profile Settings */}
        <Card className="card-energy p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center">
            <User className="h-5 w-5 ml-2 text-primary" />
            اطلاعات شخصی
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">نام و نام خانوادگی</Label>
                <Input id="name" defaultValue="امیر محمدی" />
              </div>
              
              <div>
                <Label htmlFor="email">ایمیل</Label>
                <Input id="email" type="email" defaultValue="amir@example.com" />
              </div>
              
              <div>
                <Label htmlFor="phone">شماره تلفن</Label>
                <Input id="phone" defaultValue="09123456789" />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="age">سن</Label>
                <Input id="age" type="number" defaultValue="28" />
              </div>
              
              <div>
                <Label htmlFor="weight">وزن (کیلوگرم)</Label>
                <Input id="weight" type="number" defaultValue="75" />
              </div>
              
              <div>
                <Label htmlFor="height">قد (سانتی‌متر)</Label>
                <Input id="height" type="number" defaultValue="180" />
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <Button className="btn-success">
              ذخیره تغییرات
            </Button>
          </div>
        </Card>

        {/* Notification Settings */}
        <Card className="card-energy p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center">
            <Bell className="h-5 w-5 ml-2 text-accent" />
            تنظیمات اعلان‌ها
          </h2>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">اعلان‌های تمرین</h3>
                <p className="text-sm text-muted-foreground">یادآوری برای شروع تمرین روزانه</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">اعلان‌های تغذیه</h3>
                <p className="text-sm text-muted-foreground">یادآوری وعده‌های غذایی</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">پیام‌های مربی</h3>
                <p className="text-sm text-muted-foreground">اعلان برای پیام‌های جدید از مربی</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">چالش‌های گروهی</h3>
                <p className="text-sm text-muted-foreground">اعلان برای چالش‌ها و رقابت‌ها</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">گزارش‌های هفتگی</h3>
                <p className="text-sm text-muted-foreground">خلاصه پیشرفت هفتگی</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </Card>

        {/* Theme & Display */}
        <Card className="card-energy p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center">
            <Palette className="h-5 w-5 ml-2 text-accent" />
            ظاهر و نمایش
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>تم رنگی</Label>
              <Select defaultValue="system">
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">روشن</SelectItem>
                  <SelectItem value="dark">تیره</SelectItem>
                  <SelectItem value="system">خودکار (سیستم)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>زبان</Label>
              <Select defaultValue="fa">
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fa">فارسی</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="ar">العربية</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">انیمیشن‌های صفحه</h3>
                <p className="text-sm text-muted-foreground">نمایش انیمیشن‌ها در انتقال صفحات</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">صدای اعلان‌ها</h3>
                <p className="text-sm text-muted-foreground">پخش صدا برای اعلان‌ها</p>
              </div>
              <Switch />
            </div>
          </div>
        </Card>

        {/* Privacy & Security */}
        <Card className="card-energy p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center">
            <Shield className="h-5 w-5 ml-2 text-success" />
            حریم خصوصی و امنیت
          </h2>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">پروفایل عمومی</h3>
                <p className="text-sm text-muted-foreground">نمایش پروفایل برای سایر کاربران</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">نمایش آمار پیشرفت</h3>
                <p className="text-sm text-muted-foreground">اشتراک آمار در جدول امتیازات</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">تایید دو مرحله‌ای</h3>
                <p className="text-sm text-muted-foreground">افزایش امنیت حساب کاربری</p>
              </div>
              <Button variant="outline" size="sm">
                فعال‌سازی
              </Button>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2">تغییر رمز عبور</h4>
              <p className="text-sm text-muted-foreground mb-4">
                آخرین تغییر: ۳ ماه پیش
              </p>
              <Button variant="outline" size="sm">
                تغییر رمز عبور
              </Button>
            </div>
          </div>
        </Card>

        {/* Account Management */}
        <Card className="card-energy p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center">
            <CreditCard className="h-5 w-5 ml-2 text-primary" />
            مدیریت حساب
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <Smartphone className="h-4 w-4 ml-2" />
                مدیریت دستگاه‌ها
              </Button>
              
              <Button variant="outline" className="w-full justify-start">
                <Globe className="h-4 w-4 ml-2" />
                تاریخچه فعالیت
              </Button>
              
              <Button variant="outline" className="w-full justify-start">
                <HelpCircle className="h-4 w-4 ml-2" />
                پشتیبانی و راهنما
              </Button>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-2">اشتراک فعلی</h4>
                <Badge className="bg-gradient-accent text-white mb-2">پریمیوم</Badge>
                <p className="text-sm text-muted-foreground">
                  انقضا: ۱۵ دی ۱۴۰۳
                </p>
                <Button variant="outline" size="sm" className="w-full mt-3">
                  مدیریت اشتراک
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6 mt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-destructive">حذف حساب کاربری</h3>
                <p className="text-sm text-muted-foreground">
                  حذف دائمی تمام اطلاعات شما
                </p>
              </div>
              <Button variant="destructive" size="sm">
                <LogOut className="h-4 w-4 ml-2" />
                حذف حساب
              </Button>
            </div>
          </div>
        </Card>

        {/* Save All Changes */}
        <div className="flex justify-center">
          <Button className="btn-hero px-12">
            ذخیره همه تغییرات
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsSection;
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShoppingCart, Star, Award, CheckCircle } from "lucide-react";
import Header from "@/components/Header";

const SupplementDetail = () => {
  const { id } = useParams();

  const supplements = {
    "1": {
      name: "پروتئین وی گلد استاندارد",
      brand: "Optimum Nutrition",
      price: 2850000,
      originalPrice: 3200000,
      rating: 4.8,
      reviews: 342,
      category: "پروتئین",
      description: "پروتئین وی با کیفیت بالا برای عضله‌سازی و ریکاوری سریع",
      longDescription: "پروتئین وی گلد استاندارد یکی از محبوب‌ترین و باکیفیت‌ترین پروتئین‌های موجود در بازار است. این محصول حاوی ۲۴ گرم پروتئین خالص در هر سروینگ بوده و با سرعت بالا جذب بدن می‌شود.",
      benefits: ["عضله‌سازی سریع", "ریکاوری بهتر", "طعم عالی", "جذب سریع"],
      ingredients: ["پروتئین وی ایزوله", "پروتئین وی کنسانتره", "آمینو اسیدهای BCAA", "طعم‌دهنده طبیعی"],
      usage: "یک اسکوپ (۳۰ گرم) را با ۲۰۰-۳۰۰ میلی‌لیتر آب یا شیر مخلوط کنید. بهترین زمان مصرف: بعد از تمرین یا صبح.",
      warnings: "در صورت حساسیت به لبنیات مصرف نکنید. از دسترس کودکان دور نگه دارید.",
      isCertified: true,
    },
    "2": {
      name: "کراتین مونوهیدرات",
      brand: "Creapure",
      price: 980000,
      originalPrice: 1150000,
      rating: 4.9,
      reviews: 198,
      category: "قدرت",
      description: "کراتین خالص برای افزایش قدرت و حجم تمرین",
      longDescription: "کراتین مونوهیدرات Creapure با خلوص ۹۹.۹٪ تولید شده و استاندارد طلایی صنعت مکمل‌های ورزشی محسوب می‌شود.",
      benefits: ["افزایش قدرت عضلانی", "بهبود عملکرد در تمرینات شدید", "افزایش حجم عضلات", "بهبود ریکاوری"],
      ingredients: ["کراتین مونوهیدرات خالص (Creapure)"],
      usage: "۵ گرم در روز با آب یا آب میوه. می‌توانید قبل یا بعد از تمرین مصرف کنید.",
      warnings: "مصرف آب کافی ضروری است. در صورت بیماری کلیوی با پزشک مشورت کنید.",
      isCertified: true,
    },
    "3": {
      name: "امگا ۳ فیش اویل",
      brand: "Nordic Naturals",
      price: 1450000,
      originalPrice: 1650000,
      rating: 4.7,
      reviews: 156,
      category: "سلامت",
      description: "امگا ۳ با کیفیت برای سلامت قلب و مفاصل",
      longDescription: "کپسول‌های امگا ۳ Nordic Naturals از ماهی‌های وحشی اقیانوس اطلس تهیه شده و حاوی EPA و DHA با خلوص بالا هستند.",
      benefits: ["سلامت قلب و عروق", "کاهش التهاب مفاصل", "بهبود عملکرد مغز", "تقویت سیستم ایمنی"],
      ingredients: ["روغن ماهی تصفیه شده", "EPA (۱۸۰ میلی‌گرم)", "DHA (۱۲۰ میلی‌گرم)", "ویتامین E"],
      usage: "۲ کپسول در روز همراه با غذا.",
      warnings: "در صورت مصرف داروهای رقیق‌کننده خون با پزشک مشورت کنید.",
      isCertified: true,
    },
    "4": {
      name: "ویتامین D3 + K2",
      brand: "Life Extension",
      price: 720000,
      originalPrice: 850000,
      rating: 4.6,
      reviews: 89,
      category: "ویتامین",
      description: "ترکیب ویتامین D3 و K2 برای سلامت استخوان",
      longDescription: "این فرمول منحصر به فرد ترکیب ویتامین D3 و K2 را ارائه می‌دهد که به جذب بهتر کلسیم و تقویت استخوان‌ها کمک می‌کند.",
      benefits: ["تقویت استخوان‌ها", "بهبود جذب کلسیم", "تقویت سیستم ایمنی", "سلامت قلب و عروق"],
      ingredients: ["ویتامین D3 (۵۰۰۰ IU)", "ویتامین K2 (۱۰۰ میکروگرم)", "روغن زیتون"],
      usage: "یک کپسول در روز همراه با غذا.",
      warnings: "در صورت مصرف داروهای ضد انعقاد با پزشک مشورت کنید.",
      isCertified: true,
    },
  };

  const supplement = supplements[id as keyof typeof supplements];

  if (!supplement) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">محصول یافت نشد</h1>
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
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowRight className="h-4 w-4 ml-2" />
            بازگشت
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <Card className="card-energy p-8">
            <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center mb-4">
              <div className="text-9xl">💊</div>
            </div>
            {supplement.isCertified && (
              <div className="flex items-center justify-center space-x-2 space-x-reverse text-success">
                <Award className="h-5 w-5" />
                <span className="font-medium">محصول تایید شده</span>
              </div>
            )}
          </Card>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-3">{supplement.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{supplement.name}</h1>
              <p className="text-xl text-muted-foreground">{supplement.brand}</p>
            </div>

            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="flex items-center space-x-1 space-x-reverse">
                <Star className="h-5 w-5 text-accent fill-current" />
                <span className="text-lg font-medium">{supplement.rating}</span>
              </div>
              <span className="text-muted-foreground">({supplement.reviews} نظر)</span>
            </div>

            <Card className="p-6 bg-muted/30">
              <div className="flex items-end justify-between mb-4">
                <div>
                  <p className="text-3xl font-bold text-gradient-primary">
                    {supplement.price.toLocaleString('fa-IR')} تومان
                  </p>
                  {supplement.originalPrice > supplement.price && (
                    <p className="text-lg text-muted-foreground line-through">
                      {supplement.originalPrice.toLocaleString('fa-IR')} تومان
                    </p>
                  )}
                </div>
                {supplement.originalPrice > supplement.price && (
                  <Badge variant="destructive" className="text-base px-3 py-1">
                    {Math.round((1 - supplement.price / supplement.originalPrice) * 100)}٪ تخفیف
                  </Badge>
                )}
              </div>
              <Button className="btn-success w-full text-lg py-6">
                <ShoppingCart className="h-5 w-5 ml-2" />
                افزودن به سبد خرید
              </Button>
            </Card>

            <div>
              <h3 className="font-bold text-xl mb-3">مزایا</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {supplement.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2 space-x-reverse">
                    <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <Card className="card-energy p-6">
            <h3 className="font-bold text-xl mb-4">توضیحات کامل</h3>
            <p className="text-muted-foreground leading-relaxed">{supplement.longDescription}</p>
          </Card>

          <Card className="card-energy p-6">
            <h3 className="font-bold text-xl mb-4">ترکیبات</h3>
            <ul className="space-y-2">
              {supplement.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start space-x-2 space-x-reverse">
                  <span className="text-primary mt-1">•</span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="card-energy p-6">
            <h3 className="font-bold text-xl mb-4">نحوه مصرف</h3>
            <p className="text-muted-foreground">{supplement.usage}</p>
          </Card>

          <Card className="card-energy p-6">
            <h3 className="font-bold text-xl mb-4">هشدارها</h3>
            <p className="text-destructive">{supplement.warnings}</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SupplementDetail;

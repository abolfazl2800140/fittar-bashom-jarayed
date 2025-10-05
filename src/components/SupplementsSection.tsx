import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Award, Zap, Heart, Dumbbell } from "lucide-react";
import supplementsImage from "@/assets/supplements.jpg";

const SupplementsSection = () => {
  const supplements = [
    {
      id: "1",
      name: "پروتئین وی گلد استاندارد",
      brand: "Optimum Nutrition",
      price: 2850000,
      originalPrice: 3200000,
      rating: 4.8,
      reviews: 342,
      category: "پروتئین",
      description: "پروتئین وی با کیفیت بالا برای عضله‌سازی و ریکاوری",
      benefits: ["عضله‌سازی", "ریکاوری سریع", "طعم عالی"],
      isCertified: true,
      isPopular: true,
    },
    {
      id: "2", 
      name: "کراتین مونوهیدرات",
      brand: "Creapure",
      price: 980000,
      originalPrice: 1150000,
      rating: 4.9,
      reviews: 198,
      category: "قدرت",
      description: "کراتین خالص برای افزایش قدرت و حجم تمرین",
      benefits: ["افزایش قدرت", "حجم تمرین", "انرژی"],
      isCertified: true,
      isPopular: false,
    },
    {
      id: "3",
      name: "امگا ۳ فیش اویل",
      brand: "Nordic Naturals",
      price: 1450000,
      originalPrice: 1650000,
      rating: 4.7,
      reviews: 156,
      category: "سلامت",
      description: "امگا ۳ با کیفیت برای سلامت قلب و مفاصل",
      benefits: ["سلامت قلب", "ضد التهاب", "سلامت مغز"],
      isCertified: true,
      isPopular: false,
    },
    {
      id: "4",
      name: "ویتامین D3 + K2",
      brand: "Life Extension",
      price: 720000,
      originalPrice: 850000,
      rating: 4.6,
      reviews: 89,
      category: "ویتامین",
      description: "ترکیب ویتامین D3 و K2 برای سلامت استخوان",
      benefits: ["سلامت استخوان", "سیستم ایمنی", "جذب کلسیم"],
      isCertified: true,
      isPopular: false,
    },
  ];

  const categories = [
    { name: "پروتئین", icon: <Dumbbell className="h-5 w-5" />, count: 24, color: "primary" },
    { name: "قدرت", icon: <Zap className="h-5 w-5" />, count: 18, color: "accent" },
    { name: "سلامت", icon: <Heart className="h-5 w-5" />, count: 32, color: "success" },
    { name: "ویتامین", icon: <Star className="h-5 w-5" />, count: 15, color: "warning" },
  ];

  return (
    <div className="min-h-screen bg-muted/30 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-primary">مکمل‌های</span> تایید شده
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            مکمل‌های با کیفیت و تایید شده توسط متخصصان تغذیه ورزشی
          </p>
        </div>

        {/* Featured Banner */}
        <Card className="card-energy p-6 md:p-8 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-gradient-accent text-white">
                <Award className="h-4 w-4 ml-1" />
                پیشنهاد ویژه
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                ۲۰٪ تخفیف ویژه
              </h2>
              <p className="text-muted-foreground mb-6">
                برای اولین خرید از مجموعه مکمل‌های پروتئینی، تخفیف ویژه دریافت کنید
              </p>
              <Button className="btn-hero">
                <ShoppingCart className="h-5 w-5 ml-2" />
                مشاهده پیشنهادات
              </Button>
            </div>
            <div className="relative">
              <img 
                src={supplementsImage} 
                alt="مکمل‌های ورزشی" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </Card>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Card key={category.name} className="card-energy p-6 text-center hover:shadow-lg transition-all cursor-pointer">
              <div className={`w-12 h-12 bg-gradient-${category.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                {category.icon}
              </div>
              <h3 className="font-bold mb-2">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.count} محصول</p>
            </Card>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {supplements.map((supplement, index) => (
            <Link key={supplement.id} to={`/supplement/${supplement.id}`}>
              <Card className="card-energy p-6 h-full animate-fade-in hover:shadow-xl transition-all" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex flex-col h-full">
                  {/* Product Image Placeholder */}
                  <div className="relative mb-4">
                    <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center">
                      <div className="text-6xl">💊</div>
                    </div>
                    {supplement.isPopular && (
                      <Badge className="absolute top-2 right-2 bg-gradient-accent text-white">
                        محبوب
                      </Badge>
                    )}
                    {supplement.isCertified && (
                      <div className="absolute top-2 left-2 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                        <Award className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <Badge variant="outline" className="mb-2 text-xs">
                      {supplement.category}
                    </Badge>
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">
                      {supplement.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {supplement.brand}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {supplement.description}
                    </p>

                    {/* Benefits */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {supplement.benefits.slice(0, 2).map((benefit) => (
                        <Badge key={benefit} variant="secondary" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-1 space-x-reverse mb-4">
                      <Star className="h-4 w-4 text-accent fill-current" />
                      <span className="text-sm font-medium">{supplement.rating}</span>
                      <span className="text-xs text-muted-foreground">
                        ({supplement.reviews} نظر)
                      </span>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="border-t border-border pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg font-bold text-gradient-primary">
                          {supplement.price.toLocaleString('fa-IR')} تومان
                        </p>
                        {supplement.originalPrice > supplement.price && (
                          <p className="text-sm text-muted-foreground line-through">
                            {supplement.originalPrice.toLocaleString('fa-IR')}
                          </p>
                        )}
                      </div>
                      {supplement.originalPrice > supplement.price && (
                        <Badge variant="destructive" className="text-xs">
                          {Math.round((1 - supplement.price / supplement.originalPrice) * 100)}٪ تخفیف
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Trust Indicators */}
        <Card className="card-energy p-6">
          <h2 className="text-xl font-bold mb-6 text-center">چرا مکمل‌های ما؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">تایید متخصصان</h3>
              <p className="text-sm text-muted-foreground">
                همه محصولات توسط متخصصان تغذیه ورزشی بررسی شده‌اند
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">کیفیت تضمینی</h3>
              <p className="text-sm text-muted-foreground">
                فقط برندهای معتبر و با گواهینامه‌های بین‌المللی
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">ارسال سریع</h3>
              <p className="text-sm text-muted-foreground">
                ارسال رایگان برای خریدهای بالای ۵۰۰ هزار تومان
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SupplementsSection;
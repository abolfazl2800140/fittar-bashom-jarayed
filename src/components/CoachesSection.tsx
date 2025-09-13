import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import CoachCard from "./CoachCard";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import coach1Image from "@/assets/coach-1.jpg";
import coach2Image from "@/assets/coach-2.jpg";

const CoachesSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [priceRange, setPriceRange] = useState([100000, 2000000]);
  const [showFilters, setShowFilters] = useState(false);

  const coaches = [
    {
      id: "1",
      name: "علی احمدی",
      image: coach1Image,
      specialty: "بدنسازی",
      experience: 8,
      rating: 4.9,
      reviewCount: 127,
      monthlyPrice: 850000,
      traineesCount: 45,
      bio: "مربی حرفه‌ای بدنسازی با ۸ سال تجربه در آماده‌سازی ورزشکاران حرفه‌ای. متخصص در برنامه‌ریزی تمرینات قدرتی و کاهش وزن.",
      isVerified: true,
    },
    {
      id: "2",
      name: "مریم صادقی",
      image: coach2Image,
      specialty: "یوگا و پیلاتس",
      experience: 6,
      rating: 4.8,
      reviewCount: 89,
      monthlyPrice: 650000,
      traineesCount: 32,
      bio: "مربی مجرب یوگا و پیلاتس با تمرکز بر تعادل جسم و ذهن. دارای مدرک بین‌المللی و تجربه کار با افراد مختلف.",
      isVerified: true,
    },
    {
      id: "3",
      name: "محمد رضایی",
      image: coach1Image,
      specialty: "کراس فیت",
      experience: 10,
      rating: 4.9,
      reviewCount: 156,
      monthlyPrice: 1200000,
      traineesCount: 28,
      bio: "قهرمان کراس فیت کشور و مربی رسمی فدراسیون. متخصص در آماده‌سازی ورزشکاران رشته‌های مختلف.",
      isVerified: true,
    },
    {
      id: "4",
      name: "نیلوفر موسوی",
      image: coach2Image,
      specialty: "تناسب اندام بانوان",
      experience: 5,
      rating: 4.7,
      reviewCount: 72,
      monthlyPrice: 750000,
      traineesCount: 38,
      bio: "مربی تخصصی تناسب اندام بانوان با تمرکز بر برنامه‌های کاهش وزن و تقویت عضلات. دارای تجربه کار با مادران باردار.",
      isVerified: true,
    },
  ];

  const specialties = [
    "همه تخصص‌ها",
    "بدنسازی",
    "یوگا و پیلاتس", 
    "کراس فیت",
    "تناسب اندام بانوان",
    "دوومیدانی",
    "ووشو",
    "کیک بوکسینگ"
  ];

  const filteredCoaches = coaches.filter(coach => {
    const matchesSearch = coach.name.includes(searchTerm) || coach.specialty.includes(searchTerm);
    const matchesSpecialty = !specialty || specialty === "همه تخصص‌ها" || coach.specialty === specialty;
    const matchesPrice = coach.monthlyPrice >= priceRange[0] && coach.monthlyPrice <= priceRange[1];
    
    return matchesSearch && matchesSpecialty && matchesPrice;
  });

  return (
    <section id="coaches" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-primary">مربیان</span> برتر
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            از میان صدها مربی حرفه‌ای، مربی مناسب خودتان را انتخاب کنید
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="جستجوی مربی..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10"
              />
            </div>

            {/* Quick Filters */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <Select value={specialty} onValueChange={setSpecialty}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="تخصص" />
                </SelectTrigger>
                <SelectContent>
                  {specialties.map((spec) => (
                    <SelectItem key={spec} value={spec}>
                      {spec}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 space-x-reverse"
              >
                <SlidersHorizontal className="h-4 w-4" />
                <span>فیلترها</span>
              </Button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 p-6 card-energy animate-fade-in">
              <h3 className="font-semibold mb-4">فیلترهای پیشرفته</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    محدوده قیمت (تومان/ماه)
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={2000000}
                    min={100000}
                    step={50000}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{priceRange[0].toLocaleString('fa-IR')}</span>
                    <span>{priceRange[1].toLocaleString('fa-IR')}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">حداقل امتیاز</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="انتخاب امتیاز" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4.5">۴.۵ و بالاتر</SelectItem>
                      <SelectItem value="4.0">۴.۰ و بالاتر</SelectItem>
                      <SelectItem value="3.5">۳.۵ و بالاتر</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">سابقه کار</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="انتخاب سابقه" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">۱+ سال</SelectItem>
                      <SelectItem value="3">۳+ سال</SelectItem>
                      <SelectItem value="5">۵+ سال</SelectItem>
                      <SelectItem value="10">۱۰+ سال</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {filteredCoaches.length} مربی یافت شد
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCoaches.map((coach, index) => (
            <div 
              key={coach.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CoachCard coach={coach} />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            مشاهده مربیان بیشتر
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;
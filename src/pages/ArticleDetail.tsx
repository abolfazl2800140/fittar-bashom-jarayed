import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Award, BookOpen } from "lucide-react";
import Header from "@/components/Header";

const ArticleDetail = () => {
  const { id } = useParams();

  const articles = {
    "1": {
      title: "راهنمای کامل تغذیه ورزشکاران",
      author: "دکتر احمد نوری",
      readTime: "۸ دقیقه",
      category: "تغذیه",
      content: `
        # مقدمه
        تغذیه صحیح یکی از مهم‌ترین عوامل موفقیت در ورزش است. در این مقاله به بررسی کامل نیازهای تغذیه‌ای ورزشکاران می‌پردازیم.

        ## قبل از تمرین
        حدود ۲-۳ ساعت قبل از تمرین یک وعده غذایی حاوی کربوهیدرات و پروتئین مصرف کنید. این به شما انرژی لازم را می‌دهد.

        ## حین تمرین
        در تمرینات طولانی، نوشیدن آب و مصرف کربوهیدرات‌های ساده ضروری است.

        ## بعد از تمرین
        در ۳۰ دقیقه اول بعد از تمرین، پروتئین و کربوهیدرات مصرف کنید تا بهبودی عضلات سریع‌تر شود.

        ## توصیه‌های کلی
        - حداقل ۸ لیوان آب در روز بنوشید
        - از غذاهای فرآوری شده پرهیز کنید
        - وعده‌های غذایی منظم داشته باشید
        - مکمل‌های لازم را با مشورت پزشک مصرف کنید
      `,
    },
    "2": {
      title: "تکنیک‌های صحیح بدنسازی",
      author: "مربی علی رضایی",
      readTime: "۱۲ دقیقه",
      category: "تمرین",
      content: `
        # اهمیت تکنیک صحیح
        انجام حرکات با تکنیک صحیح از آسیب‌دیدگی جلوگیری می‌کند و نتایج بهتری به همراه دارد.

        ## حرکات اساسی
        ### اسکات
        - پاها به عرض شانه
        - نگاه رو به جلو
        - زانوها در راستای پا
        - کمر صاف

        ### ددلیفت
        - گرفتن وزنه نزدیک به بدن
        - کمر کاملا صاف
        - استفاده از عضلات پا و باسن

        ### پرس سینه
        - کنترل حرکت
        - دامنه حرکتی کامل
        - تنفس صحیح

        ## نکات ایمنی
        - همیشه با گرم کردن شروع کنید
        - وزنه‌های مناسب انتخاب کنید
        - از دستیار استفاده کنید
        - به بدن خود گوش دهید
      `,
    },
    "3": {
      title: "اهمیت استراحت در برنامه تمرینی",
      author: "دکتر مریم احمدی",
      readTime: "۶ دقیقه",
      category: "ریکاوری",
      content: `
        # چرا استراحت مهم است؟
        بسیاری فکر می‌کنند هرچه بیشتر تمرین کنند، نتیجه بهتری می‌گیرند. اما واقعیت این است که رشد عضلات در زمان استراحت اتفاق می‌افتد.

        ## انواع استراحت
        ### استراحت فعال
        - پیاده‌روی آرام
        - شنا با سرعت کم
        - یوگا

        ### استراحت کامل
        - خواب کافی (۷-۹ ساعت)
        - روزهای بدون تمرین

        ## نشانه‌های تمرین بیش از حد
        - خستگی مداوم
        - کاهش عملکرد
        - درد مفاصل
        - بی‌خوابی
        - کاهش اشتها

        ## برنامه استراحت پیشنهادی
        - ۱-۲ روز استراحت در هفته
        - تغییر گروه‌های عضلانی
        - استراحت کافی بین ست‌ها
      `,
    },
  };

  const article = articles[id as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">مقاله یافت نشد</h1>
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
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowRight className="h-4 w-4 ml-2" />
            بازگشت
          </Button>
        </Link>

        <Card className="card-energy p-8">
          <Badge className="mb-4">{article.category}</Badge>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>
          
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="flex items-center space-x-2 space-x-reverse text-muted-foreground">
                <BookOpen className="h-4 w-4" />
                <span className="text-sm">نویسنده: {article.author}</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{article.readTime}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse text-success">
              <Award className="h-4 w-4" />
              <span className="text-sm font-medium">تایید شده</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            {article.content.split('\n').map((paragraph, index) => {
              if (paragraph.trim().startsWith('# ')) {
                return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('# ', '')}</h2>;
              } else if (paragraph.trim().startsWith('## ')) {
                return <h3 key={index} className="text-xl font-bold mt-6 mb-3">{paragraph.replace('## ', '')}</h3>;
              } else if (paragraph.trim().startsWith('### ')) {
                return <h4 key={index} className="text-lg font-bold mt-4 mb-2">{paragraph.replace('### ', '')}</h4>;
              } else if (paragraph.trim().startsWith('- ')) {
                return <li key={index} className="mr-6 mb-2">{paragraph.replace('- ', '')}</li>;
              } else if (paragraph.trim()) {
                return <p key={index} className="mb-4 text-foreground/90 leading-relaxed">{paragraph}</p>;
              }
              return null;
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ArticleDetail;

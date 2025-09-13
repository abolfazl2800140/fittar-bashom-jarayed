import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Users, MessageCircle, TrendingUp } from "lucide-react";

interface CoachCardProps {
  coach: {
    id: string;
    name: string;
    image: string;
    specialty: string;
    experience: number;
    rating: number;
    reviewCount: number;
    monthlyPrice: number;
    traineesCount: number;
    bio: string;
    isVerified: boolean;
  };
}

const CoachCard = ({ coach }: CoachCardProps) => {
  return (
    <Card className="card-coach p-6 h-full">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start space-x-4 space-x-reverse mb-4">
          <div className="relative">
            <img
              src={coach.image}
              alt={coach.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            {coach.isVerified && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <h3 className="font-bold text-lg">{coach.name}</h3>
            <Badge variant="secondary" className="mb-2">
              {coach.specialty}
            </Badge>
            <div className="flex items-center space-x-1 space-x-reverse text-sm text-muted-foreground">
              <Star className="h-4 w-4 text-accent" />
              <span>{coach.rating}</span>
              <span>({coach.reviewCount} نظر)</span>
            </div>
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {coach.bio}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 space-x-reverse text-sm">
              <Users className="h-4 w-4 text-primary" />
              <span>{coach.traineesCount}</span>
            </div>
            <p className="text-xs text-muted-foreground">ورزشکار</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 space-x-reverse text-sm">
              <TrendingUp className="h-4 w-4 text-success" />
              <span>{coach.experience}</span>
            </div>
            <p className="text-xs text-muted-foreground">سال تجربه</p>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-4">
          <div className="text-center p-3 bg-muted/30 rounded-lg">
            <span className="text-2xl font-bold text-gradient-primary">
              {coach.monthlyPrice.toLocaleString('fa-IR')}
            </span>
            <span className="text-sm text-muted-foreground mr-1">تومان/ماه</span>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          <Button variant="outline" size="sm">
            <MessageCircle className="h-4 w-4 mr-1" />
            پیام
          </Button>
          <Button className="btn-success" size="sm">
            انتخاب مربی
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CoachCard;
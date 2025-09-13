import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Search, Bell } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-gradient-primary">
              ورزشی‌تک
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <a href="#coaches" className="text-foreground hover:text-primary transition-colors font-medium">
              مربیان
            </a>
            <a href="#courses" className="text-foreground hover:text-primary transition-colors font-medium">
              آموزش‌ها
            </a>
            <a href="#supplements" className="text-foreground hover:text-primary transition-colors font-medium">
              مکمل‌ها
            </a>
            <a href="#challenges" className="text-foreground hover:text-primary transition-colors font-medium">
              چالش‌ها
            </a>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <Button variant="ghost" size="sm" className="p-2">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 ml-2" />
              ورود
            </Button>
            <Button className="btn-hero">
              عضویت
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col space-y-4">
              <a href="#coaches" className="text-foreground hover:text-primary transition-colors font-medium">
                مربیان
              </a>
              <a href="#courses" className="text-foreground hover:text-primary transition-colors font-medium">
                آموزش‌ها
              </a>
              <a href="#supplements" className="text-foreground hover:text-primary transition-colors font-medium">
                مکمل‌ها
              </a>
              <a href="#challenges" className="text-foreground hover:text-primary transition-colors font-medium">
                چالش‌ها
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="w-full">
                  ورود
                </Button>
                <Button className="btn-hero w-full">
                  عضویت
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
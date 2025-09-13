import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Send, Paperclip, Smile, Search, Phone, Video } from "lucide-react";

const ChatSection = () => {
  const [selectedChat, setSelectedChat] = useState("1");
  const [message, setMessage] = useState("");

  const conversations = [
    {
      id: "1",
      name: "مربی علی احمدی",
      avatar: "👨‍💼",
      lastMessage: "برنامه تمرین جدید رو براتون آماده کردم",
      time: "۱۰ دقیقه پیش",
      unread: 2,
      isOnline: true,
      type: "coach",
    },
    {
      id: "2", 
      name: "گروه چالش ۳۰ روزه",
      avatar: "👥",
      lastMessage: "احمد: عالی بود تمرین امروز!",
      time: "۳۰ دقیقه پیش",
      unread: 5,
      isOnline: false,
      type: "group",
    },
    {
      id: "3",
      name: "مربی مریم صادقی",
      avatar: "👩‍💼", 
      lastMessage: "چطور حالتون؟ تمرین دیروز رو انجام دادین؟",
      time: "۲ ساعت پیش",
      unread: 0,
      isOnline: true,
      type: "coach",
    },
    {
      id: "4",
      name: "پشتیبانی",
      avatar: "🎧",
      lastMessage: "سوال شما بررسی شد",
      time: "دیروز",
      unread: 0,
      isOnline: false,
      type: "support",
    },
  ];

  const messages = [
    {
      id: "1",
      sender: "coach",
      content: "سلام! چطورید؟ امروز تمرین داشتیم",
      time: "۱۴:۳۰",
      isRead: true,
    },
    {
      id: "2",
      sender: "user",
      content: "سلام مربی، بله تمرین رو انجام دادم",
      time: "۱۴:۳۵",
      isRead: true,
    },
    {
      id: "3",
      sender: "coach", 
      content: "عالی! چطور بود؟ سختی خاصی داشت؟",
      time: "۱۴:۳۶",
      isRead: true,
    },
    {
      id: "4",
      sender: "user",
      content: "خیلی عالی بود، فقط آخرش کمی خسته شدم",
      time: "۱۴:۴۰",
      isRead: true,
    },
    {
      id: "5",
      sender: "coach",
      content: "برنامه تمرین جدید رو براتون آماده کردم. چک کنید و بگید نظرتون چیه",
      time: "۱۵:۱۰",
      isRead: false,
    },
  ];

  const currentChat = conversations.find(c => c.id === selectedChat);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[80vh]">
          {/* Conversations List */}
          <Card className="card-energy p-4 overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">پیام‌ها</h2>
              <Button variant="ghost" size="sm">
                <Search className="h-4 w-4" />
              </Button>
            </div>

            <div className="relative mb-4">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="جستجو در پیام‌ها..." className="pr-10" />
            </div>

            <div className="space-y-2 overflow-y-auto flex-1">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedChat(conversation.id)}
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedChat === conversation.id 
                      ? "bg-primary/10 border border-primary/20" 
                      : "hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-xl">
                        {conversation.avatar}
                      </div>
                      {conversation.isOnline && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-background"></div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-medium truncate">{conversation.name}</h3>
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <span className="text-xs text-muted-foreground">{conversation.time}</span>
                          {conversation.unread > 0 && (
                            <Badge className="bg-accent text-accent-foreground text-xs h-5 min-w-5 flex items-center justify-center">
                              {conversation.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        {conversation.lastMessage}
                      </p>
                      <div className="flex items-center mt-1">
                        <Badge variant="outline" className="text-xs">
                          {conversation.type === "coach" ? "مربی" :
                           conversation.type === "group" ? "گروه" :
                           conversation.type === "support" ? "پشتیبانی" : ""}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Chat Area */}
          <div className="lg:col-span-2">
            <Card className="card-energy h-full flex flex-col">
              {/* Chat Header */}
              {currentChat && (
                <div className="p-4 border-b border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                          {currentChat.avatar}
                        </div>
                        {currentChat.isOnline && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-background"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-bold">{currentChat.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          {currentChat.isOnline ? "آنلاین" : "آفلاین"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Button variant="ghost" size="sm">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Video className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "user" ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        msg.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                      <p className={`text-xs mt-1 ${
                        msg.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                      }`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-border">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Button variant="ghost" size="sm">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Smile className="h-4 w-4" />
                  </Button>
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="پیام خود را تایپ کنید..."
                    className="flex-1"
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <Button 
                    onClick={handleSendMessage}
                    className="btn-energy"
                    disabled={!message.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="card-energy p-4 text-center">
            <h3 className="font-bold mb-2">پیام به مربی</h3>
            <p className="text-sm text-muted-foreground mb-4">
              سوال یا نگرانی دارید؟
            </p>
            <Button variant="outline" size="sm" className="w-full">
              شروع گفتگو
            </Button>
          </Card>

          <Card className="card-energy p-4 text-center">
            <h3 className="font-bold mb-2">گروه‌های فعال</h3>
            <p className="text-sm text-muted-foreground mb-4">
              عضو ۳ گروه چالش هستید
            </p>
            <Button variant="outline" size="sm" className="w-full">
              مشاهده گروه‌ها
            </Button>
          </Card>

          <Card className="card-energy p-4 text-center">
            <h3 className="font-bold mb-2">پشتیبانی</h3>
            <p className="text-sm text-muted-foreground mb-4">
              ۲۴/۷ در خدمت شما
            </p>
            <Button variant="outline" size="sm" className="w-full">
              تماس با پشتیبانی
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
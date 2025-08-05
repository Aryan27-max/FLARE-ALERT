import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Menu, Shield, AlertTriangle, Phone } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", icon: Shield },
    { name: "Dashboard", href: "/dashboard", icon: AlertTriangle },
    { name: "System", href: "/system", icon: Shield },
    { name: "AI Features", href: "/ai-features", icon: AlertTriangle },
    { name: "Business Model", href: "/business", icon: Shield },
    { name: "Payments", href: "/payments", icon: AlertTriangle },
    { name: "Team", href: "/team", icon: Shield },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  const EmergencyButton = () => (
    <Button 
      variant="emergency" 
      size="sm" 
      className="emergency-pulse"
      onClick={() => {
        // Mock emergency call
        const confirmCall = window.confirm("This would call emergency services. This is a demo - no actual call will be made.");
        if (confirmCall) {
          alert("Emergency services contacted! (Demo mode)");
        }
      }}
    >
      <Phone className="w-4 h-4" />
      Emergency
    </Button>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-fade-in">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link to="/" className="mr-6 flex items-center space-x-3 group">
              <img 
                src="/lovable-uploads/0ccf353c-64c0-40f8-949c-ce8e9f6fbf07.png" 
                alt="FLARE Alert Logo" 
                className="h-10 w-10 transition-transform duration-300 group-hover:scale-110" 
              />
              <div className="hidden sm:block">
                <span className="font-bold text-lg block leading-tight">
                  FLARE Alert
                </span>
                <span className="text-xs text-muted-foreground font-medium">
                  Where Safety Meets Tech
                </span>
              </div>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative transition-all duration-300 hover:text-primary transform hover:scale-105 ${
                    location.pathname === item.href
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link
                to="/"
                className="flex items-center space-x-3 group"
                onClick={() => setIsOpen(false)}
              >
                <img 
                  src="/lovable-uploads/0ccf353c-64c0-40f8-949c-ce8e9f6fbf07.png" 
                  alt="FLARE Alert Logo" 
                  className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" 
                />
                <div>
                  <span className="font-bold block">FLARE Alert</span>
                  <span className="text-xs text-muted-foreground">Where Safety Meets Tech</span>
                </div>
              </Link>
              <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                <div className="flex flex-col space-y-3">
                  {navigation.map((item, index) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`transition-all duration-300 hover:text-primary transform hover:translate-x-2 hover:scale-105 ${
                        location.pathname === item.href
                          ? "text-primary font-semibold"
                          : "text-muted-foreground"
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent/10 transition-colors">
                        <item.icon className="h-5 w-5" />
                        <span>{item.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Link to="/" className="flex items-center space-x-2 md:hidden group">
                <img 
                  src="/lovable-uploads/0ccf353c-64c0-40f8-949c-ce8e9f6fbf07.png" 
                  alt="FLARE Alert Logo" 
                  className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" 
                />
                <div>
                  <span className="font-bold block text-sm leading-tight">FLARE Alert</span>
                  <span className="text-xs text-muted-foreground">Safety Meets Tech</span>
                </div>
              </Link>
            </div>
            <nav className="flex items-center space-x-3">
              <Badge variant="secondary" className="hidden sm:inline-flex animate-pulse">
                Safety Tech
              </Badge>
              <EmergencyButton />
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Shield className="h-6 w-6 text-primary" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              FLARE Alert - Where Safety Meets Technology
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hover:scale-105 transition-transform">
              Privacy
            </Button>
            <Button variant="ghost" size="sm" className="hover:scale-105 transition-transform">
              Terms
            </Button>
            <Button variant="ghost" size="sm" className="hover:scale-105 transition-transform">
              Support
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
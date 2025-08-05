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
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link to="/" className="mr-6 flex items-center space-x-2">
              <img 
                src="/lovable-uploads/b822f19c-2bb6-4022-bd05-ecfae379b0b2.png" 
                alt="FLARE Alert Logo" 
                className="h-8 w-8" 
              />
              <span className="hidden font-bold sm:inline-block">
                FLARE Alert
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors hover:text-primary ${
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
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
                className="flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <Shield className="mr-2 h-4 w-4" />
                <span className="font-bold">FLARE Alert</span>
              </Link>
              <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                <div className="flex flex-col space-y-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`transition-colors hover:text-primary ${
                        location.pathname === item.href
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <item.icon className="h-4 w-4" />
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
              <Link to="/" className="flex items-center space-x-2 md:hidden">
                <Shield className="h-6 w-6 text-primary" />
                <span className="font-bold">FLARE Alert</span>
              </Link>
            </div>
            <nav className="flex items-center space-x-2">
              <Badge variant="secondary" className="hidden sm:inline-flex">
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
            <Button variant="ghost" size="sm">
              Privacy
            </Button>
            <Button variant="ghost" size="sm">
              Terms
            </Button>
            <Button variant="ghost" size="sm">
              Support
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
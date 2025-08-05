import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, Camera, Zap, Phone, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: Camera,
      title: "AI-Powered Detection",
      description: "Advanced computer vision to identify hazards in real-time from uploaded images."
    },
    {
      icon: AlertTriangle,
      title: "Instant Alerts",
      description: "Immediate notifications and emergency response coordination when hazards are detected."
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Lightning-fast analysis and response times for critical safety situations."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Comprehensive safety protocols and emergency response integration."
    }
  ];

  const stats = [
    { label: "Response Time", value: "<30s", description: "Average hazard detection" },
    { label: "Accuracy", value: "99.7%", description: "AI detection precision" },
    { label: "Coverage", value: "24/7", description: "Continuous monitoring" },
    { label: "Integration", value: "API", description: "Emergency services" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">
              Emergency Safety Technology
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              FLARE Alert
              <span className="block text-primary mt-2">Where Safety Meets Tech</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Revolutionary AI-powered hazard detection system that instantly identifies dangers 
              and coordinates emergency response to keep your community safe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="emergency" size="xl">
                <Link to="/dashboard">
                  <Camera className="w-5 h-5" />
                  Launch Dashboard
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="hero" size="xl">
                <Link to="/system">
                  <Shield className="w-5 h-5" />
                  View System
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Advanced Safety Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge technology designed to protect lives and prevent accidents
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-primary emergency-pulse" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Emergency Response Ready</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Integrated with emergency services for immediate response when critical situations are detected
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="emergency" size="lg" className="emergency-pulse">
                <Phone className="w-5 h-5" />
                Test Emergency Call
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8 lg:p-12">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Enhance Safety?</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Join the future of emergency response and hazard detection technology
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="emergency" size="xl">
                    <Link to="/dashboard">
                      Get Started
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="xl">
                    <Link to="/business">
                      View Pricing
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Free Trial
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    24/7 Support
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Emergency Integration
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
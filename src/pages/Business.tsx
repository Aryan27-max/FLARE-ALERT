import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Building, 
  CheckCircle, 
  Shield,
  Zap,
  Crown,
  Star,
  ArrowRight,
  Calculator,
  PieChart
} from "lucide-react";

const Business = () => {
  const [selectedPlan, setSelectedPlan] = useState("professional");
  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricingPlans = [
    {
      id: "starter",
      name: "Starter",
      description: "Perfect for small businesses and basic monitoring",
      monthlyPrice: 49,
      yearlyPrice: 490,
      icon: Shield,
      features: [
        "Up to 100 image analyses/month",
        "Basic hazard detection",
        "Email alerts",
        "24/7 monitoring",
        "Basic reporting",
        "Community support"
      ],
      limitations: ["Limited to 2 locations", "Basic AI models only"],
      recommended: false
    },
    {
      id: "professional",
      name: "Professional",
      description: "Advanced features for growing organizations",
      monthlyPrice: 149,
      yearlyPrice: 1490,
      icon: Zap,
      features: [
        "Up to 1,000 image analyses/month",
        "Advanced AI detection models",
        "Multi-channel alerts (SMS, Email, Push)",
        "Real-time dashboard",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom integrations"
      ],
      limitations: ["Limited to 10 locations"],
      recommended: true
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Complete solution for large organizations",
      monthlyPrice: 499,
      yearlyPrice: 4990,
      icon: Crown,
      features: [
        "Unlimited image analyses",
        "All AI detection models",
        "Custom alert workflows",
        "White-label dashboard",
        "Advanced analytics & BI",
        "Dedicated support manager",
        "Custom API development",
        "On-premise deployment option",
        "SLA guarantee",
        "Training & onboarding"
      ],
      limitations: [],
      recommended: false
    }
  ];

  const revenueModel = [
    {
      name: "Subscription Revenue",
      percentage: 70,
      description: "Monthly/yearly subscription plans",
      value: "$2.1M ARR"
    },
    {
      name: "Enterprise Contracts",
      percentage: 20,
      description: "Custom enterprise solutions",
      value: "$800K ARR"
    },
    {
      name: "API Usage",
      percentage: 7,
      description: "Pay-per-use API calls",
      value: "$200K ARR"
    },
    {
      name: "Training & Support",
      percentage: 3,
      description: "Professional services",
      value: "$120K ARR"
    }
  ];

  const marketMetrics = [
    { label: "Total Addressable Market", value: "$12.8B", description: "Global safety technology market" },
    { label: "Serviceable Market", value: "$3.2B", description: "AI-powered safety solutions" },
    { label: "Current Market Share", value: "0.08%", description: "Significant growth opportunity" },
    { label: "Growth Rate", value: "180%", description: "Year-over-year revenue growth" }
  ];

  const calculatePrice = (plan: any) => {
    const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
    const savings = billingCycle === "yearly" ? ((plan.monthlyPrice * 12 - plan.yearlyPrice) / (plan.monthlyPrice * 12) * 100).toFixed(0) : "0";
    return { price, savings };
  };

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Business Model & Pricing</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Scalable pricing plans designed to grow with your safety needs and comprehensive revenue strategy
        </p>
      </div>

      <Tabs defaultValue="pricing" className="space-y-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pricing">Pricing Plans</TabsTrigger>
          <TabsTrigger value="revenue">Revenue Model</TabsTrigger>
          <TabsTrigger value="market">Market Analysis</TabsTrigger>
        </TabsList>

        {/* Pricing Plans */}
        <TabsContent value="pricing" className="space-y-8">
          {/* Billing Toggle */}
          <div className="flex justify-center">
            <div className="flex items-center gap-4 p-1 bg-muted rounded-lg">
              <Button
                variant={billingCycle === "monthly" ? "default" : "ghost"}
                size="sm"
                onClick={() => setBillingCycle("monthly")}
              >
                Monthly
              </Button>
              <Button
                variant={billingCycle === "yearly" ? "default" : "ghost"}
                size="sm"
                onClick={() => setBillingCycle("yearly")}
              >
                Yearly
                <Badge variant="secondary" className="ml-2">Save 20%</Badge>
              </Button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => {
              const { price, savings } = calculatePrice(plan);
              return (
                <Card 
                  key={plan.id} 
                  className={`relative ${plan.recommended ? 'ring-2 ring-primary' : ''} hover:shadow-lg transition-all duration-300`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">
                        <Star className="w-3 h-3 mr-1" />
                        Recommended
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <plan.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="min-h-[3rem]">{plan.description}</CardDescription>
                    <div className="pt-4">
                      <div className="text-4xl font-bold">
                        ${price}
                        <span className="text-lg font-normal text-muted-foreground">
                          /{billingCycle === "monthly" ? "mo" : "yr"}
                        </span>
                      </div>
                      {billingCycle === "yearly" && parseInt(savings) > 0 && (
                        <p className="text-sm text-success mt-1">Save {savings}% annually</p>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {plan.limitations.length > 0 && (
                      <div className="pt-4 border-t">
                        <p className="text-xs text-muted-foreground mb-2">Limitations:</p>
                        {plan.limitations.map((limitation, index) => (
                          <p key={index} className="text-xs text-muted-foreground">• {limitation}</p>
                        ))}
                      </div>
                    )}

                    <Button 
                      className="w-full"
                      variant={plan.recommended ? "emergency" : "outline"}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      {selectedPlan === plan.id ? "Selected Plan" : "Choose Plan"}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Custom Enterprise */}
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Need a Custom Solution?</h3>
              <p className="text-muted-foreground mb-6">
                We offer tailored packages for large enterprises, government agencies, and specialized use cases.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="emergency">
                  <Calculator className="w-4 h-4" />
                  Request Custom Quote
                </Button>
                <Button variant="outline">
                  Schedule Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Revenue Model */}
        <TabsContent value="revenue" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Revenue Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="w-5 h-5" />
                  Revenue Streams
                </CardTitle>
                <CardDescription>
                  Diversified revenue model ensuring sustainable growth
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {revenueModel.map((stream, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{stream.name}</span>
                      <div className="text-right">
                        <div className="font-bold text-primary">{stream.percentage}%</div>
                        <div className="text-sm text-muted-foreground">{stream.value}</div>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${stream.percentage}%` }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">{stream.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Financial Projections */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Financial Projections
                </CardTitle>
                <CardDescription>
                  5-year revenue and growth projections
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { year: "2024", revenue: "$3.2M", growth: "180%", customers: "1,250" },
                  { year: "2025", revenue: "$8.5M", growth: "165%", customers: "3,200" },
                  { year: "2026", revenue: "$18.2M", growth: "115%", customers: "6,800" },
                  { year: "2027", revenue: "$32.8M", growth: "80%", customers: "12,500" },
                  { year: "2028", revenue: "$52.1M", growth: "59%", customers: "19,200" }
                ].map((projection, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-semibold">{projection.year}</div>
                      <div className="text-sm text-muted-foreground">{projection.customers} customers</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary">{projection.revenue}</div>
                      <div className="text-sm text-success">+{projection.growth}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Market Analysis */}
        <TabsContent value="market" className="space-y-8">
          {/* Market Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketMetrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="font-semibold mb-1">{metric.label}</div>
                  <div className="text-sm text-muted-foreground">{metric.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Market Opportunity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Market Opportunity</CardTitle>
                <CardDescription>
                  Significant growth potential in safety technology sector
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Workplace Safety Market</span>
                    <span className="font-semibold">$5.8B</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AI in Safety Market</span>
                    <span className="font-semibold">$3.2B</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergency Response Systems</span>
                    <span className="font-semibold">$2.1B</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Computer Vision in Safety</span>
                    <span className="font-semibold">$1.7B</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Addressable Market</span>
                    <span className="text-primary">$12.8B</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Competitive Advantage</CardTitle>
                <CardDescription>
                  Key differentiators in the safety technology market
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "Real-time AI Processing", description: "Sub-30 second hazard detection" },
                    { title: "Multi-hazard Detection", description: "Single platform for all safety needs" },
                    { title: "Emergency Integration", description: "Direct connection to response services" },
                    { title: "Edge Computing", description: "On-device processing for speed" },
                    { title: "Scalable Infrastructure", description: "Cloud-native architecture" },
                    { title: "Continuous Learning", description: "AI models improve with usage" }
                  ].map((advantage, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">{advantage.title}</div>
                        <div className="text-sm text-muted-foreground">{advantage.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Business;
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  CreditCard, 
  Calendar, 
  DollarSign, 
  Download, 
  CheckCircle, 
  AlertTriangle,
  Lock,
  RefreshCw,
  FileText,
  Shield,
  Zap
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Payments = () => {
  const [selectedPlan, setSelectedPlan] = useState("professional");
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [autoRenew, setAutoRenew] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const subscriptionPlans = [
    { id: "starter", name: "Starter", monthlyPrice: 49, yearlyPrice: 490, icon: Shield },
    { id: "professional", name: "Professional", monthlyPrice: 149, yearlyPrice: 1490, icon: Zap },
    { id: "enterprise", name: "Enterprise", monthlyPrice: 499, yearlyPrice: 4990, icon: CreditCard }
  ];

  const paymentHistory = [
    { date: "2024-03-01", amount: "$149.00", status: "Paid", invoice: "INV-2024-003", plan: "Professional" },
    { date: "2024-02-01", amount: "$149.00", status: "Paid", invoice: "INV-2024-002", plan: "Professional" },
    { date: "2024-01-01", amount: "$149.00", status: "Paid", invoice: "INV-2024-001", plan: "Professional" },
    { date: "2023-12-01", amount: "$49.00", status: "Paid", invoice: "INV-2023-012", plan: "Starter" }
  ];

  const mockProcessPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Payment Successful!",
        description: "Your subscription has been updated successfully.",
      });
    }, 2000);
  };

  const generateInvoice = (invoice: string) => {
    toast({
      title: "Invoice Generated",
      description: `PDF invoice ${invoice} is ready for download.`,
    });
  };

  const currentPlan = subscriptionPlans.find(plan => plan.id === selectedPlan);
  const currentPrice = billingCycle === "monthly" ? currentPlan?.monthlyPrice : currentPlan?.yearlyPrice;

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Payments & Subscriptions</h1>
        <p className="text-muted-foreground text-lg">
          Manage your subscription, payment methods, and billing information
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Subscription Card */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    Active Subscription
                  </CardTitle>
                  <CardDescription>Your current plan and billing details</CardDescription>
                </div>
                <Badge className="bg-success text-success-foreground">Active</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Current Plan</Label>
                  <div className="flex items-center gap-2 mt-1">
                    {currentPlan?.icon && <currentPlan.icon className="w-4 h-4 text-primary" />}
                    <span className="font-semibold">{currentPlan?.name}</span>
                  </div>
                </div>
                <div>
                  <Label>Billing Cycle</Label>
                  <div className="mt-1 font-semibold capitalize">{billingCycle}</div>
                </div>
                <div>
                  <Label>Amount</Label>
                  <div className="mt-1 text-2xl font-bold text-primary">${currentPrice}</div>
                </div>
                <div>
                  <Label>Next Payment</Label>
                  <div className="mt-1 font-semibold">April 1, 2024</div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="auto-renew"
                    checked={autoRenew}
                    onCheckedChange={setAutoRenew}
                  />
                  <Label htmlFor="auto-renew">Auto-renew subscription</Label>
                </div>
                <Button variant="outline">
                  Manage Subscription
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Plan Selector */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="w-5 h-5" />
                Subscription Plan Selector
              </CardTitle>
              <CardDescription>
                Change your subscription plan or billing cycle
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Select Plan</Label>
                  <Select value={selectedPlan} onValueChange={setSelectedPlan}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {subscriptionPlans.map((plan) => (
                        <SelectItem key={plan.id} value={plan.id}>
                          {plan.name} - ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Billing Cycle</Label>
                  <Select value={billingCycle} onValueChange={setBillingCycle}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="yearly">Yearly (Save 20%)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  Plan changes will take effect at the next billing cycle. You'll be charged ${currentPrice} {billingCycle}.
                </AlertDescription>
              </Alert>

              <Button onClick={mockProcessPayment} disabled={isProcessing} className="w-full">
                {isProcessing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Update Subscription"
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Mock Payment Gateway */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Mock Payment Gateway
              </CardTitle>
              <CardDescription>
                Simulated payment interface (Demo purposes only)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Card Number</Label>
                  <Input placeholder="**** **** **** 1234" readOnly className="bg-muted" />
                </div>
                <div>
                  <Label>Expiry Date</Label>
                  <Input placeholder="12/25" readOnly className="bg-muted" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>CVV</Label>
                  <Input placeholder="***" readOnly className="bg-muted" />
                </div>
                <div>
                  <Label>OTP Verification</Label>
                  <Input placeholder="123456" readOnly className="bg-muted" />
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg">
                <Lock className="w-4 h-4 text-success" />
                <span className="text-sm">Secure encrypted payment processing (Demo mode)</span>
              </div>

              <Button variant="emergency" className="w-full" onClick={mockProcessPayment}>
                <Shield className="w-4 h-4" />
                Process Payment (Demo)
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Payment Tracker */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Payment Tracker
              </CardTitle>
              <CardDescription>Current billing period progress</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Billing Period</span>
                  <span>75% Complete</span>
                </div>
                <Progress value={75} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">8 days remaining</p>
              </div>

              <div className="space-y-2 pt-4 border-t">
                <div className="flex justify-between">
                  <span className="text-sm">Current Amount</span>
                  <span className="font-semibold">${currentPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Next Due Date</span>
                  <span className="font-semibold">Apr 1, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Payment Method</span>
                  <span className="font-semibold">**** 1234</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Secure Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Security Features
              </CardTitle>
              <CardDescription>Payment security and encryption</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "256-bit SSL Encryption",
                "PCI DSS Compliant",
                "Two-factor Authentication",
                "Fraud Detection",
                "Secure Token Storage"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Payment History & Invoices */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Payment History & Invoice Generator
          </CardTitle>
          <CardDescription>
            View past payments and download invoices
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Date</th>
                  <th className="text-left p-2">Amount</th>
                  <th className="text-left p-2">Plan</th>
                  <th className="text-left p-2">Status</th>
                  <th className="text-left p-2">Invoice</th>
                  <th className="text-left p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {paymentHistory.map((payment, index) => (
                  <tr key={index} className="border-b hover:bg-muted/30">
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        {payment.date}
                      </div>
                    </td>
                    <td className="p-2 font-semibold">{payment.amount}</td>
                    <td className="p-2">{payment.plan}</td>
                    <td className="p-2">
                      <Badge variant="default">{payment.status}</Badge>
                    </td>
                    <td className="p-2 text-muted-foreground">{payment.invoice}</td>
                    <td className="p-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => generateInvoice(payment.invoice)}
                      >
                        <Download className="w-3 h-3" />
                        Download PDF
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payments;
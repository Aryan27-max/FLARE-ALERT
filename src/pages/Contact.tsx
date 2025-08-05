import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  FileText,
  Calendar,
  MessageSquare,
  Send,
  Building,
  Users,
  Shield,
  ArrowRight
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    subject: "",
    message: "",
    inquiryType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        role: "",
        subject: "",
        message: "",
        inquiryType: ""
      });
    }, 1500);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@flarealert.com",
      description: "General inquiries and support"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      description: "Sales and enterprise support"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "123 Safety Street, Tech City, TC 12345",
      description: "Headquarters location"
    }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "#", description: "Open source projects" },
    { icon: Linkedin, label: "LinkedIn", url: "#", description: "Professional updates" },
    { icon: Twitter, label: "Twitter", url: "#", description: "Latest news" }
  ];

  const resources = [
    {
      icon: FileText,
      title: "Download Pitch Deck",
      description: "Comprehensive overview of FLARE Alert technology and business model",
      action: "Download PDF"
    },
    {
      icon: Calendar,
      title: "Schedule Demo",
      description: "Book a personalized demo with our team to see FLARE Alert in action",
      action: "Schedule Now"
    },
    {
      icon: Building,
      title: "Enterprise Solutions",
      description: "Custom solutions for large organizations and government agencies",
      action: "Contact Sales"
    }
  ];

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Ready to enhance safety with AI? Let's discuss how FLARE Alert can protect your organization.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Send us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="role">Your Role</Label>
                    <Input
                      id="role"
                      value={formData.role}
                      onChange={(e) => handleInputChange("role", e.target.value)}
                      placeholder="e.g. Safety Manager, CTO"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="inquiry-type">Inquiry Type</Label>
                  <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sales">Sales & Pricing</SelectItem>
                      <SelectItem value="demo">Product Demo</SelectItem>
                      <SelectItem value="enterprise">Enterprise Solutions</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="media">Media & Press</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    placeholder="Brief description of your inquiry"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us more about your needs, questions, or how we can help..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="emergency"
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <Send className="w-4 h-4 animate-pulse" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          {/* Contact Details */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Multiple ways to reach our team
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <contact.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{contact.label}</div>
                    <div className="text-sm font-medium text-primary">{contact.value}</div>
                    <div className="text-xs text-muted-foreground">{contact.description}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card>
            <CardHeader>
              <CardTitle>Follow Us</CardTitle>
              <CardDescription>
                Stay updated with our latest developments
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start"
                  asChild
                >
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <social.icon className="w-4 h-4 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">{social.label}</div>
                      <div className="text-xs text-muted-foreground">{social.description}</div>
                    </div>
                  </a>
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common requests and resources
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-between">
                Emergency Support
                <Badge variant="destructive">24/7</Badge>
              </Button>
              <Button variant="outline" className="w-full justify-between">
                Technical Documentation
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                API Integration Guide
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Resources Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Resources & Next Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                  <resource.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  {resource.action}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <Card className="mt-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join hundreds of organizations already using FLARE Alert to enhance their safety protocols 
            and emergency response capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="emergency" size="lg">
              <Users className="w-5 h-5" />
              Schedule Demo
            </Button>
            <Button variant="outline" size="lg">
              <FileText className="w-5 h-5" />
              Download Brochure
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
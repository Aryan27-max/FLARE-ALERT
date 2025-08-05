import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Shield, 
  Brain, 
  Code, 
  Palette,
  TrendingUp,
  Users,
  Award,
  Globe
} from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "CEO & Co-Founder",
      domain: "Business Strategy & Leadership",
      image: "/api/placeholder/150/150",
      bio: "Former VP of Engineering at SafetyTech Corp. 15+ years in emergency response systems.",
      skills: ["Strategic Planning", "Team Leadership", "Emergency Systems", "Business Development"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "alex@flarealert.com"
      }
    },
    {
      name: "Dr. Sarah Kim",
      role: "CTO & Co-Founder",
      domain: "AI & Machine Learning",
      image: "/api/placeholder/150/150",
      bio: "PhD in Computer Vision from MIT. Former research scientist at Google AI with 50+ published papers.",
      skills: ["Deep Learning", "Computer Vision", "AI Architecture", "Research"],
      social: {
        linkedin: "#",
        github: "#",
        email: "sarah@flarealert.com"
      }
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Safety Engineer",
      domain: "Emergency Response & Safety Protocols",
      image: "/api/placeholder/150/150",
      bio: "20 years with Fire Department of NY. Certified Emergency Response Coordinator.",
      skills: ["Emergency Protocols", "Safety Standards", "Risk Assessment", "Training"],
      social: {
        linkedin: "#",
        email: "marcus@flarealert.com"
      }
    },
    {
      name: "Emma Thompson",
      role: "Senior Software Engineer",
      domain: "Full-Stack Development",
      image: "/api/placeholder/150/150",
      bio: "Former Senior Engineer at Stripe. Expert in scalable cloud architecture and real-time systems.",
      skills: ["React", "Node.js", "Cloud Architecture", "DevOps"],
      social: {
        github: "#",
        linkedin: "#",
        email: "emma@flarealert.com"
      }
    },
    {
      name: "David Park",
      role: "AI Research Engineer",
      domain: "Computer Vision & Model Development",
      image: "/api/placeholder/150/150",
      bio: "MS in AI from Stanford. Specialized in real-time object detection and edge computing.",
      skills: ["PyTorch", "TensorFlow", "Edge Computing", "Model Optimization"],
      social: {
        github: "#",
        linkedin: "#",
        email: "david@flarealert.com"
      }
    },
    {
      name: "Lisa Wang",
      role: "Product Designer",
      domain: "UX/UI Design & User Research",
      image: "/api/placeholder/150/150",
      bio: "Former Design Lead at Airbnb. Passionate about designing for emergency and safety applications.",
      skills: ["User Research", "Prototyping", "Design Systems", "Accessibility"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "lisa@flarealert.com"
      }
    }
  ];

  const advisors = [
    {
      name: "Dr. Robert Martinez",
      role: "Emergency Response Advisor",
      company: "Former FEMA Director",
      expertise: "National Emergency Management"
    },
    {
      name: "Jennifer Liu",
      role: "AI Ethics Advisor", 
      company: "Stanford AI Institute",
      expertise: "Responsible AI Development"
    },
    {
      name: "Captain Mike O'Brien",
      role: "Safety Operations Advisor",
      company: "NYC Fire Department",
      expertise: "Emergency Response Protocols"
    }
  ];

  const companyStats = [
    { label: "Team Members", value: "24", icon: Users },
    { label: "Years Combined Experience", value: "180+", icon: Award },
    { label: "Patents Filed", value: "7", icon: Shield },
    { label: "Research Papers", value: "15", icon: Brain }
  ];

  const getIcon = (platform: string) => {
    switch (platform) {
      case 'github': return Github;
      case 'linkedin': return Linkedin;
      case 'twitter': return Twitter;
      case 'email': return Mail;
      default: return Mail;
    }
  };

  const getDomainIcon = (domain: string) => {
    if (domain.includes('AI') || domain.includes('Machine Learning')) return Brain;
    if (domain.includes('Development') || domain.includes('Software')) return Code;
    if (domain.includes('Design')) return Palette;
    if (domain.includes('Business') || domain.includes('Strategy')) return TrendingUp;
    return Shield;
  };

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Meet Our Team</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Passionate experts in AI, safety technology, and emergency response working together to make the world safer
        </p>
      </div>

      {/* Company Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {companyStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Team Members */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Core Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => {
            const DomainIcon = getDomainIcon(member.domain);
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                    <DomainIcon className="w-12 h-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="font-semibold text-primary">
                    {member.role}
                  </CardDescription>
                  <Badge variant="secondary" className="mx-auto">
                    {member.domain}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center">
                    {member.bio}
                  </p>
                  
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center gap-3 pt-4 border-t">
                    {Object.entries(member.social).map(([platform, link]) => {
                      const Icon = getIcon(platform);
                      return (
                        <Button key={platform} variant="ghost" size="sm" asChild>
                          <a href={link} target="_blank" rel="noopener noreferrer">
                            <Icon className="w-4 h-4" />
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Advisors */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Advisory Board</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advisors.map((advisor, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-bold text-lg mb-1">{advisor.name}</h3>
                <p className="text-primary font-semibold mb-1">{advisor.role}</p>
                <p className="text-sm text-muted-foreground mb-2">{advisor.company}</p>
                <Badge variant="outline">{advisor.expertise}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Company Culture */}
      <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <CardContent className="p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              We believe that technology should serve humanity's most critical needs. Our team is dedicated to 
              building AI-powered safety solutions that protect lives, prevent accidents, and enable faster 
              emergency response worldwide.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Safety First</h3>
                <p className="text-sm text-muted-foreground">
                  Every decision we make prioritizes the safety and well-being of people and communities.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  We push the boundaries of AI and machine learning to solve real-world safety challenges.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Global Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Our goal is to make advanced safety technology accessible to organizations worldwide.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Join Us */}
      <Card className="mt-8">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for safety technology 
            and making a positive impact on the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="emergency">
              <Mail className="w-4 h-4" />
              View Open Positions
            </Button>
            <Button variant="outline">
              <Github className="w-4 h-4" />
              Contribute to Open Source
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Team;
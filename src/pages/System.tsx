import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  Camera, 
  Brain, 
  Zap, 
  Database, 
  Cloud, 
  Activity, 
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Server,
  Smartphone,
  Users,
  Globe
} from "lucide-react";

const System = () => {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  const systemComponents = [
    {
      id: "camera",
      name: "Camera Input",
      icon: Camera,
      status: "Active",
      description: "High-resolution image capture and preprocessing",
      metrics: { uptime: "99.9%", processed: "1,247 images", latency: "12ms" },
      details: "Advanced image preprocessing pipeline with noise reduction, edge detection, and feature extraction capabilities."
    },
    {
      id: "ai",
      name: "AI Detection Engine",
      icon: Brain,
      status: "Processing",
      description: "Machine learning models for hazard identification",
      metrics: { accuracy: "97.3%", models: "12 active", processing: "Real-time" },
      details: "Ensemble of deep learning models including CNNs, object detection, and risk assessment algorithms."
    },
    {
      id: "alert",
      name: "Alert System",
      icon: AlertTriangle,
      status: "Ready",
      description: "Real-time notification and emergency response",
      metrics: { response: "<30s", channels: "5 active", sent: "156 alerts" },
      details: "Multi-channel alert system with escalation protocols and emergency service integration."
    },
    {
      id: "database",
      name: "Data Storage",
      icon: Database,
      status: "Synced",
      description: "Secure storage and analytics database",
      metrics: { storage: "2.4TB", queries: "Fast", backup: "Daily" },
      details: "Distributed database with real-time replication, encryption at rest, and automated backup systems."
    },
    {
      id: "cloud",
      name: "Cloud Infrastructure",
      icon: Cloud,
      status: "Optimal",
      description: "Scalable cloud computing resources",
      metrics: { instances: "8 active", load: "65%", regions: "3 zones" },
      details: "Auto-scaling cloud infrastructure with load balancing and multi-region deployment for high availability."
    },
    {
      id: "api",
      name: "API Gateway",
      icon: Server,
      status: "Active",
      description: "Secure API endpoints and integrations",
      metrics: { requests: "2.1M/day", latency: "45ms", errors: "0.02%" },
      details: "RESTful API with rate limiting, authentication, and comprehensive logging for third-party integrations."
    }
  ];

  const architecture = [
    { from: "Image Input", to: "Preprocessing", delay: 0 },
    { from: "Preprocessing", to: "AI Analysis", delay: 500 },
    { from: "AI Analysis", to: "Risk Assessment", delay: 1000 },
    { from: "Risk Assessment", to: "Alert Generation", delay: 1500 },
    { from: "Alert Generation", to: "Emergency Response", delay: 2000 }
  ];

  const systemMetrics = [
    { label: "System Uptime", value: "99.97%", icon: Activity, color: "text-success" },
    { label: "Processing Speed", value: "28s avg", icon: Zap, color: "text-primary" },
    { label: "Detection Accuracy", value: "97.3%", icon: Brain, color: "text-success" },
    { label: "Active Monitors", value: "156", icon: Users, color: "text-primary" }
  ];

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">System Architecture</h1>
        <p className="text-muted-foreground text-lg">
          Comprehensive overview of FLARE Alert's emergency detection infrastructure
        </p>
      </div>

      {/* System Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {systemMetrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
                  <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
                </div>
                <metric.icon className={`h-8 w-8 ${metric.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Architecture Diagram */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Processing Pipeline
          </CardTitle>
          <CardDescription>
            Real-time hazard detection and response workflow
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="flex items-center justify-between p-6 bg-muted/30 rounded-lg">
              {architecture.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2 border-2 border-primary/20">
                      <span className="text-xs font-bold text-primary">{index + 1}</span>
                    </div>
                    <p className="text-xs font-medium">{step.from}</p>
                  </div>
                  {index < architecture.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-muted-foreground mx-4" />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Badge variant="secondary">Average Processing Time: 28 seconds</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* System Components */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        {systemComponents.map((component) => (
          <Card 
            key={component.id} 
            className={`cursor-pointer transition-all duration-300 ${
              selectedComponent === component.id ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => setSelectedComponent(
              selectedComponent === component.id ? null : component.id
            )}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <component.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{component.name}</CardTitle>
                    <Badge variant={
                      component.status === "Active" ? "default" :
                      component.status === "Processing" ? "secondary" :
                      component.status === "Ready" ? "default" : "secondary"
                    }>
                      {component.status}
                    </Badge>
                  </div>
                </div>
                <CheckCircle className="w-5 h-5 text-success" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{component.description}</p>
              
              <div className="space-y-2">
                {Object.entries(component.metrics).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-sm">
                    <span className="capitalize text-muted-foreground">{key}:</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>

              {selectedComponent === component.id && (
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-muted-foreground">{component.details}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* System Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5" />
            Live System Status
          </CardTitle>
          <CardDescription>
            Real-time monitoring and health metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {[
              { name: "CPU Usage", value: 67, status: "Normal" },
              { name: "Memory Usage", value: 42, status: "Optimal" },
              { name: "Network I/O", value: 28, status: "Low" },
              { name: "Storage Usage", value: 85, status: "High" },
              { name: "AI Model Performance", value: 97, status: "Excellent" }
            ].map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{metric.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{metric.value}%</span>
                    <Badge variant={
                      metric.status === "Excellent" || metric.status === "Optimal" ? "default" :
                      metric.status === "Normal" || metric.status === "Low" ? "secondary" : "destructive"
                    }>
                      {metric.status}
                    </Badge>
                  </div>
                </div>
                <Progress value={metric.value} className="h-2" />
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-success" />
                <span className="text-sm font-medium">All Systems Operational</span>
              </div>
              <Button variant="outline" size="sm">
                View Detailed Logs
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default System;
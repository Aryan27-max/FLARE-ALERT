import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  Eye, 
  Flame, 
  Zap, 
  Droplets, 
  Wind, 
  AlertTriangle,
  CheckCircle,
  Target,
  Cpu,
  Camera,
  Activity,
  Search,
  Shield
} from "lucide-react";

const AIFeatures = () => {
  const [selectedFeature, setSelectedFeature] = useState("detection");

  const detectionTypes = [
    {
      id: "fire",
      name: "Fire Detection",
      icon: Flame,
      accuracy: 97,
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      description: "Advanced flame and smoke detection using thermal imaging analysis",
      features: ["Smoke pattern recognition", "Heat signature analysis", "Flame color detection", "Smoke density measurement"],
      useCases: ["Building safety", "Industrial monitoring", "Wildfire detection", "Kitchen safety"]
    },
    {
      id: "water",
      name: "Water Hazards",
      icon: Droplets,
      accuracy: 94,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      description: "Flood detection and water accumulation monitoring",
      features: ["Water level detection", "Flood pattern analysis", "Leak identification", "Moisture assessment"],
      useCases: ["Flood monitoring", "Pipe leak detection", "Basement flooding", "Water damage prevention"]
    },
    {
      id: "electrical",
      name: "Electrical Hazards",
      icon: Zap,
      accuracy: 91,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      description: "Detection of electrical faults and hazardous conditions",
      features: ["Sparking detection", "Exposed wire identification", "Overheating equipment", "Arc fault recognition"],
      useCases: ["Electrical maintenance", "Safety inspections", "Equipment monitoring", "Fire prevention"]
    },
    {
      id: "chemical",
      name: "Chemical Spills",
      icon: Wind,
      accuracy: 89,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      description: "Chemical hazard and spill detection using visual analysis",
      features: ["Spill pattern recognition", "Chemical color analysis", "Vapor detection", "Contamination spread"],
      useCases: ["Laboratory safety", "Industrial sites", "Transportation", "Environmental monitoring"]
    },
    {
      id: "structural",
      name: "Structural Damage",
      icon: AlertTriangle,
      accuracy: 86,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      description: "Structural integrity assessment and damage detection",
      features: ["Crack detection", "Foundation issues", "Wall damage", "Ceiling problems"],
      useCases: ["Building inspection", "Earthquake damage", "Foundation monitoring", "Safety assessment"]
    },
    {
      id: "slip",
      name: "Slip Hazards",
      icon: Shield,
      accuracy: 92,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      description: "Detection of slippery surfaces and fall hazards",
      features: ["Wet surface detection", "Ice identification", "Obstacle recognition", "Floor condition analysis"],
      useCases: ["Workplace safety", "Public areas", "Winter conditions", "Cleaning protocols"]
    }
  ];

  const aiCapabilities = [
    {
      name: "Real-time Processing",
      description: "Process images in under 30 seconds",
      icon: Activity,
      value: "28s avg"
    },
    {
      name: "Multi-object Detection",
      description: "Identify multiple hazards simultaneously",
      icon: Target,
      value: "Up to 12"
    },
    {
      name: "Edge Computing",
      description: "On-device processing for faster response",
      icon: Cpu,
      value: "Local AI"
    },
    {
      name: "Continuous Learning",
      description: "Models improve with new data",
      icon: Brain,
      value: "Auto-update"
    }
  ];

  const modelMetrics = [
    { name: "Primary Detection Model", accuracy: 97.3, speed: "Fast", status: "Active" },
    { name: "Fire & Smoke Classifier", accuracy: 98.1, speed: "Very Fast", status: "Active" },
    { name: "Water Hazard Detector", accuracy: 94.7, speed: "Fast", status: "Active" },
    { name: "Structural Analysis Model", accuracy: 86.2, speed: "Medium", status: "Training" },
    { name: "Risk Assessment Engine", accuracy: 89.5, speed: "Fast", status: "Active" }
  ];

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">AI Detection Features</h1>
        <p className="text-muted-foreground text-lg">
          Advanced machine learning models for comprehensive hazard detection and risk assessment
        </p>
      </div>

      {/* AI Capabilities Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {aiCapabilities.map((capability, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <capability.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{capability.name}</h3>
                  <p className="text-lg font-bold text-primary">{capability.value}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{capability.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="detection" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="detection">Detection Types</TabsTrigger>
          <TabsTrigger value="models">AI Models</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        {/* Detection Types */}
        <TabsContent value="detection" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {detectionTypes.map((type) => (
              <Card key={type.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 ${type.bgColor} rounded-lg flex items-center justify-center`}>
                        <type.icon className={`w-6 h-6 ${type.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{type.name}</CardTitle>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{type.accuracy}% Accuracy</Badge>
                          <CheckCircle className="w-4 h-4 text-success" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Detection Features</h4>
                    <ul className="space-y-1">
                      {type.features.map((feature, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2">Use Cases</h4>
                    <div className="flex flex-wrap gap-1">
                      {type.useCases.map((useCase, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {useCase}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Accuracy Rate</span>
                      <span className="font-medium">{type.accuracy}%</span>
                    </div>
                    <Progress value={type.accuracy} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* AI Models */}
        <TabsContent value="models" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Active AI Models
              </CardTitle>
              <CardDescription>
                Current machine learning models powering hazard detection
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {modelMetrics.map((model, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold">{model.name}</h3>
                        <Badge variant={model.status === "Active" ? "default" : "secondary"}>
                          {model.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <span>Accuracy: {model.accuracy}%</span>
                        <span>Speed: {model.speed}</span>
                      </div>
                    </div>
                    <div className="w-24">
                      <Progress value={model.accuracy} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Performance */}
        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Processing Performance</CardTitle>
                <CardDescription>Real-time AI model performance metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "Average Processing Time", value: "28 seconds", progress: 85 },
                  { name: "Model Load Time", value: "1.2 seconds", progress: 92 },
                  { name: "Memory Usage", value: "2.4 GB", progress: 60 },
                  { name: "GPU Utilization", value: "67%", progress: 67 },
                  { name: "Inference Speed", value: "45 FPS", progress: 78 }
                ].map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{metric.name}</span>
                      <span className="text-sm text-muted-foreground">{metric.value}</span>
                    </div>
                    <Progress value={metric.progress} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Detection Statistics</CardTitle>
                <CardDescription>Model accuracy and detection rates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "True Positive Rate", value: "97.3%", color: "text-success" },
                  { name: "False Positive Rate", value: "1.8%", color: "text-destructive" },
                  { name: "Sensitivity", value: "96.1%", color: "text-success" },
                  { name: "Specificity", value: "98.7%", color: "text-success" },
                  { name: "F1 Score", value: "0.97", color: "text-success" }
                ].map((stat, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm font-medium">{stat.name}</span>
                    <span className={`text-lg font-bold ${stat.color}`}>{stat.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AIFeatures;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Upload, 
  Camera, 
  AlertTriangle, 
  Shield, 
  CheckCircle, 
  Phone, 
  Eye,
  Clock,
  MapPin,
  Users
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        simulateAnalysis();
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateAnalysis = () => {
    setIsAnalyzing(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          // Mock analysis result
          setAnalysisResult({
            hazardDetected: true,
            hazardType: "Fire Hazard",
            confidence: 97,
            riskLevel: "High",
            location: "Building Section A",
            recommendations: [
              "Evacuate the area immediately",
              "Contact fire department",
              "Use fire extinguisher if safe to do so",
              "Ensure all personnel are accounted for"
            ]
          });
          
          toast({
            title: "Hazard Detected!",
            description: "High-risk fire hazard identified. Emergency protocols initiated.",
            variant: "destructive"
          });
          
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleEmergencyCall = () => {
    const confirmCall = window.confirm(
      "This will initiate an emergency call to local fire department. This is a demo - no actual call will be made. Proceed?"
    );
    if (confirmCall) {
      toast({
        title: "Emergency Services Contacted",
        description: "Fire department has been notified. Response team dispatched.",
        variant: "destructive"
      });
    }
  };

  const stats = [
    { label: "Images Analyzed", value: "1,247", icon: Eye, change: "+12%" },
    { label: "Hazards Detected", value: "23", icon: AlertTriangle, change: "+5%" },
    { label: "Response Time", value: "28s", icon: Clock, change: "-15%" },
    { label: "Active Monitors", value: "8", icon: Users, change: "+2%" }
  ];

  return (
    <div className="container py-8">
      {/* Dashboard Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">FLARE Alert Dashboard</h1>
        <p className="text-muted-foreground text-lg">
          Where Safety Meets Technology - Real-time hazard detection and emergency response
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-success">{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upload Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Hazard Image Upload
            </CardTitle>
            <CardDescription>
              Upload images for AI-powered hazard detection and risk assessment
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="image-upload">Select Image</Label>
              <Input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="cursor-pointer"
              />
            </div>
            
            {uploadedImage && (
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <img 
                    src={uploadedImage} 
                    alt="Uploaded" 
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
                
                {isAnalyzing && (
                  <div className="space-y-2">
                    <Label>Analysis Progress</Label>
                    <Progress value={uploadProgress} className="w-full" />
                    <p className="text-sm text-muted-foreground">
                      Analyzing image for potential hazards...
                    </p>
                  </div>
                )}
              </div>
            )}

            <div>
              <Label htmlFor="location">Location (Optional)</Label>
              <Input 
                id="location" 
                placeholder="Building, floor, room number..."
                className="w-full"
              />
            </div>

            <div>
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea 
                id="notes" 
                placeholder="Describe what you're seeing or any additional context..."
                className="w-full"
              />
            </div>

            <Button 
              variant="emergency" 
              className="w-full" 
              disabled={!uploadedImage || isAnalyzing}
            >
              <Camera className="w-4 h-4" />
              {isAnalyzing ? "Analyzing..." : "Analyze for Hazards"}
            </Button>
          </CardContent>
        </Card>

        {/* Analysis Results */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Analysis Results
            </CardTitle>
            <CardDescription>
              Real-time hazard detection and risk assessment
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!analysisResult ? (
              <div className="text-center py-8 text-muted-foreground">
                <Camera className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Upload an image to begin hazard analysis</p>
              </div>
            ) : (
              <div className="space-y-4">
                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>{analysisResult.hazardType}</strong> detected with{" "}
                    <strong>{analysisResult.confidence}% confidence</strong>
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Risk Level</Label>
                    <Badge 
                      variant="destructive" 
                      className="mt-1 w-full justify-center"
                    >
                      {analysisResult.riskLevel}
                    </Badge>
                  </div>
                  <div>
                    <Label>Location</Label>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{analysisResult.location}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label>Recommended Actions</Label>
                  <ul className="mt-2 space-y-1">
                    {analysisResult.recommendations.map((rec: string, index: number) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant="emergency" 
                  className="w-full emergency-pulse"
                  onClick={handleEmergencyCall}
                >
                  <Phone className="w-4 h-4" />
                  Contact Emergency Services
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest hazard detections and system alerts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { time: "2 minutes ago", event: "Fire hazard detected in Building A", status: "High Risk", type: "emergency" },
              { time: "15 minutes ago", event: "Safety inspection completed", status: "Clear", type: "success" },
              { time: "1 hour ago", event: "Slip hazard detected in hallway", status: "Medium Risk", type: "alert" },
              { time: "3 hours ago", event: "System maintenance completed", status: "Complete", type: "success" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  {activity.type === "emergency" && <AlertTriangle className="w-5 h-5 text-destructive" />}
                  {activity.type === "success" && <CheckCircle className="w-5 h-5 text-success" />}
                  {activity.type === "alert" && <AlertTriangle className="w-5 h-5 text-secondary" />}
                  <div>
                    <p className="text-sm font-medium">{activity.event}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
                <Badge 
                  variant={activity.type === "emergency" ? "destructive" : 
                           activity.type === "success" ? "default" : "secondary"}
                >
                  {activity.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
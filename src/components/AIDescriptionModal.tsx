import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Sparkles, 
  Upload, 
  Wand2, 
  ArrowRight,
  Camera,
  FileText,
  Globe,
  Heart
} from "lucide-react";

interface AIDescriptionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AIDescriptionModal = ({ open, onOpenChange }: AIDescriptionModalProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  const beforeAfterExample = {
    before: {
      title: "Handmade Bowl",
      description: "Clay bowl, handmade, brown color, good for food.",
      price: "$25"
    },
    after: {
      title: "Artisan Terra Cotta Serving Bowl",
      description: "In the quiet hills of Tuscany, where morning light dances through olive groves, Master Giuseppe shapes each bowl with hands that carry three generations of pottery wisdom. This terra cotta serving bowl, kissed by wood-fired flames, bears the subtle imperfections that whisper of its human origin. The warm, earthy tones echo the rich soil of its birthplace, while the gentle curves invite gathering, sharing, and the timeless ritual of breaking bread together.",
      price: "$85"
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            AI-Generated Descriptions
          </DialogTitle>
        </DialogHeader>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="example">Before & After</TabsTrigger>
            <TabsTrigger value="demo">Try It Now</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6 mt-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-cultural flex items-center justify-center">
                <Wand2 className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold">
                Cultural Storytelling AI
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our AI transforms simple product descriptions into rich, culturally-aware narratives 
                that honor the craft, the artisan, and the cultural heritage behind each piece.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-earth/10 border-primary/20">
                <CardHeader className="text-center">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Cultural Context</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Weaves in cultural significance, traditional techniques, and regional heritage
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-cultural/10 border-accent/20">
                <CardHeader className="text-center">
                  <Heart className="w-8 h-8 text-accent mx-auto mb-2" />
                  <CardTitle className="text-lg">Human Stories</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Creates emotional connections through artisan stories and family traditions
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-sunset/10 border-orange-200">
                <CardHeader className="text-center">
                  <Sparkles className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Value Enhancement</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Increases perceived value by highlighting craftsmanship and authenticity
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-6">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                How It Works
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center mx-auto mb-2">
                    1
                  </div>
                  <p className="text-sm font-medium">Upload Image</p>
                  <p className="text-xs text-muted-foreground">or provide basic description</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center mx-auto mb-2">
                    2
                  </div>
                  <p className="text-sm font-medium">AI Analysis</p>
                  <p className="text-xs text-muted-foreground">Cultural context & craft recognition</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center mx-auto mb-2">
                    3
                  </div>
                  <p className="text-sm font-medium">Story Creation</p>
                  <p className="text-xs text-muted-foreground">Rich, respectful narrative</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="example" className="space-y-6 mt-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">Transformation Example</h3>
              <p className="text-muted-foreground">
                See how our AI transforms a basic product description into a compelling story
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Before */}
              <Card className="bg-muted/30 border-muted">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Before</Badge>
                    <CardTitle className="text-lg">Basic Description</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-muted-foreground mb-1">Title:</h4>
                    <p className="text-lg">{beforeAfterExample.before.title}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-muted-foreground mb-1">Description:</h4>
                    <p className="text-sm">{beforeAfterExample.before.description}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-muted-foreground mb-1">Price:</h4>
                    <p className="text-xl font-bold">{beforeAfterExample.before.price}</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* After */}
              <Card className="bg-gradient-cultural/10 border-accent/20">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-accent text-accent-foreground">After AI</Badge>
                    <CardTitle className="text-lg">Enhanced Story</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-muted-foreground mb-1">Title:</h4>
                    <p className="text-lg font-semibold">{beforeAfterExample.after.title}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-muted-foreground mb-1">Description:</h4>
                    <p className="text-sm leading-relaxed italic">{beforeAfterExample.after.description}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-muted-foreground mb-1">Suggested Price:</h4>
                    <p className="text-xl font-bold text-primary">{beforeAfterExample.after.price}</p>
                    <Badge className="text-xs bg-green-100 text-green-700">
                      +240% value increase
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
              <p className="text-sm text-center">
                <strong>Result:</strong> The AI-enhanced description creates emotional connection, 
                highlights cultural significance, and justifies premium pricing through storytelling.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="demo" className="space-y-6 mt-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">Try It Yourself</h3>
              <p className="text-muted-foreground">
                Upload a photo or describe your craft to see AI storytelling in action
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Upload Options */}
              <Card className="border-2 border-dashed border-border hover:border-primary transition-colors cursor-pointer">
                <CardContent className="p-8 text-center">
                  <Camera className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Upload Photo</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Take or upload a photo of your craft
                  </p>
                  <Button className="bg-gradient-sunset">
                    <Upload className="w-4 h-4 mr-2" />
                    Choose File
                  </Button>
                </CardContent>
              </Card>
              
              {/* Voice Description */}
              <Card className="border-2 border-dashed border-border hover:border-primary transition-colors cursor-pointer">
                <CardContent className="p-8 text-center">
                  <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Describe Your Craft</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Write a basic description of your piece
                  </p>
                  <Button variant="outline">
                    Start Writing
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                This is a demo. Your actual story will be generated when you create your artisan profile.
              </p>
              <Button className="bg-gradient-sunset">
                Create Artisan Profile
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AIDescriptionModal;
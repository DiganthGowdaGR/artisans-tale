import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  Mic, 
  Globe, 
  Camera, 
  Wand2, 
  Check,
  ArrowRight,
  ArrowLeft,
  Sparkles
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BecomeArtisanModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BecomeArtisanModal = ({ open, onOpenChange }: BecomeArtisanModalProps) => {
  const [step, setStep] = useState(1);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [uploadMethod, setUploadMethod] = useState<"photo" | "voice" | null>(null);
  const [aiGenerated, setAiGenerated] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
    { code: "hi", name: "हिन्दी", flag: "🇮🇳" }
  ];

  const handleLanguageSelect = (langCode: string) => {
    setSelectedLanguage(langCode);
  };

  const generateAIDescription = () => {
    setAiGenerated(true);
    // Simulate AI generation
    setTimeout(() => {
      setStep(4);
    }, 2000);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Choose Your Language</h3>
              <p className="text-muted-foreground">
                Select your preferred language for the onboarding process
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {languages.map((lang) => (
                <Button
                  key={lang.code}
                  variant={selectedLanguage === lang.code ? "default" : "outline"}
                  className="h-auto p-4 justify-start"
                  onClick={() => handleLanguageSelect(lang.code)}
                >
                  <span className="text-2xl mr-3">{lang.flag}</span>
                  <span>{lang.name}</span>
                </Button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Share Your Craft</h3>
              <p className="text-muted-foreground">
                Upload a photo of your work or record a voice note describing it
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card 
                className={`cursor-pointer transition-all ${uploadMethod === "photo" ? "ring-2 ring-primary" : ""}`}
                onClick={() => setUploadMethod("photo")}
              >
                <CardContent className="p-6 text-center">
                  <Camera className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Upload Photo</h4>
                  <p className="text-sm text-muted-foreground">
                    Take or upload a photo of your craft
                  </p>
                </CardContent>
              </Card>
              
              <Card 
                className={`cursor-pointer transition-all ${uploadMethod === "voice" ? "ring-2 ring-primary" : ""}`}
                onClick={() => setUploadMethod("voice")}
              >
                <CardContent className="p-6 text-center">
                  <Mic className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Voice Note</h4>
                  <p className="text-sm text-muted-foreground">
                    Record yourself describing your craft
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {uploadMethod && (
              <div className="p-6 border-2 border-dashed border-border rounded-lg text-center">
                <p className="text-muted-foreground mb-4">
                  {uploadMethod === "photo" ? "Click to upload or drag and drop your image" : "Click to start recording"}
                </p>
                <Button className="bg-gradient-sunset">
                  {uploadMethod === "photo" ? "Choose File" : "Start Recording"}
                </Button>
              </div>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Wand2 className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Magic in Progress</h3>
              <p className="text-muted-foreground">
                Our AI is creating a beautiful description and suggesting a price for your craft
              </p>
            </div>
            
            {!aiGenerated ? (
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
                <Button onClick={generateAIDescription} className="bg-gradient-sunset">
                  Generate Description & Price
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <Card className="bg-gradient-cultural/10 border-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-accent" />
                      AI-Generated Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value="This exquisite handwoven textile showcases the ancient art of traditional weaving, where each thread tells a story of cultural heritage. The intricate patterns reflect generations of knowledge passed down through skilled hands, creating not just a piece of art, but a bridge between past and present."
                      className="min-h-[100px]"
                    />
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Suggested Price</Label>
                    <Input value="$245.00" />
                  </div>
                  <div>
                    <Label>Category</Label>
                    <Input value="Traditional Textiles" />
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Check className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Profile Created!</h3>
              <p className="text-muted-foreground">
                Your artisan profile has been created and your first listing is now live
              </p>
            </div>
            
            <Card className="bg-gradient-earth/10 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-sunset rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">MS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Maria Santos</h4>
                    <p className="text-sm text-muted-foreground">Traditional Weaving • Oaxaca, Mexico</p>
                  </div>
                  <Badge className="ml-auto bg-green-100 text-green-700">
                    Live
                  </Badge>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  Your first product: <span className="font-medium text-foreground">"Handwoven Traditional Textile"</span> is now available to buyers worldwide.
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline">
                View Profile
              </Button>
              <Button className="bg-gradient-sunset">
                Add More Products
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return selectedLanguage !== "";
      case 2:
        return uploadMethod !== null;
      case 3:
        return aiGenerated;
      case 4:
        return true;
      default:
        return false;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Become an Artisan
          </DialogTitle>
          
          {/* Progress Indicator */}
          <div className="flex items-center justify-center mt-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    i <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {i < step ? <Check className="w-4 h-4" /> : i}
                </div>
                {i < 4 && (
                  <div 
                    className={`h-1 w-12 mx-2 ${
                      i < step ? "bg-primary" : "bg-muted"
                    }`} 
                  />
                )}
              </div>
            ))}
          </div>
        </DialogHeader>
        
        <div className="py-6">
          {renderStep()}
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6 border-t border-border">
          <Button 
            variant="outline" 
            onClick={() => step > 1 ? setStep(step - 1) : onOpenChange(false)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {step > 1 ? "Back" : "Cancel"}
          </Button>
          
          {step < 4 ? (
            <Button 
              onClick={() => setStep(step + 1)}
              disabled={!canProceed()}
              className="bg-gradient-sunset"
            >
              Continue
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button 
              onClick={() => onOpenChange(false)}
              className="bg-gradient-sunset"
            >
              Get Started
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BecomeArtisanModal;
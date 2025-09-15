import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Send, MessageCircle, Wand2, Globe, Heart } from "lucide-react";
import AIDescriptionModal from "./AIDescriptionModal";

const AIAssistant = () => {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isDescriptionModalOpen, setIsDescriptionModalOpen] = useState(false);
  
  const [conversation, setConversation] = useState([
    {
      type: "assistant",
      message: "Hello! I'm Aria, your cultural storytelling assistant. I can help you discover the rich stories behind handmade crafts and connect you with the perfect artisan. What interests you today?",
      timestamp: new Date()
    }
  ]);

  const suggestions = [
    "Tell me about traditional pottery techniques",
    "Find artisans who make wedding textiles",
    "Explain the story behind Oaxacan rugs",
    "Show me eco-friendly craft options"
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user message
    const newMessage = {
      type: "user",
      message: message,
      timestamp: new Date()
    };

    setConversation(prev => [...prev, newMessage]);
    setMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        type: "assistant",
        message: "That's a wonderful question! Let me share the beautiful story behind that craft. Traditional techniques have been passed down through generations, carrying not just skill but cultural heritage and family stories...",
        timestamp: new Date()
      };
      setConversation(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <section className="py-20 bg-background handcraft-texture">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 bg-accent/10 text-accent border-accent/20">
            <Wand2 className="w-4 h-4 mr-2" />
            AI-Powered Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Meet <span className="text-accent">Aria</span>, Your Cultural Guide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI assistant helps you discover the stories, traditions, and meanings 
            behind every handcrafted piece with cultural sensitivity and depth.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Chat Interface */}
            <div className="lg:col-span-2">
              <Card className="h-[600px] flex flex-col bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="border-b border-border/50">
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-cultural flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold">Aria</div>
                      <div className="text-sm text-muted-foreground font-normal">
                        Cultural Storytelling Assistant
                      </div>
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                        Online
                      </Badge>
                    </div>
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-4">
                    {conversation.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                            msg.type === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted/80 border border-border/50"
                          }`}
                        >
                          <p className="text-sm">{msg.message}</p>
                        </div>
                      </div>
                    ))}
                    
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-muted/80 border border-border/50 rounded-2xl px-4 py-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-100" />
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-200" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>

                {/* Input Area */}
                <div className="border-t border-border/50 p-4">
                  <div className="flex gap-2">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ask about crafts, traditions, or artisan stories..."
                      className="flex-1 bg-muted/50 border-border/50"
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    />
                    <Button 
                      onClick={handleSendMessage}
                      className="bg-gradient-sunset hover:opacity-90"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* Quick Suggestions */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {suggestions.map((suggestion, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="text-xs bg-muted/30 border-border/50 hover:bg-muted/50"
                        onClick={() => setMessage(suggestion)}
                      >
                        {suggestion}
                      </Button>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            {/* Features Panel */}
            <div className="space-y-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    What Aria Can Do
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <div className="font-medium text-sm">Cultural Context</div>
                      <div className="text-xs text-muted-foreground">
                        Learn the history and significance behind each craft
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="font-medium text-sm">Personal Stories</div>
                      <div className="text-xs text-muted-foreground">
                        Discover the artisan's journey and family traditions
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <div className="font-medium text-sm">Smart Matching</div>
                      <div className="text-xs text-muted-foreground">
                        Find perfect pieces based on your preferences
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-cultural/10 border-accent/20">
                <CardContent className="p-6 text-center">
                  <Wand2 className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">AI-Generated Descriptions</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Every product gets a beautiful, culturally-aware story that honors the craft and artisan.
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-accent/30 hover:bg-accent/10"
                    onClick={() => setIsDescriptionModalOpen(true)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <AIDescriptionModal 
        open={isDescriptionModalOpen} 
        onOpenChange={setIsDescriptionModalOpen} 
      />
    </section>
  );
};

export default AIAssistant;
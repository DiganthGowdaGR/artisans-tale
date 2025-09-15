import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import heroImage from "@/assets/hero-artisan.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Master artisan crafting beautiful traditional work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
        <div className="absolute inset-0 cultural-pattern" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 mb-8">
            <Sparkles className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-muted-foreground">
              Connecting traditions with modern hearts
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Discover the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-sunset">
              Soul
            </span>{" "}
            of Handmade
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Where master craftsmen share their stories and centuries-old traditions
            meet modern appreciation. Every piece tells a story, every artisan has a legacy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-sunset hover:opacity-90 text-lg px-8 py-4 shadow-warm"
            >
              Explore Artisans
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card"
            >
              <Heart className="mr-2 w-5 h-5" />
              Learn Stories
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                2,500+
              </div>
              <div className="text-sm text-muted-foreground">
                Master Artisans
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                50+
              </div>
              <div className="text-sm text-muted-foreground">
                Countries
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                10k+
              </div>
              <div className="text-sm text-muted-foreground">
                Handmade Pieces
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                98%
              </div>
              <div className="text-sm text-muted-foreground">
                Happy Customers
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedArtisans from "@/components/FeaturedArtisans";
import AIAssistant from "@/components/AIAssistant";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedArtisans />
      <AIAssistant />
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="font-display font-bold text-xl mb-4">
              ARTISAN <span className="text-primary">PLUS</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Connecting traditions with modern hearts
            </p>
            <div className="text-sm text-muted-foreground">
              © 2024 Artisan Plus. Crafted with care for cultural heritage.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
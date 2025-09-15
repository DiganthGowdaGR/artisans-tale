import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Play, 
  Clock, 
  Globe, 
  Heart,
  Volume2,
  Eye,
  Sparkles
} from "lucide-react";

const Stories = () => {
  const stories = [
    {
      id: 1,
      title: "The Last Zapotec Weavers of Oaxaca",
      artisan: "Maria Santos",
      region: "Oaxaca, Mexico",
      type: "Cultural Heritage",
      readTime: "8 min read",
      audioAvailable: true,
      image: "/api/placeholder/400/250",
      excerpt: "Deep in the mountains of Oaxaca, ancient looms tell stories that have been whispered through generations. Maria's grandmother taught her that every diamond pattern...",
      views: 2847,
      featured: true
    },
    {
      id: 2,
      title: "Kyoto's Silent Pottery Masters",
      artisan: "Kenji Yamamoto",
      region: "Kyoto, Japan",
      type: "Traditional Craft",
      readTime: "6 min read",
      audioAvailable: true,
      image: "/api/placeholder/400/250",
      excerpt: "In the quiet streets of Kyoto, where morning mist dances with centuries-old traditions, Master Kenji shapes more than clay...",
      views: 1923,
      featured: false
    },
    {
      id: 3,
      title: "The Wood Spirits of Bamako",
      artisan: "Amara Diallo",
      region: "Bamako, Mali",
      type: "Spiritual Art",
      readTime: "10 min read",
      audioAvailable: false,
      image: "/api/placeholder/400/250",
      excerpt: "Each piece of wood chosen by Amara carries the spirit of its tree. In West African tradition, the carver doesn't create—they reveal what was always there...",
      views: 3156,
      featured: true
    },
    {
      id: 4,
      title: "Threads of Memory: Peruvian Textile Stories",
      artisan: "Isabella Condori",
      region: "Cusco, Peru",
      type: "Cultural Heritage",
      readTime: "7 min read",
      audioAvailable: true,
      image: "/api/placeholder/400/250",
      excerpt: "High in the Andes, where the air is thin but the culture is rich, Isabella weaves stories of her ancestors into every thread...",
      views: 1654,
      featured: false
    }
  ];

  const categories = [
    { name: "All Stories", count: 127, active: true },
    { name: "Cultural Heritage", count: 45, active: false },
    { name: "Traditional Crafts", count: 38, active: false },
    { name: "Artisan Journeys", count: 29, active: false },
    { name: "Spiritual Art", count: 15, active: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 bg-accent/10 text-accent border-accent/20">
            <BookOpen className="w-4 h-4 mr-2" />
            Cultural Stories
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Stories Behind the <span className="text-accent">Craft</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the rich narratives, cultural traditions, and personal journeys 
            that breathe life into every handcrafted piece.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={category.active ? "default" : "outline"}
              size="sm"
              className={category.active ? "bg-gradient-sunset" : ""}
            >
              {category.name}
              <Badge variant="secondary" className="ml-2 text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Featured Stories */}
        <div className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-8 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-accent" />
            Featured Stories
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {stories.filter(story => story.featured).map((story) => (
              <Card 
                key={story.id}
                className="group hover:shadow-cultural transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50 cursor-pointer"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-accent/90 text-accent-foreground border-0">
                        Featured
                      </Badge>
                    </div>
                    {story.audioAvailable && (
                      <div className="absolute top-4 right-4">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="bg-background/80 backdrop-blur-sm hover:bg-background/90"
                        >
                          <Volume2 className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {story.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{story.region}</span>
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {story.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {story.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {story.views.toLocaleString()}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80">
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Stories */}
        <div>
          <h2 className="text-2xl font-display font-bold mb-8">All Stories</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {stories.map((story) => (
              <Card 
                key={story.id}
                className="group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0 group-hover:scale-105 transition-transform"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {story.type}
                        </Badge>
                        {story.audioAvailable && (
                          <Volume2 className="w-3 h-3 text-muted-foreground" />
                        )}
                      </div>
                      
                      <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {story.title}
                      </h3>
                      
                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                        {story.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-3">
                          <span>{story.readTime}</span>
                          <span>{story.views.toLocaleString()} views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            variant="outline"
            className="bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background"
          >
            Load More Stories
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Stories;
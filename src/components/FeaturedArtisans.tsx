import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, ArrowRight, Heart } from "lucide-react";
import artisanWoman from "@/assets/artisan-woman.jpg";

const FeaturedArtisans = () => {
  const artisans = [
    {
      id: 1,
      name: "Maria Santos",
      craft: "Traditional Weaving",
      location: "Oaxaca, Mexico",
      rating: 4.9,
      reviews: 127,
      image: artisanWoman,
      bio: "Third-generation weaver keeping ancient Zapotec traditions alive",
      specialties: ["Rugs", "Textiles", "Wall Art"],
      yearsExperience: 25,
      featured: true
    },
    {
      id: 2,
      name: "Kenji Yamamoto",
      craft: "Ceramic Pottery",
      location: "Kyoto, Japan",
      rating: 4.8,
      reviews: 89,
      image: "/api/placeholder/300/300",
      bio: "Master potter creating contemporary pieces with traditional techniques",
      specialties: ["Bowls", "Vases", "Tea Sets"],
      yearsExperience: 18,
      featured: false
    },
    {
      id: 3,
      name: "Amara Diallo",
      craft: "Wood Carving",
      location: "Bamako, Mali",
      rating: 4.9,
      reviews: 156,
      image: "/api/placeholder/300/300",
      bio: "Sculptural artist preserving West African storytelling traditions",
      specialties: ["Masks", "Sculptures", "Decorative Items"],
      yearsExperience: 22,
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            Featured Masters
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Meet Our <span className="text-primary">Master Artisans</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the passionate craftspeople behind extraordinary creations, 
            each with their own unique story and generations of tradition.
          </p>
        </div>

        {/* Artisans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {artisans.map((artisan) => (
            <Card 
              key={artisan.id} 
              className="group hover:shadow-cultural transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={artisan.image}
                    alt={`${artisan.name} - ${artisan.craft}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    {artisan.featured && (
                      <Badge className="bg-accent/90 text-accent-foreground border-0">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-4 left-4">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="bg-background/80 backdrop-blur-sm hover:bg-background/90"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-accent text-accent mr-1" />
                    <span className="font-medium">{artisan.rating}</span>
                  </div>
                  <span className="text-muted-foreground text-sm">
                    ({artisan.reviews} reviews)
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold mb-1">
                  {artisan.name}
                </h3>
                
                <div className="flex items-center text-muted-foreground text-sm mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  {artisan.location}
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {artisan.bio}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {artisan.specialties.slice(0, 2).map((specialty) => (
                    <Badge 
                      key={specialty} 
                      variant="outline" 
                      className="text-xs bg-muted/50 border-border/50"
                    >
                      {specialty}
                    </Badge>
                  ))}
                  {artisan.specialties.length > 2 && (
                    <Badge 
                      variant="outline" 
                      className="text-xs bg-muted/50 border-border/50"
                    >
                      +{artisan.specialties.length - 2} more
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    {artisan.yearsExperience} years experience
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="group/btn hover:bg-primary hover:text-primary-foreground"
                  >
                    View Profile
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background"
          >
            Explore All Artisans
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtisans;
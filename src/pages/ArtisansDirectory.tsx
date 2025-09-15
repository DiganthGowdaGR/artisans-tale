import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Star, 
  MapPin, 
  ArrowRight, 
  Heart, 
  Filter,
  Search,
  SlidersHorizontal,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";
import artisanWoman from "@/assets/artisan-woman.jpg";

const ArtisansDirectory = () => {
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
      featured: true,
      verified: true
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
      featured: false,
      verified: true
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
      featured: true,
      verified: true
    },
    {
      id: 4,
      name: "Isabella Condori",
      craft: "Textile Art",
      location: "Cusco, Peru",
      rating: 4.7,
      reviews: 94,
      image: "/api/placeholder/300/300",
      bio: "Andean textile artist weaving stories of ancestral wisdom",
      specialties: ["Tapestries", "Clothing", "Accessories"],
      yearsExperience: 15,
      featured: false,
      verified: true
    },
    {
      id: 5,
      name: "Ahmed Hassan",
      craft: "Metalwork",
      location: "Marrakech, Morocco",
      rating: 4.6,
      reviews: 73,
      image: "/api/placeholder/300/300",
      bio: "Traditional metalworker creating intricate brass and copper pieces",
      specialties: ["Lamps", "Trays", "Decorative Items"],
      yearsExperience: 20,
      featured: false,
      verified: true
    },
    {
      id: 6,
      name: "Priya Sharma",
      craft: "Hand Painting",
      location: "Jaipur, India",
      rating: 4.8,
      reviews: 112,
      image: "/api/placeholder/300/300",
      bio: "Miniature painter preserving Rajasthani artistic traditions",
      specialties: ["Paintings", "Portraits", "Decorative Art"],
      yearsExperience: 12,
      featured: false,
      verified: true
    }
  ];

  const regions = ["All Regions", "North America", "South America", "Europe", "Asia", "Africa", "Oceania"];
  const crafts = ["All Crafts", "Weaving", "Pottery", "Wood Carving", "Metalwork", "Painting", "Jewelry"];
  const experience = ["All Experience", "1-5 years", "6-10 years", "11-20 years", "20+ years"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            Artisan Directory
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Discover <span className="text-primary">Master Artisans</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with skilled craftspeople from around the world. Each artisan brings 
            generations of cultural heritage and expertise to their craft.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search artisans by name, craft, or location..."
                className="pl-10 bg-muted/50 border-border/50 focus:bg-background h-12"
              />
            </div>
            
            {/* Filter Button */}
            <Button 
              variant="outline" 
              className="lg:w-auto w-full bg-background/80 backdrop-blur-sm border-border/50 h-12"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2">
            {regions.slice(0, 4).map((region) => (
              <Button
                key={region}
                variant="outline"
                size="sm"
                className="bg-muted/30 border-border/50 hover:bg-muted/50"
              >
                {region}
              </Button>
            ))}
            {crafts.slice(0, 4).map((craft) => (
              <Button
                key={craft}
                variant="outline"
                size="sm"
                className="bg-muted/30 border-border/50 hover:bg-muted/50"
              >
                {craft}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{artisans.length}</span> artisans
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <Button variant="ghost" size="sm" className="text-primary">
              Rating <ArrowRight className="w-3 h-3 ml-1 rotate-90" />
            </Button>
          </div>
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
                  <div className="absolute top-4 right-4 flex gap-2">
                    {artisan.featured && (
                      <Badge className="bg-accent/90 text-accent-foreground border-0">
                        Featured
                      </Badge>
                    )}
                    {artisan.verified && (
                      <Badge className="bg-green-100 text-green-700 border-green-200">
                        <Award className="w-3 h-3 mr-1" />
                        Verified
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
                  <Link to={`/artisan/${artisan.id}`}>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="group/btn hover:bg-primary hover:text-primary-foreground"
                    >
                      View Profile
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background"
          >
            Load More Artisans
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArtisansDirectory;
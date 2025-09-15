import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Heart, Share2, MessageCircle, Award, Clock, Users } from "lucide-react";
import artisanWoman from "@/assets/artisan-woman.jpg";
import productBowl from "@/assets/product-bowl.jpg";

const ArtisanProfile = () => {
  const artisan = {
    name: "Maria Santos",
    craft: "Traditional Weaving",
    location: "Oaxaca, Mexico",
    rating: 4.9,
    reviews: 127,
    followers: 2840,
    image: artisanWoman,
    bio: "I am a third-generation weaver from the Zapotec community in Oaxaca. My grandmother taught me the ancient techniques that have been passed down through our family for over 100 years. Each piece I create tells a story of our people, our land, and our traditions.",
    specialties: ["Traditional Rugs", "Wall Hangings", "Table Runners", "Ceremonial Textiles"],
    yearsExperience: 25,
    languages: ["Spanish", "Zapotec", "English"],
    achievements: [
      "UNESCO Craft Heritage Recognition 2023",
      "Mexico National Artisan Award 2022",
      "Featured in Smithsonian Museum"
    ]
  };

  const portfolio = [
    {
      id: 1,
      title: "Zapotec Diamond Rug",
      price: "$289",
      image: productBowl,
      description: "Traditional diamond pattern representing the four cardinal directions",
      likes: 45,
      inStock: true
    },
    {
      id: 2,
      title: "Mountain Valley Tapestry",
      price: "$156",
      image: "/api/placeholder/300/300",
      description: "Inspired by the mountains surrounding our village",
      likes: 32,
      inStock: true
    },
    {
      id: 3,
      title: "Sacred Bird Wall Hanging",
      price: "$198",
      image: "/api/placeholder/300/300",
      description: "Featuring traditional bird motifs with natural dyes",
      likes: 78,
      inStock: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="mb-8 bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden">
          <div className="relative h-48 bg-gradient-cultural cultural-pattern">
            <div className="absolute inset-0 bg-black/20" />
          </div>
          
          <CardContent className="relative -mt-20 pb-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Profile Image */}
              <div className="relative">
                <img
                  src={artisan.image}
                  alt={artisan.name}
                  className="w-32 h-32 rounded-full border-4 border-background object-cover shadow-cultural"
                />
                <Badge className="absolute -bottom-2 -right-2 bg-accent text-accent-foreground">
                  Verified
                </Badge>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                  <div>
                    <h1 className="text-3xl font-display font-bold mb-2">{artisan.name}</h1>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {artisan.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {artisan.yearsExperience} years
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Heart className="w-4 h-4 mr-2" />
                      Follow
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button className="bg-gradient-sunset">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Message
                    </Button>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="font-bold">{artisan.rating}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">{artisan.reviews} reviews</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="font-bold">{artisan.followers.toLocaleString()}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">followers</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Award className="w-4 h-4 text-accent" />
                      <span className="font-bold">{portfolio.length}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">creations</div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">{artisan.bio}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Portfolio */}
          <div className="lg:col-span-2">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Portfolio</span>
                  <Button variant="outline" size="sm">View All</Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {portfolio.map((item) => (
                    <div key={item.id} className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-lg mb-3">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-3 right-3">
                          <Button variant="ghost" size="sm" className="bg-background/80 backdrop-blur-sm">
                            <Heart className="w-4 h-4" />
                          </Button>
                        </div>
                        {!item.inStock && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <Badge variant="outline" className="bg-background/90">
                              Sold Out
                            </Badge>
                          </div>
                        )}
                      </div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-primary">{item.price}</span>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Heart className="w-3 h-3 mr-1" />
                          {item.likes}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Specialties */}
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Specialties</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {artisan.specialties.map((specialty) => (
                    <Badge key={specialty} variant="outline" className="bg-muted/50">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {artisan.languages.map((language) => (
                    <Badge key={language} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {language}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {artisan.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanProfile;
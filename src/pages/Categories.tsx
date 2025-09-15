import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Palette, 
  Scissors, 
  Hammer, 
  Gem, 
  TreePine, 
  Shirt,
  Package,
  Sparkles,
  ArrowRight,
  TrendingUp
} from "lucide-react";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Textiles & Weaving",
      icon: Scissors,
      description: "Traditional fabrics, rugs, and woven art",
      artisanCount: 156,
      trending: true,
      color: "text-red-500"
    },
    {
      id: 2,
      name: "Pottery & Ceramics",
      icon: Package,
      description: "Handcrafted bowls, vases, and decorative pieces",
      artisanCount: 89,
      trending: false,
      color: "text-orange-500"
    },
    {
      id: 3,
      name: "Wood Carving",
      icon: TreePine,
      description: "Sculptures, furniture, and decorative woodwork",
      artisanCount: 73,
      trending: true,
      color: "text-amber-600"
    },
    {
      id: 4,
      name: "Jewelry & Metalwork",
      icon: Gem,
      description: "Handcrafted jewelry and metal art pieces",
      artisanCount: 124,
      trending: false,
      color: "text-yellow-500"
    },
    {
      id: 5,
      name: "Painting & Art",
      icon: Palette,
      description: "Traditional paintings and contemporary art",
      artisanCount: 67,
      trending: true,
      color: "text-purple-500"
    },
    {
      id: 6,
      name: "Clothing & Fashion",
      icon: Shirt,
      description: "Traditional garments and modern fashion",
      artisanCount: 91,
      trending: false,
      color: "text-pink-500"
    },
    {
      id: 7,
      name: "Leather Goods",
      icon: Hammer,
      description: "Handcrafted bags, accessories, and leather art",
      artisanCount: 45,
      trending: false,
      color: "text-brown-500"
    },
    {
      id: 8,
      name: "Home Decor",
      icon: Sparkles,
      description: "Decorative items and home accessories",
      artisanCount: 103,
      trending: true,
      color: "text-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            Craft Categories
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Explore by <span className="text-primary">Craft Type</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover artisans and their masterpieces organized by traditional craft categories.
            Each category represents generations of cultural heritage and skill.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => (
            <Card 
              key={category.id}
              className="group hover:shadow-cultural transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50 cursor-pointer"
            >
              <CardHeader className="text-center pb-4">
                <div className="relative">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-earth flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                  </div>
                  {category.trending && (
                    <Badge className="absolute -top-2 -right-2 bg-accent/90 text-accent-foreground border-0 text-xs">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Hot
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl font-display">{category.name}</CardTitle>
              </CardHeader>
              
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary">{category.artisanCount}</span>
                  <span className="text-sm text-muted-foreground">artisans</span>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="group/btn hover:bg-primary hover:text-primary-foreground w-full"
                >
                  Explore Category
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-cultural/10 rounded-2xl p-8 border border-accent/20">
          <h3 className="text-2xl font-display font-bold mb-4">
            Can't Find Your Craft?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            We're always expanding our categories. Let us know what traditional crafts you're looking for.
          </p>
          <Button className="bg-gradient-sunset hover:opacity-90">
            Suggest a Category
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
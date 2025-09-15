import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Star, 
  Heart, 
  Share2, 
  ShoppingCart, 
  Truck, 
  Shield, 
  RotateCcw,
  MessageCircle,
  Award,
  Sparkles
} from "lucide-react";
import productBowl from "@/assets/product-bowl.jpg";
import artisanWoman from "@/assets/artisan-woman.jpg";

const ProductDetail = () => {
  const product = {
    id: 1,
    title: "Handcrafted Zapotec Diamond Rug",
    price: "$289.00",
    originalPrice: "$340.00",
    rating: 4.8,
    reviews: 24,
    images: [productBowl, "/api/placeholder/600/600", "/api/placeholder/600/600"],
    description: "This exquisite rug features the traditional diamond pattern that represents the four cardinal directions in Zapotec cosmology. Handwoven using techniques passed down through generations, each diamond tells a story of our connection to the earth and sky.",
    aiStory: "In the mountains of Oaxaca, where morning mist dances with ancient looms, Maria weaves not just wool but memories. Each diamond in this rug represents a cardinal direction, a sacred teaching from her grandmother. The deep red speaks of sunset ceremonies, while the earth tones echo the valley where her sheep graze. This isn't just a rug—it's a piece of living history, where every thread carries the whispers of ancestral wisdom.",
    materials: "100% Natural Wool, Natural Plant Dyes",
    dimensions: "4' x 6' (120 x 180 cm)",
    weight: "3.2 kg",
    careInstructions: "Vacuum regularly, professional cleaning recommended",
    inStock: true,
    quantityAvailable: 3,
    artisan: {
      name: "Maria Santos",
      location: "Oaxaca, Mexico",
      image: artisanWoman,
      experience: "25 years"
    }
  };

  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $200"
    },
    {
      icon: Shield,
      title: "Authenticity Guaranteed",
      description: "100% handmade verification"
    },
    {
      icon: RotateCcw,
      title: "30-Day Returns",
      description: "Hassle-free returns"
    }
  ];

  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      comment: "Absolutely stunning! The craftsmanship is incredible and the story behind it makes it even more special.",
      date: "2 weeks ago"
    },
    {
      name: "David L.",
      rating: 5,
      comment: "Beautiful piece that adds so much character to our living room. Love supporting traditional artisans.",
      date: "1 month ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square rounded-2xl overflow-hidden mb-4 cultural-shadow">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-primary transition-colors cursor-pointer">
                  <img
                    src={image}
                    alt={`${product.title} view ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-accent/10 text-accent border-accent/20">
                <Award className="w-3 h-3 mr-1" />
                Artisan Verified
              </Badge>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                In Stock
              </Badge>
            </div>

            <h1 className="text-3xl font-display font-bold mb-4">{product.title}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                <Star className="w-5 h-5 fill-accent text-accent mr-1" />
                <span className="font-medium">{product.rating}</span>
                <span className="text-muted-foreground ml-1">({product.reviews} reviews)</span>
              </div>
            </div>

            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-4xl font-display font-bold text-primary">{product.price}</span>
              <span className="text-xl text-muted-foreground line-through">{product.originalPrice}</span>
              <Badge className="bg-red-100 text-red-700 border-red-200">15% OFF</Badge>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* AI Story */}
            <Card className="mb-8 bg-gradient-cultural/10 border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Sparkles className="w-5 h-5 text-accent" />
                  The Story Behind This Piece
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed italic">
                  {product.aiStory}
                </p>
              </CardContent>
            </Card>

            {/* Artisan Info */}
            <Card className="mb-8 bg-card/50 border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <img
                    src={product.artisan.image}
                    alt={product.artisan.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">{product.artisan.name}</h4>
                    <p className="text-sm text-muted-foreground">{product.artisan.location} • {product.artisan.experience}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <Button size="lg" className="flex-1 bg-gradient-sunset hover:opacity-90">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-muted/30">
                  <feature.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="font-medium text-sm">{feature.title}</div>
                  <div className="text-xs text-muted-foreground">{feature.description}</div>
                </div>
              ))}
            </div>

            <Separator className="mb-8" />

            {/* Product Details */}
            <div className="space-y-4 mb-8">
              <h3 className="font-semibold text-lg">Product Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Materials:</span>
                  <span className="ml-2">{product.materials}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Dimensions:</span>
                  <span className="ml-2">{product.dimensions}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Weight:</span>
                  <span className="ml-2">{product.weight}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Care:</span>
                  <span className="ml-2">{product.careInstructions}</span>
                </div>
              </div>
            </div>

            <Separator className="mb-8" />

            {/* Reviews */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Customer Reviews</h3>
              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <div key={index} className="border border-border/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">{review.name}</span>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground ml-auto">{review.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { pets } from "@/data/pets";
import { useCart } from "@/contexts/CartContext";

const PetDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const pet = pets.find((p) => p.id === id);

  if (!pet) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Pet not found</h2>
            <Button onClick={() => navigate("/catalog")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Catalog
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 flex-1">
        <Button
          variant="ghost"
          onClick={() => navigate("/catalog")}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Catalog
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="animate-fade-in">
            <Card className="overflow-hidden">
              <div className="aspect-square">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>

          {/* Details Section */}
          <div className="space-y-6 animate-slide-up">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Badge variant="secondary" className="capitalize text-base px-4 py-1">
                  {pet.category}
                </Badge>
                <Badge variant="outline" className="text-base px-4 py-1">
                  {pet.age}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{pet.name}</h1>
              <p className="text-xl text-muted-foreground">{pet.breed}</p>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold text-primary">${pet.price}</span>
              <span className="text-muted-foreground">one-time</span>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">About {pet.name}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pet.description}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {pet.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="flex-1 gap-2"
                onClick={() => {
                  addToCart(pet);
                  navigate("/cart");
                }}
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart & Checkout
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => addToCart(pet)}
              >
                Add to Cart
              </Button>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              All our pets come with a 30-day health guarantee and full support
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PetDetail;

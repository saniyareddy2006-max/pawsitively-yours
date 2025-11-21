import { Link } from "react-router-dom";
import { Pet } from "@/types/pet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface PetCardProps {
  pet: Pet;
}

const PetCard = ({ pet }: PetCardProps) => {
  const { addToCart } = useCart();

  return (
    <Card className="group overflow-hidden hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1">
      <Link to={`/pet/${pet.id}`}>
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={pet.image}
            alt={pet.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-lg">{pet.name}</h3>
            <p className="text-sm text-muted-foreground">{pet.breed}</p>
          </div>
          <Badge variant="secondary" className="capitalize">
            {pet.age}
          </Badge>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
          {pet.description}
        </p>
        <div className="flex flex-wrap gap-1 mb-3">
          {pet.features.slice(0, 2).map((feature) => (
            <Badge key={feature} variant="outline" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <span className="text-2xl font-bold text-primary">${pet.price}</span>
        <Button
          onClick={(e) => {
            e.preventDefault();
            addToCart(pet);
          }}
          size="sm"
          className="gap-2"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PetCard;

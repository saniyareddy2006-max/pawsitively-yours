import { Link, useNavigate } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();

  const handleCheckout = () => {
    toast.success("Proceeding to checkout...", {
      description: "In a real app, this would redirect to payment processing.",
    });
    clearCart();
    navigate("/");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center animate-fade-in">
          <div className="text-center space-y-6 px-4">
            <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto" />
            <h2 className="text-3xl font-bold">Your Cart is Empty</h2>
            <p className="text-muted-foreground text-lg">
              Add some adorable pets to your cart to get started!
            </p>
            <Link to="/catalog">
              <Button size="lg">Browse Pets</Button>
            </Link>
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
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold">Shopping Cart</h1>
            <Button variant="outline" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>

          <div className="space-y-4 mb-8">
            {cart.map((item) => (
              <Card key={item.pet.id} className="animate-slide-up">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="w-full sm:w-32 h-32 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={item.pet.image}
                        alt={item.pet.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{item.pet.name}</h3>
                          <p className="text-muted-foreground">{item.pet.breed}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.pet.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              updateQuantity(item.pet.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="text-lg font-medium w-12 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              updateQuantity(item.pet.id, item.quantity + 1)
                            }
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">
                            ${item.pet.price * item.quantity}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            ${item.pet.price} each
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="animate-slide-up">
            <CardContent className="p-6 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-lg">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">${getTotalPrice()}</span>
                </div>
                <div className="flex items-center justify-between text-lg">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-semibold text-secondary">Free</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex items-center justify-between text-2xl">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-primary">
                      ${getTotalPrice()}
                    </span>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                All purchases include a 30-day health guarantee
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;

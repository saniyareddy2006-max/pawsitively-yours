import React, { createContext, useContext, useState, useCallback } from "react";
import { CartItem, Pet } from "@/types/pet";
import { toast } from "sonner";

interface CartContextType {
  cart: CartItem[];
  addToCart: (pet: Pet) => void;
  removeFromCart: (petId: string) => void;
  updateQuantity: (petId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = useCallback((pet: Pet) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.pet.id === pet.id);
      if (existing) {
        toast.success(`Added another ${pet.name} to cart!`);
        return prev.map((item) =>
          item.pet.id === pet.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      toast.success(`${pet.name} added to cart!`);
      return [...prev, { pet, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((petId: string) => {
    setCart((prev) => prev.filter((item) => item.pet.id !== petId));
    toast.info("Item removed from cart");
  }, []);

  const updateQuantity = useCallback((petId: string, quantity: number) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((item) => (item.pet.id === petId ? { ...item, quantity } : item))
    );
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
    toast.success("Cart cleared!");
  }, []);

  const getTotalPrice = useCallback(() => {
    return cart.reduce((total, item) => total + item.pet.price * item.quantity, 0);
  }, [cart]);

  const getTotalItems = useCallback(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};

export type PetCategory = "dogs" | "cats" | "birds" | "fish";

export interface Pet {
  id: string;
  name: string;
  category: PetCategory;
  breed: string;
  age: string;
  price: number;
  description: string;
  image: string;
  features: string[];
}

export interface CartItem {
  pet: Pet;
  quantity: number;
}

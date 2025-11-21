import { Pet } from "@/types/pet";
import dogImage from "@/assets/dog-1.jpg";
import catImage from "@/assets/cat-1.jpg";
import birdImage from "@/assets/bird-1.jpg";
import fishImage from "@/assets/fish-1.jpg";

export const pets: Pet[] = [
  {
    id: "1",
    name: "Max",
    category: "dogs",
    breed: "Golden Retriever",
    age: "3 months",
    price: 899,
    description: "A playful and friendly Golden Retriever puppy. Max loves to play fetch and is great with kids. He's up to date on all vaccinations and comes with a health certificate.",
    image: dogImage,
    features: ["Vaccinated", "Friendly", "Trained", "Health Certificate"],
  },
  {
    id: "2",
    name: "Luna",
    category: "cats",
    breed: "Orange Tabby",
    age: "2 months",
    price: 599,
    description: "An adorable and curious orange tabby kitten. Luna is litter trained and loves to cuddle. She has a playful personality and gets along well with other pets.",
    image: catImage,
    features: ["Litter Trained", "Playful", "Vaccinated", "Affectionate"],
  },
  {
    id: "3",
    name: "Rio",
    category: "birds",
    breed: "Blue & Yellow Macaw",
    age: "1 year",
    price: 1499,
    description: "A vibrant and intelligent macaw. Rio can learn to talk and loves to interact with people. Comes with a starter kit including cage, toys, and food.",
    image: birdImage,
    features: ["Talkative", "Intelligent", "Hand-raised", "Starter Kit Included"],
  },
  {
    id: "4",
    name: "Nemo",
    category: "fish",
    breed: "Betta Fish",
    age: "6 months",
    price: 49,
    description: "A beautiful betta fish with stunning colors. Nemo is low maintenance and perfect for beginners. Includes care guide and feeding instructions.",
    image: fishImage,
    features: ["Low Maintenance", "Beautiful Colors", "Care Guide Included", "Healthy"],
  },
  {
    id: "5",
    name: "Buddy",
    category: "dogs",
    breed: "Labrador",
    age: "4 months",
    price: 799,
    description: "An energetic Labrador puppy who loves swimming and outdoor activities. Buddy is very social and perfect for active families.",
    image: dogImage,
    features: ["Energetic", "Social", "Vaccinated", "Health Checked"],
  },
  {
    id: "6",
    name: "Whiskers",
    category: "cats",
    breed: "Persian",
    age: "3 months",
    price: 799,
    description: "A fluffy Persian kitten with a calm temperament. Whiskers loves to be pampered and is perfect for apartment living.",
    image: catImage,
    features: ["Calm", "Groomed", "Indoor", "Vaccinated"],
  },
];

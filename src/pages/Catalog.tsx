import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PetCard from "@/components/PetCard";
import { pets } from "@/data/pets";
import { Button } from "@/components/ui/button";
import { PetCategory } from "@/types/pet";

const categories: { value: PetCategory | "all"; label: string }[] = [
  { value: "all", label: "All Pets" },
  { value: "dogs", label: "Dogs" },
  { value: "cats", label: "Cats" },
  { value: "birds", label: "Birds" },
  { value: "fish", label: "Fish" },
];

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState<PetCategory | "all">(
    (categoryParam as PetCategory) || "all"
  );

  const filteredPets = useMemo(() => {
    if (selectedCategory === "all") return pets;
    return pets.filter((pet) => pet.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (category: PetCategory | "all") => {
    setSelectedCategory(category);
    if (category === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Pet Collection</h1>
          <p className="text-xl text-muted-foreground">
            Browse through our wonderful selection of pets
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              onClick={() => handleCategoryChange(category.value)}
              className="capitalize"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Pet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>

        {filteredPets.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No pets found in this category yet. Check back soon!
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Catalog;

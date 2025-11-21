import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PetCard from "@/components/PetCard";
import { pets } from "@/data/pets";
import heroImage from "@/assets/hero-pets.jpg";

const Index = () => {
  const featuredPets = pets.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Find Your Perfect
              <span className="block bg-[var(--gradient-hero)] bg-clip-text text-transparent">
                Furry Friend
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover healthy, happy pets waiting for a loving home. We ensure every pet
              is vaccinated, trained, and ready to become part of your family.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/catalog">
                <Button size="lg" className="gap-2 group">
                  Browse Pets
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3 animate-slide-up">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Healthy & Happy</h3>
              <p className="text-muted-foreground">
                All our pets are health-checked, vaccinated, and come with certificates
              </p>
            </div>
            <div className="text-center space-y-3 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">30-Day Guarantee</h3>
              <p className="text-muted-foreground">
                We stand behind the health and quality of every pet we offer
              </p>
            </div>
            <div className="text-center space-y-3 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Safe Delivery</h3>
              <p className="text-muted-foreground">
                Professional pet transportation with climate-controlled vehicles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pets Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Featured Pets</h2>
            <p className="text-xl text-muted-foreground">
              Meet some of our most adorable companions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPets.map((pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/catalog">
              <Button size="lg" variant="outline" className="gap-2">
                View All Pets
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;


import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-black h-[80vh] min-h-[500px] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1535683577038-03397fbca751?auto=format&fit=crop&q=80&w=1000')",
          backgroundPosition: "center center",
          opacity: 0.3
        }}
      />
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-lg">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white">
            Discover Your <span className="text-elengo-lavender">Signature Scent</span>
          </h1>
          <p className="text-lg mb-8 text-white">
            Explore our exquisite collection of premium fragrances crafted for the discerning individual.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/products" className="btn-lavender flex items-center gap-2">
              <span>Shop Now</span>
              <ArrowRight size={18} />
            </Link>
            <button className="btn-outline text-white border-white">
              Our Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

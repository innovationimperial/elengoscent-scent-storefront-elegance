
import { Link } from "react-router-dom";
import { categories } from "@/data/products";

const CategorySection = () => {
  return (
    <section className="py-16 px-4 bg-elengo-lightGray">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl font-bold mb-4">Explore Our Collections</h2>
          <p className="max-w-2xl mx-auto text-elengo-darkGray">
            Discover the perfect scent for every occasion and preference in our diverse fragrance collections.
          </p>
          <div className="w-24 h-1 bg-elengo-lavender mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link 
              to="/products" 
              key={index}
              className="relative overflow-hidden rounded-lg h-64 group"
            >
              {/* Image */}
              <img 
                src={category.image} 
                alt={category.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="font-playfair text-2xl font-bold text-white mb-2">{category.name}</h3>
                <div className="w-10 h-0.5 bg-white mb-3 transition-all duration-300 group-hover:w-16"></div>
                <span className="text-white text-sm uppercase tracking-wider opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;

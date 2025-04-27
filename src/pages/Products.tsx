
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const categories = ["All", "Women's", "Men's", "Unisex", "Gift Sets"];
  
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-elengo-lightGray py-12 px-4">
          <div className="container mx-auto text-center">
            <h1 className="font-playfair text-4xl font-bold mb-4">Our Collection</h1>
            <p className="max-w-2xl mx-auto text-elengo-darkGray">
              Discover our exquisite range of premium fragrances crafted to elevate your personal style.
            </p>
          </div>
        </div>
        
        {/* Product Filters & Grid */}
        <div className="container mx-auto px-4 py-12">
          {/* Category Filters */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? "bg-elengo-lavender text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {/* Pagination/Load More - Simple Version */}
          <div className="mt-12 flex justify-center">
            <button className="btn-outline">
              Load More Products
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;

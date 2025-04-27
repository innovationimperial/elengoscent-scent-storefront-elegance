
import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const featuredProducts = products.filter(product => product.featured);
  
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl font-bold mb-4">Featured Fragrances</h2>
          <div className="w-24 h-1 bg-elengo-lavender mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/products" className="btn-lavender inline-flex items-center gap-2">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

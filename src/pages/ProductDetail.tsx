
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingCart, Heart, Minus, Plus, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "@/components/ui/use-toast";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  // Find the product
  const product = products.find(p => p.id === Number(id));
  
  // Get related products (same category, excluding current)
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);
  
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="font-playfair text-2xl font-bold mb-4">Product Not Found</h2>
            <Link to="/products" className="btn-lavender inline-block">
              Return to Shop
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Added to cart",
      description: `${product.name} (${quantity}) has been added to your cart`,
    });
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Link to="/products" className="inline-flex items-center text-elengo-darkGray hover:text-elengo-lavender mb-6 transition-colors">
            <ArrowLeft size={18} className="mr-2" />
            Back to Products
          </Link>
          
          {/* Product Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Product Image */}
            <div className="bg-elengo-lightGray rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="font-playfair text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-elengo-darkGray mb-4">{product.category}</p>
              
              <div className="mb-6">
                <h2 className="font-bold text-2xl mb-1">R {product.price.toFixed(2)}</h2>
                <div className="flex items-center">
                  <div className="flex text-elengo-gold">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star}>★</span>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-elengo-darkGray">(12 reviews)</span>
                </div>
              </div>
              
              <p className="text-elengo-darkGray mb-6">
                {product.description}
              </p>
              
              {/* Scent Notes */}
              {product.notes && (
                <div className="mb-6">
                  <h3 className="font-playfair font-semibold mb-3">Scent Notes</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-3 bg-elengo-lightGray rounded-lg">
                      <h4 className="text-sm font-medium mb-1">Top Notes</h4>
                      <p className="text-xs text-elengo-darkGray">{product.notes.top.join(", ")}</p>
                    </div>
                    <div className="p-3 bg-elengo-lightGray rounded-lg">
                      <h4 className="text-sm font-medium mb-1">Middle Notes</h4>
                      <p className="text-xs text-elengo-darkGray">{product.notes.middle.join(", ")}</p>
                    </div>
                    <div className="p-3 bg-elengo-lightGray rounded-lg">
                      <h4 className="text-sm font-medium mb-1">Base Notes</h4>
                      <p className="text-xs text-elengo-darkGray">{product.notes.base.join(", ")}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Size Selection (simplified) */}
              <div className="mb-6">
                <h3 className="font-playfair font-semibold mb-3">Size</h3>
                <div className="flex space-x-3">
                  <button className="px-4 py-2 border border-elengo-lavender bg-elengo-lavender text-white rounded">50ml</button>
                  <button className="px-4 py-2 border border-gray-200 rounded hover:border-elengo-lavender transition-colors">100ml</button>
                </div>
              </div>
              
              {/* Quantity and Add to Cart */}
              <div className="mt-auto flex flex-wrap gap-4">
                <div className="flex items-center border rounded overflow-hidden">
                  <button 
                    onClick={decreaseQuantity}
                    className="p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-2 min-w-[50px] text-center">{quantity}</span>
                  <button 
                    onClick={increaseQuantity}
                    className="p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                
                <button 
                  onClick={handleAddToCart}
                  className="btn-lavender flex-grow sm:flex-grow-0 flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
                
                <button className="p-3 border border-gray-200 rounded hover:border-elengo-lavender transition-colors">
                  <Heart size={18} />
                </button>
              </div>
            </div>
          </div>
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="font-playfair text-2xl font-bold mb-6">You May Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;

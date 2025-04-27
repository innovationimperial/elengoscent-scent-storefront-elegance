
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartItem from "@/components/CartItem";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="font-playfair text-3xl font-bold mb-8">Your Shopping Cart</h1>
        
        {cart.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow p-6">
                {cart.map((item) => (
                  <CartItem 
                    key={item.product.id}
                    product={item.product}
                    quantity={item.quantity}
                  />
                ))}
                
                <div className="flex justify-between mt-6 pt-4 border-t">
                  <button 
                    onClick={clearCart}
                    className="text-elengo-darkGray hover:text-elengo-lavender transition-colors text-sm"
                  >
                    Clear Cart
                  </button>
                  <Link
                    to="/products" 
                    className="text-elengo-lavender hover:underline transition-colors flex items-center gap-2"
                  >
                    <ArrowLeft size={16} />
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="font-playfair text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>R {getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>
                
                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>R {getCartTotal().toFixed(2)}</span>
                  </div>
                </div>
                
                <button className="btn-lavender w-full flex items-center justify-center gap-2">
                  <ShoppingCart size={18} />
                  Proceed to Checkout
                </button>
                
                {/* Payment Methods */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-elengo-darkGray mb-2">We accept</p>
                  <div className="flex justify-center gap-2">
                    <div className="w-10 h-6 bg-gray-200 rounded"></div>
                    <div className="w-10 h-6 bg-gray-200 rounded"></div>
                    <div className="w-10 h-6 bg-gray-200 rounded"></div>
                    <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
              
              {/* Help Box */}
              <div className="mt-4 bg-elengo-lightGray rounded-lg p-4">
                <h3 className="font-medium mb-2">Need Help?</h3>
                <p className="text-sm text-elengo-darkGray mb-2">
                  Have questions about your order or our products?
                </p>
                <a href="#" className="text-sm text-elengo-lavender hover:underline">Contact Customer Support</a>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex justify-center items-center w-20 h-20 bg-elengo-lightGray rounded-full mb-6">
              <ShoppingCart size={32} className="text-elengo-darkGray" />
            </div>
            <h2 className="font-playfair text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-elengo-darkGray max-w-md mx-auto mb-8">
              Looks like you haven't added any fragrances to your cart yet. Explore our collection to find your perfect scent.
            </p>
            <Link to="/products" className="btn-lavender">
              Start Shopping
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;

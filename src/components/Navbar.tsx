
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Menu, Search } from "lucide-react";

const Navbar = () => {
  const { getCartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="font-playfair text-2xl font-bold">
            <span>Elengo</span>
            <span className="text-elengo-lavender">Scent</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-elengo-lavender transition-colors">Home</Link>
          <Link to="/products" className="font-medium hover:text-elengo-lavender transition-colors">Shop</Link>
          <Link to="/" className="font-medium hover:text-elengo-lavender transition-colors">About</Link>
          <Link to="/" className="font-medium hover:text-elengo-lavender transition-colors">Contact</Link>
        </div>
        
        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="hover:text-elengo-lavender transition-colors">
            <Search size={20} />
          </button>
          <Link to="/cart" className="relative hover:text-elengo-lavender transition-colors">
            <ShoppingCart size={20} />
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-elengo-lavender text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {getCartCount()}
              </span>
            )}
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <Link to="/cart" className="relative hover:text-elengo-lavender transition-colors">
            <ShoppingCart size={20} />
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-elengo-lavender text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {getCartCount()}
              </span>
            )}
          </Link>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="hover:text-elengo-lavender transition-colors">
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t mt-4 py-4 px-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="font-medium py-2 hover:text-elengo-lavender transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/products" className="font-medium py-2 hover:text-elengo-lavender transition-colors" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            <Link to="/" className="font-medium py-2 hover:text-elengo-lavender transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/" className="font-medium py-2 hover:text-elengo-lavender transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <div className="pt-2 border-t">
              <button className="flex items-center space-x-2 font-medium py-2 hover:text-elengo-lavender transition-colors">
                <Search size={18} />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

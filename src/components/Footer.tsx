import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
  return <footer className="bg-elengo-lightGray pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="font-playfair text-2xl font-bold">
              <span>Elengo</span>
              <span className="text-elengo-lavender">Scent</span>
            </div>
            <p className="text-sm text-slate-50">
              Discover your signature scent with our exquisite collection of premium fragrances crafted for the discerning individual.
            </p>
            <div className="flex space-x-4 pt-2 bg-gray-200">
              <a href="#" aria-label="Facebook" className="text-elengo-darkGray hover:text-elengo-lavender transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="text-elengo-darkGray hover:text-elengo-lavender transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="text-elengo-darkGray hover:text-elengo-lavender transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-elengo-lavender transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-sm hover:text-elengo-lavender transition-colors">Shop</Link>
              </li>
              <li>
                <Link to="/" className="text-sm hover:text-elengo-lavender transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/" className="text-sm hover:text-elengo-lavender transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/" className="text-sm hover:text-elengo-lavender transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-sm hover:text-elengo-lavender transition-colors">Women's Fragrances</Link>
              </li>
              <li>
                <Link to="/products" className="text-sm hover:text-elengo-lavender transition-colors">Men's Fragrances</Link>
              </li>
              <li>
                <Link to="/products" className="text-sm hover:text-elengo-lavender transition-colors">Unisex Fragrances</Link>
              </li>
              <li>
                <Link to="/products" className="text-sm hover:text-elengo-lavender transition-colors">Gift Sets</Link>
              </li>
              <li>
                <Link to="/products" className="text-sm hover:text-elengo-lavender transition-colors">Home Fragrances</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mt-1 mr-2 text-elengo-lavender flex-shrink-0" />
                <span className="text-sm">123 Fragrance Ave, Cape Town, South Africa</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-elengo-lavender flex-shrink-0" />
                <span className="text-sm">+27 12 345 6789</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-elengo-lavender flex-shrink-0" />
                <span className="text-sm">info@elengoscent.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-gray-200 pt-8 pb-4 mt-4">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-playfair text-lg font-semibold mb-2">Join Our Newsletter</h3>
            <p className="text-sm text-elengo-darkGray mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input type="email" placeholder="Your email address" className="flex-grow px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-elengo-lavender" />
              <button className="btn-lavender whitespace-nowrap">Subscribe</button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6 mt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Elengo Scent. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;
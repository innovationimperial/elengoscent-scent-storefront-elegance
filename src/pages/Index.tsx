
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategorySection from "@/components/CategorySection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProducts />
        <CategorySection />
        
        {/* Brand Story Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="font-playfair text-3xl font-bold mb-4">Our Story</h2>
                <div className="w-24 h-1 bg-elengo-lavender mb-6"></div>
                <p className="mb-4">
                  At Elengo Scent, we believe that fragrance is more than just a scent—it's a personal expression, a memory in the making, and an invisible accessory that completes your presence.
                </p>
                <p className="mb-6">
                  Founded with a passion for crafting exquisite fragrances that resonate with the South African spirit, we blend international perfumery expertise with local inspiration to create scents that are both sophisticated and uniquely ours.
                </p>
                <button className="btn-outline">Read More About Us</button>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=800" 
                    alt="Elengo Scent Story" 
                    className="rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-elengo-lavender rounded-lg hidden md:block"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 px-4 bg-elengo-lightGray">
          <div className="container mx-auto">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="font-playfair text-3xl font-bold mb-4">Stay Connected</h2>
              <p className="mb-6">
                Subscribe to our newsletter for exclusive offers, fragrance tips, and new product announcements.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-elengo-lavender"
                />
                <button className="btn-lavender whitespace-nowrap">Subscribe & Get 10% Off</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

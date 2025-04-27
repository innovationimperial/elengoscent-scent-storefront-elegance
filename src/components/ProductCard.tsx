import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { useCart, Product } from "@/context/CartContext";
import { toast } from "@/components/ui/use-toast";
interface ProductCardProps {
  product: Product;
}
const ProductCard = ({
  product
}: ProductCardProps) => {
  const {
    addToCart
  } = useCart();
  const handleAddToCart = () => {
    addToCart(product, 1);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`
    });
  };
  return <div className="bg-white rounded-lg overflow-hidden shadow card-hover group relative">
      {/* Product Image with Hover Overlay */}
      <div className="relative overflow-hidden h-64">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105" />
        
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-playfair font-medium mb-1">
          <Link to={`/products/${product.id}`} className="hover:text-elengo-lavender transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="text-elengo-darkGray text-sm mb-2">{product.scentFamily}</p>
        <div className="flex justify-between items-center">
          <span className="font-semibold">R {product.price.toFixed(2)}</span>
          <Link to={`/products/${product.id}`} className="text-sm text-elengo-lavender hover:underline">
            View Details
          </Link>
        </div>
      </div>
    </div>;
};
export default ProductCard;
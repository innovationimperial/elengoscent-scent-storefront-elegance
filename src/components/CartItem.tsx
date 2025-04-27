
import { Plus, Minus, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/context/CartContext";

interface CartItemProps {
  product: Product;
  quantity: number;
}

const CartItem = ({ product, quantity }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center py-4 border-b last:border-b-0">
      {/* Product Image */}
      <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Product Info */}
      <div className="flex-grow px-4">
        <h3 className="font-playfair font-medium">{product.name}</h3>
        <p className="text-sm text-elengo-darkGray">{product.category}</p>
        <p className="mt-1 font-semibold">R {product.price.toFixed(2)}</p>
      </div>
      
      {/* Quantity Controls */}
      <div className="flex items-center border rounded overflow-hidden">
        <button 
          onClick={() => updateQuantity(product.id, quantity - 1)}
          className="p-2 hover:bg-gray-100 transition-colors"
          aria-label="Decrease quantity"
        >
          <Minus size={16} />
        </button>
        <span className="px-3 py-1 min-w-[40px] text-center">{quantity}</span>
        <button 
          onClick={() => updateQuantity(product.id, quantity + 1)}
          className="p-2 hover:bg-gray-100 transition-colors"
          aria-label="Increase quantity"
        >
          <Plus size={16} />
        </button>
      </div>
      
      {/* Subtotal & Remove */}
      <div className="ml-4 flex flex-col items-end">
        <span className="font-semibold">R {(product.price * quantity).toFixed(2)}</span>
        <button 
          onClick={() => removeFromCart(product.id)}
          className="text-gray-400 hover:text-elengo-lavender mt-2 transition-colors"
          aria-label="Remove item"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;

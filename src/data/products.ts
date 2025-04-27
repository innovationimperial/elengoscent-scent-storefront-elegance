import { Product } from "../context/CartContext";

export const products: Product[] = [
  {
    id: 1,
    name: "Lavender Dreams",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1571593870759-e49c5d9dab4f?auto=format&fit=crop&q=80&w=500",
    description: "A serene blend of lavender, vanilla, and soft musk. This fragrance evokes peaceful evenings in lavender fields under a twilight sky.",
    category: "Women's",
    featured: true,
    scentFamily: "Floral",
    notes: {
      top: ["Lavender", "Bergamot"],
      middle: ["Jasmine", "Vanilla"],
      base: ["Musk", "Sandalwood"]
    }
  },
  {
    id: 2,
    name: "Midnight Oud",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1620177088258-d57c63da6087?auto=format&fit=crop&q=80&w=500",
    description: "A rich, woody fragrance with deep notes of oud, amber, and spices. Perfect for evening wear and special occasions.",
    category: "Men's",
    featured: true,
    scentFamily: "Woody",
    notes: {
      top: ["Cardamom", "Bergamot"],
      middle: ["Oud", "Rose"],
      base: ["Amber", "Patchouli"]
    }
  },
  {
    id: 3,
    name: "Citrus Sunrise",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1532710474216-4f4c2eed4b7b?auto=format&fit=crop&q=80&w=500",
    description: "A refreshing blend of citrus notes with a hint of jasmine. Energizing and perfect for daytime wear.",
    category: "Unisex",
    featured: true,
    scentFamily: "Citrus",
    notes: {
      top: ["Orange", "Lemon"],
      middle: ["Jasmine", "Green Tea"],
      base: ["Cedar", "White Musk"]
    }
  },
  {
    id: 4,
    name: "Velvet Rose",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1523293915858-5a2eb7c3e221?auto=format&fit=crop&q=80&w=500",
    description: "A luxurious floral fragrance centered around fresh roses with subtle woody undertones.",
    category: "Women's",
    scentFamily: "Floral",
    notes: {
      top: ["Rose", "Pink Pepper"],
      middle: ["Peony", "Lily"],
      base: ["Amber", "Cedar"]
    }
  },
  {
    id: 5,
    name: "Ocean Breeze",
    price: 849.99,
    image: "https://images.unsplash.com/photo-1615224571979-9c9a0d09c7a1?auto=format&fit=crop&q=80&w=500",
    description: "A fresh aquatic scent that captures the essence of the ocean with marine notes and light florals.",
    category: "Unisex",
    scentFamily: "Fresh",
    notes: {
      top: ["Sea Salt", "Bergamot"],
      middle: ["Lavender", "Marine Notes"],
      base: ["Cedar", "Ambergris"]
    }
  },
  {
    id: 6,
    name: "Amber Whispers",
    price: 1199.99,
    image: "https://images.unsplash.com/photo-1589782904677-003cb59ae7f4?auto=format&fit=crop&q=80&w=500",
    description: "A warm and inviting fragrance with amber, vanilla, and spicy undertones. Perfect for cozy evenings.",
    category: "Unisex",
    featured: true,
    scentFamily: "Oriental",
    notes: {
      top: ["Bergamot", "Cinnamon"],
      middle: ["Vanilla", "Rose"],
      base: ["Amber", "Benzoin"]
    }
  },
  {
    id: 7,
    name: "Forest Pine",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1608548192507-8fd0d9eee3b0?auto=format&fit=crop&q=80&w=500",
    description: "A fresh woody scent reminiscent of a walk through a pine forest. Grounding and refreshing.",
    category: "Men's",
    scentFamily: "Woody",
    notes: {
      top: ["Pine", "Eucalyptus"],
      middle: ["Cedar", "Fir Balsam"],
      base: ["Oakmoss", "Vetiver"]
    }
  },
  {
    id: 8,
    name: "Vanilla Orchid",
    price: 949.99,
    image: "https://images.unsplash.com/photo-1533577180227-46c487ddab58?auto=format&fit=crop&q=80&w=500",
    description: "A sweet and creamy fragrance featuring vanilla orchid, tonka bean, and soft musks.",
    category: "Women's",
    scentFamily: "Oriental",
    notes: {
      top: ["Mandarin", "Bergamot"],
      middle: ["Vanilla Orchid", "Jasmine"],
      base: ["Tonka Bean", "Musk"]
    }
  },
];

export const categories = [
  {
    name: "Women's",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=500",
  },
  {
    name: "Men's",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=500",
  },
  {
    name: "Unisex",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=500",
  },
  {
    name: "Gift Sets",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=500",
  },
];

import { Product } from "../context/CartContext";

export const products: Product[] = [
  {
    id: 1,
    name: "Lavender Dreams",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&q=80&w=500",
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
    image: "https://images.unsplash.com/photo-1590736657561-7cc72721de4c?auto=format&fit=crop&q=80&w=500",
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
    name: "Ocean Breeze",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=500",
    description: "A refreshing blend of citrus notes with a hint of jasmine. Energizing and perfect for daytime wear.",
    category: "Unisex",
    featured: true,
    scentFamily: "Fresh",
    notes: {
      top: ["Sea Salt", "Bergamot"],
      middle: ["Lavender", "Marine Notes"],
      base: ["Cedar", "Ambergris"]
    }
  },
  {
    id: 4,
    name: "Rose Poetique",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1615371388849-9a80c5b41740?auto=format&fit=crop&q=80&w=500",
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
    name: "Aqua Vitae",
    price: 849.99,
    image: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?auto=format&fit=crop&q=80&w=500",
    description: "A fresh aquatic scent that captures the essence of the ocean with marine notes and light florals.",
    category: "Men's",
    scentFamily: "Fresh",
    notes: {
      top: ["Sea Salt", "Bergamot"],
      middle: ["Lavender", "Marine Notes"],
      base: ["Cedar", "Ambergris"]
    }
  },
  {
    id: 6,
    name: "Mystic Amber",
    price: 1199.99,
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&q=80&w=500",
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
    name: "Eternal Woods",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=500",
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
    image: "https://images.unsplash.com/photo-1612273800247-4768b264a066?auto=format&fit=crop&q=80&w=500",
    description: "A sweet and creamy fragrance featuring vanilla orchid, tonka bean, and soft musks.",
    category: "Women's",
    scentFamily: "Oriental",
    notes: {
      top: ["Mandarin", "Bergamot"],
      middle: ["Vanilla Orchid", "Jasmine"],
      base: ["Tonka Bean", "Musk"]
    }
  }
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

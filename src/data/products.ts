export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  contents: string[];
  mrp: number;
  grade?: string;
  packSize?: string;
  sku?: string;
  image?: string;
  variants?: ProductVariant[];
}

export interface ProductVariant {
  id: string;
  name: string;
  mrp: number;
  contents: string[];
  grade?: string;
}

// Dry Fruits Boxes Data
export const dryFruitsBoxes: Product[] = [
  {
    id: "df-basic-a",
    name: "Premium Dry Fruits Box - Grade A",
    category: "dry-fruits",
    description: "Premium quality dry fruits combo with cashews and almonds",
    contents: ["Kaju W-180 (250g)", "Badam SANORA (250g)"],
    mrp: 750,
    grade: "Grade A",
    packSize: "500g",
    sku: "DF-BASIC-A",
  },
  {
    id: "df-basic-b",
    name: "Premium Dry Fruits Box - Grade B",
    category: "dry-fruits",
    description: "Quality dry fruits combo with cashews and almonds",
    contents: ["Kaju W-210 (250g)", "Badam PREMIUM (250g)"],
    mrp: 650,
    grade: "Grade B",
    packSize: "500g",
    sku: "DF-BASIC-B",
  },
  {
    id: "df-deluxe-a",
    name: "Deluxe Dry Fruits Box - Grade A",
    category: "dry-fruits",
    description: "Deluxe combination with cashews, almonds, and raisins",
    contents: [
      "Kaju W-180 (200g)",
      "Badam SANORA (200g)",
      "Kishmish LONG GRN (100g)",
    ],
    mrp: 930,
    grade: "Grade A",
    packSize: "500g",
    sku: "DF-DELUXE-A",
  },
  {
    id: "df-royal-a",
    name: "Royal Dry Fruits Box - Grade A",
    category: "dry-fruits",
    description: "Royal combination with premium nuts including pistachios",
    contents: [
      "Kaju W-180 (150g)",
      "Badam SANORA (150g)",
      "Kishmish LONG GRN (100g)",
      "Pista R&S IRANI PINK (100g)",
    ],
    mrp: 1260,
    grade: "Grade A",
    packSize: "500g",
    sku: "DF-ROYAL-A",
  },
  {
    id: "df-premium-a",
    name: "Premium Dry Fruits Box - Grade A",
    category: "dry-fruits",
    description: "Premium selection with walnuts for the ultimate gift",
    contents: [
      "Kaju W-180 (120g)",
      "Badam SANORA (120g)",
      "Kishmish LONG GRN (80g)",
      "Pista R&S IRANI PINK (80g)",
      "Akhrot KN CHILLI (100g)",
    ],
    mrp: 1720,
    grade: "Grade A",
    packSize: "500g",
    sku: "DF-PREMIUM-A",
  },
  {
    id: "df-premium-a",
    name: "Premium Dry Fruits Box - Grade A",
    category: "dry-fruits",
    description: "Premium selection with walnuts for the ultimate gift",
    contents: [
      "Kaju W-180 (120g)",
      "Badam SANORA (120g)",
      "Kishmish LONG GRN (80g)",
      "Pista R&S IRANI PINK (80g)",
      "Akhrot KN CHILLI (100g)",
      "Qumani TOP ",
    ],
    mrp: 850,
    grade: "Grade A",
    packSize: "500g",
    sku: "DF-PREMIUM-A",
  },
];

// Real Juice Gift Packs Data
export const realJuicesPacks: Product[] = [
  {
    id: "rj-book-pack",
    name: "Real Greetings Book Pack",
    category: "real-juices",
    description: "Premium 1L juice combination in elegant book-style packaging",
    contents: ["Mixed Fruit 1L", "Cranberry 1L", "Orange 1L"],
    mrp: 445,
    packSize: "1L x 3",
    sku: "FF2801LT01T",
  },
  {
    id: "rj-bucket-pack",
    name: "Real Greetings Bucket Pack",
    category: "real-juices",
    description: "Family-sized bucket pack with assorted flavors",
    contents: ["Apple 1L", "Mango 1L", "Guava 1L", "Litchi 1L"],
    mrp: 540,
    packSize: "1L x 4",
    sku: "FF2561LT04",
  },
  {
    id: "rj-family-pack",
    name: "Real Greetings Family Pack",
    category: "real-juices",
    description: "Perfect family combination with 1L and 180ml variants",
    contents: [
      "Mixed Fruit 1L",
      "Orange 1L",
      "Orange 180ml",
      "Mixed Fruit 180ml",
    ],
    mrp: 335,
    packSize: "1L x 2 + 180ml x 2",
    sku: "FF2511LT28T",
  },
  {
    id: "rj-handle-pack",
    name: "Real Greetings Handle Pack",
    category: "real-juices",
    description: "Convenient handle pack with 180ml bottles",
    contents: ["Apple 180ml x 2", "Mixed Fruit 180ml x 4"],
    mrp: 140,
    packSize: "180ml x 6",
    sku: "FF250180T",
  },
  {
    id: "rj-box-pack",
    name: "Real Greetings Box Pack",
    category: "real-juices",
    description: "Compact gift box with 180ml bottles",
    contents: ["Guava 180ml x 3", "Litchi 180ml x 2"],
    mrp: 115,
    packSize: "180ml x 5",
    sku: "FF250180",
  },
];

// Snack Factory Gift Packs Data
export const snackFactoryPacks: Product[] = [
  {
    id: "sf-pack-1",
    name: "Snack Factory Gift Pack - 1",
    category: "snack-packs",
    description: "Assorted festive pack with makhana, chips, and juice",
    contents: ["Makhana Lemon Masala", "Chips Pudina Mix", "Mango Juice"],
    mrp: 299,
    packSize: "3 items",
    sku: "SF-GP-001",
  },
  {
    id: "sf-pack-2",
    name: "Snack Factory Gift Pack - 2",
    category: "snack-packs",
    description: "Premium flavourful moments special edition pack",
    contents: [
      "Makhana Cheesy Garlic",
      "Namkeen Plain Bhujia",
      "Chips Achari Mango",
      "Lychee Juice",
    ],
    mrp: 399,
    packSize: "4 items",
    sku: "SF-GP-002",
  },
  {
    id: "sf-pack-3",
    name: "Snack Factory Gift Pack - 3",
    category: "snack-packs",
    description: "Ultimate celebration pack with premium snacks",
    contents: [
      "Makhana Tangy Tomato",
      "Namkeen Aloo Bhujia",
      "Chips Classic Salted",
      "Orange Juice",
    ],
    mrp: 499,
    packSize: "4 items",
    sku: "SF-GP-003",
  },
];

// Cremica Products Data (placeholder - would need actual product details)
export const cremicaProducts: Product[] = [
  {
    id: "cr-pack-1",
    name: "Cremica Festival Pack - 1",
    category: "cremica",
    description: "Premium Cremica products for festive celebrations",
    contents: [
      "Tomato Ketchup",
      "Chilli Sauce",
      "Mixed Fruit Jam",
      "Peanut Butter",
    ],
    mrp: 350,
    packSize: "4 items",
    sku: "CR-FP-001",
  },
  {
    id: "cr-pack-2",
    name: "Cremica Premium Pack - 2",
    category: "cremica",
    description: "Deluxe Cremica gift pack for corporate gifting",
    contents: [
      "Premium Ketchup",
      "Hot & Sweet Sauce",
      "Strawberry Jam",
      "Chocolate Spread",
    ],
    mrp: 450,
    packSize: "4 items",
    sku: "CR-FP-002",
  },
];

export const allProducts = [
  ...dryFruitsBoxes,
  ...realJuicesPacks,
  ...snackFactoryPacks,
  ...cremicaProducts,
];

export const getProductsByCategory = (category: string) => {
  return allProducts.filter((product) => product.category === category);
};

export const getProductById = (id: string) => {
  return allProducts.find((product) => product.id === id);
};

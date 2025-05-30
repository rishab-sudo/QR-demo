const menuData = [
  {
    category: "Starters",
    items: [
      { id: 1, name: "Veg Spring Roll", description: "Crispy rolls with mixed vegetables", price: 180 },
      { id: 2, name: "Chicken Spring Roll", description: "Crispy rolls with minced chicken", price: 220 },
      { id: 3, name: "Paneer Tikka", description: "Grilled cottage cheese with spices", price: 280 },
      { id: 4, name: "Chicken Tikka", description: "Grilled chicken with spices", price: 320 },
      { id: 5, name: "Veg Manchurian", description: "Crispy vegetable balls in spicy sauce", price: 240 },
      { id: 6, name: "Chicken Manchurian", description: "Crispy chicken balls in spicy sauce", price: 280 },
      { id: 7, name: "French Fries", description: "Crispy potato fries", price: 150 },
      { id: 8, name: "Onion Rings", description: "Crispy battered onion rings", price: 180 },
    ],
  },
  {
    category: "Soups",
    items: [
      { id: 9, name: "Tomato Soup", description: "Classic tomato soup with herbs", price: 120 },
      { id: 10, name: "Manchow Soup", description: "Spicy vegetable soup with noodles", price: 150 },
      { id: 11, name: "Sweet Corn Soup", description: "Creamy corn soup with vegetables", price: 140 },
      { id: 12, name: "Chicken Noodle Soup", description: "Clear soup with chicken and noodles", price: 180 },
    ],
  },
  {
    category: "Main Course - Veg",
    items: [
      { id: 13, name: "Paneer Butter Masala", description: "Cottage cheese in rich tomato gravy", price: 280 },
      { id: 14, name: "Palak Paneer", description: "Cottage cheese in spinach gravy", price: 260 },
      { id: 15, name: "Veg Biryani", description: "Fragrant rice with mixed vegetables", price: 220 },
      { id: 16, name: "Veg Fried Rice", description: "Stir-fried rice with vegetables", price: 180 },
      { id: 17, name: "Veg Noodles", description: "Stir-fried noodles with vegetables", price: 180 },
      { id: 18, name: "Veg Pulao", description: "Aromatic rice with vegetables", price: 160 },
      { id: 19, name: "Dal Makhani", description: "Black lentils in rich gravy", price: 240 },
      { id: 20, name: "Jeera Rice", description: "Cumin flavored rice", price: 140 },
    ],
  },
  {
    category: "Main Course - Non Veg",
    items: [
      { id: 21, name: "Butter Chicken", description: "Chicken in rich tomato gravy", price: 320 },
      { id: 22, name: "Chicken Curry", description: "Chicken in spicy gravy", price: 300 },
      { id: 23, name: "Chicken Biryani", description: "Fragrant rice with chicken", price: 280 },
      { id: 24, name: "Chicken Fried Rice", description: "Stir-fried rice with chicken", price: 220 },
      { id: 25, name: "Chicken Noodles", description: "Stir-fried noodles with chicken", price: 220 },
      { id: 26, name: "Egg Fried Rice", description: "Stir-fried rice with egg", price: 180 },
      { id: 27, name: "Egg Noodles", description: "Stir-fried noodles with egg", price: 180 },
      { id: 28, name: "Chicken Tikka Masala", description: "Grilled chicken in rich gravy", price: 340 },
    ],
  },
  {
    category: "Breads",
    items: [
      { id: 29, name: "Butter Naan", description: "Soft bread with butter", price: 40 },
      { id: 30, name: "Garlic Naan", description: "Naan topped with garlic and butter", price: 60 },
      { id: 31, name: "Butter Roti", description: "Whole wheat bread with butter", price: 20 },
      { id: 32, name: "Tandoori Roti", description: "Whole wheat bread from tandoor", price: 30 },
      { id: 33, name: "Laccha Paratha", description: "Layered whole wheat bread", price: 50 },
      { id: 34, name: "Missi Roti", description: "Spiced gram flour bread", price: 40 },
    ],
  },
  {
    category: "Desserts",
    items: [
      { id: 35, name: "Gulab Jamun", description: "Sweet milk solids in sugar syrup", price: 120 },
      { id: 36, name: "Rasmalai", description: "Cottage cheese dumplings in milk", price: 140 },
      { id: 37, name: "Ice Cream", description: "Vanilla ice cream", price: 80 },
      { id: 38, name: "Kheer", description: "Rice pudding with nuts", price: 100 },
      { id: 39, name: "Jalebi", description: "Crispy sweet pretzels", price: 120 },
    ],
  },
  {
    category: "Beverages",
    items: [
      { id: 40, name: "Masala Chai", description: "Spiced Indian tea", price: 40 },
      { id: 41, name: "Cold Drink", description: "Soft drink", price: 60 },
      { id: 42, name: "Mineral Water", description: "500ml bottle", price: 20 },
      { id: 43, name: "Lassi", description: "Sweet yogurt drink", price: 80 },
      { id: 44, name: "Fresh Lime Soda", description: "Lime with soda water", price: 60 },
      { id: 45, name: "Mango Shake", description: "Mango milkshake", price: 100 },
    ],
  },
  {
    category: "Specials",
    items: [
      { id: 46, name: "Veg Thali", description: "Complete meal with variety of dishes", price: 350 },
      { id: 47, name: "Non-Veg Thali", description: "Complete meal with chicken curry", price: 450 },
      { id: 48, name: "Family Pack", description: "4 person meal with variety", price: 1200 },
      { id: 49, name: "Party Pack", description: "8 person meal with variety", price: 2200 },
      { id: 50, name: "Weekend Special", description: "Special weekend menu", price: 1800 },
    ],
  }
];

export default menuData;
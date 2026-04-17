const products = [
  // Category of Ankara and different subcategories
  {
    name: "Aisha Elegant Gown",
    price: 25000,
    description:
      "Stunning fitted Ankara gown with rich patterns, perfect for weddings, parties, and special occasions",
    category: "Ankara",
    subCategory: "gowns",
    image:
      "https://res.cloudinary.com/dlij6pxrf/image/upload/f_auto,q_auto/v1776333302/copy_of_he8yfcbc-large_u5oi6u_6218a6.webp",
    gender: "Female",
    sizes: ["M", "L", "XL"],
    colors: ["Multicolor"],
    inStock: true,
    featured: true,
  },
  {
    name: "Ankara Crop Top and Skirt Set",
    price: 15000,
    description:
      "A trendy Ankara crop top and skirt set, perfect for casual outings and everyday wear",
    category: "Ankara",
    subCategory: "up_and_down",
    image:
      "https://res.cloudinary.com/dlij6pxrf/image/upload/f_auto,q_auto/v1776333762/EAKP11SM-large_lfl1yj.webp",
    gender: "Female",
    sizes: ["M", "L", "XL"],
    colors: ["Multicolor"],
    inStock: true,
    featured: true,
  },
  {
    name: "Traditional Senator Set",
    price: 22000,
    description:
      "A classic Ankara senator set with a long top and matching pants, perfect for traditional events and formal occasions",
    category: "Ankara",
    subCategory: "senator",
    image:
      "https://res.cloudinary.com/dlij6pxrf/image/upload/f_auto,q_auto/v1776333991/IMG_2712_pach44.webp",
    gender: "Male",
    sizes: ["M", "L", "XL"],
    colors: ["Multicolor"],
    inStock: true,
    featured: true,
  },
  // Category of Modern and different subcategories
  {
    name: "Modern Chic Gown",
    price: 35000,
    description:
      "A modern take on the classic gown, featuring contemporary cuts and elegant designs",
    category: "Modern",
    subCategory: "gowns",
    image:
      "https://res.cloudinary.com/dlij6pxrf/image/upload/f_auto,q_auto/v1776334803/images_wd77sg.webp",
    gender: "Female",
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Navy", "Burgundy"],
    inStock: true,
    featured: true,
  },
  {
    name: "Elegant Modern Gown",
    price: 30000,
    description:
      "An elegant modern gown with a sophisticated design, perfect for formal events and special occasions",
    category: "Modern",
    subCategory: "gowns",
    images:
      "https://res.cloudinary.com/dlij6pxrf/image/upload/f_auto,q_auto/v1776334949/27982_Platinum_F_Editorial_muvgr4.webp",
    gender: "Female",
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Navy", "Burgundy"],
    inStock: true,
    featured: true,
  },
  {
    name: "Slim-Fit Blazer & Trouser Set",
    price: 55000,

    category: "modern",
    subCategory: "up_and_down",
    gender: "Female",
    image:
      "https://res.cloudinary.com/dlij6pxrf/image/upload/f_auto,q_auto/v1776335226/71t7MdiBQYL._AC_UY1000__iak7bp.webp",
    description: "Professional power suit for women.",
    sizes: ["M", "L"],
    colors: ["Beige", "Charcoal"],
    inStock: true,
    featured: true,
  },

  // Category of Casual and different subcategories
  {
    name: "Relaxed Linen Set",
    price: 22000,
    category: "casual",
    subCategory: "up_and_down",
    gender: "Male",
    image:
      "https://res.cloudinary.com/dlij6pxrf/image/upload/f_auto,q_auto/v1776335459/shopping_lrcmbg.webp",
    description: "Breathable shirt and shorts set for vacation vibes.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Cream", "Pastel Blue"],
    inStock: true,
    featured: true,
  },
  {
    name: "Summer Sundress",
    price: 11000,
    image:
      "https://res.cloudinary.com/dlij6pxrf/image/upload/f_auto,q_auto/v1776335659/shopping_f6qcj4.webp",
    category: "casual",
    subCategory: "gown",
    gender: "Female",
    description: "Lightweight floral dress for daily outings.",

    sizes: ["XS", "S", "M"],
    colors: ["Floral Pink", "Sunflower Yellow"],
    inStock: true,
    featured: true,
  },
  {
    name: " Denim Utility Jumpsuit",
    price: 14000,
    image:
      "https://res.cloudinary.com/dlij6pxrf/image/upload/f_auto,q_auto/v1776335803/222561179-01-petite-avalon-denim-utility-jumpsuit_svtvxg.webp",
    category: "casual",
    subCategory: "up_and_down",
    description: "Durable denim with multiple pockets.",
    sizes: ["30", "32", "34", "36"],
    colors: ["Light Wash", "Indigo"],
    inStock: true,
    featured: false,
  },
];

export default products;

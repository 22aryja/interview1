import type { ProductsWidgetData } from "@/types/products";

export const productsWidgetMock: ProductsWidgetData = {
  activeTab: "products",
  products: [
    {
      id: "gel-midou-2l",
      name: "Гель для стирки Midou 2л",
      sku: "95950803030949",
      imageUrl: "/products/gel-midou-2l.png",
      sold: { quantity: 64, amount: 1345456 },
      stock: { quantity: 64, amount: 1345456 },
      returns: { quantity: 0, amount: 0 },
    },
    {
      id: "ultra-soft-paper",
      name: "Ультрамягкие натуральные бумажные полотенца",
      sku: "95950803030949",
      imageUrl: "/products/ultra-soft-paper.png",
      sold: { quantity: 64, amount: 1345456 },
      stock: { quantity: 64, amount: 1345456 },
      returns: { quantity: 0, amount: 0 },
    },
    {
      id: "rejuvenating-24k-gold",
      name: "Омолаживающий набор с 24K золотом",
      sku: "95950803030949",
      imageUrl: "/products/rejuvenating-24k-gold.png",
      sold: { quantity: 300, amount: 50000 },
      stock: { quantity: 64, amount: 1345456 },
      returns: { quantity: 0, amount: 0 },
    },
  ],
  categories: [
    {
      id: "home-appliances",
      name: "Бытовая техника",
      description: "Холодильники, пылесосы, утюги и др.",
      imageUrl: "/categories/home-appliances.png",
      sold: { quantity: 50, amount: 101345456 },
      returns: { quantity: 2, amount: 200000 },
    },
    {
      id: "small-kitchen-appliances",
      name: "Малая техника для кухни",
      description: "Мультиварки, блендеры, миксеры и др.",
      imageUrl: "/categories/small-kitchen-appliances.png",
      sold: { quantity: 50, amount: 18200500 },
      returns: { quantity: 0, amount: 0 },
    },
  ],
  returns: [
    {
      id: "tv-pd-1",
      name: "Телевизор PD",
      sku: "95950803030949",
      imageUrl: "/products/tv-pd.png",
      returns: { quantity: 301, amount: 10000000 },
      stock: { quantity: 15, amount: 3000000 },
      sold: { quantity: 2, amount: 700220 },
    },
    {
      id: "tv-pd-2",
      name: "Телевизор PD",
      sku: "95950803030949",
      imageUrl: "/products/tv-pd.png",
      returns: { quantity: 301, amount: 10000000 },
      stock: { quantity: 15, amount: 3000000 },
      sold: { quantity: 2, amount: 700220 },
    },
  ],
};

export interface Metric {
  quantity: number;
  amount: number;
}

export type ProductTab = "products" | "categories" | "returns";

export interface TopProduct {
  id: string;
  name: string;
  sku: string;
  imageUrl: string;
  sold: Metric;
  stock: Metric;
  returns: Metric;
}

export interface TopCategory {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  sold: Metric;
  returns: Metric;
}

export interface TopReturn {
  id: string;
  name: string;
  sku: string;
  imageUrl: string;
  returns: Metric;
  stock: Metric;
  sold: Metric;
}

export interface ProductsWidgetData {
  activeTab: ProductTab;
  products: TopProduct[];
  categories: TopCategory[];
  returns: TopReturn[];
}

export interface Metric {
  quantity: number;
  amount: number;
}

export type ProductTab = "products" | "categories" | "returns";

export interface TopProduct {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  sold: Metric;
  stock?: Metric;
  returns: Metric;
}

export interface ProductsWidgetData {
  activeTab: ProductTab;
  products: TopProduct[];
  categories: TopProduct[];
  returns: TopProduct[];
}

export type FilterMode = "sum" | "amount"

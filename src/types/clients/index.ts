export interface PurchaseMetric {
  quantity: number;
  amount: number;
}

export type ClientsTab = "clients" | "cities";

export interface TopCity {
  id: string;
  name: string;
  buyersCount: number;
  purchased: PurchaseMetric;
}

export interface TopClient {
  id: string;
  name: string;
  phone: string;
  purchasedAmount: number;
}

export interface ClientsWidgetData {
  activeTab: ClientsTab;
  cities: TopCity[];
  clients: TopClient[];
}

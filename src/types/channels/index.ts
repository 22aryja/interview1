export type PlanStatus = "overfulfilled" | "fulfilled" | "underfulfilled";

export interface SalesChannel {
  id: string;
  name: string;
  shipmentPoints: number;
  sold: {
    quantity: number;
    amount: number;
  };
  plan: {
    status: PlanStatus;
    statusLabel: string;
    amount: number;
  };
  returns: {
    quantity: number;
    amount: number;
  };
  progressPercent: number;
}

export interface CityGroup {
  id: string;
  name: string;
  channelsCount: number;
  expanded: boolean;
  channels: SalesChannel[];
}

export type TopTab = "channels" | "managers";

export type TopChannelsData = CityGroup[];

export interface ManagerMetric {
  quantity: number;
  amount: number;
}

export interface TopManager {
  id: string;
  name: string;
  company: string;
  avatarUrl: string;
  sold: ManagerMetric;
  returns: ManagerMetric;
  progressPercent: number;
}

export interface TopManagersData {
  managers: TopManager[];
}

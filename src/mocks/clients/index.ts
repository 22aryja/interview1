import type { ClientsWidgetData } from "@/types/clients";

export const clientsWidgetMock: ClientsWidgetData = {
  activeTab: "cities",
  cities: [
    {
      id: "almaty",
      name: "Алматы",
      buyersCount: 4567,
      purchased: { quantity: 300, amount: 1345456 },
    },
    {
      id: "nur-sultan",
      name: "Нур-Султан",
      buyersCount: 3450,
      purchased: { quantity: 250, amount: 987654 },
    },
    {
      id: "shymkent",
      name: "Шымкент",
      buyersCount: 2300,
      purchased: { quantity: 150, amount: 456123 },
    },
    {
      id: "atyrau",
      name: "Атырау",
      buyersCount: 1800,
      purchased: { quantity: 120, amount: 321654 },
    },
    {
      id: "karaganda",
      name: "Караганда",
      buyersCount: 3200,
      purchased: { quantity: 200, amount: 654321 },
    },
    {
      id: "taraz",
      name: "Тараз",
      buyersCount: 2100,
      purchased: { quantity: 130, amount: 789012 },
    },
    {
      id: "pavlodar",
      name: "Павлодар",
      buyersCount: 1500,
      purchased: { quantity: 90, amount: 234567 },
    },
    {
      id: "ust-kamenogorsk",
      name: "Усть-Каменогорск",
      buyersCount: 950,
      purchased: { quantity: 60, amount: 180000 },
    },
  ],
  clients: [
    {
      id: "aizada-midou-beyne",
      name: "Айзада Midou Бейнеу",
      phone: "+7 (701) 484 82 40",
      purchasedAmount: 1345456,
    },
    {
      id: "daniyar-sultanov-atyrau",
      name: "Данияр Султанов Атырау",
      phone: "+7 (705) 123 45 67",
      purchasedAmount: 2000300,
    },
    {
      id: "aliya-zhunusova-almaty",
      name: "Алия Жунусова Алматы",
      phone: "+7 (707) 234 56 78",
      purchasedAmount: 1500000,
    },
    {
      id: "sergey-petrov-nur-sultan",
      name: "Сергей Петров Нур-Султан",
      phone: "+7 (701) 345 67 89",
      purchasedAmount: 3000000,
    },
    {
      id: "madina-tuleshova-shymkent",
      name: "Мадина Тулешова Шымкент",
      phone: "+7 (708) 456 78 90",
      purchasedAmount: 4200100,
    },
    {
      id: "igor-sidorov-karaganda",
      name: "Игорь Сидоров Караганда",
      phone: "+7 (709) 567 89 01",
      purchasedAmount: 950000,
    },
    {
      id: "zaira-kayratova-pavlodar",
      name: "Заира Кайратова Павлодар",
      phone: "+7 (706) 678 90 12",
      purchasedAmount: 2800500,
    },
  ],
};

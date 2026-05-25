import type { TopChannelsData, TopManagersData } from "@/types/channels";

export const topChannelsMock: TopChannelsData = [
  {
    id: "almaty",
    name: "Алматы",
    channelsCount: 2,
    expanded: true,
    channels: [
      {
        id: "almaty-aydyn-opt-1",
        name: "Айдын опт",
        shipmentPoints: 2,
        sold: {
          quantity: 4,
          amount: 134315,
        },
        plan: {
          status: "overfulfilled",
          statusLabel: "Перевыполнение",
          amount: 134315,
        },
        returns: {
          quantity: 0,
          amount: 0,
        },
        progressPercent: 0,
      },
      {
        id: "almaty-aydyn-opt-2",
        name: "Айдын опт",
        shipmentPoints: 2,
        sold: {
          quantity: 4,
          amount: 134315,
        },
        plan: {
          status: "overfulfilled",
          statusLabel: "Перевыполнение",
          amount: 134315,
        },
        returns: {
          quantity: 0,
          amount: 0,
        },
        progressPercent: 53,
      },
    ],
  },
  {
    id: "shymkent",
    name: "Шымкент",
    channelsCount: 5,
    expanded: false,
    channels: [],
  },
  {
    id: "astana",
    name: "Астана",
    channelsCount: 1,
    expanded: false,
    channels: [],
  },
];

export const topManagersMock: TopManagersData = {
  managers: [
    {
      id: "aliya-nurbekova",
      name: "Алия Нурбекова",
      company: "Каспи",
      avatarUrl: "assets/images/dummy.png",
      sold: {
        quantity: 30,
        amount: 2500200,
      },
      returns: {
        quantity: 1,
        amount: 100,
      },
      progressPercent: 0,
    },
    {
      id: "daniyar-sultanov",
      name: "Данияр Султанов",
      company: "Halyk",
      avatarUrl: "assets/images/dummy.png",
      sold: {
        quantity: 50,
        amount: 3100000,
      },
      returns: {
        quantity: 2,
        amount: 200,
      },
      progressPercent: 53,
    },
    {
      id: "aigul-tulegenova",
      name: "Айгуль Тулегенова",
      company: "Финанс",
      avatarUrl: "assets/images/dummy.png",
      sold: {
        quantity: 20,
        amount: 1800500,
      },
      returns: {
        quantity: 1,
        amount: 150,
      },
      progressPercent: 48,
    },
    {
      id: "ruslan-zhumabaev",
      name: "Руслан Жумабаев",
      company: "Тенге",
      avatarUrl: "assets/images/dummy.png",
      sold: {
        quantity: 0,
        amount: 0,
      },
      returns: {
        quantity: 0,
        amount: 0,
      },
      progressPercent: 0,
    },
  ],
};

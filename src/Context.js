import React from "react";

import { createContext, useState } from "react";

const simulatedOrders = [
  { id: 0, state: "new", date: "12/22/23", item: "salads", price: "€4.20" },
  {
    id: 1,
    state: "waiting_for_confirmation",
    date: "12/8/23",
    item: "salads",
    price: "€4.20",
  },
  {
    id: 2,
    state: "confirmed",
    date: "12/4/23",
    item: "salads",
    price: "€4.20",
  },
  {
    id: 3,
    state: "completed",
    date: "12/7/23",
    item: "salads",
    price: "€4.20",
  },
  {
    id: 4,
    state: "canceled_by_customer",
    date: "12/14/23",
    item: "salads",
    price: "€4.20",
  },
  { id: 5, state: "rejected", date: "12/1/23", item: "salads", price: "€4.20" },
  { id: 6, state: "expired", date: "12/4/23", item: "salads", price: "€4.20" },
  { id: 7, state: "failed", date: "12/9/23", item: "salads", price: "€4.20" },
];

export const MyContext = createContext({
  orders: simulatedOrders,
  setOrders: () => null,
});

export const MyContextProvider = ({ children }) => {
  const [orders, setOrders] = useState(simulatedOrders);

  const value = { orders, setOrders };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

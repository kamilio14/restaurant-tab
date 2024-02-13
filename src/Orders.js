import React, { useState, useEffect, useContext } from "react";
import SingleOrder from "./SingleOrder";

import { MyContext } from "./Context";

const Orders = () => {
  const { setOrders, orders } = useContext(MyContext);

  const [activeTab, setActiveTab] = useState("pending");
  const [activeOrders, setActiveOrders] = useState([]);
  const [language, setLanguage] = useState("ENG");
  const [navbarColor, setNavbarColor] = useState("pending");

  function filteredOrders() {
    if (activeTab === "pending") {
      return orders.filter((item) => {
        return ["new", "waiting_for_confirmation", "confirmed"].includes(
          item.state
        );
      });
    } else if (activeTab === "completed") {
      return orders.filter((item) => {
        return [
          "failed",
          "expired",
          "rejected",
          "completed",
          "canceled_by_customer",
        ].includes(item.state);
      });
    }
  }

  const handleCancelOrder = (orderId) => {
    setOrders((prevOrders) => {
      return prevOrders.map((order) => {
        if (order.id === orderId) {
          if (
            order.state === "new" ||
            order.state === "waiting_for_confirmation"
          )
            return {
              ...order,
              state: "canceled_by_customer",
            };
        }
        return order;
      });
    });
  };

  useEffect(() => {
    setActiveOrders(filteredOrders());
  }, [activeTab, orders]);

  const ordersToRender = activeOrders.map((item, index) => {
    return (
      <SingleOrder
        orderName={item.state}
        key={index}
        id={item.id}
        onCancel={handleCancelOrder}
        date={item.date}
        item={item.item}
        price={item.price}
      />
    );
  });

  const handleClick = (active) => {
    setActiveTab(active);
  };

  const handleLanguageChange = () => {
    setLanguage((prevState) => (prevState === "ENG" ? "SVK" : "ENG"));
  };

  const handleColor = (tab) => {
    tab === "pending" ? setNavbarColor("pending") : setNavbarColor("completed");
  };

  return (
    <div className="whole-card">
      <div className="card">
        <div className="top-nav">
          <button
            className={`btn ${
              navbarColor === "pending" ? "btn-pending" : null
            }`}
            onClick={() => {
              handleClick("pending");
              handleColor("pending");
            }}
          >
            Pending
          </button>
          <button
            className={`btn ${
              navbarColor === "completed" ? "btn-completed" : null
            }`}
            onClick={() => {
              handleClick("completed");
              handleColor("completed");
            }}
          >
            Completed
          </button>
          <button className="btn" onClick={handleLanguageChange}>
            {language}
          </button>
        </div>
        <div className="all-orders">{ordersToRender}</div>
      </div>
    </div>
  );
};

export default Orders;

import React from "react";

const Orderindex = ({ orders }) => {
  return (
    <ul>
      {orders.map((order) => {
        return (
          <li key={order.id}>
            {order.ticket.title} - {order.status}
          </li>
        );
      })}
    </ul>
  );
};

Orderindex.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get("/api/orders");

  return { orders: data };
};

export default Orderindex;

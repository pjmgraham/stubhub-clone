import request from "supertest";
import { app } from "../../app";
import { Order } from "../../models/order";
import { Ticket } from "../../models/ticket";

it("marks an order as cancelled", async () => {
  // Create a ticket with Ticket Model
  const ticket = Ticket.build({
    title: "concert",
    price: 20,
  });
  await ticket.save();

  const user = global.signin();

  // Make a request to create an order
  const { body: order } = await request(app)
    .post("/api/orders")
    .set("Cookie", user)
    .send({ ticketId: ticket.id })
    .expect(201);

  // Make a request to cancel the order
  await request(app)
    .delete(`/api/orders/${order.id}`)
    .set("Cookie", user)
    .expect(204);

  // Expectation to make sure the thing is cancelled
  const updatedOrder = await Order.findById(order.id);

  expect(updatedOrder!.status).toEqual("cancelled");
})

it.todo("emits an order cancelled event");

//


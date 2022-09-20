import { Publisher, OrderCreatedEvent, Subjects } from "@pjmtix/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}

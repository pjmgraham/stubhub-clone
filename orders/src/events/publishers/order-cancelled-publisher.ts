import { Publisher, OrderCancelledEvent, Subjects } from "@pjmtix/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}


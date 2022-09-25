import { Subjects, Publisher, PaymentCreatedEvent } from "@pjmtix/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}



import { Publisher, Subjects, TicketUpdatedEvent } from "@pjmtix/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}


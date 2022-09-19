import {Publisher, Subjects, TicketCreatedEvent} from '@pjmtix/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}


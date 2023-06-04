import { Agenda } from '../entities';

export class AgendaResponseDto {
  success: boolean;
  createdAgenda: Agenda;
}

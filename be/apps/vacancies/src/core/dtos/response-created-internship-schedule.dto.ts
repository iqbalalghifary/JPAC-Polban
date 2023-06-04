import { InternshipSchedule } from '../entities';

export class InternshipScheduleResponseDto {
  success: boolean;
  createdInternshipSchedule: InternshipSchedule;
}

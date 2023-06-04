import { Injectable } from '@nestjs/common';
import { InternshipSchedule } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class InternshipScheduleUseCases {
  constructor(
    private dataServices: IDataServices
  ) {}

  getAllInternshipSchedules(): Promise<InternshipSchedule[]> {
    return this.dataServices.internshipSchedules.getAll();
  }

  getInternshipScheduleById(id: any): Promise<InternshipSchedule> {
    return this.dataServices.internshipSchedules.get(id);
  }

  createInternshipSchedule(InternshipSchedule: InternshipSchedule): Promise<InternshipSchedule> {
    return this.dataServices.internshipSchedules.create(InternshipSchedule);
  }

  updateInternshipSchedule(InternshipScheduleId: string, InternshipSchedule: InternshipSchedule): Promise<InternshipSchedule> {
    return this.dataServices.internshipSchedules.update(InternshipScheduleId, InternshipSchedule);
  }

  deleteInternshipSchedule(id: any): Promise<InternshipSchedule> {
    return this.dataServices.internshipSchedules.delete(id);
  }

}

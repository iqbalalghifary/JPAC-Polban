import { Injectable } from '@nestjs/common';
import { InternshipSchedule } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class InternshipScheduleUseCases {
  constructor(
    private dataServices: IDataServices
  ) {}

  getAllInternshipSchedules() {
    return this.dataServices.internshipSchedules.getAll();
  }

  getInternshipScheduleById(id: any) {
    return this.dataServices.internshipSchedules.get(id);
  }

  createInternshipSchedule(InternshipSchedule: InternshipSchedule) {
    return this.dataServices.internshipSchedules.create(InternshipSchedule);
  }

  updateInternshipSchedule(data: any) {
    return this.dataServices.internshipSchedules.update(data.id, data.payload);
  }

  deleteInternshipSchedule(id: any) {
    return this.dataServices.internshipSchedules.delete(id);
  }

  deleteAllInternshipSchedule() {
    return this.dataServices.internshipSchedules.deleteAll();
  }

}

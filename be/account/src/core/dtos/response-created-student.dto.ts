import { Student } from '../entities';

export class ResponseCreatedStudentDto {
  success: boolean;
  createdStudent: Student;
}

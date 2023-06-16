import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class StudentUseCases {
  constructor(
    @Inject('SERVICE_ACCOUNT') private readonly clientStudent: ClientProxy,
  ) {}

  async importData(payload: any): Promise<any> {
    console.log(payload)
    const pattern = { cmd: 'import_student' };
    return this.clientStudent
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  updateStudentOne(payload: any) {
    const pattern = { cmd: 'update_student_one' };
    return this.clientStudent
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  updateStudentMultiple(payload: any) {
    const pattern = { cmd: 'update_student_multiple' };
    return this.clientStudent
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  getAllStudents() {
    const pattern = { cmd: 'get_all_student' };
    const payload = {};
    return this.clientStudent
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  getStudentById(id: any) {
    const pattern = { cmd: 'get_by_id_student' };
    const payload = id;
    return this.clientStudent
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  activateStudent(payload: any) {
    const pattern = { cmd: 'activate_student' };
    return this.clientStudent
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  registerStudent(payload: any) {
    const pattern = { cmd: 'register_student' };
    return this.clientStudent
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  createStudent(payload: any) {
    const pattern = { cmd: 'create_student' };
    return this.clientStudent
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  updateStudent(payload: any) {
    const pattern = { cmd: 'update_one_student' };
    return this.clientStudent
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  deleteStudent(id: string) {
    const pattern = { cmd: 'delete_student' };
    const payload = id;
    return this.clientStudent
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

  deleteAllStudent() {
    const pattern = { cmd: 'delete_all_student' };
    const payload = {};
    return this.clientStudent
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );    
  }

}

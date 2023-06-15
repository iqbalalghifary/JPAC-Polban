import { Inject, Injectable } from '@nestjs/common';
import { Student } from '../../core/entities';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';
const excelToJson = require('convert-excel-to-json')
const fs = require('fs-extra')

@Injectable()
export class StudentUseCases {
  constructor(
    @Inject('SERVICE_ACCOUNT') private readonly clientStudent: ClientProxy,
  ) {}

  async importExcel(file: any): Promise<any> {
    const excelData = await excelToJson({
      sourceFile: file.path,
      header: {
        rows: 1
      },
      columnToKey: {
        "*": "{{columnHeader}}"
      }
    });

    fs.remove(file.path);

    // for(let i = 0; i < excelData.length(); i++){
    //   const newStudent = new Student();
    //   newStudent.email = excelData[i].email;
    //   this.registerStudent(newStudent);
    // }

    return excelData;
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

  createStudent(payload: any) {
    const pattern = { cmd: 'register_student' };
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

}

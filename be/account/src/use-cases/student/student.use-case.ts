import { Injectable } from '@nestjs/common';
import { Student } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
const excelToJson = require('convert-excel-to-json')
const fs = require('fs-extra')

@Injectable()
export class StudentUseCases {
  constructor(
    private dataServices: IDataServices
  ) {}

  getAllStudents() {
    return this.dataServices.students.getAll();
  }

  async importExcel(file: any) {
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

  updateStudentOne(data: any) {
    return this.dataServices.students.updateOne(data.id, data.payload);
  }

  updateStudentMultiple(data: any) {
    return this.dataServices.students.updateMultiple(data.id, data.payload);
  }

  getStudentById(id: any) {
    return this.dataServices.students.get(id);
  }

  createStudent(student: Student) {
    return this.dataServices.students.create(student);
  }

  deleteStudent(id: string) {
    return this.dataServices.students.delete(id);
  }

  deleteAllStudent() {
    return this.dataServices.students.deleteAll();
  }

}

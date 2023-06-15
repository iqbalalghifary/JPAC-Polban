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

  getAllStudents(): Promise<Student[]> {
    return this.dataServices.students.getAll();
  }

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

  updateStudentOne(studentId: string, Student: Student): Promise<Student> {
    return this.dataServices.students.updateOne(studentId, Student);
  }

  updateStudentMultiple(studentId: string, Student: Student): Promise<Student> {
    return this.dataServices.students.updateMultiple(studentId, Student);
  }

  getStudentById(id: any): Promise<Student> {
    return this.dataServices.students.get(id);
  }

  registerStudent(student: Student): Promise<Student> {
    return this.dataServices.students.create(student);
  }

  deleteStudent(id: string): Promise<Student> {
    return this.dataServices.students.delete(id);
  }

}

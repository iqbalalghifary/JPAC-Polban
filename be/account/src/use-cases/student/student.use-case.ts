import { Inject, Injectable } from '@nestjs/common';
import { Student, User } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { extname } from 'path';
const excelToJson = require('convert-excel-to-json')
import * as bcrypt from 'bcrypt';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';
const fs = require('fs-extra')

@Injectable()
export class StudentUseCases {
  constructor(
    private dataServices: IDataServices,
    @Inject('SERVICE_EMAIL') private readonly clientEmail: ClientProxy,    
  ) {}

  getStudent(item?: any) {
    return this.dataServices.students.get(item);
  }

  async importData(file: any) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = extname(file.originalname);
    const filename = `${uniqueSuffix}${ext}`;
    await fs.appendFileSync(filename, Buffer.from(file.buffer.data));

    const excelData = await excelToJson({
      sourceFile: filename,
      header: {
        rows: 1
      },
      columnToKey: {
        "*": "{{columnHeader}}"
      }
    });

    fs.remove(filename);

    for(let i = 0; i < excelData.Sheet1.length; i++){
      const student = new Student();
      student.nim = excelData.Sheet1[i].nim;
      student.name = excelData.Sheet1[i].nama;
      student.major = excelData.Sheet1[i].jurusan;
      student.study_program = excelData.Sheet1[i].prodi;
      this.dataServices.students.create(student);
    }

    return excelData;
  }

  async activateStudent(data: any) {
    await this.dataServices.students.updateOne(data.filters, data.payload);

    const generatedPassword = Math.random().toString(36).slice(-8);

    const studentProfile = await this.dataServices.students.get(data.filters);

    const newUser = new User();
    newUser.username = studentProfile[0].email;
    newUser.password = await bcrypt.hash(generatedPassword, 10)
    newUser.userRole = 'Student';
    newUser.referenceAttributeId = data.filters;

    await this.dataServices.users.create(newUser);

    const pattern = { cmd: 'email_aktivasi_pelamar' };
    const payload = { 
      to : studentProfile[0].email,
      subject: `${studentProfile[0].name}, your account has been activated`,
      params: {
        "name": studentProfile[0].name,
        "email": studentProfile[0].email,
        "password": generatedPassword
      }
    };
    return this.clientEmail
    .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  updateStudentOne(data: any) {
    return this.dataServices.students.updateOne(data.filters, data.payload);
  }

  updateStudentMultiple(data: any) {
    return this.dataServices.students.updateMultiple(data.filters, data.payload);
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

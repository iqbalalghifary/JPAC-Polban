import { 
  Controller
} from '@nestjs/common';
import { StudentUseCases } from '../use-cases/student';
import { MessagePattern } from '@nestjs/microservices';

@Controller('api/student')
export class StudentController {
  constructor(
    private studentUseCases: StudentUseCases
  ) {}

  @MessagePattern({ cmd: 'import_data' })  
  async readExcelFile(data: any) {
    try {
      return await this.studentUseCases.importExcel(data);
    } catch (error){
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'get_all_student' })
  async getAll() {
    try {
      return await this.studentUseCases.getAllStudents();
    } catch (error){
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'get_by_id_student' })
  async getById(id: any) {
    try {
      return await this.studentUseCases.getStudentById(id);
    } catch (error){
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'register_student' })
  async registerStudent(studentId: any){
    try {
      return await this.studentUseCases.updateStudentOne({ id: studentId, payload: { status: 'diusulkan' } });
    } catch (error){
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'create_student' })
  async createStudent(data: any){
    try {
      return await this.studentUseCases.createStudent(data);
    } catch (error){
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'update_student' })
  async updateStudent(data: any) {
    try {
      return await this.studentUseCases.updateStudentOne(data);
    } catch (error){
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'delete_student' })
  async deleteStudent(data: any){
    try {
      return await this.studentUseCases.deleteStudent(data);
    } catch (error){
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'delete_all_student' })
  async deleteAllAlumni() {
    try {
      return await this.studentUseCases.deleteAllStudent();
    } catch (error){
      console.log(error);
    }
  }

}
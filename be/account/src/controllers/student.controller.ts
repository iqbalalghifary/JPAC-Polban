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

  @MessagePattern({ cmd: 'import_student' })  
  async readExcelFile(data: any) {
    try {
      return await this.studentUseCases.importData(data);
    } catch (error){
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'get_all_student' })
  async getAll() {
    try {
      return await this.studentUseCases.getStudent();   
    } catch (error){
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'get_by_id_student' })
  async getById(id: any) {
    try {
      return await this.studentUseCases.getStudent({ _id: id });   
    } catch (error){
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'activate_student' })
  async activateStudent(data: any) {
    try {
      return await this.studentUseCases.activateStudent(data);
    } catch(error) {
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'register_student' })
  async registerStudent(data: any){
    try {
      return await this.studentUseCases.updateStudentOne(data);
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
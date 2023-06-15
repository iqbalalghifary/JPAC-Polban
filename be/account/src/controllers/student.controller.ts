import { 
  Controller, 
  Get, 
  Param, 
  Post, 
  Put, 
  UseInterceptors, 
  UploadedFile,
  Body,
  Delete
} from '@nestjs/common';
import { ResponseCreatedStudentDto } from '../core/dtos';
import { StudentUseCases } from '../use-cases/student';
import { Student } from 'src/core';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('api/student')
export class StudentController {
  constructor(
    private studentUseCases: StudentUseCases
  ) {}

  @Post('import-data')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads/import',
      filename: (_, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        const filename = `${uniqueSuffix}${ext}`;
        callback(null, filename)
      }
    }),
  }))  
  async readExcelFile(@UploadedFile() file: Express.Multer.File): Promise<any>{
    const result = await this.studentUseCases.importExcel(file);
    return result;
  }

  @Get()
  async getAll() {
    return this.studentUseCases.getAllStudents();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.studentUseCases.getStudentById(id);
  }

  @Post('register')
  async registerStudent(@Body() student: Student) : Promise<ResponseCreatedStudentDto> {
    const responseRegisteredStudentDto = new ResponseCreatedStudentDto();
    try {
      const registerStudent = await this.studentUseCases.registerStudent(student);

      responseRegisteredStudentDto.success = true;
      responseRegisteredStudentDto.createdStudent = registerStudent;
    } catch (error) {
      console.log(error);
      responseRegisteredStudentDto.success = false;
    }

    return responseRegisteredStudentDto;
  }

  @Put(':id')
  updateStudent(
    @Param('id') studentId: string,
    @Body() datas: Student,
  ) {
    return this.studentUseCases.updateStudentOne(studentId, datas);
  }

  @Delete(':id')
  deleteStudent(@Param('id') StudentId: string) {
    return this.studentUseCases.deleteStudent(StudentId);
  }

}
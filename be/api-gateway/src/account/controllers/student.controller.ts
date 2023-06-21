import { 
  Controller, 
  Get, 
  Param, 
  Post, 
  Put, 
  UseInterceptors, 
  UploadedFile,
  Body,
  Delete,
  UseGuards
} from '@nestjs/common';
import { StudentUseCases } from '../use-cases/student';
import { Student } from '../core';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/app/guard/jwt.auth.guard';
import { RoleAuthGuard } from 'src/app/guard/roles-auth.guard';
import { Roles } from 'src/app/guard/roles-decorator';

@Controller('api/student')
export class StudentController {
  constructor(
    private studentUseCases: StudentUseCases
  ) {}

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Post('import-data')
  @UseInterceptors(FileInterceptor('excel'))  
  readExcelFile(@UploadedFile() file: Express.Multer.File): Promise<any>{
    const result = this.studentUseCases.importData(file);
    return result;
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Get()
  getAll() {
    return this.studentUseCases.getAllStudents();
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Get(':id')
  getById(@Param('id') id: any) {
    return this.studentUseCases.getStudentById(id);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Put('activate/:id')
  activateStudent(@Param('id') studentId: string) {
    return this.studentUseCases.activateStudent({ filters: { _id: studentId }, payload: { status: 'aktif' } });
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Post('create')
  createStudent(@Body() student: Student) {
    return this.studentUseCases.createStudent(student);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Put('register/:id')
  registerStudent(@Param('id') studentId: string,) {
    return this.studentUseCases.registerStudent(studentId);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Put(':id')
  updateStudent(
    @Param('id') studentId: string,
    @Body() datas: Student,
  ) {
    return this.studentUseCases.updateStudentOne({ filters: { _id: studentId }, data: datas });
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Delete(':id')
  deleteStudent(@Param('id') StudentId: string) {
    return this.studentUseCases.deleteStudent(StudentId);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni', 'Student', 'Operator', 'Partner')
  @Delete()
  deleteAllStudent() {
    return this.studentUseCases.deleteAllStudent();
  }

}
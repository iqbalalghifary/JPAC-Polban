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
import { diskStorage } from 'multer';
import { extname } from 'path';
import { JwtAuthGuard } from 'src/app/guard/jwt.auth.guard';
import { RoleAuthGuard } from 'src/app/guard/roles-auth.guard';
import { Roles } from 'src/app/guard/roles-decorator';

@Controller('api/student')
export class StudentController {
  constructor(
    private studentUseCases: StudentUseCases
  ) {}

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
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
  readExcelFile(@UploadedFile() file: Express.Multer.File): Promise<any>{
    const result = this.studentUseCases.importExcel(file);
    return result;
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Get()
  getAll() {
    return this.studentUseCases.getAllStudents();
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Get(':id')
  getById(@Param('id') id: any) {
    return this.studentUseCases.getStudentById(id);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Post('register')
  registerStudent(@Body() student: Student) {
    return this.studentUseCases.createStudent(student);
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Put(':id')
  updateStudent(
    @Param('id') studentId: string,
    @Body() datas: Student,
  ) {
    return this.studentUseCases.updateStudentOne({ id: studentId, data: datas });
  }

  @UseGuards(JwtAuthGuard, RoleAuthGuard)
  @Roles('Alumni')
  @Delete(':id')
  deleteStudent(@Param('id') StudentId: string) {
    return this.studentUseCases.deleteStudent(StudentId);
  }

}
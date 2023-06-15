import { Injectable } from '@nestjs/common';
import { User } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { JwtService } from '@nestjs/jwt';
const PDFDocument = require('pdfkit');

@Injectable()
export class UserUseCases {
  constructor(
    private dataServices: IDataServices,
    private jwtService: JwtService
  ) {}

  async generatePDF(): Promise<Buffer>
  {
      const pdfBuffer: Buffer = await new Promise( resolve => {
        const doc = new PDFDocument(
          {
            size: "A4",
            bufferPages: true
          }
        );

        doc
          .fontSize(25)
          .text('Some text with an embedded font!', 100, 100);
        
        doc
          .addPage()
          .fontSize(25)
          .text('Here is some vector graphics...', 100, 100);

        const buffer = []
        doc.on('data', buffer.push.bind(buffer))
        doc.on('end', () => {
          const data = Buffer.concat(buffer)
          resolve(data)
        })

        doc.end();
      })
      return pdfBuffer;
  }

  async login(data: any){
    const user = await this.dataServices.users.findOne({ username: data.username })
    if(user && user.password == data.password){
      const payload = { role: user.userRole };
      return {
        access_token: this.jwtService.sign(payload)
      }
    }
    return 'data tidak valid'
  }

  getAllUsers(): Promise<User[]> {
    return this.dataServices.users.getAll();
  }

  getUserById(id: any): Promise<User> {
    return this.dataServices.users.get(id);
  }

  createUser(User: User): Promise<User> {
    return this.dataServices.users.create(User);
  }

  updateUser(data: any): Promise<User> {
    return this.dataServices.users.updateOne(data.id, data.payload);
  }

  deleteUser(id: any): Promise<User> {
    return this.dataServices.users.delete(id);
  }

}

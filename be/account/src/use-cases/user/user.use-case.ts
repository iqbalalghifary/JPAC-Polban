import { Injectable } from '@nestjs/common';
import { User } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { JwtService } from '@nestjs/jwt';
const PDFDocument = require('pdfkit');
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserUseCases {
  constructor(
    private dataServices: IDataServices,
    private jwtService: JwtService
  ) {}

  async generatePDF() {
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

  async login(data: any) {

    const user = await this.dataServices.users.get({ username: data.username })

    const comparedResult = await bcrypt.compare(data.password, user[0].password);

    console.log(user)
    console.log(comparedResult)

    if(user && comparedResult ){
      const payload = { role: user[0].userRole };
      return {
        access_token: this.jwtService.sign(payload),
        user: {
          username: user[0].referenceAttributeId._id, 
          role: user[0].userRole    
        }
      }
    }
    return 'data tidak valid'
  }

  getUser(item?: any) {
    return this.dataServices.users.get(item);
  }

  createUser(User: User) {
    return this.dataServices.users.create(User);
  }

  updateUser(data: any) {
    return this.dataServices.users.updateOne(data.filters, data.payload);
  }

  deleteUser(id: any) {
    return this.dataServices.users.delete(id);
  }

  deleteAllUser() {
    return this.dataServices.users.deleteAll();
  }

}

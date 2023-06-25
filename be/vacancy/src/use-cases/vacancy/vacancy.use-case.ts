import { Inject, Injectable } from '@nestjs/common';
import { Vacancy } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { ClientProxy } from '@nestjs/microservices';
import { map, merge } from 'rxjs';

@Injectable()
export class VacancyUseCases {
  constructor(
    private dataServices: IDataServices,
    @Inject('SERVICE_ACCOUNT') private readonly clientAccount: ClientProxy,
    @Inject('SERVICE_EMAIL') private readonly clientEmail: ClientProxy,
  ) {}

  async getVacancy(item?: any) {
    return await this.dataServices.vacancies.get(item);
  }

  async getVacancyWithPartner(item?: any) {
    const vacancy = await this.dataServices.vacancies.get(item);

    const pattern = { cmd: 'get_all_partner' };
    const payload = vacancy[0].referencePartner
    const partnerData = await this.clientAccount
      .send<Object>(pattern, payload)
        .pipe(
          map((message: Object) => ({ message })),
        ).toPromise();

    const mergedData = Object.assign({ vacancy: vacancy }, { partner: partnerData.message[0] })

    console.log(mergedData)

    return mergedData;
  }

  createVacancy(Vacancy: Vacancy) {
    return this.dataServices.vacancies.create(Vacancy);
  }

  async activateVacancy(data: any) {
    await this.dataServices.vacancies.updateOne(data.filters, data.payload);

    const vacancyData = await this.dataServices.vacancies.get({ _id: data.filters })

    const pattern = { cmd: 'get_by_id_partner' };
    const payload = vacancyData[0].referencePartner 
    const partnerData = await this.clientAccount
      .send<Object>(pattern, payload)
        .pipe(
          map((message: Object) => ({ message })),
        ).toPromise();
          
    console.log(vacancyData);

    console.log(partnerData);

    const pattern2 = { cmd: 'email_aktivasi_loker' };
    const payload2 = { 
      to : partnerData.message[0].email,
      subject: `${partnerData.message[0].name}, your vacancy submission has been activated`,
      params: {
        "name": partnerData.message[0].name,
        "email": partnerData.message[0].email,
        "title": vacancyData[0].title
      }
    };
    return this.clientEmail
    .send<string>(pattern2, payload2)
      .pipe(
        map((message: string) => ({ message})),
      );
  }

  updateVacancy(data: any) {
    return this.dataServices.vacancies.updateOne(data.filters, data.payload);
  }

  deleteVacancy(id: any) {
    return this.dataServices.vacancies.delete(id);
  }

  deleteAllVacancy() {
    return this.dataServices.vacancies.deleteAll();
  }

}

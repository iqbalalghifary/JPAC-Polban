import { Alumni, Award, Certification, Education, Experience, Operator, Organization, Partner, Project, Skill, Student, User, Volunteer } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract alumnis: IGenericRepository<Alumni>;
  abstract awards: IGenericRepository<Award>;
  abstract certifications: IGenericRepository<Certification>;
  abstract educations: IGenericRepository<Education>;
  abstract experiences: IGenericRepository<Experience>;
  abstract operators: IGenericRepository<Operator>;
  abstract organizations: IGenericRepository<Organization>;
  abstract partners: IGenericRepository<Partner>;
  abstract projects: IGenericRepository<Project>;
  abstract skills: IGenericRepository<Skill>;
  abstract students: IGenericRepository<Student>;
  abstract users: IGenericRepository<User>;
  abstract volunteers: IGenericRepository<Volunteer>;
}

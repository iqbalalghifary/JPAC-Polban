import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices, IGenericRepository } from '../../core';
import { MongoGenericRepository } from './db-generic-repository';
import {
  Alumni,
  AlumniDocument,
  Award,
  AwardDocument,
  Certification,
  CertificationDocument,
  Education,
  EducationDocument,
  Experience,
  ExperienceDocument,
  Operator,
  OperatorDocument,
  Organization,
  OrganizationDocument,
  Partner,
  PartnerDocument,
  Project,
  ProjectDocument,
  Skill,
  SkillDocument,
  Student,
  StudentDocument,
  User,
  UserDocument,
  Token,
  TokenDocument,  
  Volunteer,
  VolunteerDocument  
} from './model';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  alumnis: MongoGenericRepository<Alumni>;
  awards: IGenericRepository<Award>;
  certifications: IGenericRepository<Certification>;
  educations: IGenericRepository<Education>;
  experiences: IGenericRepository<Experience>;
  operators: IGenericRepository<Operator>;
  organizations: IGenericRepository<Organization>;
  partners: IGenericRepository<Partner>;
  projects: IGenericRepository<Project>;
  skills: IGenericRepository<Skill>;
  students: IGenericRepository<Student>;
  users: IGenericRepository<User>;
  tokens: IGenericRepository<Token>;
  volunteers: IGenericRepository<Volunteer>;

  constructor(
    @InjectModel(Alumni.name)
    private AlumniRepository: Model<AlumniDocument>,
    @InjectModel(Award.name)
    private AwardRepository: Model<AwardDocument>,
    @InjectModel(Certification.name)
    private CertificationRepository: Model<CertificationDocument>,
    @InjectModel(Education.name)
    private EducationRepository: Model<EducationDocument>,
    @InjectModel(Experience.name)
    private ExperienceRepository: Model<ExperienceDocument>,
    @InjectModel(Operator.name)
    private OperatorRepository: Model<OperatorDocument>,
    @InjectModel(Organization.name)
    private OrganizationRepository: Model<OrganizationDocument>,
    @InjectModel(Partner.name)
    private PartnerRepository: Model<PartnerDocument>,
    @InjectModel(Project.name)
    private ProjectRepository: Model<ProjectDocument>,
    @InjectModel(Skill.name)
    private SkillRepository: Model<SkillDocument>,
    @InjectModel(Student.name)
    private StudentRepository: Model<StudentDocument>,
    @InjectModel(User.name)
    private UserRepository: Model<UserDocument>,
    @InjectModel(Token.name)
    private TokenRepository: Model<TokenDocument>,   
    @InjectModel(Volunteer.name)
    private VolunteerRepository: Model<VolunteerDocument>,
    ) {}

  onApplicationBootstrap() {
    this.alumnis = new MongoGenericRepository<Alumni>(this.AlumniRepository, [
      "awards","certifications","educations","experiences","organizations","projects","skills","volunteers"
    ]);
    this.students = new MongoGenericRepository<Student>(this.StudentRepository,[
      "awards","certifications","educations","experiences","organizations","projects","skills","volunteers"
    ]);
    this.operators = new MongoGenericRepository<Operator>(this.OperatorRepository);
    this.partners = new MongoGenericRepository<Partner>(this.PartnerRepository);
    this.users = new MongoGenericRepository<User>(this.UserRepository, [
      "referenceAttributeId"
    ]);
    this.awards = new MongoGenericRepository<Award>(this.AwardRepository);
    this.tokens = new MongoGenericRepository<Token>(this.TokenRepository);
    this.certifications = new MongoGenericRepository<Certification>(this.CertificationRepository);
    this.educations = new MongoGenericRepository<Education>(this.EducationRepository);
    this.experiences = new MongoGenericRepository<Experience>(this.ExperienceRepository);
    this.organizations = new MongoGenericRepository<Organization>(this.OrganizationRepository);
    this.projects = new MongoGenericRepository<Project>(this.ProjectRepository);
    this.skills = new MongoGenericRepository<Skill>(this.SkillRepository);
    this.volunteers = new MongoGenericRepository<Volunteer>(this.VolunteerRepository);
  }
}

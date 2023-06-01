import { Award, Certification, Education, Experience, Organization, Project, Skill, Volunteer } from "./";

export class Alumni {
  name: string;
  brifDescription: string;
  photo: string;
  email: string;
  phone: string;
  dateOfBirth: Date;
  gender: string;
  address: string;
  yearGraduated: Number;
  receipt: string;
  validityPeriod: Date;
  status: boolean;
  award: Award;
  certification: Certification;
  education: Education;
  experience: Experience;
  organization: Organization;
  project: Project;
  skill: Skill;
  volunteer: Volunteer;
}
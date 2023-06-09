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
  status: string;
  awards: Award[];
  certifications: Certification[];
  educations: Education[];
  experiences: Experience[];
  organizations: Organization[];
  projects: Project[];
  skills: Skill[];
  volunteers: Volunteer[];
}
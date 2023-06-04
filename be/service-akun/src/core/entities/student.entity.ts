import { Award, Certification, Education, Experience, Organization, Project, Skill, Volunteer } from "./";

export class Student {
  nim: Number;
  name: string;
  brifDescription: string;
  email: string;
  photo: string;
  phone: string;
  dateOfBirth: Date;
  gender: string;
  address: string;
  major: string;
  study_program: string;
  year: string;
  status: boolean;
  awards: Award[];
  certifications: Certification[];
  educations: Education[];
  experiences: Experience[];
  organizations: Organization[];
  projects: Project[];
  skills: Skill[];
  volunteers: Volunteer[];
}
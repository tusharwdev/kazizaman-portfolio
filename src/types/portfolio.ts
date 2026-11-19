export interface DeveloperInfo {
  name: string;
  name_en: string;
  domain: string;
  title: string;
  location: string;
  phone: string;
  birth_date: string;
  height: string;
  email: string;
  fiverr: string;
  github: string;
  whatsapp: string;
  bio: string;
  statusBadge: string;
}

export interface Stats {
  experience_years: string;
  projects_completed: string;
  satisfied_clients: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "mobile" | "web" | "all";
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  image?: string;
}

export interface WorkExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  color?: string;
}

export interface JibonBrittantoPortfolioItem {
  title: string;
  role?: string;
  status?: string;
  url?: string;
}

export interface JibonBrittantoExperienceItem {
  role: string;
  company: string;
}

export interface JibonBrittantoFamily {
  father: string;
  mother: string;
  uncle: string;
  siblings: string[];
  permanent_address?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  category: string;
  issueDate: string;
  issuer: string;
  description: string;
  imageUrl: string;
}

export interface PhotoGalleryItem {
  id: string;
  title: string;
  category: "casual" | "formal";
  description?: string;
  imageUrl: string;
}

export interface JibonBrittantoData {
  title: string;
  url: string;
  portfolio: JibonBrittantoPortfolioItem[];
  experience: JibonBrittantoExperienceItem[];
  courses: string[];
  education: string;
  family: JibonBrittantoFamily;
  certificates?: CertificateItem[];
}

export interface CoreCompetencyItem {
  id: string;
  title: string;
  title_bn: string;
  category: "tech" | "media" | "cognitive" | "execution";
  description: string;
  description_bn: string;
  iconName: string;
  highlights: string[];
  importance: string;
}

export interface PortfolioData {
  developer: DeveloperInfo;
  stats: Stats;
  jibon_brittanto: JibonBrittantoData;
  competencies?: CoreCompetencyItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  work_experiences: WorkExperienceItem[];
  education_list: EducationItem[];
  services: ServiceItem[];
  photo_gallery?: PhotoGalleryItem[];
}

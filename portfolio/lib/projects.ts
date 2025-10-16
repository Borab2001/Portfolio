import { Project as ProjectTypes } from '@/types/project';
import projectsData from '@/data/projects.json';

export function getProjects(): ProjectTypes[] {
  return projectsData as ProjectTypes[];
}

export function getProjectById(id: string): ProjectTypes | undefined {
  return projectsData.find(project => project.id === id) as ProjectTypes | undefined;
}

export function getProjectsCount(): number {
  return projectsData.length;
}
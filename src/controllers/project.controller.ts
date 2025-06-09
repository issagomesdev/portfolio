import { getProjects, getProject } from '../services/project.service'

export const allProjects = async (filters = {}) => {
  return await getProjects(filters)
}

export const projectByName = async (name: string) => {
  return await getProject(name)
}


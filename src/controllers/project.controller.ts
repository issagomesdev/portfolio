import { getProjects, getProject } from '../services/project.service'

export const allProjects = async (filters = {}) => {
  try {
    const response = await getProjects(filters)
    return response;
  } catch (error) {
    throw error;
  }
}

export const projectByName = async (name: string) => {
  try {
    const response = await getProject(name)
    return response;
  } catch (error) {
    throw error;
  }
}


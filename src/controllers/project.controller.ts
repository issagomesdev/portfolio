import { fetchProjects } from '../services/project.service'

export const getProjects = async (filters = {}) => {
  return await fetchProjects(filters)
}

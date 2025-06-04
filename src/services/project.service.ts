import api from './api'

type GetProjectsParams = {
  page?: number
  query?: string
  categories?: number[]
  techs?: number[]
}

export const fetchProjects = async (params?: GetProjectsParams) => {
  const response = await api.get('/projects', { params })
  return response.data
}
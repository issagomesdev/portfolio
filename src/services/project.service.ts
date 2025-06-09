import api from './api'

type GetProjectsParams = {
  page?: number
  query?: string
  categories?: number[]
  techs?: number[]
}

export const getProjects = async (params?: GetProjectsParams) => {
  const response = await api.get('/projects', { params })
  return response.data
}

export const getProject = async (name: string) => {
  const response = await api.get(`/projects/${name}`)
  return response.data
}
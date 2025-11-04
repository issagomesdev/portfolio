import { api } from './api'

type GetProjectsParams = {
  page?: number
  query?: string
  categories?: number[]
  techs?: number[]
}

export const getProjects = async (params?: GetProjectsParams) => {
  try {
    const response = await api.get('/projects', { params })
    return response.data;
  } catch (error: any) {
    console.error('Erro ao obter projetos', error.response?.data || error.message);
    throw new Error('Erro ao obter projetos.');
  }
}

export const getProject = async (name: string) => {
  try {
    const response = await api.get(`/projects/${name}`)
    return response.data;
  } catch (error: any) {
    console.error('Erro ao obter projeto', error.response?.data || error.message);
    throw new Error('Erro ao obter projeto.');
  }
}
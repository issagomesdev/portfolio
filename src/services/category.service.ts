import { api } from './api'

export const fetchCategories = async () => {
  try {
    const response = await api.get('/categories')
    return response.data;
  } catch (error: any) {
    console.error('Erro ao obter categorias', error.response?.data || error.message);
    throw new Error('Erro ao obter categorias.');
  }
}

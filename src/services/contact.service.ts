import { api } from './api'

export const sendContact = async (data: any) => {
  try {
    const response = await api.post('/contact', data);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao enviar contato:', error.response?.data || error.message);
    throw new Error('Erro ao enviar o formulário.');
  }
}
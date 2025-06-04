import api from './api'

export const fetchTechs = async () => {
  const response = await api.get('/techs')
  return response.data
}

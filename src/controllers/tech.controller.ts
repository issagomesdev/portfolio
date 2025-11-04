import { fetchTechs } from '../services/tech.service'

export const getTechs = async () => {
  try {
    const response = await fetchTechs();
    return response;
  } catch (error) {
    throw error;
  }
}

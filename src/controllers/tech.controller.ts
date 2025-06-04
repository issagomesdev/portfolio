import { fetchTechs } from '../services/tech.service'

export const getTechs = async () => {
  return await fetchTechs()
}

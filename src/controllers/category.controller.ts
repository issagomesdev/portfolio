import { fetchCategories } from '../services/category.service'

export const getCategories = async () => {
  return await fetchCategories()
}

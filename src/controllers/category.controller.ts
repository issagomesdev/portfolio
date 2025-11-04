import { fetchCategories } from '../services/category.service'

export const getCategories = async () => {
  try {
    const response = await fetchCategories();
    return response;
  } catch (error) {
    throw error;
  }
}

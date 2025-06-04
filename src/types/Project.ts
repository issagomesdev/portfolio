import { Category } from './Category'
import { Tech } from './Tech'

export interface Project {
  id: number
  name: string
  description: string
  content?: string
  imageUrl?: string
  repositoryLink?: string
  demoLink?: string
  orderNumber?: number
  categories: Category[]
  techs: Tech[]
}

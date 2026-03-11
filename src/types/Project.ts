import { Category } from './Category'

export interface Project {
  id: number
  name: string
  description: string
  content_file?: string
  imageUrl?: string
  repositoryLink?: string
  demoLink?: string
  videoLink?: string
  orderNumber?: number
  categories: Category[]
  techs: number[]
}

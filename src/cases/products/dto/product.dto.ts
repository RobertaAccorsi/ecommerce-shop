import type { CategoryDTO } from "@/categories/dto/category.dto";


export interface ProductDTO {
  id?: string;
  name: string;
  description?: string;
  price: number;
  active: boolean;
  category: CategoryDTO;
  rating: number;    
  ratingsCount: number;
}
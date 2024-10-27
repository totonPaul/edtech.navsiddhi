// types.ts

export interface CourseType {
  id: string;
  category: string;
  subCategory: string;
  categoryId: string;
  subCategoryId: string;
  level: string;
  imageUrl: string;
  title: string;
  subtitle: string;
  description: string;
  instructor: string;
  sections: SectionType[]; // Updated to use SectionType[] instead of string[]
  price: string;
}

export interface SectionType {
  id: string;
  title: string; 
}

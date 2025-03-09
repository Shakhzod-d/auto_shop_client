export interface CategoryReqTypes {
  status_code: number;
  data: Category[];
  message: string;
}

export interface Category {
  id: string;
  is_active: boolean;
  is_deleted: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  name_uz: string;
  name_ru: string;
  name_en: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  is_active: boolean;
  is_deleted: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  name_uz: string;
  name_ru: string;
  name_en: string;
  title_uz: string;
  title_ru: string;
  title_en: string;
}

export type CategoryType = {
  name_uz: string;
  name_ru: string;
  name_en: string;
};

export interface MapCategoryType {
  label: string;
  path:Subcategory[]| string;
  isSubCategory: boolean;
  subcategory: MapSubcategory[] | [];
}

export type MapSubcategory = {
  id: string;
  path: string;
  label: string;
};

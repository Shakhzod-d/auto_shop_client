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
  name: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  is_active: boolean;
  is_deleted: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  name: string;
  title: string;
}

export type CategoryType = {
  name_uz: string;
  name_ru: string;
  name_en: string;
};

export interface MapCategoryType {
  label: string;
  path: Subcategory[] | string;
  isSubCategory: boolean;
  subcategory: MapSubcategory[] | [];
}

export type MapSubcategory = {
  id: string;
  path: string;
  label: string;
};

export type LangType = "en" | "uz" | "ru";

export type Language = {
  code: LangType;
  name: string;
  flag: string;
};

export interface ModalItemsData {
  title: string;
  items: { id: string; label: string; path: string }[];
}

export interface ContactForm {
  name: string;
  email: string;
  phone_number: string;
  title: string;
  message: string;
}
